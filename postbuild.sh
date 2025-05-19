#!/bin/bash

# Create the amplify-hosting directory structure
mkdir -p .amplify-hosting/compute/default/client
mkdir -p .amplify-hosting/compute/default/server
mkdir -p .amplify-hosting/static

# Copy the client build
cp -r dist/client/* .amplify-hosting/compute/default/client/
cp -r dist/client/* .amplify-hosting/static/

# Copy the server build
cp -r dist/server/* .amplify-hosting/compute/default/server/

# Copy package.json
cp package.json .amplify-hosting/compute/default/

# Copy deployment manifest
cp deploy-manifest.json .amplify-hosting/ 