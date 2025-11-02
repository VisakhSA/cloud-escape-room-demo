import { Link } from 'react-router-dom';

const Hero = ({ participantName }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark-bg cyber-grid">
      {/* Particle Background */}
      <div className="particle-bg">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 3 + 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 neon-text font-orbitron">
          CLOUD
          <br />
          <span className="neon-text-purple">ESCAPE</span>
          <br />
          <span className="neon-text-green">ROOM</span>
        </h1>

        {/* Participant Welcome */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Welcome to the future,
          </p>
          <h2 className="text-3xl md:text-4xl font-bold neon-text-green font-orbitron">
            {participantName}
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Dive into the digital realm where cloud computing meets cutting-edge innovation.
          Explore the latest trends, breakthrough technologies, and industry insights that
          are shaping the future of digital infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/projects" className="neon-button">
            Explore Projects
          </Link>
          <button
            onClick={() => {
              document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
            }}
            className="neon-button bg-transparent border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-bg"
          >
            Learn More
          </button>
        </div>

        {/* Stats/Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="neon-card p-6">
            <div className="text-3xl font-bold neon-text-green mb-2">24/7</div>
            <div className="text-gray-300">Real-time News Updates</div>
          </div>
          <div className="neon-card p-6">
            <div className="text-3xl font-bold neon-text-blue mb-2">100+</div>
            <div className="text-gray-300">Cloud Computing Articles</div>
          </div>
          <div className="neon-card p-6">
            <div className="text-3xl font-bold neon-text-purple mb-2">∞</div>
            <div className="text-gray-300">Future Possibilities</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
