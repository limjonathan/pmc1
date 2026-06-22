import { motion } from "framer-motion";
import { COMPANY, CONTACT, STATS } from "../lib/constants";
import {
  useScrollReveal,
  revealVariants,
  staggerContainer,
} from "../hooks/useScrollReveal";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [ref, display] = useAnimatedCounter(value);

  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-3xl font-bold text-white">
        <motion.span ref={ref}>{display}</motion.span>
        {suffix}
      </span>
      <span className="text-sm text-zinc-500">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [sectionRef, controls] = useScrollReveal({ threshold: 0.1 });

  const tagline = COMPANY.tagline;
  const highlightPhrase = "Financial Clarity";
  const splitIndex = tagline.indexOf(highlightPhrase);
  const beforeHighlight = tagline.slice(0, splitIndex);
  const highlight = tagline.slice(splitIndex);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* Dot-grid pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(161,161,170,0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center lg:py-32"
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
      >
        {/* Badge */}
        <motion.div variants={revealVariants}>
          <span className="inline-block rounded-full border border-zinc-700 px-4 py-1.5 text-sm text-zinc-400">
            Surabaya, Indonesia · Est. 1990
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={revealVariants}
          className="mx-auto mt-8 max-w-4xl text-5xl font-bold tracking-tight text-white lg:text-7xl"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          {beforeHighlight}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={revealVariants}
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 lg:text-xl"
        >
          {COMPANY.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={revealVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            id="hero-cta-primary"
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-emerald-500 px-8 py-4 font-medium text-white transition-colors hover:bg-emerald-400"
          >
            Schedule a Consultation
          </a>
          <a
            id="hero-cta-secondary"
            href="#services"
            className="rounded-xl border border-zinc-700 px-8 py-4 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={revealVariants}
          className="mx-auto mt-20 flex max-w-lg items-center justify-center divide-x divide-zinc-800"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex-1 px-6">
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
