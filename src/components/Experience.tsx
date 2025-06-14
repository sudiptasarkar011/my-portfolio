
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
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Experiences with <span className="text-blue-600">Passion</span>,
            <span className="block">Precision, and Purpose</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every project is a journey of discovery, creativity, and meticulous attention 
            to detail, resulting in designs that truly resonate with users.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                5+ Years Experience
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Crafting Digital Experiences That Matter
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                My approach combines user-centered design principles with business objectives, 
                ensuring every design decision is both beautiful and purposeful. I believe in 
                the power of collaboration and iterative design to create solutions that exceed expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
              alt="Designer at work" 
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-6">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Featured Case Studies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-600 font-medium">{project.year}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
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
