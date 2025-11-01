// API client for backend services

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export interface Message {
  role: string;
  content: string;
}

export interface ChatRequest {
  messages: Message[];
}

export interface ChatResponse {
  response: string;
}

export interface ErrorResponse {
  error: string;
  detail?: string;
}

export async function callSportsAnalyst(messages: Message[]): Promise<string> {
  try {
    const response = await fetch(`${API_URL}/api/sports-analyst`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      const errorData: ErrorResponse = await response.json();
      throw new Error(errorData.error || errorData.detail || `HTTP error ${response.status}`);
    }

    const data: ChatResponse = await response.json();
    return data.response;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred');
  }
}
