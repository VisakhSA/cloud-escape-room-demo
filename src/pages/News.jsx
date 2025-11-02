import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import DateFilter from '../components/DateFilter';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching news from API...');
      const response = await axios.get('/api/news');
      console.log('News fetched successfully:', response.data.length, 'articles');
      setArticles(response.data);
      setFilteredArticles(response.data);
    } catch (err) {
      console.error('News fetch error:', err);
      setError('Failed to fetch news articles. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleDateFilter = async (startDate, endDate) => {
    try {
      setLoading(true);
      setError(null);
      const params = new URLSearchParams();
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);

      console.log('Applying date filter:', { startDate, endDate });
      const response = await axios.get(`/api/news/filter?${params}`);
      console.log('Filtered articles:', response.data.length);
      setFilteredArticles(response.data);
    } catch (err) {
      console.error('Filter error:', err);
      setError('Failed to filter articles. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const clearFilter = () => {
    console.log('Clearing filter, showing all articles');
    setFilteredArticles(articles);
  };

  const refreshNews = () => {
    fetchNews();
  };

  if (loading && articles.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-bg">
        <div className="text-center">
          <div className="loading-spinner w-16 h-16 mx-auto mb-6"></div>
          <p className="neon-text text-xl font-orbitron">Loading cloud news...</p>
          <p className="text-gray-400 mt-2">Fetching latest articles from the cloud</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6 font-orbitron">
            Cloud Computing News Portal
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, innovations, and insights in cloud technology.
            Discover what's shaping the future of digital infrastructure.
          </p>

          {/* Refresh Button */}
          <div className="mt-8">
            <button
              onClick={refreshNews}
              disabled={loading}
              className="neon-button disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Refreshing...' : 'Refresh News'}
            </button>
          </div>
        </div>

        {/* Date Filter */}
        <DateFilter onFilter={handleDateFilter} onClear={clearFilter} />

        {/* Error Message */}
        {error && (
          <div className="bg-red-900/20 border border-red-500 text-red-100 px-6 py-4 rounded-lg mb-8">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}

        {/* Loading Overlay for Filter Operations */}
        {loading && articles.length > 0 && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-neon-blue/10 border border-neon-blue/30 rounded-lg">
              <div className="loading-spinner w-4 h-4 mr-3"></div>
              <span className="text-neon-blue">Filtering articles...</span>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <>
            {/* Articles Count */}
            <div className="mb-8 text-center">
              <span className="inline-flex items-center px-4 py-2 bg-card-bg border border-neon-green/30 rounded-lg">
                <div className="w-2 h-2 bg-neon-green rounded-full mr-2 animate-pulse"></div>
                <span className="text-neon-green font-medium">
                  {filteredArticles.length} Article{filteredArticles.length !== 1 ? 's' : ''} Found
                </span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </>
        ) : (
          !loading && (
            <div className="text-center py-20">
              <div className="neon-card p-12 max-w-md mx-auto">
                <svg className="w-16 h-16 mx-auto mb-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-400 mb-4 font-orbitron">
                  No Articles Found
                </h3>
                <p className="text-gray-500 mb-6">
                  No articles match your current filter criteria. Try adjusting your date range or clearing the filter.
                </p>
                <button
                  onClick={clearFilter}
                  className="neon-button"
                >
                  Show All Articles
                </button>
              </div>
            </div>
          )
        )}

        {/* Back to Home */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Want to explore more features?
          </p>
          <a
            href="/"
            className="neon-button bg-transparent border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-bg"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
