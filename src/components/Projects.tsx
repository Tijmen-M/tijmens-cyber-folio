import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Code, Globe } from "lucide-react";

const projects = [
  {
    title: "Flipper Zero Experimentation",
    description: "Pentesting multitool experimentation with various firmwares and custom code implementations for security research and learning.",
    technologies: ["Hardware Hacking", "Firmware", "RF Testing", "Security Research"],
    type: "Hardware Security",
    status: "Ongoing Learning",
    features: [
      "Custom Firmware Testing",
      "RF Signal Analysis",
      "Security Protocol Testing",
      "Hardware Exploitation"
    ]
  },
  {
    title: "Bjorn the Cyberviking",
    description: "Portable vulnerability scanner utilizing various nmap port scanning techniques and protocol brute force capabilities for network security assessment.",
    technologies: ["Network Security", "Port Scanning", "Protocol Analysis", "Linux"],
    type: "Security Tool",
    status: "Active Project",
    features: [
      "Network Vulnerability Scanning",
      "Protocol Brute Force Testing",
      "Automated Security Assessment",
      "Custom Reporting System"
    ]
  },
  {
    title: "ESP32 Security Projects",
    description: "Microcontroller projects ranging from simple connectivity solutions to WiFi security testing and monitoring tools.",
    technologies: ["IoT Security", "WiFi Testing", "Microcontrollers", "Embedded Systems"],
    type: "Hardware Development",
    status: "Multiple Projects",
    features: [
      "WiFi Security Testing",
      "Custom Hardware Integration",
      "Network Monitoring Tools",
      "IoT Security Research"
    ]
  },
  {
    title: "Pwnagotchi Customization",
    description: "AI-powered WiFi security tool running on Raspberry Pi Zero with custom plugins and configurations for network security research.",
    technologies: ["AI/ML", "WiFi Security", "Python", "Raspberry Pi"],
    type: "Security Research",
    status: "Custom Build",
    features: [
      "Custom Plugin Development",
      "WiFi Handshake Capture",
      "Network Security Analysis",
      "Hardware Customization"
    ]
  },
  {
    title: "Self-Hosted Infrastructure",
    description: "Personal website hosting and infrastructure management using Raspberry Pi with custom security configurations and domain management.",
    technologies: ["System Administration", "Web Hosting", "Network Security", "Linux"],
    type: "Infrastructure",
    status: "Live Production",
    url: "https://tijmenmutsaers.com",
    features: [
      "Custom Web Server Configuration",
      "Security Hardening & Firewall",
      "Domain & SSL Management",
      "Self-Hosted Services"
    ]
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my cybersecurity and hardware projects focusing on penetration testing, network security, and system administration
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in glass-card group hover:shadow-[var(--shadow-float)] transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {project.type === "Hardware Security" && <Code className="w-6 h-6 text-primary" />}
                    {project.type === "Security Tool" && <Code className="w-6 h-6 text-primary" />}
                    {project.type === "Hardware Development" && <Globe className="w-6 h-6 text-primary" />}
                    {project.type === "Security Research" && <Code className="w-6 h-6 text-primary" />}
                    {project.type === "Infrastructure" && <ExternalLink className="w-6 h-6 text-primary" />}
                  </div>
                  <Badge 
                    variant={project.status === "Live Production" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <CardTitle className="group-hover:text-primary transition-colors text-lg leading-tight">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Features */}
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs bg-accent/10 border-accent/20 text-accent hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                {project.url && (
                  <div className="pt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full group/btn hover:bg-primary/10 transition-all duration-300"
                      asChild
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Visit Project
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-6">
            Interested in discussing these projects or collaboration opportunities?
          </p>
          <Button variant="outline" size="lg" className="glass-card group hover:bg-primary/10 transition-all duration-300" asChild>
            <a href="mailto:trtmutsaers@gmail.com">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Get In Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;