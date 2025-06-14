
import { ArrowRight, MessageCircle, Sparkles, Stars, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 overflow-hidden">
      {/* Floating Magical Elements */}
      <div className="absolute top-20 left-20 magic-float text-orange-400/40">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-32 left-32 magic-float text-red-400/40" style={{ animationDelay: '2s' }}>
        <Stars className="w-5 h-5" />
      </div>
      <div className="absolute top-32 right-32 magic-float text-orange-300/40" style={{ animationDelay: '4s' }}>
        <Zap className="w-5 h-5" />
      </div>
      <div className="absolute bottom-20 right-20 magic-float text-red-300/40" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-4 h-4" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 lg:gap-32 items-center z-10">
        {/* Left Content - More Breathing Space */}
        <div className="space-y-16 animate-fade-in">
          <div className="space-y-12">
            <h1 className="text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight">
              I'm <span className="font-medium bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent animate-shimmer glow-text">Lora</span>
              <span className="block font-light text-gray-100 mt-6">who loves perfect design</span>
              <span className="block font-light text-gray-200 mt-4">& unique experiences</span>
            </h1>
            <div className="pt-6">
              <p className="text-xl font-light text-gray-300 leading-relaxed max-w-lg">
                Crafting digital experiences that blend creativity with functionality.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-lg font-medium rounded-2xl border-0 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-105 hover:shadow-glow overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-border"></div>
              <MessageCircle className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Let's Talk</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group glass-card glass-card-hover text-white border-white/20 hover:border-orange-400/50 px-12 py-6 text-lg font-medium rounded-2xl transition-all duration-500 backdrop-blur-xl transform hover:scale-105"
            >
              View My Services
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Right Content - Magic UI Style */}
        <div className="relative animate-fade-in">
          <div className="relative z-10 space-y-8">
            {/* Main Dashboard Preview */}
            <div 
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-1 shadow-2xl"
              style={{
                transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-black/40 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse-soft"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse-soft" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-soft" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                  <div className="text-xs text-gray-400">Portfolio Dashboard</div>
                </div>
                
                {/* Dashboard Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-32 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-lg animate-pulse-soft"></div>
                    <div className="h-6 w-16 bg-white/10 rounded-md"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/20"></div>
                    <div className="h-16 bg-white/5 rounded-xl border border-white/10"></div>
                    <div className="h-16 bg-white/5 rounded-xl border border-white/10"></div>
                  </div>
                  <div className="h-24 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-transparent rounded-xl border border-orange-500/10"></div>
                </div>
              </div>
            </div>

            {/* Mobile App Preview */}
            <div 
              className="group absolute -bottom-8 -right-8 w-48 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-1 shadow-xl"
              style={{
                transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-black/40 p-3">
                <div className="flex justify-center mb-3">
                  <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-12 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-lg"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 bg-white/10 rounded-md"></div>
                    <div className="h-8 bg-white/10 rounded-md"></div>
                  </div>
                  <div className="h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/20"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Ambient Light Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-40 right-12 w-24 h-24 bg-gradient-to-br from-red-400/15 to-orange-400/15 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
