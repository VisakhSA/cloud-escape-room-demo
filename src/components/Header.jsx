import { Link, useLocation } from 'react-router-dom';

const Header = ({ participantName }) => {
  const location = useLocation();

  return (
    <header className="bg-dark-bg border-b border-neon-blue/30 sticky top-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <Link to="/" className="text-2xl font-bold neon-text hover:text-neon-purple transition-colors">
            Cloud Escape Room
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${location.pathname === '/'
                  ? 'text-neon-green'
                  : 'text-gray-300 hover:text-neon-blue'
                }`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`font-medium transition-colors ${location.pathname === '/projects'
                  ? 'text-neon-green'
                  : 'text-gray-300 hover:text-neon-blue'
                }`}
            >
              Projects
            </Link>
          </nav>

          {/* Participant Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <span className="text-gray-400">Participant:</span>
            <span className="neon-text-green font-semibold">{participantName}</span>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-neon-blue hover:text-neon-green transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 pt-4 border-t border-neon-blue/20">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className={`font-medium transition-colors ${location.pathname === '/'
                  ? 'text-neon-green'
                  : 'text-gray-300 hover:text-neon-blue'
                }`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`font-medium transition-colors ${location.pathname === '/projects'
                  ? 'text-neon-green'
                  : 'text-gray-300 hover:text-neon-blue'
                }`}
            >
              Projects
            </Link>
            <div className="pt-2 border-t border-neon-blue/20">
              <span className="text-gray-400 text-sm">Participant: </span>
              <span className="neon-text-green font-semibold text-sm">{participantName}</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
