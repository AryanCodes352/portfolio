"use client";

import { motion } from "framer-motion";
import { User, Calendar, GraduationCap, BookOpen, Clock } from "lucide-react";

export const AboutMe = () => {
  const details = [
    { icon: User, label: "Name", value: "Aryan" },
    { icon: Calendar, label: "Age", value: "20" },
    { icon: GraduationCap, label: "University", value: "Abdul Kalam Technical University" },
    { icon: BookOpen, label: "Course", value: "B.Tech CSE" },
    { icon: Clock, label: "Year", value: "2nd Year" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-teal-300 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-accent text-sky-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium mb-1">
                  {item.label}
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
