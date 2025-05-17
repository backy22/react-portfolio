import express from 'express';
import cors from 'cors';
import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import type { APIGatewayProxyHandler } from 'aws-lambda';
import serverless from 'serverless-http';

// Initialize Express app
const app = express();

// Handle ESM module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

// Enable CORS
const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? ['https://ayatsubakino.com'] 
  : ['http://localhost:5173', 'http://127.0.0.1:5173'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Posts endpoint
app.get('/api/posts', async (req, res) => {
  try {
    if (!DATABASE_ID) {
      throw new Error('NOTION_DATABASE_ID is not configured');
    }

    console.log('Fetching posts from Notion...');
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    const posts = response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title?.title[0]?.plain_text || 'Untitled',
      slug: page.properties.Slug?.rich_text[0]?.plain_text || page.id,
      date: page.properties.Date?.date?.start || new Date().toISOString(),
      content: page.properties.Content?.rich_text[0]?.plain_text || '',
      blocks: []
    }));

    console.log(`Successfully fetched ${posts.length} posts`);
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts from Notion:', error);
    res.status(500).json({ error: 'Failed to fetch posts from Notion' });
  }
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Create serverless handler for AWS Lambda
export const handler = serverless(app);

// Start local server if not in Lambda environment
if (process.env.NODE_ENV !== 'production') {
  const port = parseInt(process.env.PORT || '3000', 10);
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}