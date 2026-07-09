import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
      <footer className="border-t border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:py-28 md:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-highlight"
            >
              Get in touch
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            >
              Let's work together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
            >
              Have a project in mind or just want to say hello? Drop a message and I'll respond as soon as I can.
            </motion.p>
          </div>
          <div className="mt-14">
            <ContactForm />
          </div>
        </div>
        <div className="border-t border-border py-10 text-center text-xs text-muted-foreground">
          Designed &amp; Developed by{" "}
          <span className="font-medium text-foreground">Aaryan Chandale</span> © 2026
        </div>
      </footer>
      <ScrollToTop />
    </>
  );
}
