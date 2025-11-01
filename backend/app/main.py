from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.routers import sports_analyst


app = FastAPI(
    title=settings.app_name,
    version=settings.version,
    description="AI-powered sports analytics backend API"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(sports_analyst.router, prefix="/api", tags=["Sports Analyst"])


@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Match Sage Engine API",
        "version": settings.version,
        "status": "running"
    }


@app.get("/health")
async def health():
    """Health check endpoint"""
    return {"status": "healthy"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host=settings.host,
        port=settings.port,
        reload=True
    )
