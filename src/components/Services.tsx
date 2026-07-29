import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Calculator, Lightbulb, Users } from "lucide-react";
import { SERVICES } from "../lib/constants";
import {
  useScrollReveal,
  revealVariants,
  staggerContainer,
} from "../hooks/useScrollReveal";
import financeBg from "../assets/images/finance-bg.jpg";
import ParallaxImage from "./ParallaxImage";

const iconMap: Record<string, React.ElementType> = {
  Calculator,
  Lightbulb,
  Users,
};

export default function Services() {
  const { t } = useTranslation();
  const [ref, controls] = useScrollReveal();

  return (
    <section
      id="services"
      className="relative bg-slate-50 dark:bg-[#28395E] py-24 lg:py-32 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Image with Parallax (only visible in dark theme) */}
      <div className="absolute inset-0 z-0 hidden dark:block opacity-10 mix-blend-overlay">
        <ParallaxImage src={financeBg} alt="Abstract Finance" className="w-full h-full" offset={60} />
      </div>

      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={staggerContainer}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        {/* Section header */}
        <div className="max-w-2xl">
          <motion.p variants={revealVariants} className="text-sm font-semibold uppercase tracking-widest text-sky-700 dark:text-[#ffae11] transition-colors duration-300">
            {t("services.label")}
          </motion.p>
          <motion.h2 variants={revealVariants} className="mt-4 text-3xl font-bold text-slate-900 dark:text-white lg:text-5xl font-display transition-colors duration-300">
            {t("services.heading")}
          </motion.h2>
          <motion.p variants={revealVariants} className="mt-4 text-lg text-slate-600 dark:text-white/80 transition-colors duration-300">
            {t("services.subheading")}
          </motion.p>
        </div>

        {/* Service cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.article
                key={service.category}
                variants={revealVariants}
                id={`service-${service.icon.toLowerCase()}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-[#ffae11]/20 bg-white dark:bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 dark:hover:border-[#ffae11]/50 shadow-sm hover:shadow-lg hover:shadow-sky-500/5 dark:hover:shadow-[#ffae11]/10 dark:hover:bg-white/10"
              >
                {/* Hover gradient glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/0 dark:via-[#ffae11]/0 to-transparent transition-all duration-500 group-hover:via-sky-500/60 dark:group-hover:via-[#ffae11]/80"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-500/0 dark:from-[#ffae11]/0 to-transparent transition-all duration-500 group-hover:from-sky-500/[0.06] dark:group-hover:from-[#ffae11]/15"
                />

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600/10 dark:bg-[#ffae11]/10 transition-colors duration-300 group-hover:bg-sky-600/20 dark:group-hover:bg-[#ffae11]/20">
                  {Icon && <Icon className="h-6 w-6 text-sky-700 dark:text-[#ffae11]" />}
                </div>

                {/* Category title */}
                <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                  {t(`services.categories.${service.category.split(" ")[0].toLowerCase()}`)}
                </h3>

                {/* Items list */}
                <ul className="mt-4 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-600 dark:text-white/70"
                    >
                      <span className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500 dark:bg-[#ffae11] transition-colors duration-300" />
                      <span className="flex flex-col">
                        <span className="font-medium text-slate-800 dark:text-white/90">{t(`services.items.${item}.title`)}</span>
                        <span className="mt-1 text-slate-500 dark:text-white/60 leading-relaxed">{t(`services.items.${item}.desc`)}</span>
                      </span>
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
