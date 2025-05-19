#!/bin/bash

# Create the amplify-hosting directory structure
mkdir -p .amplify-hosting/compute/default
mkdir -p .amplify-hosting/static

# Copy the client build
cp -r dist/client/* .amplify-hosting/static/

# Copy the server build
cp -r dist/server/* .amplify-hosting/compute/default/

# Copy package.json
cp package.json .amplify-hosting/compute/default/

# Copy deployment manifest
cp deploy-manifest.json .amplify-hosting/