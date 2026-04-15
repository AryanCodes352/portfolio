"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, BrainCircuit, Blocks } from "lucide-react";

const AnimatedCounter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration * 1000) {
        const nextValue = Math.min(Math.floor((progress / (duration * 1000)) * (to - from) + from), to);
        setCount(nextValue);
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span ref={ref}>{count}</span>;
};

export const MiniStats = () => {
  const stats = [
    {
      label: "LeetCode Solved",
      value: 21,
      icon: Code2,
      isText: false,
    },
    {
      label: "GFG Solved",
      value: 20,
      icon: BrainCircuit,
      isText: false,
    },
    {
      label: "Projects",
      value: "Coming Soon",
      icon: Blocks,
      isText: true,
    },
  ];

  return (
    <section className="py-12 relative z-10 -mt-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex items-center justify-between group hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <p className="text-muted-foreground text-sm font-medium mb-1 group-hover:text-foreground transition-colors">
                  {stat.label}
                </p>
                <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  {stat.isText ? (
                    <span className="text-xl md:text-2xl">{stat.value}</span>
                  ) : (
                    <span>
                      <AnimatedCounter from={0} to={stat.value as number} />+
                    </span>
                  )}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-accent text-sky-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
