import { COMPANY, CONTACT, NAV_LINKS } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold text-emerald-400">
              PMC
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-sm text-zinc-500">
              {COMPANY.name}
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <a
              href={CONTACT.phoneHref}
              className="transition-colors hover:text-zinc-300"
            >
              {CONTACT.phone}
            </a>
            <span className="text-zinc-700">·</span>
            <a
              href={CONTACT.emailHref}
              className="transition-colors hover:text-zinc-300"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/50 pt-8 lg:flex-row">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Made in Surabaya 🇮🇩
          </p>
        </div>
      </div>
    </footer>
  );
}
