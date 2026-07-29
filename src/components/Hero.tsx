import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CONTACT, STATS } from "../lib/constants";
import {
  useScrollReveal,
  revealVariants,
  staggerContainer,
} from "../hooks/useScrollReveal";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";
import heroParallax from "../assets/images/hero-parallax.jpg";
import ParallaxImage from "./ParallaxImage";
import Magnetic from "./Magnetic";

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
      <span className="text-3xl font-bold text-slate-900 dark:text-white">
        <motion.span ref={ref}>{display}</motion.span>
        {suffix}
      </span>
      <span className="text-sm text-slate-600 dark:text-[#ffae11]/80">{label}</span>
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const [sectionRef, controls] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#28395E] overflow-hidden transition-colors duration-300"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply dark:opacity-20 dark:mix-blend-overlay">
        <ParallaxImage src={heroParallax} alt="Corporate Office" className="w-full h-full" offset={80} />
      </div>

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
      
      {/* Dark theme explicit dot grid (overrides the light one visually) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-30 z-0 transition-opacity duration-300"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 174, 17, 0.3) 1px, transparent 1px)",
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
          <span className="inline-block rounded-full border border-slate-300 dark:border-[#ffae11]/30 bg-white/50 dark:bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm text-slate-600 dark:text-[#ffae11] transition-colors duration-300">
            {t("hero.badge")}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={revealVariants}
          className="mx-auto mt-8 max-w-4xl text-5xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-7xl transition-colors duration-300"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          {t("hero.titleBefore")}
          <span className="gradient-text dark:from-[#ffae11] dark:to-yellow-200">
            {t("hero.titleHighlight")}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={revealVariants}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-white/80 lg:text-xl transition-colors duration-300"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={revealVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Magnetic pull={15}>
            <a
              id="hero-cta-primary"
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-sky-600 dark:bg-[#ffae11] px-8 py-4 font-medium text-white dark:text-[#28395E] shadow-lg shadow-sky-600/20 dark:shadow-[#ffae11]/20 transition-all hover:bg-sky-500 dark:hover:bg-[#e0990f] hover:-translate-y-1"
            >
              {t("hero.schedule")}
            </a>
          </Magnetic>
          <Magnetic pull={15}>
            <a
              id="hero-cta-secondary"
              href="#services"
              className="block rounded-xl border border-slate-300 dark:border-[#ffae11]/30 bg-white/50 dark:bg-[#28395E]/50 backdrop-blur-sm px-8 py-4 text-slate-700 dark:text-white transition-all hover:border-slate-400 hover:bg-white dark:hover:bg-[#ffae11] dark:hover:text-[#28395E] hover:text-slate-900 hover:-translate-y-1 shadow-sm"
            >
              {t("hero.explore")}
            </a>
          </Magnetic>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={revealVariants}
          className="mx-auto mt-20 flex max-w-lg items-center justify-center divide-x divide-slate-300 dark:divide-[#ffae11]/30 transition-colors duration-300"
        >
          {STATS.map((stat) => {
            const statKeyMap: Record<string, string> = {
              "Happy Clients": "clients",
              "Our Project": "projects",
              "Team Members": "team",
              "Years of Experiences": "years"
            };
            return (
              <div key={stat.label} className="flex-1 px-6">
                <StatItem
                  value={stat.value}
                  suffix={stat.suffix}
                  label={t(`hero.stats.${statKeyMap[stat.label]}`)}
                />
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
