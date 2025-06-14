
import { Mail, Linkedin, Twitter, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 tracking-tight">
            Ready to Create Something <span className="font-medium text-blue-400">Amazing</span>?
          </h2>
          <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Let's collaborate and bring your vision to life with exceptional design 
            that users will love and remember.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-base font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
        </div>

        <div className="border-t border-gray-800 pt-16">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-light mb-2">Lora</h3>
              <p className="text-gray-400 font-light">UX Designer & Creative Strategist</p>
            </div>

            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 border border-gray-700 hover:border-blue-600"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 border border-gray-700 hover:border-blue-600"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 border border-gray-700 hover:border-blue-600"
              >
                <Dribbble className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 border border-gray-700 hover:border-blue-600"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-gray-800">
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
