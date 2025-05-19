#!/bin/bash

# Copies the build output to .amplify-hosting in the format amplify expects per https://docs.aws.amazon.com/amplify/latest/userguide/deploy-express-server.html

rm -rf ./.amplify-hosting

mkdir -p ./.amplify-hosting/compute

# Copy dist directory
cp -r ./dist ./.amplify-hosting/compute/default

# Ensure server files are in the correct location
mkdir -p ./.amplify-hosting/compute/default/dist/server
cp -r ./dist/server/* ./.amplify-hosting/compute/default/dist/server/

# Copy node_modules
cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules

# Copy static files
cp -r public ./.amplify-hosting/static

# Copy configuration files
cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json
cp package.json ./.amplify-hosting/compute/default/package.json
if [ -f .env ]; then
    cp .env ./.amplify-hosting/compute/default/.env
fi
echo "NODE_ENV=production" >> ./.amplify-hosting/compute/default/.env

# Log the structure for verification
echo "Build output structure:"
ls -R ./.amplify-hosting/compute/default/dist/
