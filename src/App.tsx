import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Stack } from "@/components/portfolio/Stack";
import { AIEngineering } from "@/components/portfolio/AIEngineering";
import { Contact } from "@/components/portfolio/Contact";

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <AIEngineering />
        <Contact />
      </main>
    </div>
  );
}