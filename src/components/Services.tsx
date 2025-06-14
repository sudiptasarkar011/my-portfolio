
import { Palette, Smartphone, Layout, Figma, Monitor, Tablet } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "User Experience Design",
      description: "Creating intuitive and engaging user journeys through research-driven design solutions."
    },
    {
      icon: Layout,
      title: "User Interface Design",
      description: "Crafting beautiful, functional interfaces that delight users and drive conversions."
    },
    {
      icon: Figma,
      title: "Product Prototyping",
      description: "Building interactive prototypes to validate concepts and communicate design vision."
    },
    {
      icon: Monitor,
      title: "Wireframing & Mockups",
      description: "Developing detailed wireframes and high-fidelity mockups for seamless development."
    },
    {
      icon: Tablet,
      title: "Responsive Web Design",
      description: "Designing adaptive experiences that work flawlessly across all devices and screen sizes."
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Creating native mobile experiences optimized for touch interaction and user engagement."
    }
  ];

  return (
    <section className="py-32 lg:py-40 px-6 lg:px-12 bg-black relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-transparent rounded-full blur-3xl siri-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-500/8 via-orange-500/8 to-transparent rounded-full blur-3xl siri-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
            Explore My <span className="font-medium bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent text-glow">Offerings</span> for You
          </h2>
          <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, I provide comprehensive design services 
            that transform your vision into exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group glass-card glass-card-hover rounded-3xl p-8 transform hover:scale-105 hover:-translate-y-3 transition-all duration-500 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-orange-500/25">
                    <service.icon className="h-8 w-8 text-gray-300 group-hover:text-orange-400 transition-all duration-500 group-hover:scale-110" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-orange-400 transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Magical border glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                   style={{ 
                     background: 'linear-gradient(45deg, transparent, rgba(255, 87, 34, 0.3), transparent)',
                     padding: '1px',
                     backgroundClip: 'border-box'
                   }}>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
