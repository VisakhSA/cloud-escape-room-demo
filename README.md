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
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cloud-escape-room.git
   cd cloud-escape-room
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

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
