
import Hero from "../components/Hero";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Hero />
      <Services />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
