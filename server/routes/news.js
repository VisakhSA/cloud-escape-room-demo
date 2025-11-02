import express from 'express';
import NewsScraper from '../utils/scraper.js';

const router = express.Router();
const scraper = new NewsScraper();

// Cache for news articles
let newsCache = { data: null, timestamp: null };
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

router.get('/', async (req, res) => {
  try {
    const now = Date.now();
    
    // Check if cache is valid
    if (newsCache.data && newsCache.timestamp && (now - newsCache.timestamp) < CACHE_DURATION) {
      return res.json(newsCache.data);
    }

    // Scrape fresh news
    console.log('Fetching fresh news...');
    const articles = await scraper.scrapeNews();
    
    // Update cache
    newsCache = { data: articles, timestamp: now };
    
    res.json(articles);
  } catch (error) {
    console.error('News API error:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

router.get('/filter', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    
    // Get cached news or fetch new
    let articles = newsCache.data;
    if (!articles) {
      console.log('Fetching news for filtering...');
      articles = await scraper.scrapeNews();
      newsCache = { data: articles, timestamp: Date.now() };
    }

    // Filter by date if provided
    let filteredArticles = articles;
    if (startDate || endDate) {
      filteredArticles = articles.filter(article => {
        const articleDate = new Date(article.date);
        const start = startDate ? new Date(startDate) : new Date('2020-01-01');
        const end = endDate ? new Date(endDate) : new Date();
        
        return articleDate >= start && articleDate <= end;
      });
    }

    res.json(filteredArticles);
  } catch (error) {
    console.error('Filter error:', error);
    res.status(500).json({ error: 'Failed to filter news' });
  }
});

// Clear cache endpoint (for development)
router.post('/clear-cache', (req, res) => {
  newsCache = { data: null, timestamp: null };
  res.json({ message: 'Cache cleared successfully' });
});

export default router;
