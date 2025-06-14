
import Hero from "../components/Hero";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <ThemeToggle />
      <Hero />
      <Services />
      <Experience />
      <Footer />
    </div>
  );
};

export default Index;
