"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Terminal, Cpu, Layers, Globe } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Floating Aesthetic Tech Icons */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
        {[
          { Icon: Code, top: "20%", left: "15%", delay: 0 },
          { Icon: Terminal, top: "65%", left: "12%", delay: 1.5 },
          { Icon: Cpu, top: "25%", left: "85%", delay: 0.5 },
          { Icon: Layers, top: "70%", left: "82%", delay: 2 },
          { Icon: Globe, top: "15%", left: "70%", delay: 1 },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute w-12 h-12 md:w-16 md:h-16 rounded-2xl glass flex items-center justify-center text-primary/70 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
            style={{ top: item.top, left: item.left }}
            animate={{
              y: ["0px", "-30px", "0px"],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <item.Icon className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-sky-400 to-teal-300 mb-8 shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden border-4 border-background">
              {/* Optional: Add a real image here later */}
              <div className="w-full h-full bg-accent flex items-center justify-center text-5xl lg:text-6xl font-bold text-muted-foreground">
                A
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-4 tracking-tight">
              Hi, I&apos;m <span className="text-gradient">Aryan</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              B.Tech CSE Student <span className="text-primary mx-2">|</span> Future Software Engineer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#skills"
              className="px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold flex items-center justify-center gap-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              Explore Skills
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
