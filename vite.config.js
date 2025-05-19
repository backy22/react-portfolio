import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig((options) => {
  // Shared Config for both Client and SSR Build
  const sharedConfig = {
    plugins: [
      react(),
      vanillaExtractPlugin(),
    ],
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    },
    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: 'http://localhost:5173',
          changeOrigin: true,
        }
      }
    },
  };

  if (options?.isSsrBuild) {
    // SSR Build
    return {
      ...sharedConfig,
      build: {
        minify: true,
        ssr: true,
        emptyOutDir: false,
        outDir: 'dist/server',
      },
      ssr: {
        noExternal: ['react-tweet'],
      }
    };
  } else {
    // Client Build
    return {
      ...sharedConfig,
      build: {
        minify: true,
        ssrManifest: true,
        emptyOutDir: false,
        outDir: 'dist/client',
      },
    };
  }
}); 