
import Hero from "../components/Hero";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-black dark:bg-black transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <Services />
      <Experience />
      <Footer />
    </div>
  );
};

export default Index;
