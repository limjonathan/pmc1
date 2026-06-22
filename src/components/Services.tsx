import { motion } from "framer-motion";
import { Calculator, Lightbulb, Users, Check } from "lucide-react";
import { SERVICES } from "../lib/constants";
import {
  useScrollReveal,
  revealVariants,
  staggerContainer,
} from "../hooks/useScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  Calculator,
  Lightbulb,
  Users,
};

export default function Services() {
  const [ref, controls] = useScrollReveal();

  return (
    <section
      id="services"
      className="relative bg-zinc-900/30 py-24 lg:py-32"
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={staggerContainer}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        {/* Section header */}
        <motion.div variants={revealVariants} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            OUR SERVICES
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white lg:text-5xl font-[Outfit]">
            From Ledger to Strategy
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Comprehensive financial and management solutions designed to scale
            with your business.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.article
                key={service.category}
                variants={revealVariants}
                id={`service-${service.icon.toLowerCase()}`}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-slate-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                {/* Hover gradient glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent transition-all duration-500 group-hover:via-emerald-500/60"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-500/0 to-transparent transition-all duration-500 group-hover:from-emerald-500/[0.06]"
                />

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                  {Icon && <Icon className="h-6 w-6 text-emerald-400" />}
                </div>

                {/* Category title */}
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.category}
                </h3>

                {/* Items list */}
                <ul className="mt-4 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-zinc-400"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
