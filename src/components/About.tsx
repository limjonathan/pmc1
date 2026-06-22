import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Shield, Handshake, TrendingUp, Award } from "lucide-react";
import { CORE_VALUES } from "../lib/constants";
import {
  useScrollReveal,
  revealVariants,
  staggerContainer,
} from "../hooks/useScrollReveal";
import aboutTeam from "../assets/images/about-team.jpg";

const iconMap = {
  Shield,
  Handshake,
  TrendingUp,
  Award,
} as const;

export default function About() {
  const { t } = useTranslation();
  const [ref, controls] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        {/* Two-column layout */}
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left column — editorial text & image */}
          <motion.div variants={staggerContainer} className="max-w-xl">
            <motion.div variants={revealVariants}>
              <img 
                src={aboutTeam} 
                alt="PMC Team" 
                className="w-full rounded-2xl object-cover shadow-md aspect-video mb-8"
              />
            </motion.div>
            <motion.span
              variants={revealVariants}
              className="text-sm font-semibold tracking-widest text-sky-600"
            >
              {t("about.label")}
            </motion.span>
            <motion.h2
              variants={revealVariants}
              className="mt-4 text-3xl font-bold text-slate-900 lg:text-5xl"
            >
              {t("about.heading")}
            </motion.h2>
            <motion.p
              variants={revealVariants}
              className="mt-6 text-lg leading-relaxed text-slate-600"
            >
              {t("about.p1")}
            </motion.p>
            <motion.p
              variants={revealVariants}
              className="mt-4 text-lg leading-relaxed text-slate-600"
            >
              {t("about.p2")}
            </motion.p>
          </motion.div>

          {/* Right column — core value cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {CORE_VALUES.map((value) => {
              const titleKey = value.title.toLowerCase();
              return (
                <motion.div
                  key={value.title}
                  variants={revealVariants}
                  className="rounded-2xl border border-slate-200 bg-white/50 p-6 transition-all duration-300 hover:border-sky-500/30 hover:bg-white hover:shadow-lg hover:shadow-sky-500/5"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-sky-50 p-3 text-sky-600">
                    {(() => {
                      const Icon = iconMap[value.icon as keyof typeof iconMap];
                      return <Icon className="h-7 w-7" />;
                    })()}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {t(`about.values.${titleKey}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {t(`about.values.${titleKey}.desc`)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
