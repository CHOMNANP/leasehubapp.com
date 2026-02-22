#!/bin/bash

echo "🚀 LeaseHub Website Deployment Script"
echo "======================================"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm i -g vercel
fi

# Check environment variables
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local not found. Copying from example..."
    cp .env.local.example .env.local
    echo "📝 Please edit .env.local with your actual values before deploying."
    exit 1
fi

# Build check
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🚀 Deploying to Vercel..."
    vercel --prod
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi
