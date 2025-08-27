import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Github, 
  MapPin, 
  Calendar, 
  ExternalLink,
  MessageCircle,
  Phone,
  Linkedin
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "trtmutsaers@gmail.com",
    description: "Best way to reach me for questions or discussions",
    href: "mailto:trtmutsaers@gmail.com",
    primary: true
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Netherlands",
    description: "Currently studying IT System Engineering",
    href: null,
    primary: false
  }
];

const availability = [
  "Learning opportunities",
  "Technical discussions", 
  "Cybersecurity questions",
  "Academic collaboration",
  "Project feedback"
];

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for discussions about cybersecurity, technology, or any questions about my projects
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="animate-slide-in glass-card p-6 hover:shadow-[var(--shadow-float)] transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-6">
                  <div className={`p-4 rounded-xl ${method.primary ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'} transition-colors`}>
                    <method.icon className={`w-6 h-6 ${method.primary ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {method.title}
                      </h3>
                      {method.primary && (
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          Primary
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-foreground font-medium mb-1">{method.value}</p>
                    <p className="text-muted-foreground text-sm">{method.description}</p>
                  </div>
                  
                  {method.href && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group/btn hover:bg-primary/10 transition-all duration-300"
                      asChild
                    >
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Availability & Quick Info */}
          <div className="space-y-6 h-fit">
            {/* Current Availability */}
            <div className="animate-fade-in glass-card p-6" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-400/10">
                  <Calendar className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-lg font-bold">Open To</h3>
              </div>
              
              <div className="space-y-3">
                {availability.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-400 group-hover:scale-125 transition-transform" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="animate-fade-in glass-card p-6" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-lg font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Response Time</span>
                  <Badge variant="outline" className="bg-green-400/10 text-green-400 border-green-400/20">
                    Within 24h
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Time Zone</span>
                  <Badge variant="outline">CET (UTC+1)</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Languages</span>
                  <Badge variant="outline">NL / EN</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current Status</span>
                  <Badge variant="outline" className="bg-blue-400/10 text-blue-400 border-blue-400/20">
                    Student
                  </Badge>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="animate-fade-in glass-card p-6 text-center w-full" style={{ animationDelay: '0.8s' }}>
              <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 w-fit mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">Ready to Start?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Feel free to reach out with any questions or if you'd like to discuss technology and cybersecurity.
              </p>
              <Button 
                className="w-full glass-card glow hover:shadow-[var(--shadow-float)] transition-all duration-300"
                asChild
              >
                <a href="mailto:trtmutsaers@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;