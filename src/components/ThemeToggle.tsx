
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme as 'light' | 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full glass-card border border-white/20 hover:border-orange-400/50 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 group"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-gray-300 group-hover:text-orange-400 transition-colors duration-300" />
      ) : (
        <Sun className="h-5 w-5 text-gray-300 group-hover:text-orange-400 transition-colors duration-300" />
      )}
    </Button>
  );
};

export default ThemeToggle;
