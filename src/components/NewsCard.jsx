import { format } from 'date-fns';

const NewsCard = ({ article }) => {
  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch {
      return 'Recent';
    }
  };

  const handleCardClick = () => {
    if (article.link && article.link !== '#') {
      window.open(article.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article
      className={`neon-card p-6 h-full flex flex-col transition-all duration-300 ${article.link && article.link !== '#' ? 'cursor-pointer' : ''
        }`}
      onClick={handleCardClick}
    >
      {/* Article Header */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 text-xs bg-neon-blue/20 text-neon-blue rounded-full border border-neon-blue/30">
            {article.category}
          </span>
          <time className="text-sm text-gray-400">
            {formatDate(article.date)}
          </time>
        </div>

        <h3 className="text-xl font-bold neon-text-green font-orbitron leading-tight mb-3">
          {article.title}
        </h3>
      </div>

      {/* Article Content */}
      <div className="flex-grow">
        <p className="text-gray-300 leading-relaxed mb-4">
          {article.excerpt}
        </p>
      </div>

      {/* Article Footer */}
      <div className="pt-4 border-t border-neon-blue/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">Article #{article.id}</span>
          </div>

          {article.link && article.link !== '#' && (
            <div className="flex items-center text-neon-blue hover:text-neon-green transition-colors">
              <span className="text-sm font-medium mr-2">Read More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      {article.link && article.link !== '#' && (
        <div className="absolute inset-0 bg-neon-blue/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
      )}
    </article>
  );
};

export default NewsCard;
