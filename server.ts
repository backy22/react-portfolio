import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import serverless from 'serverless-http';
import { getBlogPosts } from './api/notion.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';

// Load environment variables
dotenv.config();

// Log environment status
console.log('Environment Check:', {
  NODE_ENV: process.env.NODE_ENV,
  HAS_NOTION_KEY: !!process.env.NOTION_API_KEY,
  HAS_NOTION_DB: !!process.env.NOTION_DATABASE_ID,
  PWD: process.cwd()
});

// Validate required environment variables
if (!process.env.NOTION_API_KEY) {
  console.error('Missing required environment variable: NOTION_API_KEY');
  console.error('Current env vars:', Object.keys(process.env));
  if (isProduction) {
    // In production, we'll continue but log the error
    console.error('Running in production without NOTION_API_KEY');
  } else {
    process.exit(1);
  }
}

if (!process.env.NOTION_DATABASE_ID) {
  console.error('Missing required environment variable: NOTION_DATABASE_ID');
  console.error('Current env vars:', Object.keys(process.env));
  if (isProduction) {
    // In production, we'll continue but log the error
    console.error('Running in production without NOTION_DATABASE_ID');
  } else {
    process.exit(1);
  }
}

async function createServer() {
  const app = express();
  const port = !isProduction ? 5173 : (parseInt(process.env.PORT || '3000', 10));
  const host = '0.0.0.0';

  // Enhanced CORS configuration
  const allowedOrigins = isProduction
    ? ['https://ayatsubakino.com', 'http://localhost:3000']
    : ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000'];

  app.use(cors({
    origin: (origin, callback) => {
      console.log('Request from origin:', origin);
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn('Blocked request from unauthorized origin:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));

  let vite: any;
  
  if (!isProduction) {
    // Create Vite server in middleware mode
    vite = await createViteServer({
      server: { 
        middlewareMode: true,
        proxy: {
          '/api': {
            target: `http://localhost:${port}`,
            changeOrigin: true,
            configure: (proxy, options) => {
              // Add handler for proxy errors
              proxy.on('error', (err, req, res) => {
                console.log('Proxy error:', err);
              });
            }
          }
        }
      },
      appType: 'custom'
    });

    // API Routes - Register before Vite middleware
    app.get('/api/health', (req, res) => {
      console.log('Health check request received');
      res.json({ status: 'healthy' });
    });

    app.get('/api/posts', async (req, res) => {
      try {
        console.log('Fetching posts from Notion...');
        const posts = await getBlogPosts();
        console.log(`Successfully fetched ${posts.length} posts`);
        res.json(posts);
      } catch (error: any) {
        console.error('Error fetching posts from Notion:', {
          message: error.message,
          stack: error.stack
        });
        res.status(500).json({
          error: 'Failed to fetch posts from Notion',
          details: error.message
        });
      }
    });

    // Use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    // Serve static files from client directory
    app.use(express.static(path.resolve(__dirname, '../client')));
    // Serve assets specifically
    app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));

    // API Routes for production
    app.get('/api/health', (req, res) => {
      console.log('Health check request received');
      res.json({ status: 'healthy' });
    });

    app.get('/api/posts', async (req, res) => {
      try {
        console.log('Fetching posts from Notion...');
        const posts = await getBlogPosts();
        console.log(`Successfully fetched ${posts.length} posts`);
        res.json(posts);
      } catch (error: any) {
        console.error('Error fetching posts from Notion:', {
          message: error.message,
          stack: error.stack
        });
        res.status(500).json({
          error: 'Failed to fetch posts from Notion',
          details: error.message
        });
      }
    });
  }

  // SSR Route
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    // Skip SSR for API routes
    if (url.startsWith('/api/')) {
      return next();
    }

    try {
      let template: string;
      let render: (url: string) => string;

      if (!isProduction) {
        // 1. Read index.html
        template = fs.readFileSync(
          path.resolve(__dirname, 'index.html'),
          'utf-8'
        );

        // 2. Apply Vite HTML transforms
        template = await vite.transformIndexHtml(url, template);

        // 3. Load the server entry
        const { render: ssrRender } = await vite.ssrLoadModule('/src/entry-server.js');
        render = ssrRender;
      } else {
        const clientDir = path.resolve(__dirname, '../client');
        const serverDir = __dirname;
        
        console.log('Production SSR: Directories:', {
          clientDir,
          serverDir,
          cwd: process.cwd()
        });

        console.log('Production SSR: Reading template from:', path.resolve(clientDir, 'index.html'));
        template = fs.readFileSync(path.resolve(clientDir, 'index.html'), 'utf-8');
        
        console.log('Production SSR: Loading entry-server from:', path.resolve(serverDir, 'entry-server.js'));
        const { render: ssrRender } = await import(path.resolve(serverDir, 'entry-server.js'));
        render = ssrRender;
      }

      // 4. Render the app HTML
      console.log('Rendering app HTML for URL:', url);
      const appHtml = render(url);
      
      // 5. Inject the app-rendered HTML into the template
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);
      
      // 6. Send the rendered HTML back
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      console.error('SSR Error:', {
        message: e.message,
        stack: e.stack,
        phase: e.phase || 'unknown',
        url: req.originalUrl,
        headers: req.headers
      });
      if (!isProduction) {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  // Enhanced error handling middleware
  app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Unhandled error:', {
      message: err.message,
      stack: err.stack
    });
    res.status(500).json({ error: 'Internal Server Error' });
  });

  try {
    await new Promise((resolve) => {
      const server = app.listen(port, host, () => {
        console.log('----------------------------------------');
        console.log(`🚀 Server is starting...`);
        console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
        console.log(`🌐 Server URL: http://localhost:${port}`);
        console.log('\nAvailable routes:');
        console.log('📡 GET /api/health (Health check)');
        console.log('📡 GET /api/posts (Blog posts)');
        console.log('🖥️  GET / (SSR Application)');
        console.log('----------------------------------------');
        resolve(server);
      });
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }

  // Create serverless handler for AWS Lambda
  return serverless(app);
}

// Initialize server and export handler
console.log('Initializing server...');
const serverHandler = await createServer();
console.log('Server initialization completed');
export const handler = serverHandler; 