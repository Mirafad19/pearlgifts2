import { b as jsxDevRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as LOGO_FULL_URL, N as NAV_LINKS, W as WA_LINK } from "./router-Bnacn66i.mjs";
import { i as MessageCircle, X, j as Menu, k as Clock, l as Send } from "../_libs/lucide-react.mjs";
function SiteNav() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-[var(--gold)]/30 py-1.5 md:py-2" : "bg-white/80 backdrop-blur-md border-b border-[var(--gold)]/15 py-3 md:py-4"}`,
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("style", { children: `
        header {
          border-radius: ${scrolled || open ? "0 0 24px 24px" : "0"};
        }
      ` }, void 0, false, {
          fileName: "/app/applet/src/components/site/SiteNav.tsx",
          lineNumber: 24,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-7xl px-5", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center justify-between transition-all font-sans", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "img",
              {
                src: LOGO_FULL_URL,
                alt: "Pearl Gifts",
                className: `object-contain py-1 transition-all duration-300 ${scrolled ? "h-[50px] md:h-[65px]" : "h-[65px] md:h-[85px]"}`
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/SiteNav.tsx",
                lineNumber: 32,
                columnNumber: 13
              },
              this
            ) }, void 0, false, {
              fileName: "/app/applet/src/components/site/SiteNav.tsx",
              lineNumber: 31,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("nav", { className: "hidden items-center gap-9 md:flex", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: l.to,
                className: "group relative text-sm text-[var(--ink)]/80 transition-colors hover:text-[var(--plum)]",
                activeProps: { className: "text-[var(--plum-deep)] font-medium" },
                children: [
                  l.label,
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 group-hover:w-full" }, void 0, false, {
                    fileName: "/app/applet/src/components/site/SiteNav.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                  }, this)
                ]
              },
              l.to,
              true,
              {
                fileName: "/app/applet/src/components/site/SiteNav.tsx",
                lineNumber: 43,
                columnNumber: 15
              },
              this
            )) }, void 0, false, {
              fileName: "/app/applet/src/components/site/SiteNav.tsx",
              lineNumber: 41,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: "/contact",
                className: "hidden md:inline-flex items-center gap-2 rounded-xl bg-[var(--plum-deep)] hover:bg-[var(--plum)] px-6 py-2.5 text-sm font-medium text-white shadow-soft transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(MessageCircle, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "/app/applet/src/components/site/SiteNav.tsx",
                    lineNumber: 59,
                    columnNumber: 13
                  }, this),
                  " Inquire Now"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/site/SiteNav.tsx",
                lineNumber: 55,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                onClick: () => setOpen((v) => !v),
                className: "md:hidden grid h-10 w-10 place-items-center rounded-xl glass",
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(X, { className: "h-5 w-5" }, void 0, false, {
                  fileName: "/app/applet/src/components/site/SiteNav.tsx",
                  lineNumber: 67,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Menu, { className: "h-5 w-5" }, void 0, false, {
                  fileName: "/app/applet/src/components/site/SiteNav.tsx",
                  lineNumber: 67,
                  columnNumber: 49
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/SiteNav.tsx",
                lineNumber: 62,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/SiteNav.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          open && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-2 md:hidden rounded-2xl glass p-4 shadow-soft", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-1", children: [
            NAV_LINKS.map((l) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              Link,
              {
                to: l.to,
                onClick: () => setOpen(false),
                className: "rounded-xl px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--plum)]/5",
                children: l.label
              },
              l.to,
              false,
              {
                fileName: "/app/applet/src/components/site/SiteNav.tsx",
                lineNumber: 75,
                columnNumber: 17
              },
              this
            )),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "a",
              {
                href: WA_LINK,
                target: "_blank",
                rel: "noreferrer",
                className: "mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.01]",
                children: [
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "svg",
                    {
                      viewBox: "0 0 24 24",
                      className: "h-4 w-4 fill-current",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { d: "M12.031 0C5.408 0 .025 5.385.015 12.013c0 2.118.553 4.185 1.602 5.998L0 24l6.157-1.615c1.768.966 3.758 1.472 5.86 1.474H12.03c6.621 0 12.008-5.384 12.019-12.013C24.06 5.385 18.654 0 12.031 0zm7.1 16.963c-.29.818-1.524 1.572-2.106 1.674-.582.102-1.164.204-4.805-1.226-3.64-1.43-5.918-5.071-6.1-5.317-.182-.245-1.493-1.956-1.493-3.73s.927-2.656 1.255-3.004c.328-.348.728-.429.983-.429s.51.01.728.02c.219.01.51-.082.802.614.291.695.983 2.41 1.055 2.56.073.15.111.327.01.531-.1.204-.146.327-.291.511-.146.184-.31.409-.437.541-.146.15-.3.314-.128.614.173.299.764 1.26 1.64 2.039.873.778 1.61 1.019 1.91 1.15s.473.102.646-.092c.173-.194.747-.868.946-1.165.2-.297.4-.245.674-.143s1.748.828 2.049.981c.3.153.51.225.583.348.073.123.073.715-.218 1.533z" }, void 0, false, {
                        fileName: "/app/applet/src/components/site/SiteNav.tsx",
                        lineNumber: 95,
                        columnNumber: 19
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/components/site/SiteNav.tsx",
                      lineNumber: 90,
                      columnNumber: 17
                    },
                    this
                  ),
                  "Request Quote"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/applet/src/components/site/SiteNav.tsx",
                lineNumber: 84,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/SiteNav.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/site/SiteNav.tsx",
            lineNumber: 72,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/SiteNav.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/app/applet/src/components/site/SiteNav.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("footer", { className: "bg-[var(--plum-deep)] text-white/85", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-7xl px-5 py-18 md:py-24", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-14 md:gap-16 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "bg-white rounded-full p-4.5 aspect-square h-[120px] w-[120px] flex items-center justify-center shadow-soft", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "img",
            {
              src: LOGO_FULL_URL,
              alt: "Pearl Gifts",
              className: "h-full w-full object-contain transition-transform hover:scale-105 duration-300"
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/site/SiteFooter.tsx",
              lineNumber: 14,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "/app/applet/src/components/site/SiteFooter.tsx",
            lineNumber: 13,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/components/site/SiteFooter.tsx",
            lineNumber: 12,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-6 max-w-sm text-sm leading-relaxed text-white/85", children: "A Lagos-based luxury gifting atelier crafting bespoke experiences for organizations that give with intention." }, void 0, false, {
            fileName: "/app/applet/src/components/site/SiteFooter.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 flex items-center gap-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "a",
              {
                href: "https://instagram.com/pearlgifts",
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-[var(--plum-deep)] text-white transition-all duration-300 transform hover:scale-105",
                "aria-label": "Instagram",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "svg",
                  {
                    className: "h-5 w-5 fill-none stroke-current",
                    viewBox: "0 0 24 24",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }, void 0, false, {
                        fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                        lineNumber: 40,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }, void 0, false, {
                        fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                        lineNumber: 41,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" }, void 0, false, {
                        fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                        lineNumber: 42,
                        columnNumber: 19
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                lineNumber: 26,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "a",
              {
                href: "https://linkedin.com/company/pearlgifts",
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-[var(--plum-deep)] text-white transition-all duration-300 transform hover:scale-105",
                "aria-label": "LinkedIn",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("svg", { className: "h-5 w-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }, void 0, false, {
                  fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                  lineNumber: 53,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                  lineNumber: 52,
                  columnNumber: 17
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                lineNumber: 45,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "a",
              {
                href: "https://twitter.com/pearlgifts",
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-[var(--plum-deep)] text-white transition-all duration-300 transform hover:scale-105",
                "aria-label": "Twitter",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("svg", { className: "h-5 w-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }, void 0, false, {
                  fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                  lineNumber: 64,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                  lineNumber: 63,
                  columnNumber: 17
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                lineNumber: 56,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "a",
              {
                href: "https://facebook.com/pearlgifts",
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-[var(--plum-deep)] text-white transition-all duration-300 transform hover:scale-105",
                "aria-label": "Facebook",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("svg", { className: "h-5 w-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" }, void 0, false, {
                  fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                  lineNumber: 75,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                  lineNumber: 74,
                  columnNumber: 17
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                lineNumber: 67,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/SiteFooter.tsx",
            lineNumber: 25,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/SiteFooter.tsx",
          lineNumber: 11,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-medium", children: "Explore" }, void 0, false, {
            fileName: "/app/applet/src/components/site/SiteFooter.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "mt-6 space-y-3.5 text-sm", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Link,
            {
              to: l.to,
              className: "transition text-white/80 hover:text-white hover:underline decoration-[var(--gold)] decoration-2 underline-offset-4",
              children: l.label
            },
            void 0,
            false,
            {
              fileName: "/app/applet/src/components/site/SiteFooter.tsx",
              lineNumber: 89,
              columnNumber: 19
            },
            this
          ) }, l.to, false, {
            fileName: "/app/applet/src/components/site/SiteFooter.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, this)) }, void 0, false, {
            fileName: "/app/applet/src/components/site/SiteFooter.tsx",
            lineNumber: 86,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/SiteFooter.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-medium", children: "Contact" }, void 0, false, {
            fileName: "/app/applet/src/components/site/SiteFooter.tsx",
            lineNumber: 102,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "mt-6 space-y-4 text-sm text-white/80", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "mailto:hello@pearlgifts.co", className: "transition hover:text-white block", children: "hello@pearlgifts.co" }, void 0, false, {
              fileName: "/app/applet/src/components/site/SiteFooter.tsx",
              lineNumber: 107,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/site/SiteFooter.tsx",
              lineNumber: 106,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: "tel:+2348170131438", className: "transition hover:text-white block", children: "+234 817 013 1438" }, void 0, false, {
              fileName: "/app/applet/src/components/site/SiteFooter.tsx",
              lineNumber: 112,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "/app/applet/src/components/site/SiteFooter.tsx",
              lineNumber: 111,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "text-white/70", children: "12B Atelier Mews, Victoria Island, Lagos" }, void 0, false, {
              fileName: "/app/applet/src/components/site/SiteFooter.tsx",
              lineNumber: 116,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "pt-3 border-t border-white/10 mt-3 flex items-center gap-2.5 text-xs text-white/60", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Clock, { className: "h-4 w-4 text-[var(--gold)]" }, void 0, false, {
                fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                lineNumber: 118,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "Mon - Sat: 9:00 AM - 6:00 PM" }, void 0, false, {
                fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                lineNumber: 119,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/components/site/SiteFooter.tsx",
              lineNumber: 117,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/SiteFooter.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/SiteFooter.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "lg:col-span-3", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-medium", children: "Atelier Updates" }, void 0, false, {
            fileName: "/app/applet/src/components/site/SiteFooter.tsx",
            lineNumber: 126,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-6 text-xs leading-relaxed text-white/75", children: "Subscribe to receive curated guides on luxury corporate gifting, seasonal collection catalogs, and exclusive updates." }, void 0, false, {
            fileName: "/app/applet/src/components/site/SiteFooter.tsx",
            lineNumber: 129,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: (e) => e.preventDefault(), className: "mt-5 flex gap-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "input",
              {
                type: "email",
                placeholder: "Your email address",
                className: "w-full rounded-xl bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/40 border border-white/10 outline-none focus:border-[var(--gold)]/50 focus:bg-white/10 transition-colors",
                required: true
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                lineNumber: 134,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "button",
              {
                type: "submit",
                className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--gold)] text-[var(--plum-deep)] hover:opacity-90 active:scale-95 transition-all cursor-pointer",
                title: "Subscribe",
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Send, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                  lineNumber: 145,
                  columnNumber: 17
                }, this)
              },
              void 0,
              false,
              {
                fileName: "/app/applet/src/components/site/SiteFooter.tsx",
                lineNumber: 140,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/applet/src/components/site/SiteFooter.tsx",
            lineNumber: 133,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/SiteFooter.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/site/SiteFooter.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-8 text-xs text-white/70", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Pearl Gifts Atelier. All rights reserved."
        ] }, void 0, true, {
          fileName: "/app/applet/src/components/site/SiteFooter.tsx",
          lineNumber: 151,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: "Crafted in Lagos · Delivered with care." }, void 0, false, {
          fileName: "/app/applet/src/components/site/SiteFooter.tsx",
          lineNumber: 152,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/site/SiteFooter.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/site/SiteFooter.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "border-t border-white/10 bg-[var(--plum)]/50 py-6", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-7xl px-5", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap items-center justify-center gap-6 text-xs text-white/70", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { children: "Premium gifting experiences | Handcrafted with intention | Delivered across Nigeria" }, void 0, false, {
        fileName: "/app/applet/src/components/site/SiteFooter.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/components/site/SiteFooter.tsx",
        lineNumber: 157,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/privacy", className: "transition hover:text-white", children: "Privacy Policy" }, void 0, false, {
          fileName: "/app/applet/src/components/site/SiteFooter.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-white/40", children: "•" }, void 0, false, {
          fileName: "/app/applet/src/components/site/SiteFooter.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/terms", className: "transition hover:text-white", children: "Terms of Service" }, void 0, false, {
          fileName: "/app/applet/src/components/site/SiteFooter.tsx",
          lineNumber: 167,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/components/site/SiteFooter.tsx",
        lineNumber: 162,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/site/SiteFooter.tsx",
      lineNumber: 156,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/components/site/SiteFooter.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/site/SiteFooter.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function FloatingWhatsApp() {
  return null;
}
function PageLoader() {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let loadingTimeout;
    const handleLinkClick = (e) => {
      const target = e.target.closest("a");
      if (!target || target.target || target.href === window.location.href) {
        return;
      }
      const href = target.getAttribute("href");
      if (href && !href.startsWith("http") && !href.startsWith("mailto") && !href.startsWith("tel")) {
        setIsLoading(true);
        loadingTimeout = setTimeout(() => setIsLoading(false), 800);
      }
    };
    const handleFormSubmit = (e) => {
      const form = e.target;
      if (!form.action || form.action.includes(window.location.hostname)) {
        setIsLoading(true);
        loadingTimeout = setTimeout(() => setIsLoading(false), 800);
      }
    };
    document.addEventListener("click", handleLinkClick);
    document.addEventListener("submit", handleFormSubmit);
    return () => {
      document.removeEventListener("click", handleLinkClick);
      document.removeEventListener("submit", handleFormSubmit);
      clearTimeout(loadingTimeout);
    };
  }, []);
  if (!isLoading) return null;
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "fixed inset-0 z-[9999] bg-white/85 backdrop-blur-xs flex items-center justify-center pointer-events-auto", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col items-center gap-4", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative h-14 w-14", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 rounded-full border-4 border-[var(--plum)]/15" }, void 0, false, {
        fileName: "/app/applet/src/components/site/PageLoader.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 rounded-full border-4 border-transparent border-t-[var(--plum)] border-r-[var(--plum)]/60 animate-spin" }, void 0, false, {
        fileName: "/app/applet/src/components/site/PageLoader.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/site/PageLoader.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-sm font-display text-[var(--plum-deep)] tracking-wide", children: "Loading..." }, void 0, false, {
      fileName: "/app/applet/src/components/site/PageLoader.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/site/PageLoader.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/components/site/PageLoader.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("main", { className: "min-h-screen bg-[var(--background)] text-[var(--foreground)]", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageLoader, {}, void 0, false, {
      fileName: "/app/applet/src/components/site/SiteLayout.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteNav, {}, void 0, false, {
      fileName: "/app/applet/src/components/site/SiteLayout.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    children,
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteFooter, {}, void 0, false, {
      fileName: "/app/applet/src/components/site/SiteLayout.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FloatingWhatsApp, {}, void 0, false, {
      fileName: "/app/applet/src/components/site/SiteLayout.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/site/SiteLayout.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function PageHeader({
  eyebrow,
  title,
  description
}) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[var(--plum)]/12 blur-3xl" }, void 0, false, {
        fileName: "/app/applet/src/components/site/SiteLayout.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute top-20 -right-24 h-[360px] w-[360px] rounded-full bg-[var(--gold)]/15 blur-3xl" }, void 0, false, {
        fileName: "/app/applet/src/components/site/SiteLayout.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/site/SiteLayout.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-4xl px-5 text-center", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs uppercase tracking-[0.32em] text-[var(--gold)]", children: eyebrow }, void 0, false, {
        fileName: "/app/applet/src/components/site/SiteLayout.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-[var(--plum-deep)] text-balance", children: title }, void 0, false, {
        fileName: "/app/applet/src/components/site/SiteLayout.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      description ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--ink)]", children: description }, void 0, false, {
        fileName: "/app/applet/src/components/site/SiteLayout.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this) : null,
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "hairline mx-auto mt-10 w-28" }, void 0, false, {
        fileName: "/app/applet/src/components/site/SiteLayout.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/components/site/SiteLayout.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/components/site/SiteLayout.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
export {
  PageHeader as P,
  SiteLayout as S
};
