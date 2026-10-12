import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Eye } from "lucide-react";
import { Section, SectionTitle } from "../section";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

const CERTS: { title: string; image: string }[] = [
  { title: "AWS Academy — Cloud Foundations", image: "/certs/aws.png" },
  { title: "Computer Networking (Cisco)", image: "/certs/CN.png" },
  { title: "Database Management Systems (Meta · Coursera)", image: "/certs/DBMS.png" },
  { title: "Deep Learning — ANN with TensorFlow", image: "/certs/DL.png" },
  { title: "Operating Systems (Cisco)", image: "/certs/OS.png" },
  { title: "Data Analysis using Python (UPenn · Coursera)", image: "/certs/DA_PY.png" },
];

export function Education() {
  const [active, setActive] = useState<{ title: string; image: string } | null>(null);

  return (
    <Section id="education">
      <SectionTitle eyebrow="Education" title="Learning, credentialed and continuous." />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm sm:p-10"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-highlight/10 blur-3xl" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-foreground text-background">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              2023 — Expected 2027
            </div>
            <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
              MIT ADT University
            </h3>
            <p className="mt-1 text-base text-muted-foreground">
              Bachelor of Technology · Computer Science and Engineering
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                CGPA · 8.10
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                Graduating 2027
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-16">
        <div className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Award className="h-4 w-4" /> Certifications
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-lg"
            >
              <div>
                <div className="text-sm font-medium leading-snug">{c.title}</div>
                <div className="mt-2 h-px w-8 bg-highlight transition-all group-hover:w-16" />
              </div>
              <button
                type="button"
                onClick={() => setActive(c)}
                className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <Eye className="h-3.5 w-3.5" /> View certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl border-border bg-card p-2 sm:p-3">
          <DialogTitle className="sr-only">{active?.title ?? "Certificate"}</DialogTitle>
          {active && (
            <div className="overflow-hidden rounded-lg bg-background">
              <img
                src={active.image}
                alt={active.title}
                className="h-auto w-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
