import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const ROLES = ["AI Engineer", "Full Stack Developer", "Data Analyst"];

function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = ROLES[i];
    const speed = del ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, del, i]);
  return text;
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  const typing = useTyping();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Subtle radial spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--foreground) 6%, transparent) 0%, transparent 70%)",
        }}
      />
      {/* Fine grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          color: "var(--foreground)",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative w-full max-w-5xl flex flex-col items-center text-center">
        {/* Status Badge */}
        <motion.div variants={reveal} initial="hidden" animate="show" custom={0.1}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="mt-8 text-balance text-6xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl"
        >
          Aaryan Chandale
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="mt-5 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground"
        >
          B.Tech Computer Science Student
        </motion.p>

        {/* Typing role */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="mt-6 flex h-12 items-center justify-center text-2xl font-medium text-muted-foreground sm:text-3xl"
        >
          <span>I'm a&nbsp;</span>
          <span className="inline-flex min-w-[14ch] justify-start text-left font-semibold text-foreground">
            {typing}
            <span className="ml-0.5 inline-block h-[1.1em] w-[2px] -translate-y-[2px] animate-pulse bg-foreground align-middle" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Building intelligent software with Artificial Intelligence,
          Machine Learning, and modern web technologies.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={0.6}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background shadow-xl shadow-foreground/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-foreground/20 active:scale-[0.98]"
          >
            View Selected Works
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-secondary"
          >
            <Mail className="h-4 w-4" />
            Get in Touch
          </a>
        </motion.div>

        {/* Micro footer */}
        <motion.p
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={0.8}
          className="mt-20 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/70"
        >
          AI · Machine Learning · Full Stack · Data
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
