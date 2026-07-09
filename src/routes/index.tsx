import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { ScrollProgress, ScrollToTop } from "@/components/scroll-utils";
import { Loader } from "@/components/loader";
import { CustomCursor } from "@/components/custom-cursor";
import { ContactForm } from "@/components/contact-form";
import { useLenis } from "@/hooks/use-lenis";

const About = lazy(() => import("@/components/sections/about").then((m) => ({ default: m.About })));
const Education = lazy(() =>
  import("@/components/sections/education").then((m) => ({ default: m.Education }))
);
const Experience = lazy(() =>
  import("@/components/sections/experience").then((m) => ({ default: m.Experience }))
);
const Skills = lazy(() => import("@/components/sections/skills").then((m) => ({ default: m.Skills })));
const Projects = lazy(() =>
  import("@/components/sections/projects").then((m) => ({ default: m.Projects }))
);
const Contact = lazy(() =>
  import("@/components/sections/contact").then((m) => ({ default: m.Contact }))
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aaryan Chandale — AI Engineer & Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Aaryan Chandale. B.Tech Computer Science student building intelligent software with AI, Machine Learning, and modern web technologies.",
      },
      { property: "og:title", content: "Aaryan Chandale — AI Engineer & Full Stack Developer" },
      {
        property: "og:description",
        content: "AI Engineer · Full Stack Developer · Data Analyst",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  useLenis();

  useEffect(() => {
    // Smooth anchor handling fallback
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Suspense fallback={<div className="h-32" />}>
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        Designed &amp; Developed by{" "}
        <span className="font-medium text-foreground">Aaryan Chandale</span> © 2026
      </footer>
      <ScrollToTop />
    </>
  );
}
