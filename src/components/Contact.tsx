import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT } from "../lib/constants";
import {
  useScrollReveal,
  revealVariants,
  staggerContainer,
} from "../hooks/useScrollReveal";

const fullAddress = `${CONTACT.address.line1}, ${CONTACT.address.line2}, ${CONTACT.address.city} ${CONTACT.address.postalCode}, ${CONTACT.address.country}`;

const contactCards = [
  {
    id: "contact-phone",
    icon: Phone,
    title: "Phone",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    id: "contact-whatsapp",
    icon: MessageCircle,
    title: "WhatsApp",
    value: CONTACT.whatsapp,
    href: CONTACT.whatsappHref,
  },
  {
    id: "contact-email",
    icon: Mail,
    title: "Email",
    value: CONTACT.email,
    href: CONTACT.emailHref,
  },
  {
    id: "contact-location",
    icon: MapPin,
    title: "Office",
    value: fullAddress,
    href: CONTACT.mapsUrl,
  },
] as const;

export default function Contact() {
  const [ref, controls] = useScrollReveal();

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
          {/* Label */}
          <motion.p
            variants={revealVariants}
            className="text-center text-sm font-semibold uppercase tracking-widest text-sky-700"
          >
            Get in Touch
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={revealVariants}
            className="mt-4 text-center text-3xl font-bold text-slate-900 lg:text-5xl"
          >
            Let&apos;s Build Your Financial Infrastructure
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={revealVariants}
            className="mt-4 text-center text-lg text-slate-600"
          >
            Ready to transform your financial systems? Reach out to our team in
            Surabaya.
          </motion.p>

          {/* Contact Cards Grid */}
          <motion.div
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.id}
                  id={card.id}
                  href={card.href}
                  target={card.id === "contact-location" ? "_blank" : undefined}
                  rel={
                    card.id === "contact-location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  variants={revealVariants}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-50 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-sky-600/10">
                    <Icon className="size-5 text-sky-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">
                      {card.title}
                    </p>
                    <p className="mt-1 font-medium text-slate-900">{card.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Office Hours */}
          <motion.div
            variants={revealVariants}
            className="mt-8 text-center text-slate-500"
          >
            <div className="mb-2 flex items-center justify-center gap-2">
              <Clock className="size-4" />
              <span className="text-sm font-medium">Office Hours</span>
            </div>
            <div className="space-y-1 text-sm">
              {CONTACT.hours.map((schedule) => (
                <p key={schedule.days}>
                  {schedule.days}: {schedule.time}
                </p>
              ))}
            </div>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            variants={revealVariants}
            className="mt-12 text-center"
          >
            <a
              id="contact-whatsapp-cta"
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block"
            >
              {/* Pulse glow */}
              <span className="absolute inset-0 animate-pulse rounded-xl bg-sky-600/30 blur-xl" />
              <span className="relative inline-flex items-center gap-2 rounded-xl bg-sky-600 px-10 py-4 text-lg font-medium text-white transition-colors duration-300 hover:bg-sky-500">
                Start a WhatsApp Consultation →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
