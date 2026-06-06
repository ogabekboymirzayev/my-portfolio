import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Stack } from "@/components/portfolio/Stack";
import { AIEngineering } from "@/components/portfolio/AIEngineering";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Og'abek Boymirzayev — Fullstack Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Og'abek Boymirzayev — Fullstack Developer & AI Engineer based in Tashkent. Building full-stack web apps with AI integration.",
      },
      {
        property: "og:title",
        content: "Og'abek Boymirzayev — Fullstack Developer & AI Engineer",
      },
      {
        property: "og:description",
        content:
          "Fullstack developer building real client products and integrating AI into the web.",
      },
    ],
  }),
  component: Index,
});

function Index() {
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
