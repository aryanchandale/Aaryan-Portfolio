import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section, SectionTitle } from "../section";

const EXPERIENCES = [
  {
    role: "Machine Learning Intern",
    org: "Prodigy Infotech",
    period: "April 2025 – May 2025",
    points: [
      "Developed a House Price Prediction model using Linear Regression in Python",
      "Cleaned and prepared the housing dataset by handling missing values, encoding categorical features and selecting features such as area, bedrooms and bathrooms",
      "Visualized feature relationships and prediction errors with Matplotlib/Seaborn to explain what drives price",
    ],
  },
  {
    role: "Backend Developer",
    org: "University Alumni Project · Yoja App",
    period: "July 2023 – Present",
    points: [
      "Designed databases for the Yoja App",
      "Built backend using FastAPI and Flask",
      "Integrated backend with frontend",
      "Collaborated with cross-functional teams",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" className="bg-surface/40">
      <SectionTitle eyebrow="Experience" title="Where I've shipped real things." />

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-border via-border to-transparent sm:left-6" />
        <div className="space-y-10">
          {EXPERIENCES.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -16, y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-14 sm:pl-20"
            >
              <div className="absolute left-0 top-2 grid h-10 w-10 place-items-center rounded-full border border-border bg-background shadow-sm sm:left-1 sm:h-12 sm:w-12">
                <Briefcase className="h-4 w-4 text-highlight sm:h-5 sm:w-5" />
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {e.period}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">{e.role}</h3>
                <div className="text-sm text-highlight">{e.org}</div>
                <ul className="mt-5 space-y-2">
                  {e.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm text-muted-foreground sm:text-[15px]"
                    >
                      <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-highlight" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
