import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT } from "../lib/constants";
import {
  useScrollReveal,
  revealVariants,
  staggerContainer,
} from "../hooks/useScrollReveal";

export default function Contact() {
  const { t } = useTranslation();
  const [ref, controls] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-50 dark:to-white py-24 lg:py-32 transition-colors duration-300"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <div className="mx-auto max-w-2xl text-center">
            <motion.p
              variants={revealVariants}
              className="text-sm font-semibold uppercase tracking-widest text-sky-400 dark:text-[#ffae11] transition-colors duration-300"
            >
              {t("contact.label")}
            </motion.p>
            <motion.h2
              variants={revealVariants}
              className="mt-4 text-3xl font-bold text-slate-900 dark:text-[#28395E] lg:text-5xl font-display transition-colors duration-300"
            >
              {t("contact.heading")}
            </motion.h2>
            <motion.p
              variants={revealVariants}
              className="mt-4 text-lg text-slate-600 dark:text-slate-600 transition-colors duration-300"
            >
              {t("contact.subheading")}
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {/* Phone */}
            <motion.div variants={revealVariants} className="flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-slate-200 bg-white dark:bg-white p-6 shadow-sm transition-colors duration-300">
              <div className="rounded-xl bg-sky-500/10 dark:bg-[#ffae11]/20 p-3 text-sky-600 dark:text-[#28395E] transition-colors duration-300">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-slate-600 dark:text-slate-600 transition-colors duration-300">Phone</h3>
                <a href={`tel:${CONTACT.phone}`} className="mt-1 block text-lg font-semibold text-slate-900 dark:text-[#28395E] hover:text-sky-600 dark:hover:text-[#ffae11] transition-colors">
                  {CONTACT.phone}
                </a>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div variants={revealVariants} className="flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-slate-200 bg-white dark:bg-white p-6 shadow-sm transition-colors duration-300">
              <div className="rounded-xl bg-sky-500/10 dark:bg-[#ffae11]/20 p-3 text-sky-600 dark:text-[#28395E] transition-colors duration-300">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-slate-600 dark:text-slate-600 transition-colors duration-300">WhatsApp</h3>
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-1 block text-lg font-semibold text-slate-900 dark:text-[#28395E] hover:text-sky-600 dark:hover:text-[#ffae11] transition-colors">
                  {t("contact.whatsapp")}
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={revealVariants} className="flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-slate-200 bg-white dark:bg-white p-6 shadow-sm transition-colors duration-300">
              <div className="rounded-xl bg-sky-500/10 dark:bg-[#ffae11]/20 p-3 text-sky-600 dark:text-[#28395E] transition-colors duration-300">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-slate-600 dark:text-slate-600 transition-colors duration-300">Email</h3>
                <a href={`mailto:${CONTACT.email}`} className="mt-1 block text-lg font-semibold text-slate-900 dark:text-[#28395E] hover:text-sky-600 dark:hover:text-[#ffae11] transition-colors">
                  {CONTACT.email}
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={revealVariants} className="flex items-start gap-4 rounded-2xl border border-slate-200 dark:border-slate-200 bg-white dark:bg-white p-6 shadow-sm transition-colors duration-300">
              <div className="rounded-xl bg-sky-500/10 dark:bg-[#ffae11]/20 p-3 text-sky-600 dark:text-[#28395E] transition-colors duration-300">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-slate-600 dark:text-slate-600 transition-colors duration-300">{t("contact.office")}</h3>
                <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-lg font-semibold text-slate-900 dark:text-[#28395E] hover:text-sky-600 dark:hover:text-[#ffae11] transition-colors">
                  {CONTACT.address.city}, {CONTACT.address.country}
                </a>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-500 transition-colors duration-300">
                  {CONTACT.address.line1}, {CONTACT.address.line2}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={revealVariants} className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-500 transition-colors duration-300">
              <Clock className="h-4 w-4" />
              <span>{t("contact.hours")}: {CONTACT.hours[0].time}</span>
            </div>
            
            <div className="mt-8">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-sky-600 dark:bg-[#28395E] px-10 py-4 text-lg font-medium text-white dark:text-white transition-all hover:bg-sky-500 dark:hover:bg-[#ffae11] hover:-translate-y-1"
              >
                {t("contact.whatsapp")}
                <span className="transition-transform group-hover:translate-x-1">→</span>
                <div className="absolute inset-0 -z-10 animate-pulse rounded-xl bg-sky-600/40 dark:bg-[#28395E]/40 blur-xl transition-all group-hover:bg-sky-500/60 dark:group-hover:bg-[#ffae11]/60" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
