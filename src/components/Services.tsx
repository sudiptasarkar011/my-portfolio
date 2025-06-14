
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
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-900 relative overflow-hidden">
      {/* Magical Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            Explore My <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offerings</span> for You
          </h2>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From concept to completion, I provide comprehensive design services 
            that transform your vision into exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-100/50 dark:border-gray-700/50 hover:border-gray-200/50 dark:hover:border-gray-600/50 hover:shadow-2xl transition-all duration-500 animate-fade-in transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-700/80 dark:to-gray-800/80 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-50/80 group-hover:to-purple-50/80 dark:group-hover:from-blue-900/50 dark:group-hover:to-purple-900/50 transition-all duration-500 backdrop-blur-sm">
                  <service.icon className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-500 group-hover:scale-110" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-sm">
                {service.description}
              </p>
              
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
