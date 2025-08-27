import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "IT Technician",
    company: "Zinkunie",
    location: "Netherlands", 
    period: "Dec 2024 - Present",
    type: "Technical Support",
    responsibilities: [
      "Advanced troubleshooting of hardware and software issues",
      "Managing network configurations and system deployments",
      "Training users on technical systems and best practices"
    ],
    technologies: ["System Administration", "Network Management", "Hardware Support"]
  },
  {
    title: "Helpdesk Technician",
    company: "Yonder",
    location: "Netherlands",
    period: "2022 - 2023",
    type: "Technical Support",
    responsibilities: [
      "Designing user guides and instructional materials for internal services",
      "Monitoring user accounts and ensuring system efficiency",
      "Resolving ongoing technical problems for users efficiently"
    ],
    technologies: ["Technical Support", "Documentation", "System Monitoring"]
  },
  {
    title: "Server & Kitchen Staff",
    company: "Multiple Restaurants",
    location: "Netherlands",
    period: "Apr 2020 - Present",
    type: "Hospitality",
    responsibilities: [
      "Working long hours while maintaining high service standards",
      "Managing multiple tables in a fast-paced environment",
      "Delivering exceptional customer service to guests"
    ],
    technologies: ["Customer Service", "Team Collaboration", "Time Management"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learning through various roles while pursuing my studies
          </p>
        </div>
        
        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="animate-slide-in glass-card p-8 hover:shadow-[var(--shadow-float)] transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Column - Main Info */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  {/* Meta Information */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  {/* Responsibilities */}
                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/80">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Right Column - Technologies */}
                <div className="lg:w-80 flex flex-col justify-start">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;