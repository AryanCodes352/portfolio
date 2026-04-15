"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Swords } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

export const Hobbies = () => {
  const hobbies = [
    {
      title: "Chess",
      icon: Swords,
      desc: "Strategic thinking and pattern recognition.",
    },
    {
      title: "Tech Videos",
      icon: MonitorPlay,
      desc: "Staying updated with the latest in software and tech.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-accent/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Beyond <span className="text-gradient">Code</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="glass p-8 rounded-3xl flex items-center gap-6 group transition-all duration-300 cursor-default h-full">
                  <div className="p-4 rounded-2xl bg-gradient-to-tr from-indigo-500 via-sky-400 to-teal-300 text-white shadow-lg group-hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-shadow">
                    <hobby.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-1">{hobby.title}</h3>
                    <p className="text-muted-foreground text-sm">{hobby.desc}</p>
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
