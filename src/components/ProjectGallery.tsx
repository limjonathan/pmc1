import { motion } from "framer-motion";
import { PROJECTS } from "../lib/constants";
import {
  useScrollReveal,
  revealVariants,
  staggerContainer,
} from "../hooks/useScrollReveal";

export default function ProjectGallery() {
  const [ref, controls] = useScrollReveal();

  return (
    <section id="projects" className="bg-white py-24 lg:py-32">
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
            Project Gallery
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={revealVariants}
            className="mt-4 text-center text-3xl font-bold text-slate-900 lg:text-5xl"
          >
            Our portfolio consists of clients in the following industries.
          </motion.h2>

          {/* Project Grid */}
          <motion.div
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {PROJECTS.map((project) => (
              <motion.article
                key={project.name}
                variants={revealVariants}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <h3 className="font-semibold text-white text-lg">
                    {project.name}
                  </h3>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
