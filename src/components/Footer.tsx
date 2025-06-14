
import { Mail, Linkedin, Twitter, Dribbble, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="text-white py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-16 right-16">
        <Sparkles className="w-6 h-6 text-orange-400/20 magic-float" />
      </div>
      <div className="absolute bottom-16 left-16">
        <Sparkles className="w-5 h-5 text-red-400/20 magic-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-6xl lg:text-7xl font-light mb-10 tracking-tight">
            Ready to Create Something <span className="font-medium bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent glow-text">Amazing</span>?
          </h2>
          <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Let's collaborate and bring your vision to life with exceptional design 
            that users will love and remember.
          </p>
          <Button 
            size="lg" 
            className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-lg font-medium rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-105 glow-orange overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Mail className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
            <span className="relative z-10">Get In Touch</span>
          </Button>
        </div>

        <div className="border-t border-gray-800/50 pt-20">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-light mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent glow-text">Lora</h3>
              <p className="text-gray-400 font-light text-lg">UX Designer & Creative Strategist</p>
            </div>

            <div className="flex space-x-6">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Dribbble, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="group w-14 h-14 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl flex items-center justify-center hover:border-orange-500/30 hover:bg-orange-500/10 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transform hover:scale-110 hover:-translate-y-2"
                >
                  <social.icon className="w-6 h-6 text-gray-300 group-hover:text-orange-400 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-20 pt-10 border-t border-gray-800/30">
            <p className="text-gray-500 font-light text-lg">
              © 2024 Lora. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
