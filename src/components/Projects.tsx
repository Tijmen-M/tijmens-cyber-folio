import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Globe } from "lucide-react";

const projects = [
  {
    title: "Biography Website Platform",
    description: "A comprehensive web platform for creating and managing personal biography websites with user account management and seamless onboarding.",
    technologies: ["Web Development", "User Management", "Database Design", "API Integration"],
    type: "Web Application",
    status: "Live Production",
    url: "https://biographyon.top",
    features: [
      "User Account Creation & Management",
      "Seamless Onboarding Experience", 
      "Web Integration Development",
      "Customer Support Systems"
    ]
  },
  {
    title: "Penetration Testing Projects",
    description: "Hands-on cybersecurity projects focusing on vulnerability assessment and penetration testing methodologies using various testing frameworks.",
    technologies: ["Penetration Testing", "Vulnerability Assessment", "Linux", "Security Tools"],
    type: "Security Research",
    status: "Ongoing Learning",
    features: [
      "Network Vulnerability Scanning",
      "Web Application Security Testing",
      "Linux System Exploitation",
      "Security Documentation & Reports"
    ]
  },
  {
    title: "Personal Portfolio",
    description: "Modern, responsive portfolio website showcasing professional experience, technical skills, and project work with smooth animations and glassmorphism design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    type: "Frontend Development", 
    status: "Recently Updated",
    features: [
      "Modern Glassmorphism UI",
      "Smooth Animations & Transitions",
      "Fully Responsive Design",
      "Performance Optimized"
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
            A showcase of my technical projects spanning web development, cybersecurity, and system administration
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
                    {project.type === "Web Application" && <Globe className="w-6 h-6 text-primary" />}
                    {project.type === "Security Research" && <Code className="w-6 h-6 text-primary" />}
                    {project.type === "Frontend Development" && <ExternalLink className="w-6 h-6 text-primary" />}
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
                <div className="flex gap-2 pt-2">
                  {project.url && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 group/btn hover:bg-primary/10 transition-all duration-300"
                      asChild
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Visit
                      </a>
                    </Button>
                  )}
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 group/btn hover:bg-primary/10 transition-all duration-300"
                  >
                    <Github className="w-3.5 h-3.5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </div>
          ))}
        </div>
        
        {/* More Projects CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button variant="outline" size="lg" className="glass-card group hover:bg-primary/10 transition-all duration-300">
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;