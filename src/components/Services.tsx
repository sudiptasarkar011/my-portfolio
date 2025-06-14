
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
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Explore My <span className="text-blue-600">Offerings</span> for You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, I provide comprehensive design services 
            that transform your vision into exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
