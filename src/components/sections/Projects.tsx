"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { TiltCard } from "@/components/TiltCard";

const placeholderProjects = [
  {
    title: "Project in Progress",
    description: "Currently working on a full-stack web application using Next.js and Node.js. It features real-time updates and a modern UI.",
    tech: ["Next.js", "Node.js", "Tailwind", "Socket.io"],
    githubStatus: "disabled",
    liveStatus: "disabled"
  },
  {
    title: "Coming Soon",
    description: "Planning a comprehensive project that involves cloud deployment and microservices architecture. Still in the design phase.",
    tech: ["AWS", "Docker", "Microservices"],
    githubStatus: "disabled",
    liveStatus: "disabled"
  },
  {
    title: "Idea Formulation",
    description: "Brainstorming a cybersecurity-related tool for log analysis and threat detection. Trying to finalize the exact feature specs.",
    tech: ["Python", "Shell", "Security"],
    githubStatus: "disabled",
    liveStatus: "disabled"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto md:mx-0"></div>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">
            A showcase of my recent work, side projects, and learning experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="glass rounded-2xl overflow-hidden flex flex-col group h-full">
                  {/* Image Placeholder */}
              <div className="h-48 bg-accent/50 w-full relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="text-muted-foreground font-medium uppercase tracking-widest text-sm opacity-50">Image Placeholder</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <button 
                    disabled={project.githubStatus === "disabled"}
                    className="p-2 rounded-full bg-accent text-muted-foreground opacity-50 cursor-not-allowed flex items-center justify-center transition-colors"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </button>
                  <button 
                    disabled={project.liveStatus === "disabled"}
                    className="p-2 rounded-full bg-accent text-muted-foreground opacity-50 cursor-not-allowed flex items-center justify-center transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
