import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award, 
  Mail,
  Menu,
  X
} from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "projects", label: "Projects", icon: Code },
  { id: "skills", label: "Skills", icon: Award },
  { id: "contact", label: "Contact", icon: Mail }
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-card shadow-[var(--shadow-float)]' : 'glass-card'
      }`}>
        <div className="flex items-center gap-2 p-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={`relative transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'hover:bg-primary/10 text-muted-foreground hover:text-primary'
              }`}
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.label}
              {activeSection === item.id && (
                <div className="absolute inset-0 rounded-md bg-primary/20 animate-pulse-glow" />
              )}
            </Button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`md:hidden fixed top-6 right-6 z-50 glass-card transition-all duration-300 ${
          isScrolled ? 'shadow-[var(--shadow-float)]' : ''
        } ${
          isMobileMenuOpen ? 'bg-primary text-primary-foreground' : ''
        }`}
      >
        {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </Button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-xl">
          <div className="flex items-center justify-center h-full">
            <div className="glass-card p-6 w-80 max-w-[90vw]">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold gradient-text">Navigation</h3>
              </div>
              <div className="space-y-3">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "default" : "outline"}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full justify-start relative group"
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.label}
                    {activeSection === item.id && (
                      <Badge className="ml-auto bg-primary-glow/20 text-primary-glow border-primary-glow/20">
                        Active
                      </Badge>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Social Links */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        <Button
          variant="outline"
          size="sm"
          className="glass-card w-12 h-12 p-0 group hover:shadow-[var(--shadow-glow)] transition-all duration-300"
          asChild
        >
          <a href="mailto:trtmutsaers@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="glass-card w-12 h-12 p-0 group hover:shadow-[var(--shadow-glow)] transition-all duration-300"
          asChild
        >
          <a href="https://github.com/Tijmen-M" target="_blank" rel="noopener noreferrer">
            <Code className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </Button>
      </div>
    </>
  );
};

export default Navigation;