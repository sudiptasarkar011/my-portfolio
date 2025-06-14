
import { ArrowRight, MessageCircle, Sparkles, Stars, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 bg-black overflow-hidden">
      {/* Animated Lava Background */}
      <div className="absolute inset-0 bg-lava-gradient"></div>
      
      {/* Cosmic Wave Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-gradient rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cosmic-gradient rounded-full" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-full h-full bg-gradient-radial from-transparent via-orange-500/5 to-transparent siri-pulse"></div>
        </div>
      </div>

      {/* Floating Magical Elements */}
      <div className="absolute top-20 left-20 magic-float text-orange-400/60">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-32 left-32 magic-float text-red-400/60" style={{ animationDelay: '2s' }}>
        <Stars className="w-6 h-6" />
      </div>
      <div className="absolute top-32 right-32 magic-float text-orange-300/60" style={{ animationDelay: '4s' }}>
        <Zap className="w-7 h-7" />
      </div>
      <div className="absolute bottom-20 right-20 magic-float text-red-300/60" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-5 h-5" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 lg:gap-32 items-center z-10">
        {/* Left Content */}
        <div className="space-y-12 animate-fade-in">
          <div className="space-y-10">
            <h1 className="text-7xl lg:text-8xl font-light text-white leading-[0.9] tracking-tight">
              I'm <span className="font-medium bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent text-glow">Lora</span>, who loves
              <span className="block font-light text-gray-100 mt-2">perfect design &</span>
              <span className="block font-light text-gray-200 mt-1">unique user experiences.</span>
            </h1>
            <p className="text-2xl font-light text-gray-300 leading-relaxed max-w-xl">
              Crafting digital experiences that blend creativity with functionality, 
              turning complex problems into intuitive solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-lg font-medium rounded-2xl border-0 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-105 glow-orange overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Let's Talk</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group glass-card glass-card-hover text-white border-white/20 hover:border-orange-400/50 px-12 py-6 text-lg font-medium rounded-2xl transition-all duration-500 backdrop-blur-xl"
            >
              View My Services
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Right Content - Enhanced Mockups */}
        <div className="relative animate-fade-in">
          <div className="relative z-10">
            {/* Desktop Mockup with Glassmorphism */}
            <div className="group glass-card rounded-3xl p-2 mb-12 transform rotate-2 hover:rotate-0 transition-all duration-700 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="bg-gray-900/80 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50">
                <div className="h-10 bg-gray-800/90 border-b border-gray-700/50 flex items-center px-5">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full siri-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full siri-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full siri-pulse" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                    alt="Desktop UI Design" 
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Mobile Mockup with Enhanced Effects */}
            <div className="group absolute -bottom-20 -left-20 glass-card rounded-3xl p-2 w-60 transform -rotate-6 hover:rotate-0 transition-all duration-700 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="bg-gray-900/80 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50">
                <div className="h-8 bg-gray-800/90 border-b border-gray-700/50 flex items-center justify-center">
                  <div className="w-10 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" 
                    alt="Mobile UI Design" 
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Ambient Light Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-3xl siri-pulse"></div>
          <div className="absolute bottom-40 right-12 w-24 h-24 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-2xl siri-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
