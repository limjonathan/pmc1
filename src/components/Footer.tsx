import { COMPANY, CONTACT, NAV_LINKS } from "../lib/constants";
import logoWide from "../assets/images/logo-wide.png";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={logoWide} alt="PMC Logo" className="h-8 w-auto opacity-80 grayscale transition-all hover:grayscale-0 hover:opacity-100" />
            <span className="text-slate-300">·</span>
            <span className="text-sm text-slate-500">
              {COMPANY.name}
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a
              href={CONTACT.phoneHref}
              className="transition-colors hover:text-slate-900"
            >
              {CONTACT.phone}
            </a>
            <span className="text-slate-300">·</span>
            <a
              href={CONTACT.emailHref}
              className="transition-colors hover:text-slate-900"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 lg:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-slate-500">
            Made in Surabaya 🇮🇩
          </p>
        </div>
      </div>
    </footer>
  );
}
