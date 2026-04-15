"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/Icons";

export const SocialLinks = () => {
  const socials = [
    {
      name: "LinkedIn",
      username: "csaryan",
      icon: LinkedinIcon,
      url: "https://linkedin.com/in/csaryan",
      color: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
    },
    {
      name: "GitHub",
      username: "AryanCodes352",
      icon: GithubIcon,
      url: "https://github.com/AryanCodes352",
      color: "hover:bg-[#24292e] hover:border-[#24292e]",
    },
    {
      name: "Instagram",
      username: "io_aryan",
      icon: InstagramIcon,
      url: "https://instagram.com/io_aryan",
      color: "hover:bg-gradient-to-tr hover:from-[#fd5949] hover:to-[#d6249f] hover:border-transparent",
    },
    {
      name: "Email",
      username: "officialaryan1194@gmail.com",
      icon: Mail,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=officialaryan1194@gmail.com",
      color: "hover:bg-primary hover:border-primary",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="glass p-10 md:p-16 rounded-3xl text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 relative z-10">
            👉 Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-10 relative z-10 max-w-lg mx-auto">
            Whether you have a question, want to collaborate on a project, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm transition-all duration-300 group ${social.color}`}
              >
                <social.icon className="w-8 h-8 mb-3 text-muted-foreground group-hover:text-white transition-colors" />
                <span className="font-medium text-sm md:text-base group-hover:text-white transition-colors">
                  {social.name}
                </span>
                <span className="text-xs text-muted-foreground opacity-70 group-hover:text-white/80 transition-colors mt-1">
                  @{social.username}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
