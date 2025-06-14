import { Mail, Linkedin, Twitter, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-900 to-gray-800 dark:from-black dark:via-gray-900 dark:to-gray-900 text-white py-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Magical Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/8 to-pink-600/8 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 tracking-tight">
            Ready to Create Something <span className="font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Amazing</span>?
          </h2>
          <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Let's collaborate and bring your vision to life with exceptional design 
            that users will love and remember.
          </p>
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-base font-medium rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
            Get In Touch
          </Button>
        </div>

        <div className="border-t border-gray-700/50 pt-16 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-light mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Lora</h3>
              <p className="text-gray-400 font-light">UX Designer & Creative Strategist</p>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Dribbble, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="group w-12 h-12 bg-gray-800/70 dark:bg-gray-700/70 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600/80 hover:to-purple-600/80 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-gray-700/30">
            <p className="text-gray-400 font-light">
              © 2024 Lora. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
