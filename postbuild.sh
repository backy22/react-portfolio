#!/bin/bash

# Copies the build output to .amplify-hosting in the format amplify expects per https://docs.aws.amazon.com/amplify/latest/userguide/deploy-express-server.html

rm -rf ./.amplify-hosting

mkdir -p ./.amplify-hosting/compute/default

# Create the directory structure
mkdir -p ./.amplify-hosting/compute/default/dist/client
mkdir -p ./.amplify-hosting/compute/default/dist/server

# Copy client files
cp -r ./dist/client/* ./.amplify-hosting/compute/default/dist/client/

# Copy server files
cp -r ./dist/server/* ./.amplify-hosting/compute/default/dist/server/

# Copy node_modules
cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules

# Copy static files
cp -r public ./.amplify-hosting/static

# Copy configuration files
cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json
cp package.json ./.amplify-hosting/compute/default/package.json

# Environment setup
if [ -f .env ]; then
    cp .env ./.amplify-hosting/compute/default/.env
fi
echo "NODE_ENV=production" >> ./.amplify-hosting/compute/default/.env

# Log the structure for verification
echo "Build output structure:"
ls -la ./.amplify-hosting/compute/default/dist/client/
echo "\nServer files:"
ls -la ./.amplify-hosting/compute/default/dist/server/
