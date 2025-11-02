import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
import newsRoutes from './routes/news.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;

// Middleware
app.use(helmet({
  contentSecurityPolicy: false // Allow inline styles for neon effects
}));
app.use(compression());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/news', newsRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Cloud Escape Room server running on http://0.0.0.0:${PORT}`);
  console.log(`🌐 Server accessible from all network interfaces`);
  console.log(`📡 API endpoints: http://0.0.0.0:${PORT}/api/news`);
});
