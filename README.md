# Match Sage Engine# Welcome to your Lovable project



AI-powered sports analytics platform with real-time insights for football, basketball, and cricket matches.## Project info



## Project Structure**URL**: https://lovable.dev/projects/e53e73c1-1466-4f92-ab53-0b0a47a6d8e1



```## How can I edit this code?

match-sage-engine/

├── frontend/          # React + TypeScript + Vite frontendThere are several ways of editing your application.

├── backend/           # FastAPI backend

└── supabase/          # Supabase configuration and functions**Use Lovable**

```

Simply visit the [Lovable Project](https://lovable.dev/projects/e53e73c1-1466-4f92-ab53-0b0a47a6d8e1) and start prompting.

## Quick Start

Changes made via Lovable will be committed automatically to this repo.

### Backend Setup (FastAPI)

**Use your preferred IDE**

1. Navigate to the backend directory:

```bashIf you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

cd backend

```The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)



2. Create and activate a virtual environment:Follow these steps:

```bash

# Windows```sh

python -m venv venv# Step 1: Clone the repository using the project's Git URL.

venv\Scripts\activategit clone <YOUR_GIT_URL>



# Linux/Mac# Step 2: Navigate to the project directory.

python3 -m venv venvcd <YOUR_PROJECT_NAME>

source venv/bin/activate

```# Step 3: Install the necessary dependencies.

npm i

3. Install dependencies:

```bash# Step 4: Start the development server with auto-reloading and an instant preview.

pip install -r requirements.txtnpm run dev

``````



4. Create a `.env` file based on `.env.example`:**Edit a file directly in GitHub**

```bash

cp .env.example .env- Navigate to the desired file(s).

```- Click the "Edit" button (pencil icon) at the top right of the file view.

- Make your changes and commit the changes.

5. Add your API keys to `.env`

**Use GitHub Codespaces**

6. Run the server:

```bash- Navigate to the main page of your repository.

python app/main.py- Click on the "Code" button (green button) near the top right.

```- Select the "Codespaces" tab.

- Click on "New codespace" to launch a new Codespace environment.

The API will be available at http://localhost:8000- Edit files directly within the Codespace and commit and push your changes once you're done.

- API Documentation: http://localhost:8000/docs

- Alternative Docs: http://localhost:8000/redoc## What technologies are used for this project?



### Frontend Setup (React + Vite)This project is built with:



1. Navigate to the frontend directory:- Vite

```bash- TypeScript

cd frontend- React

```- shadcn-ui

- Tailwind CSS

2. Install dependencies:

```bash## How can I deploy this project?

npm install

# orSimply open [Lovable](https://lovable.dev/projects/e53e73c1-1466-4f92-ab53-0b0a47a6d8e1) and click on Share -> Publish.

bun install

```## Can I connect a custom domain to my Lovable project?



3. Create a `.env` file with:Yes, you can!

```

VITE_SUPABASE_URL=your_supabase_urlTo connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

VITE_API_URL=http://localhost:8000Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

```

4. Run the development server:
```bash
npm run dev
# or
bun dev
```

The app will be available at http://localhost:8080

## Features

- 🎯 Real-time match statistics and analytics
- 📊 Interactive dashboards with momentum charts
- 🤖 AI-powered sports analyst chatbot
- 👥 Player impact analysis
- 📈 Performance tracking and insights
- 🏆 Multi-sport support (Football, Basketball, Cricket)

## Technology Stack

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- Shadcn/ui components
- React Query
- React Router
- Recharts

### Backend
- FastAPI
- Python 3.8+
- Pydantic
- httpx
- Uvicorn

### Database & Auth
- Supabase

## Development

### Running Both Services

You'll need two terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
venv\Scripts\activate  # Windows
python app/main.py
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev  # or bun dev
```

## API Endpoints

- `GET /` - API information
- `GET /health` - Health check
- `POST /api/sports-analyst` - AI sports analysis chat

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License
