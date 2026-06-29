import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Section, SectionTitle } from "../section";

const LINKS = [
  {
    icon: Github,
    label: "GitHub",
    value: "aryanchandale",
    href: "https://github.com/aryanchandale",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "aaryan-chandale",
    href: "https://www.linkedin.com/in/aaryan-chandale-69b4a2222/",
  },
  {
    icon: Mail,
    label: "Email",
    value: "aryanchandale152@gmail.com",
    href: "mailto:aryanchandale152@gmail.com",
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionTitle
        eyebrow="Contact"
        title="Let's build something great."
        subtitle="Open to internships, full-time roles, and collaborations. Reach out — I'll get back quickly."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {LINKS.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer noopener"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative flex items-center justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-xl"
          >
            <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-highlight/10 to-transparent transition-all duration-500 group-hover:h-full" />
            <div className="relative flex min-w-0 items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                <l.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {l.label}
                </div>
                <div className="truncate text-sm font-medium">{l.value}</div>
              </div>
            </div>
            <ArrowUpRight className="relative h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
