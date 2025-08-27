import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-xl floating" />
      <div className="absolute bottom-32 right-32 w-48 h-48 rounded-full bg-accent/20 blur-xl floating" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-primary-glow/30 blur-lg floating" style={{ animationDelay: '4s' }} />
      
      {/* Profile Photo */}
      <div className="absolute top-8 right-8 z-10 hidden lg:block animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-white/10 hover:scale-105 transition-transform duration-300">
          <img 
            src="/lovable-uploads/ec0c1166-01e4-417c-89a3-24a47c93dd34.png" 
            alt="Tijmen Mutsaers in autumn forest"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Name & Title */}
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Tijmen Mutsaers
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            IT Systems Engineering Student
          </h2>
        </div>
        
        {/* Description */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            A curious 20-year-old Dutch student exploring cybersecurity and system administration. 
            Learning through hands-on projects and experiments with various technologies.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="glass-card glow hover:shadow-[var(--shadow-float)] transition-all duration-300" asChild>
            <a href="mailto:trtmutsaers@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
          </Button>
        </div>
        
        {/* Contact Info */}
        <div className="animate-fade-in flex justify-center items-center text-muted-foreground" style={{ animationDelay: '0.6s' }}>
          <a 
            href="mailto:trtmutsaers@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            trtmutsaers@gmail.com
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;