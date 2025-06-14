
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const Experience = () => {
  const projects = [
    {
      title: "E-commerce Mobile App",
      location: "San Francisco, CA",
      year: "2024",
      description: "Complete UX/UI redesign for a leading retail platform",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "SaaS Dashboard Design",
      location: "New York, NY",
      year: "2023",
      description: "Enterprise dashboard for data visualization and analytics",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Healthcare App Interface",
      location: "Austin, TX",
      year: "2023",
      description: "Patient management system with focus on accessibility",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-900/50 relative overflow-hidden">
      {/* Magical Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            Experiences with <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Passion</span>,
            <span className="block font-light">Precision, and Purpose</span>
          </h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Every project is a journey of discovery, creativity, and meticulous attention 
            to detail, resulting in designs that truly resonate with users.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-100/80 to-gray-200/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200/50 dark:border-gray-600/50">
                <Calendar className="w-4 h-4 mr-2" />
                5+ Years Experience
              </div>
              <h3 className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white tracking-tight">
                Crafting Digital Experiences That Matter
              </h3>
              <p className="text-lg font-light text-gray-600 dark:text-gray-400 leading-relaxed">
                My approach combines user-centered design principles with business objectives, 
                ensuring every design decision is both beautiful and purposeful.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-gray-100/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-gray-600 dark:text-gray-400 font-light text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-gray-100/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
                <div className="text-gray-600 dark:text-gray-400 font-light text-sm">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="group relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                alt="Designer at work" 
                className="w-full h-96 object-cover rounded-3xl border border-gray-100/50 dark:border-gray-700/50 shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          <h3 className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white text-center tracking-tight">
            Featured Case Studies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-100/50 dark:border-gray-700/50 hover:border-gray-200/50 dark:hover:border-gray-600/50 hover:shadow-2xl transition-all duration-500 animate-fade-in transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-50/80 dark:bg-gray-900/80 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-blue-500/20 transition-all duration-500"></div>
                </div>
                <div className="p-6 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">{project.year}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-110" />
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 font-light mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center text-gray-500 dark:text-gray-500 text-sm font-light">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
