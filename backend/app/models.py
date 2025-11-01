from pydantic import BaseModel
from typing import List, Optional


class Message(BaseModel):
    """Chat message model"""
    role: str
    content: str


class ChatRequest(BaseModel):
    """Request model for chat endpoint"""
    messages: List[Message]


class ChatResponse(BaseModel):
    """Response model for chat endpoint"""
    response: str


class ErrorResponse(BaseModel):
    """Error response model"""
    error: str
    detail: Optional[str] = None
