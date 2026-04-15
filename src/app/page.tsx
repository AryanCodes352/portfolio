import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Navigation } from "@/components/Navigation";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Footer } from "@/components/Footer";

// Sections
import { Hero } from "@/components/sections/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { LearningTimeline } from "@/components/sections/LearningTimeline";
import { MiniStats } from "@/components/sections/MiniStats";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Hobbies } from "@/components/sections/Hobbies";
import { SocialLinks } from "@/components/sections/SocialLinks";

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <CustomCursor />
      <ScrollProgressBar />
      <Navigation />
      
      <main className="flex flex-col min-h-screen">
        <Hero />
        <AboutMe />
        <MiniStats />
        <Skills />
        <Projects />
        <LearningTimeline />
        <GitHubActivity />
        <Hobbies />
        <SocialLinks />
      </main>

      <Footer />
    </>
  );
}
