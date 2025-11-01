from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    """Application settings"""
    
    app_name: str = "Match Sage Engine API"
    version: str = "1.0.0"
    
    # API Keys
    lovable_api_key: str = ""
    supabase_url: str = ""
    supabase_anon_key: str = ""
    
    # CORS
    allowed_origins: List[str] = [
        "http://localhost:8080",
        "http://localhost:5173",
        "http://localhost:3000",
    ]
    
    # Server
    host: str = "0.0.0.0"
    port: int = 8000
    
    class Config:
        env_file = ".env"
        case_sensitive = False


settings = Settings()
