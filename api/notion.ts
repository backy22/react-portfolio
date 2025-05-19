import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Default to 'development' if NODE_ENV is not set
const isProduction = (process.env.NODE_ENV || 'development') === 'production';

// Log current environment for debugging
console.log('Current environment:', {
  NODE_ENV: process.env.NODE_ENV || 'development',
  dirname: __dirname,
  cwd: process.cwd()
});

// Load environment variables with different paths for dev and prod
if (isProduction) {
  // In production, .env is in the compute/default directory
  // Since we're in dist/server/api, we need to go up two levels
  const envPath = path.resolve(__dirname, '../../.env');
  console.log('Loading production env from:', envPath);
  dotenv.config({ path: envPath });
} else {
  // In development, we need to go up to the project root
  const envPath = path.resolve(__dirname, '../.env');
  console.log('Loading development env from:', envPath);
  dotenv.config({ path: envPath });
}

// Log environment status after loading
console.log('Environment status:', {
  hasNotionKey: !!process.env.NOTION_API_KEY,
  hasNotionDb: !!process.env.NOTION_DATABASE_ID,
  envPath: isProduction ? path.resolve(__dirname, '../../.env') : path.resolve(__dirname, '../.env')
});

// Handle missing environment variables differently in production vs development
if (!process.env.NOTION_API_KEY) {
  const message = 'Missing NOTION_API_KEY environment variable';
  console.error(message);
  
  if (!isProduction) {
    throw new Error(message);
  }
}

if (!process.env.NOTION_DATABASE_ID) {
  const message = 'Missing NOTION_DATABASE_ID environment variable';
  console.error('Missing NOTION_DATABASE_ID environment variable');
  
  if (!isProduction) {
    throw new Error(message);
  }
}

// Initialize Notion client only if we have the required credentials
export const notion = process.env.NOTION_API_KEY ? new Client({
  auth: process.env.NOTION_API_KEY,
}) : null;

export const databaseId = process.env.NOTION_DATABASE_ID || '';

interface Block {
  type: string;
  [key: string]: any;
}

export interface NotionBlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  content: string;
  blocks: Block[];
}

async function getPageBlocks(pageId: string): Promise<Block[]> {
  try {
    // Return empty array if Notion client is not initialized
    if (!notion) {
      console.warn('Notion client not initialized - missing credentials');
      return [];
    }

    const blocks: Block[] = [];
    let cursor: string | undefined;
    
    while (true) {
      const { results, next_cursor } = await notion.blocks.children.list({
        block_id: pageId,
        start_cursor: cursor,
      });
      
      blocks.push(...(results as Block[]));
      
      if (!next_cursor) {
        break;
      }
      
      cursor = next_cursor;
    }
    
    return blocks;
  } catch (error) {
    console.error('Error fetching page blocks:', error);
    return [];
  }
}

function renderBlock(block: Block): string {
  try {
    switch (block.type) {
      case 'paragraph':
        return block.paragraph.rich_text.map((text: any) => text.plain_text).join('');
      case 'heading_1':
        return `# ${block.heading_1.rich_text.map((text: any) => text.plain_text).join('')}`;
      case 'heading_2':
        return `## ${block.heading_2.rich_text.map((text: any) => text.plain_text).join('')}`;
      case 'heading_3':
        return `### ${block.heading_3.rich_text.map((text: any) => text.plain_text).join('')}`;
      case 'bulleted_list_item':
        return `• ${block.bulleted_list_item.rich_text.map((text: any) => text.plain_text).join('')}`;
      case 'numbered_list_item':
        return `1. ${block.numbered_list_item.rich_text.map((text: any) => text.plain_text).join('')}`;
      case 'code':
        return `\`\`\`${block.code.language}\n${block.code.rich_text.map((text: any) => text.plain_text).join('')}\n\`\`\``;
      case 'quote':
        return `> ${block.quote.rich_text.map((text: any) => text.plain_text).join('')}`;
      default:
        return '';
    }
  } catch (error) {
    console.error('Error rendering block:', { blockType: block.type, error });
    return '';
  }
}

export async function getBlogPosts(): Promise<NotionBlogPost[]> {
  try {
    // Return empty array if Notion client is not initialized
    if (!notion || !databaseId) {
      console.warn('Notion client or database ID not initialized - missing credentials');
      return [];
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });
    
    const posts = await Promise.all(response.results.map(async (page: any) => {
      try {
        const post: NotionBlogPost = {
          id: page.id,
          title: page.properties.Title.title[0]?.plain_text || '',
          slug: page.properties.Slug.rich_text[0]?.plain_text || '',
          date: page.properties.Date.date?.start || '',
          content: '',
          blocks: [],
        };

        const blocks = await getPageBlocks(page.id);
        post.blocks = blocks;
        post.content = blocks.map(renderBlock).filter(Boolean).join('\n\n');

        return post;
      } catch (err) {
        console.error('Error processing post:', { pageId: page.id, error: err });
        return null;
      }
    }));

    return posts.filter((post): post is NotionBlogPost => post !== null);
  } catch (error: any) {
    console.error('Error fetching blog posts from Notion:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    return []; // Return empty array instead of throwing in production
  }
} 