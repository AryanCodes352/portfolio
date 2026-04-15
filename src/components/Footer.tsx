import { Heart } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/Icons";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-heading font-bold mb-6 text-gradient">
          Aryan.
        </h3>
        
        <div className="flex gap-6 mb-8">
          <a
            href="https://github.com/AryanCodes352"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent hover:bg-primary hover:text-white transition-all duration-300"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/csaryan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent hover:bg-primary hover:text-white transition-all duration-300"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/io_aryan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent hover:bg-primary hover:text-white transition-all duration-300"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-muted-foreground flex items-center gap-1 mt-4">
          Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Aryan
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
