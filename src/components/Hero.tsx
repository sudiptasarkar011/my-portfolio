
import { ArrowRight, Database, Brain, BarChart3, Code2 } from "lucide-react";
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
      {/* Minimal floating elements */}
      <div className="absolute top-20 right-20 opacity-10">
        <Database className="w-8 h-8 text-blue-400" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10">
        <Brain className="w-8 h-8 text-purple-400" />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-light text-white leading-tight">
              Hi, I'm <span className="font-medium text-blue-400">Lora</span>
            </h1>
            <div className="space-y-2">
              <p className="text-2xl text-gray-300 font-light">Data Scientist</p>
              <p className="text-2xl text-gray-300 font-light">& AI/ML Engineer</p>
            </div>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Transforming complex data into actionable insights through machine learning, 
              statistical analysis, and intelligent system design.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium rounded-lg transition-colors"
            >
              <Database className="mr-2 h-4 w-4" />
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-base font-medium rounded-lg transition-colors"
            >
              Download CV
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Content - Data Visualization */}
        <div className="relative animate-fade-in">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-medium">Data Insights</h3>
              <div className="flex space-x-2">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                <Code2 className="w-5 h-5 text-purple-400" />
              </div>
            </div>
            
            {/* Simple bar chart visualization */}
            <div className="space-y-4">
              <div className="flex items-end space-x-2 h-32">
                {dataPoints.slice(0, 12).map((point, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm transition-all duration-1000 ease-out"
                    style={{
                      height: `${point}%`,
                      width: '20px',
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-gray-400">ML Models</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">1M+</div>
                  <div className="text-sm text-gray-400">Data Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">95%</div>
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
