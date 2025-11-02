#!/bin/bash
# Quick setup script for Cloud Escape Room on Ubuntu

echo "🚀 Setting up Cloud Escape Room on Ubuntu..."

# Check if running on Ubuntu/Debian
if ! command -v apt &> /dev/null; then
    echo "❌ This script is designed for Ubuntu/Debian systems with apt package manager"
    exit 1
fi

# Update system
echo "📦 Updating system packages..."
sudo apt update

# Install essential tools
echo "🔧 Installing essential build tools..."
sudo apt install -y curl wget build-essential git

# Check if Node.js is already installed
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "✅ Node.js is already installed: $NODE_VERSION"
    
    # Check if version is adequate (v18+)
    MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1 | sed 's/v//')
    if [ "$MAJOR_VERSION" -lt 18 ]; then
        echo "⚠️  Node.js version is too old. Installing latest LTS..."
        sudo apt remove -y nodejs npm
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt-get install -y nodejs
    fi
else
    # Install Node.js 20.x LTS
    echo "📦 Installing Node.js 20.x LTS..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Verify installation
echo "🔍 Verifying installation..."
node --version
npm --version

# Configure npm to avoid permission issues
echo "🔐 Configuring npm permissions..."
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'

# Add to PATH if not already present
if ! grep -q "npm-global/bin" ~/.bashrc; then
    echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
fi

# Clone repository if not already present
if [ ! -d "cloud-escape-room-demo" ]; then
    echo "📥 Cloning repository..."
    git clone https://github.com/VisakhSA/cloud-escape-room-demo.git
fi

cd cloud-escape-room-demo

# Install dependencies
echo "📚 Installing dependencies..."
npm install

echo "✅ Setup complete!"
echo ""
echo "🌟 To start the Cloud Escape Room application:"
echo "   cd cloud-escape-room-demo"
echo "   npm run dev"
echo ""
echo "🌐 Access the application at:"
echo "   Frontend: http://localhost:3000"
echo "   Backend API: http://localhost:8080"
echo ""
echo "🎉 Enjoy your Cloud Escape Room experience!"