import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Home = ({ participantName }) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero participantName={participantName} />

      {/* Projects Section */}
      <Projects />

      {/* Call to Action Section */}
      <section className="py-20 bg-dark-bg relative">
        {/* Background Grid */}
        <div className="absolute inset-0 cyber-grid opacity-30"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-8 font-orbitron">
            Ready for the Challenge?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Dive into the latest cloud computing news and stay ahead of the curve.
            Explore cutting-edge technologies and industry insights from around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/projects" className="neon-button">
              Explore News Portal
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="neon-button bg-transparent border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-bg"
            >
              Back to Top
            </button>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="neon-card p-6 text-left">
              <h3 className="text-xl font-bold neon-text-green mb-4 font-orbitron">
                Real-Time Updates
              </h3>
              <p className="text-gray-300">
                Get the latest cloud computing news as it happens. Our intelligent
                scraping system ensures you never miss important industry developments.
              </p>
            </div>

            <div className="neon-card p-6 text-left">
              <h3 className="text-xl font-bold neon-text-blue mb-4 font-orbitron">
                Advanced Filtering
              </h3>
              <p className="text-gray-300">
                Find exactly what you're looking for with our powerful date-based
                filtering system. Navigate through articles with precision and ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
