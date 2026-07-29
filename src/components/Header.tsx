import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from "framer-motion";
import { Menu, X, MessageCircle, Globe, Palette } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NAV_LINKS, CONTACT } from "../lib/constants";
import logoWide from "../assets/images/logo-wide.png";
import { useTheme } from "../contexts/ThemeContext";

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + i * 0.07,
      duration: 0.5,
      ease: [0.25, 0.4, 0, 1],
    },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const { theme, setTheme } = useTheme();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.startsWith("id") ? "en" : "id");
  };

  const toggleTheme = () => {
    setTheme(theme === "modern" ? "original" : "modern");
  };
  const { scrollY } = useScroll();

  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 25px rgba(0,0,0,0.2)"]
  );
  const headerPadding = useTransform(scrollY, [0, 50], ["1rem", "0.75rem"]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Track which section is currently in view
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    },
    []
  );

  return (
    <>
      <motion.header
        id="site-header"
        className="fixed top-0 right-0 left-0 z-40 border-b border-slate-200/50 dark:border-[#28395E]/20 bg-white/80 dark:bg-white/90 backdrop-blur-xl transition-colors duration-300"
        style={{ boxShadow: headerShadow }}
      >
      <motion.nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        style={{ paddingTop: headerPadding, paddingBottom: headerPadding }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex items-center"
          id="header-logo"
        >
          <img src={logoWide} alt="Premier Management Consulting" className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                id={`nav-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href
                    ? "text-sky-700 dark:text-[#28395E]"
                    : "text-slate-600 dark:text-slate-700 hover:text-sky-700 dark:hover:text-[#28395E]"
                }`}
              >
                {t(`nav.${link.label.toLowerCase()}`)}
                {/* Underline indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-sky-700 dark:bg-[#28395E] transition-all duration-300 ${
                    activeSection === link.href ? "w-4/5" : "w-0"
                  }`}
                />
                {/* Hover underline */}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-sky-700/50 dark:bg-[#28395E]/50 transition-all duration-300 group-hover:w-4/5 hover:w-4/5" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: CTA + Hamburger */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-[#28395E]/30 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-[#28395E] transition-colors hover:bg-slate-50 dark:hover:bg-[#28395E]/5 hover:text-sky-700 dark:hover:text-[#28395E]"
            aria-label="Toggle theme"
            title={theme === "modern" ? "Switch to Original Theme" : "Switch to Modern Theme"}
          >
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline">{theme === "modern" ? "Modern" : "Original"}</span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-[#28395E]/30 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-[#28395E] transition-colors hover:bg-slate-50 dark:hover:bg-[#28395E]/5 hover:text-sky-700 dark:hover:text-[#28395E]"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            {i18n.language.startsWith("id") ? "ID" : "EN"}
          </button>

          {/* WhatsApp CTA */}
          <a
            id="header-cta"
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-sky-600 dark:bg-[#ffae11] px-5 py-2 text-sm font-semibold text-white dark:text-[#28395E] transition-all duration-200 hover:bg-sky-500 dark:hover:bg-[#e0990f] hover:shadow-lg hover:shadow-sky-500/20 lg:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            {t("header.getInTouch")}
          </a>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex items-center justify-center rounded-lg p-2 text-slate-600 dark:text-[#28395E] transition-colors hover:bg-slate-100 dark:hover:bg-[#28395E]/10 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.nav>
      </motion.header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu-overlay"
            className="fixed inset-0 top-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-2xl lg:hidden"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button at top right */}
            <button
              id="mobile-menu-close"
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </button>

            <nav className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  id={`mobile-nav-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`font-display text-3xl font-semibold transition-colors duration-200 ${
                    activeSection === link.href
                      ? "text-sky-700"
                      : "text-slate-700 hover:text-sky-700"
                  }`}
                >
                  {t(`nav.${link.label.toLowerCase()}`)}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.a
                id="mobile-cta"
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                custom={NAV_LINKS.length}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-sky-600 px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/20"
              >
                <MessageCircle className="h-5 w-5" />
                {t("header.getInTouch")}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
