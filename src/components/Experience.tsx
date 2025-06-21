
import { Sparkles } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-32 lg:py-40 px-6 lg:px-12 relative overflow-hidden">
      {/* Floating Magical Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <Sparkles className="absolute top-20 left-20 w-6 h-6 text-orange-400/30 magic-float" />
        <Sparkles className="absolute bottom-32 right-32 w-4 h-4 text-red-400/30 magic-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section is now empty - only contains the floating elements */}
      </div>
    </section>
  );
};

export default Experience;
