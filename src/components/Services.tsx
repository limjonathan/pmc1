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
      className="relative bg-slate-50 py-24 lg:py-32"
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
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            OUR SERVICES
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-5xl font-display">
            From Ledger to Strategy
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Indonesia can be a challenging place to do business. At PMC, our services are designed to support your business from inception through to exit and everything in between.
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
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 shadow-sm hover:shadow-lg hover:shadow-sky-500/5"
              >
                {/* Hover gradient glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/0 to-transparent transition-all duration-500 group-hover:via-sky-500/60"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-500/0 to-transparent transition-all duration-500 group-hover:from-sky-500/[0.06]"
                />

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600/10">
                  {Icon && <Icon className="h-6 w-6 text-sky-700" />}
                </div>

                {/* Category title */}
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {service.category}
                </h3>

                {/* Items list */}
                <ul className="mt-4 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" />
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
