
import { Mail, Linkedin, Github, FileText, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="text-white py-20 px-6 lg:px-12 relative">
      {/* Cute robot element */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-10">
        <Bot className="w-8 h-8 text-pink-400 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Interested in collaborating on data science projects or AI/ML solutions? 
            I'd love to discuss how we can turn your data into actionable insights.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 text-base font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
        </div>

        <div className="border-t border-pink-800/30 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-light mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Lora</h3>
              <p className="text-gray-300">Data Scientist & AI/ML Engineer</p>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: FileText, href: "#", label: "Resume" },
                { icon: Mail, href: "#", label: "Email" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-lg border border-pink-600/30 bg-gradient-to-br from-pink-800/20 to-purple-800/20 flex items-center justify-center hover:border-pink-400 hover:bg-gradient-to-br hover:from-pink-700/30 hover:to-purple-700/30 transition-all duration-300 shadow-lg hover:shadow-pink-500/20"
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-pink-300 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-pink-800/30">
            <p className="text-gray-400">
              © 2024 Lora. Building the future with data and AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
