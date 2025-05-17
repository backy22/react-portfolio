#!/bin/bash

# Exit on error
set -e

# Create artifacts directory
mkdir -p .amplify-hosting/compute/default
mkdir -p .amplify-hosting/static

# Copy client build
cp -r dist/client/* .amplify-hosting/compute/default/client/

# Copy server build
cp -r dist/server/* .amplify-hosting/compute/default/server/

# Copy static files
cp -r dist/client/favicon.ico .amplify-hosting/static/
cp -r dist/client/robots.txt .amplify-hosting/static/

# Copy package files for production dependencies
cp package.json .amplify-hosting/compute/default/
cp pnpm-lock.yaml .amplify-hosting/compute/default/

# Install production dependencies in the artifacts directory
cd .amplify-hosting/compute/default
pnpm install --prod

# Set permissions
chmod -R 755 .

echo "Post-build process completed successfully" 