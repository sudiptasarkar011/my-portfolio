
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
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Experiences with <span className="font-medium text-blue-600">Passion</span>,
            <span className="block font-light">Precision, and Purpose</span>
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every project is a journey of discovery, creativity, and meticulous attention 
            to detail, resulting in designs that truly resonate with users.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                5+ Years Experience
              </div>
              <h3 className="text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
                Crafting Digital Experiences That Matter
              </h3>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                My approach combines user-centered design principles with business objectives, 
                ensuring every design decision is both beautiful and purposeful.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-3xl font-light text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-light text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-3xl font-light text-blue-600 mb-2">25+</div>
                <div className="text-gray-600 font-light text-sm">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
              alt="Designer at work" 
              className="w-full h-96 object-cover rounded-3xl border border-gray-100"
            />
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          <h3 className="text-4xl lg:text-5xl font-light text-gray-900 text-center tracking-tight">
            Featured Case Studies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-600 font-medium">{project.year}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 font-light mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm font-light">
                    <MapPin className="w-4 h-4 mr-1" />
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
