
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
    <section className="py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Animated Data Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-400/20 rounded-full animate-float-data"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Neural Network SVG Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q200,50 400,150 T800,100"
            stroke="url(#serviceGradient)"
            strokeWidth="1"
            fill="none"
            className="data-flow-line"
          />
          <path
            d="M100,300 Q300,200 500,400 T900,300"
            stroke="url(#serviceGradient)"
            strokeWidth="1"
            fill="none"
            className="data-flow-line"
            style={{ animationDelay: '2s' }}
          />
        </svg>
      </div>

      {/* Cute floating robot elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=80&q=80" 
          alt="Cute robot dog"
          className="w-12 h-12 rounded-full animate-bounce neural-pulse"
        />
      </div>
      <div className="absolute bottom-10 left-10 opacity-15">
        <Bot className="w-10 h-10 text-pink-400 animate-pulse neural-glow" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-foreground mb-4 data-shimmer">
            What I Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specializing in data science and AI/ML engineering to help businesses 
            make data-driven decisions and build intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-pink-900/10 dark:to-purple-900/10 backdrop-blur-sm border border-pink-100 dark:border-pink-500/20 rounded-xl hover:border-pink-300 dark:hover:border-pink-400/50 hover:bg-gradient-to-br hover:from-purple-100/50 hover:to-pink-100/50 dark:hover:from-pink-800/20 dark:hover:to-purple-800/20 transition-all duration-300 shadow-lg hover:shadow-pink-500/10 data-card neural-stat"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Data sparkles on hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>

              <div className="mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} p-2 group-hover:scale-110 transition-transform duration-300 neural-pulse relative`}>
                  <service.icon className="h-8 w-8 text-white" />
                  {/* Neural connection effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-200 transition-colors relative">
                {service.title}
                {/* Underline effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Binary code pattern overlay */}
              <div className="absolute bottom-2 right-2 text-xs text-pink-200/20 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {Math.random().toString(2).substring(2, 8)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
