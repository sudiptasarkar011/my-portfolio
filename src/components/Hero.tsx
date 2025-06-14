
import { ArrowRight, MessageCircle, Sparkles, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/20 overflow-hidden">
      {/* Magical Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-transparent via-blue-500/5 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-32 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
        <Sparkles className="w-6 h-6 text-blue-400/60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
        <Stars className="w-5 h-5 text-purple-400/60" />
      </div>
      <div className="absolute top-40 right-40 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
        <Sparkles className="w-4 h-4 text-pink-400/60" />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center z-10">
        {/* Left Content */}
        <div className="space-y-10 animate-fade-in">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-light text-gray-900 dark:text-white leading-[0.9] tracking-tight">
              I'm <span className="font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">Lora</span>, who loves
              <span className="block font-light text-gray-800 dark:text-gray-200">perfect design &</span>
              <span className="block font-light text-gray-700 dark:text-gray-300">unique user experiences.</span>
            </h1>
            <p className="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Crafting digital experiences that blend creativity with functionality, 
              turning complex problems into intuitive solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-base font-medium rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              Let's Talk
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50 px-10 py-4 text-base font-medium rounded-full transition-all duration-300 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50"
            >
              Our Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Right Content - Enhanced Mockups */}
        <div className="relative animate-fade-in">
          <div className="relative z-10">
            {/* Desktop Mockup with Glassmorphism */}
            <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-1 mb-8 transform rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-3xl">
              <div className="bg-gray-50/80 dark:bg-gray-900/80 rounded-[20px] overflow-hidden backdrop-blur-sm">
                <div className="h-8 bg-white/90 dark:bg-gray-800/90 border-b border-gray-200/50 dark:border-gray-700/50 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                    alt="Desktop UI Design" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Mobile Mockup with Enhanced Effects */}
            <div className="group absolute -bottom-16 -left-16 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-1 w-52 transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:shadow-3xl">
              <div className="bg-gray-50/80 dark:bg-gray-900/80 rounded-[20px] overflow-hidden backdrop-blur-sm">
                <div className="h-6 bg-white/90 dark:bg-gray-800/90 border-b border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center">
                  <div className="w-8 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" 
                    alt="Mobile UI Design" 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Background Elements */}
          <div className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-br from-blue-200/40 to-purple-200/40 dark:from-blue-800/40 dark:to-purple-800/40 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-32 right-8 w-16 h-16 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-800/30 dark:to-pink-800/30 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
