"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/Icons";

export const GitHubActivity = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GithubIcon className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              GitHub <span className="text-gradient">Activity</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-3xl flex flex-col items-center justify-center min-h-[300px] border border-dashed border-border"
        >
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 text-muted-foreground">
            <GithubIcon className="w-8 h-8 opacity-50" />
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-semibold mb-2 text-center">
            GitHub activity will be displayed here
          </h3>
          <p className="text-muted-foreground text-center max-w-md">
            Integration for the GitHub contribution graph is planned for the near future to showcase regular coding habits.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
