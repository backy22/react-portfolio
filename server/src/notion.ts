import { Client } from '@notionhq/client';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

if (!process.env.NOTION_API_KEY) {
  throw new Error('Missing NOTION_API_KEY environment variable');
}

if (!process.env.NOTION_DATABASE_ID) {
  throw new Error('Missing NOTION_DATABASE_ID environment variable');
}

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const databaseId = process.env.NOTION_DATABASE_ID;

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
    throw error;
  }
} 