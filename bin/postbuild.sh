#!/bin/bash

rm -rf ./.amplify-hosting

mkdir -p ./.amplify-hosting/compute/default/src
mkdir -p ./.amplify-hosting/static

# Create a temporary directory for production dependencies
mkdir -p ./temp_prod_modules
cp package.json package-lock.json ./temp_prod_modules/
cd ./temp_prod_modules
npm ci --only=production
cd ..

# Copy server files
cp -r ./dist/server/src/* ./.amplify-hosting/compute/default/src/
cp -r ./temp_prod_modules/node_modules ./.amplify-hosting/compute/default/node_modules

# Copy static files (frontend)
cp -r ./dist/* ./.amplify-hosting/static/

# Copy environment and config files
if [ -f .env ]; then
  cp .env ./.amplify-hosting/compute/default/.env
  chmod 600 ./.amplify-hosting/compute/default/.env
fi

# Copy package files
cp package.json ./.amplify-hosting/compute/default/package.json
cp package-lock.json ./.amplify-hosting/compute/default/package-lock.json

# Copy deployment manifest
cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json

# Set proper permissions
chmod -R 755 ./.amplify-hosting/compute/default/src
chmod 644 ./.amplify-hosting/compute/default/package.json
chmod 644 ./.amplify-hosting/compute/default/package-lock.json

# Clean up
rm -rf ./temp_prod_modules 