
import { MapPin, Calendar, ExternalLink, Sparkles } from "lucide-react";

const Experience = () => {
  const projects = [
    {
      title: "E-commerce Mobile App",
      location: "San Francisco, CA",
      year: "2024",
      description: "Complete UX/UI redesign for a leading retail platform with focus on conversion optimization",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "SaaS Dashboard Design",
      location: "New York, NY",
      year: "2023",
      description: "Enterprise dashboard for data visualization and analytics with real-time insights",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Healthcare App Interface",
      location: "Austin, TX",
      year: "2023",
      description: "Patient management system with focus on accessibility and user empowerment",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-32 lg:py-40 px-6 lg:px-12 relative overflow-hidden">
      {/* Floating Magical Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <Sparkles className="absolute top-20 left-20 w-6 h-6 text-orange-400/30 magic-float" />
        <Sparkles className="absolute bottom-32 right-32 w-4 h-4 text-red-400/30 magic-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
            Experiences with <span className="font-medium bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent glow-text">Passion</span>,
            <span className="block font-light mt-2">Precision, and Purpose</span>
          </h2>
          <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every project is a journey of discovery, creativity, and meticulous attention 
            to detail, resulting in designs that truly resonate with users.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-xl text-orange-400 text-base font-medium">
                <Calendar className="w-5 h-5 mr-3" />
                5+ Years Experience
              </div>
              <h3 className="text-5xl lg:text-6xl font-light text-white tracking-tight glow-text">
                Crafting Digital Experiences That Matter
              </h3>
              <p className="text-xl font-light text-gray-300 leading-relaxed">
                My approach combines user-centered design principles with business objectives, 
                ensuring every design decision is both beautiful and purposeful.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/0 backdrop-blur-xl group hover:border-orange-500/20 transition-all duration-500">
                <div className="text-4xl font-light bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 glow-text">50+</div>
                <div className="text-gray-400 font-light">Projects Completed</div>
              </div>
              <div className="text-center p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/0 backdrop-blur-xl group hover:border-orange-500/20 transition-all duration-500">
                <div className="text-4xl font-light bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 glow-text">25+</div>
                <div className="text-gray-400 font-light">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="group relative rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/0 backdrop-blur-xl p-1 hover:border-orange-500/20 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                alt="Designer at work" 
                className="w-full h-96 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-1 bg-gradient-to-t from-orange-500/5 via-transparent to-red-500/[0.02] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          <h3 className="text-5xl lg:text-6xl font-light text-white text-center tracking-tight glow-text">
            Featured Case Studies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/0 backdrop-blur-xl overflow-hidden transform hover:scale-[1.02] hover:-translate-y-2 transition-all duration-700 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-orange-500/10 transition-all duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-orange-400 transition-colors duration-300 group-hover:scale-110" />
                  </div>
                </div>
                
                <div className="p-8 relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-medium px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5">{project.year}</span>
                  </div>
                  <h4 className="text-2xl font-medium text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 font-light mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm font-light">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>
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
