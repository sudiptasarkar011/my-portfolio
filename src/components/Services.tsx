
import { Palette, Smartphone, Layout, Figma, Monitor, Tablet } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    <section className="py-32 lg:py-40 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
            Explore My <span className="font-medium bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent animate-shimmer">Offerings</span> for You
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
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/0 backdrop-blur-xl p-8 transform hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 animate-fade-in tilt-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: hoveredCard === index ? 'perspective(1000px) rotateX(2deg) rotateY(2deg) scale(1.02) translateY(-8px)' : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] via-red-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center group-hover:border-orange-500/20 group-hover:bg-orange-500/5 transition-all duration-500">
                    <service.icon className={`h-6 w-6 text-gray-300 group-hover:text-orange-400 transition-all duration-500 ${hoveredCard === index ? 'animate-bounce-soft' : ''}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-4 group-hover:text-orange-400 transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
              
              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-orange-500/10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
