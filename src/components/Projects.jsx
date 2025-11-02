import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cloud News Portal",
      description: "Real-time cloud computing news aggregation with advanced filtering capabilities",
      features: ["Live News Scraping", "Date-based Filtering", "Real-time Updates", "Mobile Responsive"],
      tech: ["React", "Node.js", "Cheerio", "Express"],
      status: "Active",
      link: "/projects"
    },
    {
      id: 2,
      title: "Future Project Alpha",
      description: "Next-generation cloud analytics platform with AI-powered insights",
      features: ["AI Analytics", "Predictive Modeling", "Data Visualization", "API Integration"],
      tech: ["Python", "TensorFlow", "React", "MongoDB"],
      status: "Coming Soon",
      link: "#"
    },
    {
      id: 3,
      title: "Future Project Beta",
      description: "Serverless computing orchestration and management dashboard",
      features: ["Serverless Deploy", "Cost Optimization", "Performance Monitor", "Auto Scaling"],
      tech: ["AWS Lambda", "React", "GraphQL", "DynamoDB"],
      status: "Planning",
      link: "#"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-neon-green';
      case 'Coming Soon': return 'text-neon-blue';
      case 'Planning': return 'text-neon-purple';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="features" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold neon-text mb-6 font-orbitron">
            Projects Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore cutting-edge cloud computing projects designed to push the boundaries
            of modern technology and deliver exceptional digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="neon-card p-8 h-full flex flex-col">
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold neon-text-green font-orbitron">
                    {project.title}
                  </h3>
                  <span className={`text-sm font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6 flex-grow">
                <h4 className="text-lg font-semibold neon-text-blue mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-neon-green rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold neon-text-purple mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-card-bg border border-neon-blue/30 rounded-full text-neon-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-auto">
                {project.status === 'Active' ? (
                  <Link to={project.link} className="neon-button w-full text-center block">
                    Explore Project
                  </Link>
                ) : (
                  <button
                    disabled
                    className="w-full py-3 px-6 border-2 border-gray-600 text-gray-600 font-semibold rounded cursor-not-allowed"
                  >
                    {project.status}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Ready to explore the active project?
          </p>
          <Link to="/projects" className="neon-button">
            View Cloud News Portal
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
