
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="space-y-10 animate-fade-in">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-[0.9] tracking-tight">
              I'm <span className="font-medium text-blue-600">Lora</span>, who loves
              <span className="block font-light text-gray-800">perfect design &</span>
              <span className="block font-light text-gray-700">unique user experiences.</span>
            </h1>
            <p className="text-xl font-light text-gray-600 leading-relaxed max-w-lg">
              Crafting digital experiences that blend creativity with functionality, 
              turning complex problems into intuitive solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-base font-medium rounded-full border-0 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Let's Talk
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border border-gray-300 text-gray-900 hover:bg-gray-50 px-10 py-4 text-base font-medium rounded-full transition-all duration-200"
            >
              Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Content - Mockups */}
        <div className="relative animate-fade-in">
          <div className="relative z-10">
            {/* Desktop Mockup */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-1 mb-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gray-50 rounded-[20px] overflow-hidden">
                <div className="h-8 bg-white border-b border-gray-200 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                  alt="Desktop UI Design" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="absolute -bottom-16 -left-16 bg-white rounded-3xl shadow-xl border border-gray-100 p-1 w-52 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gray-50 rounded-[20px] overflow-hidden">
                <div className="h-6 bg-white border-b border-gray-200 flex items-center justify-center">
                  <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" 
                  alt="Mobile UI Design" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute top-16 right-16 w-24 h-24 bg-blue-50 rounded-full opacity-60"></div>
          <div className="absolute bottom-32 right-8 w-16 h-16 bg-purple-50 rounded-full opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
