import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { PROJECTS } from "../lib/constants";
import {
  useScrollReveal,
  revealVariants,
  staggerContainer,
} from "../hooks/useScrollReveal";

export default function ProjectGallery() {
  const { t } = useTranslation();
  const [ref, controls] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="projects"
      className="bg-white dark:bg-[#1f2b45] py-24 lg:py-32 transition-colors duration-300"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <motion.p variants={revealVariants} className="text-sm font-semibold uppercase tracking-widest text-sky-700 dark:text-[#ffae11] transition-colors duration-300">
            {t("projects.label")}
          </motion.p>
          <motion.h2 variants={revealVariants} className="mt-4 text-3xl font-bold text-slate-900 dark:text-white lg:text-5xl font-display transition-colors duration-300">
            {t("projects.heading")}
          </motion.h2>
          <motion.p variants={revealVariants} className="mt-4 text-lg text-slate-600 dark:text-white/80 transition-colors duration-300">
            {t("projects.subheading")}
          </motion.p>
        </div>

        <motion.div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer}>
          {PROJECTS.map((project) => (
            <motion.article
              key={project.name}
              variants={revealVariants}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-[#ffae11]/20 bg-slate-50 dark:bg-white/5 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 dark:hover:shadow-[#ffae11]/10 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`Management Consulting for the ${project.name} Industry in Surabaya, Indonesia`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                  {t(`projects.industries.${project.name}`)}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
