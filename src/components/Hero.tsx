import { motion } from "framer-motion";
import { COMPANY, CONTACT, STATS } from "../lib/constants";
import {
  useScrollReveal,
  revealVariants,
  staggerContainer,
} from "../hooks/useScrollReveal";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";
import heroBg from "../assets/images/hero-bg.jpg";

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
      <span className="text-3xl font-bold text-slate-900">
        <motion.span ref={ref}>{display}</motion.span>
        {suffix}
      </span>
      <span className="text-sm text-slate-600">{label}</span>
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
      className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dot-grid pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15, 23, 42, 0.1) 1px, transparent 1px)",
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
          <span className="inline-block rounded-full border border-slate-300 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-sm text-slate-600">
            Surabaya, Indonesia · Est. 1990
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={revealVariants}
          className="mx-auto mt-8 max-w-4xl text-5xl font-bold tracking-tight text-slate-900 lg:text-7xl"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          {beforeHighlight}
          <span className="gradient-text">
            {highlight}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={revealVariants}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 lg:text-xl"
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
            className="rounded-xl bg-sky-600 px-8 py-4 font-medium text-white shadow-lg shadow-sky-600/20 transition-all hover:bg-sky-500 hover:-translate-y-1"
          >
            Schedule a Consultation
          </a>
          <a
            id="hero-cta-secondary"
            href="#services"
            className="rounded-xl border border-slate-300 bg-white/50 backdrop-blur-sm px-8 py-4 text-slate-700 transition-all hover:border-slate-400 hover:bg-white hover:text-slate-900 hover:-translate-y-1 shadow-sm"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={revealVariants}
          className="mx-auto mt-20 flex max-w-lg items-center justify-center divide-x divide-slate-300"
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
