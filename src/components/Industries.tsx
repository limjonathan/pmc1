import { motion } from "framer-motion";
import {
  Car,
  Sprout,
  Building2,
  Truck,
  HeartPulse,
  Hotel,
  Factory,
  ShoppingBag,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { INDUSTRIES } from "../lib/constants";
import {
  useScrollReveal,
  revealVariants,
  staggerContainer,
} from "../hooks/useScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  Car,
  Sprout,
  Building2,
  Truck,
  HeartPulse,
  Hotel,
  Factory,
  ShoppingBag,
  Briefcase,
};

export default function Industries() {
  const [ref, controls] = useScrollReveal();

  return (
    <section id="industries" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {/* Label */}
          <motion.p
            variants={revealVariants}
            className="text-center text-sm font-semibold uppercase tracking-widest text-sky-700"
          >
            Industries
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={revealVariants}
            className="mt-4 text-center text-3xl font-bold text-slate-900 lg:text-5xl"
          >
            Trusted Across 9 Core Sectors
          </motion.h2>

          {/* Industry Pills */}
          <motion.div
            variants={staggerContainer}
            className="mt-16 flex flex-wrap items-center justify-center gap-4"
          >
            {INDUSTRIES.map((industry) => {
              const Icon = iconMap[industry.icon];
              return (
                <motion.div
                  key={industry.name}
                  variants={revealVariants}
                  className="flex cursor-default items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-6 py-3 shadow-sm transition-all duration-300 hover:border-sky-500/40 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
                >
                  {Icon && <Icon className="size-[18px] text-sky-700" />}
                  <span className="font-medium text-slate-700">
                    {industry.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
