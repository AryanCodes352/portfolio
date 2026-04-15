"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineData = [
  { title: "Learned C", status: "completed" },
  { title: "Learned C++ / Java / OOPS", status: "completed" },
  { title: "Learned Cybersecurity Basics", status: "completed" },
  { title: "Learning DSA", status: "current" },
  { title: "Learning SQL", status: "current" },
  { title: "Learning Backend", status: "current" },
  { title: "Cloud Deployment", status: "future" },
  { title: "System Design", status: "future" },
  { title: "Computer Networks", status: "future" },
  { title: "DBMS", status: "future" },
];

export const LearningTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-accent/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Learning <span className="text-gradient">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative" ref={containerRef}>
          {/* Vertical Line Background */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-1 bg-border/50 transform md:-translate-x-1/2 rounded-full z-0"></div>
          
          {/* Vertical Animated Progress Line */}
          <motion.div 
            className="absolute left-[20px] md:left-1/2 top-4 w-1 bg-gradient-to-b from-indigo-500 via-sky-400 to-teal-300 transform md:-translate-x-1/2 rounded-full z-0 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
            style={{ height: lineHeight }}
          />
          
          <div className="space-y-12 relative z-10 pt-4 pb-4">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              let iconColor = "text-muted-foreground";
              let badgeColor = "bg-accent/50 text-muted-foreground";
              let borderColor = "border-border";

              if (item.status === "completed") {
                iconColor = "text-primary";
                badgeColor = "bg-primary/20 text-primary";
                borderColor = "border-primary/50";
              } else if (item.status === "current") {
                iconColor = "text-sky-400";
                badgeColor = "bg-sky-500/20 text-sky-400";
                borderColor = "border-sky-400";
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "flex flex-col md:flex-row items-start md:items-center relative",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Content Box */}
                  <div className={cn(
                    "pl-[60px] md:pl-0 w-full md:w-1/2",
                    isEven ? "md:pl-12" : "md:pr-12 text-left md:text-right"
                  )}>
                    <div className={cn(
                      "glass p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300 border-l-4 md:border-l-[1px] md:border-t-4 bg-background/80 backdrop-blur-xl",
                      item.status === "current" ? "border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.2)]" : 
                      item.status === "completed" ? "border-primary shadow-[0_0_15px_rgba(99,102,241,0.1)]" : "border-border"
                    )}>
                      <span className={cn(
                        "inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3",
                        badgeColor
                      )}>
                        {item.status}
                      </span>
                      <h3 className="text-xl font-heading font-medium">{item.title}</h3>
                    </div>
                  </div>

                  {/* Icon Indicator */}
                  <div className="absolute left-[20px] md:left-1/2 top-4 md:top-1/2 transform md:-translate-y-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 flex items-center justify-center z-10 box-border" style={{ borderColor: 'var(--background)' }}>
                    <div className={cn("w-full h-full rounded-full flex items-center justify-center border-2 bg-background", borderColor, item.status === "current" && "bg-sky-400/20 animate-pulse border-sky-400")}>
                       {item.status === "completed" && <CheckCircle2 className={cn("w-5 h-5", iconColor)} />}
                       {item.status === "current" && <div className={cn("w-2.5 h-2.5 rounded-full bg-sky-400")} />}
                       {item.status === "future" && <Clock className={cn("w-4 h-4 opacity-50", iconColor)} />}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
