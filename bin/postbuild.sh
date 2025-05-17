#!/bin/bash

# Exit on error
set -e

echo "Starting post-build process..."

# Create the amplify hosting directory structure
mkdir -p .amplify-hosting/compute/default/client
mkdir -p .amplify-hosting/compute/default/server
mkdir -p .amplify-hosting/static

echo "Created directory structure"

# Copy the client build (if exists)
if [ -d "dist/client" ]; then
  echo "Copying client build..."
  cp -r dist/client/* .amplify-hosting/compute/default/client/
  # Copy static files to static directory
  cp -r dist/client/favicon.ico .amplify-hosting/static/ 2>/dev/null || true
  cp -r dist/client/robots.txt .amplify-hosting/static/ 2>/dev/null || true
else
  echo "Warning: dist/client directory not found"
fi

# Copy the server build
if [ -d "dist/api" ]; then
  echo "Copying server build..."
  cp -r dist/api/* .amplify-hosting/compute/default/server/
else
  echo "Warning: dist/api directory not found"
fi

# Copy package files for production dependencies
echo "Copying package files..."
cp package.json .amplify-hosting/compute/default/
if [ -f pnpm-lock.yaml ]; then
  cp pnpm-lock.yaml .amplify-hosting/compute/default/
fi

# Copy deployment manifest
echo "Copying deployment manifest..."
cp deploy-manifest.json .amplify-hosting/

# Install production dependencies in the artifacts directory
echo "Installing production dependencies..."
cd .amplify-hosting/compute/default
pnpm install --prod --no-frozen-lockfile

# Set permissions
chmod -R 755 .

echo "Post-build process completed successfully" 