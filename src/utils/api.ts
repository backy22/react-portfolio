interface Block {
  type: string;
  [key: string]: any;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  content: string;
  blocks: Block[];
}

const isDevelopment = process.env.NODE_ENV === 'development';
const API_BASE_URL = isDevelopment 
  ? '/api'  // Use localhost in development
  : 'https://main.d1g8l8x1bz6ldu.amplifyapp.com/api';  // Use the deployed URL in production

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchWithRetry(url: string, options: RequestInit = {}, retries = 3): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });
      
      if (response.ok) {
        return response;
      }
      
      // If we get a 500+ error, we'll retry
      if (response.status >= 500) {
        console.warn(`Attempt ${i + 1} failed, retrying...`);
        await delay(1000 * (i + 1)); // Exponential backoff
        continue;
      }
      
      // For 4xx errors, we'll throw immediately
      throw new Error(`HTTP error! status: ${response.status}`);
    } catch (error) {
      if (i === retries - 1) {
        throw error;
      }
      console.warn(`Attempt ${i + 1} failed, retrying...`);
      await delay(1000 * (i + 1)); // Exponential backoff
    }
  }
  throw new Error('Max retries reached');
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // First check if the server is up
    try {
      await fetchWithRetry(`${API_BASE_URL}/health`);
    } catch (error) {
      console.error('Server health check failed:', error);
      throw new Error('Server is not responding');
    }

    const response = await fetchWithRetry(`${API_BASE_URL}/posts`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
} 