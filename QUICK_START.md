# Quick Start Guide - Match Sage Engine

## 🚀 Getting Started

### Prerequisites
- Python 3.8+ (for backend)
- Node.js 18+ (for frontend) or Bun
- Git

---

## Backend Setup (First Time)

### Step 1: Navigate to backend
```bash
cd backend
```

### Step 2: Create virtual environment
```bash
# Windows
python -m venv venv

# Linux/Mac
python3 -m venv venv
```

### Step 3: Activate virtual environment
```bash
# Windows (PowerShell)
venv\Scripts\activate

# Windows (CMD)
venv\Scripts\activate.bat

# Linux/Mac
source venv/bin/activate
```

### Step 4: Install dependencies
```bash
pip install -r requirements.txt
```

### Step 5: Configure environment
```bash
# Copy the example file
copy .env.example .env    # Windows
# cp .env.example .env    # Linux/Mac

# Then edit .env and add your API keys:
# LOVABLE_API_KEY=your_actual_api_key_here
# SUPABASE_URL=your_supabase_url
# SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 6: Run backend
```bash
python app/main.py
```

✅ Backend should be running at: http://localhost:8000
📚 API Docs available at: http://localhost:8000/docs

---

## Frontend Setup (First Time)

### Step 1: Navigate to frontend
```bash
cd frontend
```

### Step 2: Install dependencies
```bash
npm install
# or if using Bun:
# bun install
```

### Step 3: Configure environment
```bash
# Copy the example file
copy .env.example .env    # Windows
# cp .env.example .env    # Linux/Mac

# Then edit .env and add your configuration:
# VITE_SUPABASE_URL=your_supabase_url
# VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
# VITE_API_URL=http://localhost:8000
```

### Step 4: Run frontend
```bash
npm run dev
# or if using Bun:
# bun dev
```

✅ Frontend should be running at: http://localhost:8080

---

## Running Both Services

You need **TWO terminal windows** open simultaneously:

### Terminal 1 - Backend
```bash
cd backend
venv\Scripts\activate    # Windows
# source venv/bin/activate    # Linux/Mac
python app/main.py
```

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev    # or bun dev
```

### OR Use the Start Script

**Windows:**
```bash
.\start.bat
```

**Linux/Mac:**
```bash
chmod +x start.sh
./start.sh
```

---

## Subsequent Runs

After the initial setup, you only need to:

1. **Activate backend virtual environment and run**
   ```bash
   cd backend
   venv\Scripts\activate    # Windows
   python app/main.py
   ```

2. **Run frontend** (in separate terminal)
   ```bash
   cd frontend
   npm run dev
   ```

---

## Testing the Setup

### 1. Check Backend
Visit http://localhost:8000 - You should see:
```json
{
  "message": "Match Sage Engine API",
  "version": "1.0.0",
  "status": "running"
}
```

### 2. Check API Docs
Visit http://localhost:8000/docs - You should see the Swagger UI

### 3. Check Frontend
Visit http://localhost:8080 - You should see the Match Sage Engine interface

### 4. Test AI Chat
- Click on the chat interface
- Send a message like "Tell me about player performance analysis"
- You should get a response from the AI

---

## Troubleshooting

### Backend won't start
- ✅ Make sure virtual environment is activated
- ✅ Check if port 8000 is already in use
- ✅ Verify `.env` file exists with correct API keys
- ✅ Check Python version: `python --version` (should be 3.8+)

### Frontend won't start
- ✅ Make sure dependencies are installed: `npm install`
- ✅ Check if port 8080 is already in use
- ✅ Verify `.env` file exists with VITE_API_URL
- ✅ Check Node version: `node --version` (should be 18+)

### Frontend can't connect to backend
- ✅ Make sure backend is running at http://localhost:8000
- ✅ Check console for CORS errors
- ✅ Verify VITE_API_URL in frontend/.env is correct
- ✅ Check backend/.env has correct ALLOWED_ORIGINS

### AI chat not working
- ✅ Verify LOVABLE_API_KEY is set in backend/.env
- ✅ Check backend terminal for error messages
- ✅ Check browser console for errors
- ✅ Verify API credits are available

---

## Environment Variables Reference

### Backend (.env)
```
LOVABLE_API_KEY=your_lovable_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
ALLOWED_ORIGINS=http://localhost:8080,http://localhost:5173
```

### Frontend (.env)
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
VITE_API_URL=http://localhost:8000
```

---

## Useful Commands

### Backend
```bash
# Install new package
pip install package-name
pip freeze > requirements.txt

# Run with auto-reload
python app/main.py

# Check installed packages
pip list
```

### Frontend
```bash
# Install new package
npm install package-name

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## Project URLs

- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:8000
- **API Docs (Swagger)**: http://localhost:8000/docs
- **API Docs (ReDoc)**: http://localhost:8000/redoc
- **Health Check**: http://localhost:8000/health

---

## Need Help?

1. Check the main README.md for detailed information
2. Review RESTRUCTURING_SUMMARY.md for architecture details
3. Check frontend/README.md for frontend-specific info
4. Check backend/README.md for backend-specific info
5. Look at the example .env files for configuration help

Happy coding! 🚀
