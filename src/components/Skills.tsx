import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Terminal, 
  Globe, 
  Database, 
  Code, 
  Server,
  Lock,
  Cpu,
  Network,
  Bug
} from "lucide-react";

const skillCategories = [
  {
    title: "Cybersecurity",
    icon: Shield,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    skills: [
      { name: "Penetration Testing", level: 75, description: "Vulnerability assessment and ethical hacking" },
      { name: "Network Security", level: 70, description: "Firewall configuration and monitoring" },
      { name: "Security Auditing", level: 65, description: "System security evaluation" },
      { name: "Incident Response", level: 60, description: "Security breach handling" }
    ]
  },
  {
    title: "System Administration", 
    icon: Server,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    skills: [
      { name: "Linux Administration", level: 80, description: "Server management and configuration" },
      { name: "System Monitoring", level: 75, description: "Performance and health tracking" },
      { name: "Troubleshooting", level: 85, description: "Problem diagnosis and resolution" },
      { name: "User Management", level: 70, description: "Account and permission handling" }
    ]
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "text-green-400", 
    bgColor: "bg-green-400/10",
    skills: [
      { name: "Frontend Development", level: 25, description: "React, HTML, CSS, JavaScript - beginner level" },
      { name: "User Experience", level: 20, description: "Basic interface design knowledge" },
      { name: "API Integration", level: 30, description: "Learning third-party service integration" },
      { name: "Responsive Design", level: 25, description: "Basic mobile-first development" }
    ]
  },
  {
    title: "Technical Skills",
    icon: Code,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10", 
    skills: [
      { name: "Documentation", level: 90, description: "Technical writing and guides" },
      { name: "Problem Solving", level: 85, description: "Analytical thinking and solutions" },
      { name: "Customer Support", level: 80, description: "User assistance and communication" },
      { name: "Project Management", level: 65, description: "Task coordination and planning" }
    ]
  }
];

const tools = [
  "Linux Distributions", "Penetration Testing Tools", "Network Analyzers", 
  "Security Scanners", "System Monitoring", "Web Technologies",
  "Database Management", "Version Control", "Technical Documentation"
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and areas of specialization
          </p>
        </div>
        
        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-slide-in glass-card p-6 hover:shadow-[var(--shadow-float)] transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${category.bgColor} group-hover:scale-110 transition-transform`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-foreground">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-background/50"
                    />
                  </div>
                ))}
              </CardContent>
            </div>
          ))}
        </div>
        
        {/* Tools & Technologies */}
        <div className="animate-fade-in glass-card p-8" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-accent/10">
              <Cpu className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Tools & Technologies</h3>
              <p className="text-muted-foreground">Technologies and tools I work with regularly</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, idx) => (
              <Badge 
                key={idx} 
                variant="outline" 
                className="px-4 py-2 bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Continuous Learning */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 w-fit mx-auto mb-6">
              <Bug className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground">
              I'm constantly expanding my skillset through online courses, practical projects, 
              and staying up-to-date with the latest cybersecurity trends and technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;