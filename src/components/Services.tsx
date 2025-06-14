
import { Database, Brain, TrendingUp, Code, BarChart3, Cpu } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust data pipelines and ETL processes for scalable data infrastructure."
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Developing predictive models and AI solutions to solve complex business problems."
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Extracting meaningful insights from data through statistical analysis and visualization."
    },
    {
      icon: Code,
      title: "Algorithm Development",
      description: "Creating custom algorithms and optimization solutions for specific use cases."
    },
    {
      icon: TrendingUp,
      title: "Predictive Modeling",
      description: "Building forecasting models to predict trends and business outcomes."
    },
    {
      icon: Cpu,
      title: "Deep Learning",
      description: "Implementing neural networks and deep learning architectures for complex pattern recognition."
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">
            What I Do
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Specializing in data science and AI/ML engineering to help businesses 
            make data-driven decisions and build intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300"
            >
              <div className="mb-4">
                <service.icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-100 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
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
