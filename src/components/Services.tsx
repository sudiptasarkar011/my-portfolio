
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
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Explore My <span className="font-medium text-blue-600">Offerings</span> for You
          </h2>
          <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From concept to completion, I provide comprehensive design services 
            that transform your vision into exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed text-sm">
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
