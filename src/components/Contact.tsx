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
      className="bg-gradient-to-b from-slate-50 to-white py-24 lg:py-32"
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
              className="text-sm font-semibold uppercase tracking-widest text-sky-400"
            >
              {t("contact.label")}
            </motion.p>
            <motion.h2
              variants={revealVariants}
              className="mt-4 text-3xl font-bold text-slate-900 lg:text-5xl font-display"
            >
              {t("contact.heading")}
            </motion.h2>
            <motion.p
              variants={revealVariants}
              className="mt-4 text-lg text-slate-600"
            >
              {t("contact.subheading")}
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {/* Phone */}
            <motion.div variants={revealVariants} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="rounded-xl bg-sky-500/10 p-3 text-sky-600">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-slate-600">Phone</h3>
                <a href={`tel:${CONTACT.phone}`} className="mt-1 block text-lg font-semibold text-slate-900 hover:text-sky-600 transition-colors">
                  {CONTACT.phone}
                </a>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div variants={revealVariants} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="rounded-xl bg-sky-500/10 p-3 text-sky-600">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-slate-600">WhatsApp</h3>
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-1 block text-lg font-semibold text-slate-900 hover:text-sky-600 transition-colors">
                  {t("contact.whatsapp")}
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={revealVariants} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="rounded-xl bg-sky-500/10 p-3 text-sky-600">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-slate-600">Email</h3>
                <a href={`mailto:${CONTACT.email}`} className="mt-1 block text-lg font-semibold text-slate-900 hover:text-sky-600 transition-colors">
                  {CONTACT.email}
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={revealVariants} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="rounded-xl bg-sky-500/10 p-3 text-sky-600">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-slate-600">{t("contact.office")}</h3>
                <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-lg font-semibold text-slate-900 hover:text-sky-600 transition-colors">
                  {CONTACT.address.city}, {CONTACT.address.country}
                </a>
                <p className="mt-1 text-sm text-slate-500">
                  {CONTACT.address.line1}, {CONTACT.address.line2}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={revealVariants} className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-slate-500">
              <Clock className="h-4 w-4" />
              <span>{t("contact.hours")}: {CONTACT.hours[0].time}</span>
            </div>
            
            <div className="mt-8">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-sky-600 px-10 py-4 text-lg font-medium text-white transition-all hover:bg-sky-500 hover:-translate-y-1"
              >
                {t("contact.whatsapp")}
                <span className="transition-transform group-hover:translate-x-1">→</span>
                <div className="absolute inset-0 -z-10 animate-pulse rounded-xl bg-sky-600/40 blur-xl transition-all group-hover:bg-sky-500/60" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
