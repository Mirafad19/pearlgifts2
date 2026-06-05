import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { LOGO_FULL_URL, NAV_LINKS, WA_LINK } from "@/lib/site-data";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-[var(--gold)]/30 rounded-b-[28px] py-1.5 md:py-2.5"
          : "bg-transparent border-transparent py-4 md:py-6"
      }`}
    >
      <style>{`
        header {
          border-radius: ${scrolled || open ? "0 0 28px 28px" : "0"};
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex items-center justify-between transition-all">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={LOGO_FULL_URL}
              alt="Pearl Gifts"
              className={`object-contain py-1 transition-all duration-300 ${
                scrolled ? "h-[70px] md:h-[95px]" : "h-[90px] md:h-[135px]"
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative text-sm text-[var(--ink)]/80 transition-colors hover:text-[var(--plum)]"
                activeProps={{ className: "text-[var(--plum-deep)] font-medium" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-[var(--plum-deep)] hover:bg-[var(--plum)] px-6 py-2.5 text-sm font-medium text-white shadow-soft transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4" /> Inquire Now
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-xl glass"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 md:hidden rounded-2xl glass p-4 shadow-soft">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--plum)]/5"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.01]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.031 0C5.408 0 .025 5.385.015 12.013c0 2.118.553 4.185 1.602 5.998L0 24l6.157-1.615c1.768.966 3.758 1.472 5.86 1.474H12.03c6.621 0 12.008-5.384 12.019-12.013C24.06 5.385 18.654 0 12.031 0zm7.1 16.963c-.29.818-1.524 1.572-2.106 1.674-.582.102-1.164.204-4.805-1.226-3.64-1.43-5.918-5.071-6.1-5.317-.182-.245-1.493-1.956-1.493-3.73s.927-2.656 1.255-3.004c.328-.348.728-.429.983-.429s.51.01.728.02c.219.01.51-.082.802.614.291.695.983 2.41 1.055 2.56.073.15.111.327.01.531-.1.204-.146.327-.291.511-.146.184-.31.409-.437.541-.146.15-.3.314-.128.614.173.299.764 1.26 1.64 2.039.873.778 1.61 1.019 1.91 1.15s.473.102.646-.092c.173-.194.747-.868.946-1.165.2-.297.4-.245.674-.143s1.748.828 2.049.981c.3.153.51.225.583.348.073.123.073.715-.218 1.533z"/>
                </svg>
                Request Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
