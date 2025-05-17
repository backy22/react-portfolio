#!/bin/bash

rm -rf ./.amplify-hosting

mkdir -p ./.amplify-hosting/compute/default/src
mkdir -p ./.amplify-hosting/static

# Copy server files
cp -r ./dist/server/src/* ./.amplify-hosting/compute/default/src/
cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules

# Copy static files (frontend)
cp -r ./dist/* ./.amplify-hosting/static/

# Copy environment and config files
cp .env ./.amplify-hosting/compute/default/.env
cp package.json ./.amplify-hosting/compute/default/package.json
cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json 