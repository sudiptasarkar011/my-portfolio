
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              I'm <span className="text-blue-600">Lora</span>, who loves
              <span className="block text-gray-700">perfect design &</span>
              <span className="block text-gray-600">unique user experiences.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Crafting digital experiences that blend creativity with functionality, 
              turning complex problems into intuitive solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Let's Talk
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right Content - Mockups */}
        <div className="relative animate-fade-in">
          <div className="relative z-10">
            {/* Desktop Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                  alt="Desktop UI Design" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="mt-4">
                <div className="h-3 bg-gray-200 rounded-full mb-2"></div>
                <div className="h-3 bg-gray-100 rounded-full w-3/4"></div>
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="absolute -bottom-12 -left-12 bg-white rounded-2xl shadow-xl p-4 w-48 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" 
                  alt="Mobile UI Design" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="mt-3">
                <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
                <div className="h-2 bg-gray-100 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute bottom-20 right-0 w-24 h-24 bg-purple-100 rounded-full opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
