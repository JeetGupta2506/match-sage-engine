# Match Sage Engine - Backend

FastAPI backend for the Match Sage Engine sports analytics platform.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
```

2. Activate the virtual environment:
- Windows: `venv\Scripts\activate`
- Linux/Mac: `source venv/bin/activate`

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file based on `.env.example` and add your API keys

5. Run the development server (make sure you're in the `backend` directory):
```bash
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**Note**: Always run from the `backend` directory, NOT from `backend/app`

## API Endpoints

- `GET /` - Root endpoint with API information
- `GET /health` - Health check endpoint
- `POST /api/sports-analyst` - Sports analysis AI chat endpoint

## Documentation

Once the server is running, visit:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
