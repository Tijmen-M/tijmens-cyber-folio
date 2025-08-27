import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const educationData = [
  {
    title: "IT Technician",
    institution: "Yonder",
    period: "2023 - Present",
    status: "In Progress",
    type: "Vocational Diploma (MBO4)",
    description: "Practical IT program covering basic system administration, hardware troubleshooting, and network fundamentals.",
    highlights: [
      "System Administration Basics",
      "Hardware & Software Support", 
      "Network Configuration",
      "User Support & Troubleshooting"
    ]
  },
  {
    title: "IT Support Technician",
    institution: "Yonder", 
    period: "2023",
    status: "Completed",
    type: "Professional Certificate",
    description: "Foundational program covering technical support, troubleshooting, and system maintenance.",
    highlights: [
      "Hardware & Software Troubleshooting",
      "Customer Service Excellence",
      "System Diagnostics",
      "Technical Documentation"
    ]
  }
];

const certifications = [
  "Linux Basics",
  "Network Fundamentals",
  "Hardware Troubleshooting",
  "System Maintenance"
];

const Education = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building foundational IT skills through vocational education and hands-on learning
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Cards */}
          <div className="lg:col-span-2 space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="animate-slide-in glass-card p-8 hover:shadow-[var(--shadow-float)] transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {edu.title}
                        </h3>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant={edu.status === "Completed" ? "default" : "secondary"}>
                          {edu.status}
                        </Badge>
                        <Badge variant="outline">{edu.type}</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                        Key Areas of Study
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span className="text-foreground/80">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications & Skills Sidebar */}
          <div className="space-y-8">
            {/* Online Learning */}
            <div className="animate-fade-in glass-card p-6" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold">Self-Directed Learning</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Learning IT fundamentals through online courses and practical projects.
              </p>
              
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors group"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Focus Areas */}
            <div className="animate-fade-in glass-card p-6" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-lg font-bold mb-6">Current Focus</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                  <span className="text-sm">Network Administration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse-glow" style={{ animationDelay: '1s' }} />
                  <span className="text-sm">System Troubleshooting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary-glow animate-pulse-glow" style={{ animationDelay: '2s' }} />
                  <span className="text-sm">Hardware Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;