"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C", proficiency: 90 },
      { name: "C++", proficiency: 85 },
      { name: "Java", proficiency: 80 },
    ],
  },
  {
    category: "Core CS",
    skills: [
      { name: "DSA", proficiency: 80 },
      { name: "OOPS", proficiency: 85 },
      { name: "SQL", proficiency: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "REST API", proficiency: 70 },
      { name: "JWT", proficiency: 75 },
    ],
  },
  {
    category: "Others",
    skills: [
      { name: "Cloud", proficiency: 60 },
      { name: "Cybersecurity", proficiency: 65 },
      { name: "Aptitude", proficiency: 85 },
    ],
  },
];

const SkillRing = ({ percentage }: { percentage: number }) => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
      <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_6px_rgba(56,189,248,0.4)]">
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke="currentColor"
          strokeWidth="3.5"
          fill="transparent"
          className="text-primary/10 dark:text-white/5"
        />
        <motion.circle
          cx="28"
          cy="28"
          r={radius}
          stroke="url(#skill-gradient)"
          strokeWidth="3.5"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="skill-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#5eead4" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute text-[11px] font-bold opacity-90">{percentage}</span>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-accent/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-teal-300 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillsData.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="glass p-8 rounded-3xl h-full flex flex-col">
                  <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-sky-400 rounded-full block shadow-[0_0_10px_rgba(56,189,248,0.5)]"></span>
                    {group.category}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                    {group.skills.map((skill, skillIdx) => (
                      <motion.div 
                        key={skillIdx} 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + skillIdx * 0.1 }}
                        className="flex justify-between items-center gap-4 py-3 pl-6 pr-3 rounded-2xl bg-background/40 border border-border/50 hover:bg-background/80 transition-all duration-300 group cursor-default shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:border-sky-400/40"
                      >
                        <span className="font-semibold text-base md:text-lg font-heading tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all line-clamp-1">
                          {skill.name}
                        </span>
                        <SkillRing percentage={skill.proficiency} />
                      </motion.div>
                    ))}
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
