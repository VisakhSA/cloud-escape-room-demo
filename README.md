# 🌌 Cloud Escape Room - Professional Cloud Computing News Portal

A professional, neon-themed website built for the Cloud Escape Room event featuring real-time cloud computing news scraping and interactive filtering capabilities.

![Cloud Escape Room](https://img.shields.io/badge/Event-Cloud%20Escape%20Room-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwindcss)

## 🚀 Features

- **🎨 Professional Neon Design**: Futuristic aesthetics with glowing effects and animations
- **👤 Participant Showcase**: Personalized landing page with participant information
- **📰 Live News Scraping**: Real-time cloud computing news from cloudcomputing-news.net
- **📅 Date Filtering**: Interactive date range filtering for news articles
- **📱 Responsive Design**: Mobile-first approach with seamless cross-device experience
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🔄 Fallback System**: Robust error handling with fallback content

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - Modern UI library with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Lucide React** - Beautiful icons
- **Date-fns** - Modern date utility library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Cheerio** - Server-side jQuery for web scraping
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Compression** - Gzip compression

## 🚦 Getting Started

### Prerequisites
- Ubuntu 18.04+ (or other Debian-based distributions)
- Terminal access with sudo privileges

### Ubuntu Environment Setup

#### 1. Update System Packages
```bash
sudo apt update && sudo apt upgrade -y
```

#### 2. Install Essential Build Tools
```bash
sudo apt install -y curl wget build-essential git
```

#### 3. Install Node.js and npm

**Option A: Install Latest LTS Node.js (Recommended)**
```bash
# Install Node.js 20.x LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

**Option B: Install via Ubuntu Package Manager (Alternative)**
```bash
sudo apt install -y nodejs npm

# Update npm to latest version
sudo npm install -g npm@latest
```

#### 4. Install Git (if not already installed)
```bash
sudo apt install -y git
git --version
```

#### 5. Configure Git (Required for GitHub operations)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Prerequisites
- Node.js (v18 or higher) ✅ Installed above
- npm or yarn ✅ Installed above
- Git ✅ Installed above

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VisakhSA/cloud-escape-room-demo.git
   cd cloud-escape-room-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080

### Quick Setup Script for Ubuntu

For a one-command setup on Ubuntu, you can use this script:

```bash
#!/bin/bash
# Quick setup script for Cloud Escape Room on Ubuntu

echo "🚀 Setting up Cloud Escape Room on Ubuntu..."

# Update system
sudo apt update

# Install Node.js 20.x LTS
echo "📦 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install git if not present
sudo apt install -y git

# Clone repository
echo "📥 Cloning repository..."
git clone https://github.com/VisakhSA/cloud-escape-room-demo.git
cd cloud-escape-room-demo

# Install dependencies
echo "📚 Installing dependencies..."
npm install

# Start the application
echo "🌟 Starting Cloud Escape Room..."
npm run dev
```

**To use this script:**
```bash
# Save the script as setup.sh
curl -sSL https://raw.githubusercontent.com/VisakhSA/cloud-escape-room-demo/main/setup.sh -o setup.sh
chmod +x setup.sh
./setup.sh
```

## 📜 Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run server` - Start only the backend server
- `npm start` - Start the production server

## 🌐 API Endpoints

### News API
- `GET /api/news` - Fetch latest cloud computing news
- `GET /api/news/filter?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` - Filter news by date range
- `POST /api/news/clear-cache` - Clear news cache (development)

## 🚀 Deployment

### Production Build
```bash
npm run build
npm start
```

**Made with ❤️ for the Cloud Escape Room Event**

## 🐛 Troubleshooting

### Ubuntu-Specific Issues

1. **Permission denied errors with npm**
   ```bash
   # Fix npm permissions (avoid using sudo with npm)
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
   source ~/.bashrc
   ```

2. **Node.js version too old**
   ```bash
   # Remove old Node.js and install latest
   sudo apt remove nodejs npm
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Build dependencies missing**
   ```bash
   # Install additional build tools if needed
   sudo apt install -y python3 python3-pip gcc g++ make
   ```

4. **WSL (Windows Subsystem for Linux) specific**
   ```bash
   # If using WSL, ensure Windows firewall allows the ports
   # Also install Node.js within WSL, not from Windows
   ```

### General Issues

1. **Port already in use**
   ```bash
   lsof -ti:8080 | xargs kill -9
   ```

2. **Module not found errors**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build failures**
   ```bash
   npm run build -- --verbose
   ```

### Performance Optimization for Ubuntu

1. **Increase Node.js memory limit (for large builds)**
   ```bash
   export NODE_OPTIONS="--max-old-space-size=4096"
   ```

2. **Use npm cache for faster installs**
   ```bash
   npm config set cache ~/.npm-cache --global
   ```

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
