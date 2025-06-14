
import { Database, Brain, TrendingUp, Code, BarChart3, Cpu, Bot } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust data pipelines and ETL processes for scalable data infrastructure.",
      color: "from-pink-500 to-rose-400"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Developing predictive models and AI solutions to solve complex business problems.",
      color: "from-purple-500 to-violet-400"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Extracting meaningful insights from data through statistical analysis and visualization.",
      color: "from-pink-400 to-purple-400"
    },
    {
      icon: Code,
      title: "Algorithm Development",
      description: "Creating custom algorithms and optimization solutions for specific use cases.",
      color: "from-rose-500 to-pink-400"
    },
    {
      icon: TrendingUp,
      title: "Predictive Modeling",
      description: "Building forecasting models to predict trends and business outcomes.",
      color: "from-violet-500 to-purple-400"
    },
    {
      icon: Cpu,
      title: "Deep Learning",
      description: "Implementing neural networks and deep learning architectures for complex pattern recognition.",
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 relative">
      {/* Cute floating robot elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=80&q=80" 
          alt="Cute robot dog"
          className="w-12 h-12 rounded-full animate-bounce"
        />
      </div>
      <div className="absolute bottom-10 left-10 opacity-15">
        <Bot className="w-10 h-10 text-pink-400 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">
            What I Do
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Specializing in data science and AI/ML engineering to help businesses 
            make data-driven decisions and build intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 bg-gradient-to-br from-pink-900/10 to-purple-900/10 backdrop-blur-sm border border-pink-500/20 rounded-xl hover:border-pink-400/50 hover:bg-gradient-to-br hover:from-pink-800/20 hover:to-purple-800/20 transition-all duration-300 shadow-lg hover:shadow-pink-500/10"
            >
              <div className="mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} p-2 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-pink-200 transition-colors">
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
