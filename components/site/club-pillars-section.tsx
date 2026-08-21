"use client";

import { motion, type Variants } from "framer-motion";
import { Lightbulb, Target, Users } from "lucide-react";

const pillarCards = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To create a vibrant community of AI enthusiasts dedicated to learning, building, and innovating with generative AI technologies.",
  },
  {
    icon: Users,
    title: "Our Community",
    body: "A diverse group of passionate students, researchers, and creators collaborating to push the boundaries of AI.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    body: "To be the leading student organization pioneering the future of generative AI and fostering the next generation of AI innovators.",
  },
] as const;

const activities = [
  {
    title: "Technical Workshops",
    body: "Regular hands-on sessions covering topics from prompt engineering to fine-tuning large language models.",
  },
  {
    title: "Hackathons",
    body: "Competitive events where teams build innovative AI solutions to real-world challenges.",
  },
  {
    title: "Guest Talks",
    body: "Industry experts and researchers share insights on the latest developments in generative AI.",
  },
  {
    title: "Collaborative Projects",
    body: "Team-based initiatives to develop practical AI applications and contribute to open-source.",
  },
] as const;

// ── Variants ────────────────────────────────────────────────────────────────

/** Pillar card: rises up + fades in */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.14 },
  }),
};

/** Activity row: slides in from left + fades in */
const rowVariants: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.12 },
  }),
};

/** Heading: fades up */
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ── Component ────────────────────────────────────────────────────────────────

export function ClubPillarsSection() {
  return (
    <section className="border-b border-[color:var(--border)] bg-background py-16 sm:py-24">
      <div className="container-wrap">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillarCards.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="flex flex-col items-center rounded-xl border border-[color:var(--border)] bg-card px-6 py-8 text-center shadow-[0_18px_30px_var(--shadow)]"
            >
              <div
                className="mb-5 grid h-14 w-14 place-content-center rounded-full border border-brand/60 bg-card-soft"
                style={{ color: "var(--brand)" }}
              >
                <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-foreground sm:text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{body}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-20 text-center text-4xl font-bold text-foreground sm:mt-24 sm:text-5xl"
        >
          What We{" "}
          <span className="bg-gradient-to-r from-brand to-brand-strong bg-clip-text text-transparent">
            Do
          </span>
        </motion.h2>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {activities.map(({ title, body }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="rounded-r-xl border border-[color:var(--border)] border-l-4 border-l-brand bg-card py-5 pl-6 pr-5 shadow-[0_12px_25px_var(--shadow)] sm:py-6 sm:pl-8"
            >
              <h3 className="text-lg font-bold text-foreground sm:text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
