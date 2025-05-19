#!/bin/bash

# Copies the build output to .amplify-hosting in the format amplify expects per https://docs.aws.amazon.com/amplify/latest/userguide/deploy-express-server.html

rm -rf ./.amplify-hosting

mkdir -p ./.amplify-hosting/compute

cp -r ./dist ./.amplify-hosting/compute/default
cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules

cp -r public ./.amplify-hosting/static

cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json
cp package.json ./.amplify-hosting/compute/default/package.json

# Environment setup
touch ./.amplify-hosting/compute/default/.env
echo "NODE_ENV=production" >> ./.amplify-hosting/compute/default/.env

# If local .env exists, append its contents
if [ -f .env ]; then
    echo "Copying local .env file..."
    cat .env >> ./.amplify-hosting/compute/default/.env
fi

# Log the environment file contents (excluding sensitive data)
echo "Environment file created. Checking for required variables..."
if grep -q "NOTION_API_KEY" ./.amplify-hosting/compute/default/.env; then
    echo "NOTION_API_KEY is present"
else
    echo "Warning: NOTION_API_KEY is missing"
fi

if grep -q "NOTION_DATABASE_ID" ./.amplify-hosting/compute/default/.env; then
    echo "NOTION_DATABASE_ID is present"
else
    echo "Warning: NOTION_DATABASE_ID is missing"
fi

# Create a file to indicate this is running in AWS
echo "RUNNING_IN_AWS=true" >> ./.amplify-hosting/compute/default/.env
