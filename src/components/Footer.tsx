
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="text-white py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Interested in collaborating on data science projects or AI/ML solutions? 
            I'd love to discuss how we can turn your data into actionable insights.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium rounded-lg transition-colors"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-light mb-2 text-white">Lora</h3>
              <p className="text-gray-400">Data Scientist & AI/ML Engineer</p>
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
                  className="w-12 h-12 rounded-lg border border-gray-600 bg-gray-800/50 flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-500">
              © 2024 Lora. Building the future with data and AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
