from fastapi import APIRouter, HTTPException, status
from app.models import ChatRequest, ChatResponse, ErrorResponse
from app.config import settings
import httpx
import logging

logger = logging.getLogger(__name__)

router = APIRouter()

SYSTEM_PROMPT = """You are an expert sports analyst AI with deep knowledge of football, basketball, and cricket. 
You have access to match statistics, player performance data, and tactical insights.

Your role is to:
1. Analyze match statistics and provide insights on team performance
2. Explain player impact scores and what drives them
3. Identify momentum shifts and their causes
4. Provide tactical recommendations based on data
5. Compare players and teams using statistical evidence
6. Explain complex sports analytics concepts in accessible language

Always be concise, data-driven, and insightful. Reference specific statistics when available.
Use a professional but conversational tone. Format your responses clearly with bullet points when appropriate."""


@router.post(
    "/sports-analyst",
    response_model=ChatResponse,
    responses={
        429: {"model": ErrorResponse, "description": "Rate limit exceeded"},
        402: {"model": ErrorResponse, "description": "Usage limit reached"},
        500: {"model": ErrorResponse, "description": "Internal server error"},
    }
)
async def sports_analyst(request: ChatRequest):
    """
    Sports analyst AI endpoint that provides insights on match statistics,
    player performance, and tactical analysis.
    """
    try:
        if not settings.lovable_api_key:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="LOVABLE_API_KEY is not configured"
            )
        
        # Prepare messages for AI
        messages = [
            {"role": "system", "content": SYSTEM_PROMPT},
            *[{"role": msg.role, "content": msg.content} for msg in request.messages]
        ]
        
        # Call AI Gateway
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(
                "https://ai.gateway.lovable.dev/v1/chat/completions",
                headers={
                    "Authorization": f"Bearer {settings.lovable_api_key}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": "google/gemini-2.5-flash",
                    "messages": messages,
                    "temperature": 0.7,
                    "max_tokens": 500,
                }
            )
            
            if response.status_code == 429:
                raise HTTPException(
                    status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                    detail="Rate limit exceeded. Please try again in a moment."
                )
            
            if response.status_code == 402:
                raise HTTPException(
                    status_code=status.HTTP_402_PAYMENT_REQUIRED,
                    detail="AI usage limit reached. Please add credits to continue."
                )
            
            if response.status_code != 200:
                logger.error(f"AI Gateway error: {response.status_code} - {response.text}")
                raise HTTPException(
                    status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                    detail=f"AI Gateway error: {response.status_code}"
                )
            
            data = response.json()
            assistant_message = data.get("choices", [{}])[0].get("message", {}).get("content")
            
            if not assistant_message:
                assistant_message = "I apologize, but I could not generate a response."
            
            return ChatResponse(response=assistant_message)
            
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error in sports-analyst endpoint: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )
