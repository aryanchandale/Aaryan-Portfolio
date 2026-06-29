import { motion } from "framer-motion";
import { Github, ArrowUpRight, Sparkles, GraduationCap, ShieldCheck } from "lucide-react";
import { Section, SectionTitle } from "../section";

const PROJECTS = [
  {
    title: "Campus Connect",
    subtitle: "Multilingual AI-powered Campus Information Chatbot",
    description:
      "An AI-powered multilingual chatbot giving students instant 24/7 access to campus information including admissions, academics, events, and university services.",
    features: [
      "Multilingual support",
      "AI-powered conversational interface",
      "24/7 automated assistance",
      "Real-time responses",
      "User-friendly interface",
    ],
    href: "https://github.com/aryanchandale/campus-connect-chat",
    icon: Sparkles,
    accent: "from-sky-400/40 to-indigo-500/20",
  },
  {
    title: "EduGrade AI",
    subtitle: "AI-powered Assignment Evaluation",
    description:
      "An AI-powered assignment evaluation platform that automates grading and provides intelligent feedback, helping educators assess submissions efficiently and consistently.",
    features: [
      "Automated assignment evaluation",
      "AI-generated feedback",
      "Intelligent grading",
      "Faster assessments",
    ],
    href: "https://github.com/aryanchandale/Assignment-evaluator",
    icon: GraduationCap,
    accent: "from-emerald-400/40 to-teal-500/20",
  },
  {
    title: "Verichain",
    subtitle: "Blockchain Based Voting Application",
    description:
      "A secure and transparent online voting system using Hyperledger Blockchain to ensure tamper-proof elections.",
    features: [
      "Secure digital voting",
      "Blockchain ledger",
      "Transparent elections",
      "Voter authentication",
      "Immutable records",
    ],
    href: "#",
    icon: ShieldCheck,
    accent: "from-fuchsia-400/40 to-purple-500/20",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionTitle eyebrow="Featured Work" title="Projects I'm proud of." />
      <div className="mt-16 grid gap-6 md:gap-8 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className={`group relative flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-shadow hover:shadow-2xl ${
              i === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div
              className={`relative h-56 overflow-hidden bg-gradient-to-br ${p.accent} sm:h-64`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_60%)]" />
              <motion.div
                aria-hidden
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/30"
              />
              <div className="absolute left-8 top-8">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/90 text-foreground shadow-lg backdrop-blur">
                  <p.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="absolute bottom-6 left-8 right-8">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/70">
                  {p.subtitle}
                </div>
                <h3 className="mt-1 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  {p.title}
                </h3>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-foreground/80">
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-highlight" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
