#!/bin/bash

set -e  # Exit on error

echo "Starting postbuild script..."

# Clean up previous build
rm -rf ./.amplify-hosting
echo "Cleaned up previous build"

# Create directories
mkdir -p ./.amplify-hosting/artifacts/compute/default
mkdir -p ./.amplify-hosting/artifacts/static
echo "Created directories"

# Create a temporary directory for production dependencies
echo "Installing production dependencies..."
mkdir -p ./temp_prod_modules
cp package.json .npmrc ./temp_prod_modules/
cd ./temp_prod_modules
pnpm install --prod
cd ..
echo "Installed production dependencies"

# Copy server files
echo "Copying server files..."
cp -r ./dist/server/* ./.amplify-hosting/artifacts/compute/default/
cp -r ./temp_prod_modules/node_modules ./.amplify-hosting/artifacts/compute/default/

# Copy static files (frontend)
echo "Copying static files..."
cp -r ./dist/* ./.amplify-hosting/artifacts/static/
rm -rf ./.amplify-hosting/artifacts/static/server  # Remove server files from static directory

# Copy configuration files
echo "Copying configuration files..."
if [ -f .env ]; then
  cp .env ./.amplify-hosting/artifacts/compute/default/.env
  chmod 600 ./.amplify-hosting/artifacts/compute/default/.env
  echo "Copied .env file"
fi

# Copy package files
cp package.json ./.amplify-hosting/artifacts/compute/default/package.json
cp .npmrc ./.amplify-hosting/artifacts/compute/default/.npmrc
cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json

# Set proper permissions
echo "Setting permissions..."
chmod -R 755 ./.amplify-hosting/artifacts/compute/default
chmod 644 ./.amplify-hosting/artifacts/compute/default/package.json
chmod 644 ./.amplify-hosting/artifacts/compute/default/.npmrc

# Clean up
echo "Cleaning up..."
rm -rf ./temp_prod_modules

echo "Postbuild script completed successfully"

# List the contents of the build directory
echo "Build directory contents:"
ls -la ./.amplify-hosting/
ls -la ./.amplify-hosting/artifacts/compute/default/
ls -la ./.amplify-hosting/artifacts/static/ 