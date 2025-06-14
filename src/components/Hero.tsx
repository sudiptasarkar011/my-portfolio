
import { ArrowRight, Database, Brain, BarChart3, Code2, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [dataPoints, setDataPoints] = useState<number[]>([]);

  useEffect(() => {
    // Generate simple data visualization points
    const points = Array.from({ length: 20 }, () => Math.random() * 100);
    setDataPoints(points);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      {/* Cute floating robot elements */}
      <div className="absolute top-20 right-20 opacity-20">
        <Bot className="w-12 h-12 text-pink-400 animate-bounce" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=100&q=80" 
          alt="Cute robot"
          className="w-16 h-16 rounded-full animate-pulse opacity-60"
        />
      </div>
      <div className="absolute top-1/3 left-1/4 opacity-15">
        <Bot className="w-8 h-8 text-lavender-400 animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-light text-white leading-tight">
              Hi, I'm <span className="font-medium bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Lora</span>
            </h1>
            <div className="space-y-2">
              <p className="text-2xl text-pink-200 font-light">Data Scientist</p>
              <p className="text-2xl text-purple-200 font-light">& AI/ML Engineer</p>
            </div>
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              Transforming complex data into actionable insights through machine learning, 
              statistical analysis, and intelligent system design.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 text-base font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
            >
              <Database className="mr-2 h-4 w-4" />
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-pink-400 text-pink-300 hover:bg-pink-500/10 hover:border-pink-300 px-8 py-3 text-base font-medium rounded-lg transition-all duration-300"
            >
              Download CV
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Content - Data Visualization with cute elements */}
        <div className="relative animate-fade-in">
          <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-medium flex items-center">
                <Bot className="w-5 h-5 text-pink-400 mr-2" />
                AI Insights
              </h3>
              <div className="flex space-x-2">
                <BarChart3 className="w-5 h-5 text-pink-400" />
                <Code2 className="w-5 h-5 text-purple-400" />
              </div>
            </div>
            
            {/* Simple bar chart visualization */}
            <div className="space-y-4">
              <div className="flex items-end space-x-2 h-32">
                {dataPoints.slice(0, 12).map((point, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-t from-pink-500 to-purple-400 rounded-t-sm transition-all duration-1000 ease-out"
                    style={{
                      height: `${point}%`,
                      width: '20px',
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-pink-700/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">50+</div>
                  <div className="text-sm text-gray-400">ML Models</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">1M+</div>
                  <div className="text-sm text-gray-400">Data Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-300">95%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
