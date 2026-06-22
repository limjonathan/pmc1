import { motion } from "framer-motion";
import { Shield, Handshake, TrendingUp, Award } from "lucide-react";
import { CORE_VALUES } from "../lib/constants";
import {
  useScrollReveal,
  revealVariants,
  staggerContainer,
} from "../hooks/useScrollReveal";

const iconMap = {
  Shield,
  Handshake,
  TrendingUp,
  Award,
} as const;

export default function About() {
  const [ref, controls] = useScrollReveal();

  return (
    <section id="about" className="bg-slate-950 py-24 lg:py-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        {/* Section label */}
        <motion.p
          variants={revealVariants}
          className="text-sm font-semibold uppercase tracking-widest text-emerald-400"
        >
          About PMC
        </motion.p>

        {/* Section heading */}
        <motion.h2
          variants={revealVariants}
          className="mt-4 text-3xl font-bold text-white lg:text-5xl"
        >
          Supporting Businesses From Inception Through to Exit
        </motion.h2>

        {/* Two-column layout */}
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left column — editorial text */}
          <motion.div variants={revealVariants} className="space-y-6">
            <p className="text-lg leading-relaxed text-zinc-400">
              PMC works across a broad range of business disciplines to address
              critical issues, helping clients improve key organizational
              components, leverage technology, and strengthen their market
              position. Our team of service professionals and industry-specific
              experts delivers solutions tailored to each client&apos;s unique
              challenges.
            </p>
            <p className="text-lg leading-relaxed text-zinc-400">
              With over three decades of deep expertise in management accounting
              and financial system design, we provide the strategic clarity that
              Indonesian businesses need to compete and grow.
            </p>
          </motion.div>

          {/* Right column — core value cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {CORE_VALUES.map((value) => {
              const Icon = iconMap[value.icon];
              return (
                <motion.article
                  key={value.title}
                  variants={revealVariants}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-zinc-900"
                >
                  <Icon className="text-emerald-400" size={28} />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
