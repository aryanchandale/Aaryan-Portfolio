import { motion } from "framer-motion";
import { Section, SectionTitle } from "../section";
import {
  Code, Globe, Server, Database, Brain, Wrench, Users,
} from "lucide-react";

const GROUPS = [
  { icon: Code, title: "Languages", items: ["Java", "Python", "SQL"] },
  { icon: Globe, title: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
  { icon: Server, title: "Backend", items: ["Node.js", "FastAPI", "Flask"] },
  { icon: Database, title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { icon: Brain, title: "Machine Learning & AI", items: ["TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "NumPy"] },
  { icon: Wrench, title: "Tools", items: ["GitHub", "VS Code", "Postman"] },
  { icon: Users, title: "Soft Skills", items: ["Leadership", "Teamwork", "Communication", "Problem Solving", "Time Management", "Adaptability"] },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionTitle eyebrow="Skills" title="A toolkit built for shipping." />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {GROUPS.map((g) => (
          <motion.div
            key={g.title}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_20px_60px_-15px_color-mix(in_oklab,var(--highlight)_30%,transparent)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-highlight/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-secondary">
                <g.icon className="h-5 w-5 text-highlight" />
              </div>
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground/80"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
