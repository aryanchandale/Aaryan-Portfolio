import { motion } from "framer-motion";
import { Brain, Code2, BarChart3, Server } from "lucide-react";
import { Section, SectionTitle } from "../section";

const FOCUS = [
  { icon: Brain, label: "AI / ML", desc: "Building intelligent, predictive systems." },
  { icon: Code2, label: "Full Stack", desc: "End-to-end web product engineering." },
  { icon: BarChart3, label: "Data Analytics", desc: "Turning raw data into insight." },
  { icon: Server, label: "Backend Dev", desc: "Robust APIs, databases, infra." },
];

export function About() {
  return (
    <Section id="about">
      <SectionTitle eyebrow="About" title="Curious by default. Engineer by craft." />
      <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          <p>
            I am a highly motivated and adaptable Computer Science student pursuing a{" "}
            <span className="text-foreground">B.Tech in Computer Science and Engineering</span> at
            MIT ADT University. I&apos;m passionate about learning new technologies, solving
            real-world problems, and continuously improving my technical skills.
          </p>
          <p>
            I consistently meet deadlines, approach every task with sincerity and dedication, and
            enjoy taking on new challenges while collaborating with others.
          </p>
          <p>
            My career interests include{" "}
            <span className="text-foreground">Full Stack Development, Data Analytics, and AI</span>,
            and I aspire to build innovative, impactful solutions while growing as a software
            professional.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {FOCUS.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-highlight/0 via-highlight/0 to-highlight/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-secondary text-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-lg font-semibold">{f.label}</div>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
