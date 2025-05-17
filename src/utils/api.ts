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

const API_BASE_URL = 'http://localhost:8080/api';

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
} 