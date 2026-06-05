import { Link } from "@tanstack/react-router";
import { LOGO_FULL_URL, NAV_LINKS, WA_LINK } from "@/lib/site-data";
import { Instagram, Linkedin, Clock, Send, Twitter, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--plum-deep)] text-white/85">
      <div className="mx-auto max-w-7xl px-5 py-18 md:py-24">
        <div className="grid gap-14 md:gap-16 lg:grid-cols-12">
          {/* Logo and Intro Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center">
              <div className="bg-white rounded-full p-4.5 aspect-square h-[120px] w-[120px] flex items-center justify-center shadow-soft">
                <img
                  src={LOGO_FULL_URL}
                  alt="Pearl Gifts"
                  className="h-full w-full object-contain transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/85">
              A Lagos-based luxury gifting atelier crafting bespoke experiences for organizations
              that give with intention.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com/pearlgifts"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 hover:bg-white/10 hover:text-[var(--gold)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/pearlgifts"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 hover:bg-white/10 hover:text-[var(--gold)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/pearlgifts"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 hover:bg-white/10 hover:text-[var(--gold)] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/pearlgifts"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 hover:bg-white/10 hover:text-[var(--gold)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore Navigate Column */}
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-medium">
              Explore
            </p>
            <ul className="mt-6 space-y-3.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="transition text-white/80 hover:text-white hover:underline decoration-[var(--gold)] decoration-2 underline-offset-4"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-medium">
              Contact
            </p>
            <ul className="mt-6 space-y-4 text-sm text-white/80">
              <li>
                <a href="mailto:hello@pearlgifts.co" className="transition hover:text-white block">
                  hello@pearlgifts.co
                </a>
              </li>
              <li>
                <a href="tel:+2348000000000" className="transition hover:text-white block">
                  +234 800 000 0000
                </a>
              </li>
              <li className="text-white/70">12B Atelier Mews, Victoria Island, Lagos</li>
              <li className="pt-3 border-t border-white/10 mt-3 flex items-center gap-2.5 text-xs text-white/60">
                <Clock className="h-4 w-4 text-[var(--gold)]" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-medium">
              Atelier Updates
            </p>
            <p className="mt-6 text-xs leading-relaxed text-white/75">
              Subscribe to receive curated guides on luxury corporate gifting, seasonal collection
              catalogs, and exclusive updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-xl bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/40 border border-white/10 outline-none focus:border-[var(--gold)]/50 focus:bg-white/10 transition-colors"
                required
              />
              <button
                type="submit"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--gold)] text-[var(--plum-deep)] hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                title="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs text-white/70">
          <p>© {new Date().getFullYear()} Pearl Gifts Atelier. All rights reserved.</p>
          <p>Crafted in Lagos · Delivered with care.</p>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[var(--plum)]/50 py-6">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
            <p>
              Premium gifting experiences | Handcrafted with intention | Delivered across Nigeria
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <Link to="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-white/40">•</span>
            <Link to="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
