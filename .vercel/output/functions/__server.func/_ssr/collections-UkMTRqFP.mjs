import { b as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout, P as PageHeader } from "./SiteLayout-BHTfQHw3.mjs";
import { I as IMG, W as WA_LINK } from "./router-Bnacn66i.mjs";
import { G as Gift, L as Leaf, d as Sparkles, a as Award, e as PartyPopper, f as Crown, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const CATEGORIES = [{
  name: "Corporate Gifts",
  desc: "End-of-year hampers, onboarding sets, executive collections built for scale.",
  img: IMG.product1,
  icon: Gift
}, {
  name: "Bamboo Gift Sets",
  desc: "Our signature sustainable luxury — bamboo cases lined in silk.",
  img: IMG.product2,
  icon: Leaf
}, {
  name: "Personalized Keepsakes",
  desc: "Engraved leather, monogrammed pieces, bespoke wrapping.",
  img: IMG.product3,
  icon: Sparkles
}, {
  name: "Awards & Plaques",
  desc: "Crystal, wood and metal awards crafted for milestone moments.",
  img: IMG.product4,
  icon: Award
}, {
  name: "Event Souvenirs",
  desc: "Memorable take-homes for conferences, AGMs and galas.",
  img: IMG.product5,
  icon: PartyPopper
}, {
  name: "Executive Hampers",
  desc: "Refined hampers curated for the boardroom and beyond.",
  img: IMG.product1,
  icon: Crown
}];
const FEATURED = [{
  name: "Heritage Bamboo Reserve",
  price: "From ₦185,000",
  img: IMG.product2,
  tag: "Signature"
}, {
  name: "Onyx Executive Folio",
  price: "From ₦142,000",
  img: IMG.product1,
  tag: "Bestseller"
}, {
  name: "Monogram Atelier Set",
  price: "From ₦96,500",
  img: IMG.product3,
  tag: "New"
}, {
  name: "Crystal Apex Award",
  price: "From ₦210,000",
  img: IMG.product4,
  tag: "Bespoke"
}];
function CollectionsPage() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteLayout, { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageHeader, { eyebrow: "The Collections", title: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      "Curated gifting, shaped to",
      " ",
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("em", { className: "not-italic text-gradient-gold", children: "your occasion" }, void 0, false, {
        fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
        lineNumber: 61,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
      lineNumber: 59,
      columnNumber: 52
    }, this), description: "Every Pearl Gifts collection is designed in-house and finished by hand. Choose a starting point — every piece can be tailored to your brand, recipient and budget." }, void 0, false, {
      fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "pb-16 md:pb-20", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-7xl px-5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: CATEGORIES.map((c, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("article", { className: "group relative overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-luxe", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: c.img, alt: c.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" }, void 0, false, {
        fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
        lineNumber: 69,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/85 via-[var(--plum-deep)]/15 to-transparent" }, void 0, false, {
        fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
        lineNumber: 70,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute top-5 left-5 grid h-11 w-11 place-items-center rounded-full glass", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(c.icon, { className: "h-5 w-5 text-[var(--plum-deep)]" }, void 0, false, {
        fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
        lineNumber: 72,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
        lineNumber: 71,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "absolute top-5 right-5 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--plum-deep)]", children: [
        "0",
        i + 1
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
        lineNumber: 74,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-x-5 bottom-5 text-white", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "font-display text-2xl", children: c.name }, void 0, false, {
          fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
          lineNumber: 78,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-1.5 text-sm text-white/90 line-clamp-2", children: c.desc }, void 0, false, {
          fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
          lineNumber: 79,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: WA_LINK, target: "_blank", rel: "noreferrer", className: "mt-4 inline-flex items-center gap-2 text-[var(--gold)] text-sm", children: [
          "Enquire ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
            lineNumber: 81,
            columnNumber: 31
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
          lineNumber: 80,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
        lineNumber: 77,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
      lineNumber: 68,
      columnNumber: 17
    }, this) }, c.name, false, {
      fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
      lineNumber: 67,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
      lineNumber: 66,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-14 md:py-20 bg-[var(--cream)]", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-7xl px-5", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-xs uppercase tracking-[0.3em] text-[var(--gold)]", children: "Featured Pieces" }, void 0, false, {
            fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
            lineNumber: 94,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance", children: "House selections from the atelier" }, void 0, false, {
            fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
            lineNumber: 97,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: WA_LINK, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 text-sm text-[var(--plum)] hover:text-[var(--plum-deep)]", children: [
          "Commission a piece ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
            lineNumber: 102,
            columnNumber: 34
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
          lineNumber: 101,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
        lineNumber: 92,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: FEATURED.map((f) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("article", { className: "group", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative aspect-[4/5] overflow-hidden rounded-3xl bg-[var(--secondary)]", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: f.img, alt: f.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-[1.06]" }, void 0, false, {
            fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
            lineNumber: 108,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "absolute top-4 left-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--plum-deep)]", children: f.tag }, void 0, false, {
            fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
            lineNumber: 109,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
          lineNumber: 107,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-5", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "font-display text-lg text-[var(--plum-deep)]", children: f.name }, void 0, false, {
          fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
          lineNumber: 114,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
          lineNumber: 113,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-2 text-xs uppercase tracking-widest text-[var(--ink)]", children: "Hand-finished · Customizable" }, void 0, false, {
          fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
          lineNumber: 116,
          columnNumber: 17
        }, this)
      ] }, f.name, true, {
        fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
        lineNumber: 106,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
        lineNumber: 105,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
      lineNumber: 91,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-12 md:py-16", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-5xl px-5 text-center", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "font-display text-3xl md:text-4xl text-[var(--plum-deep)] text-balance", children: "Don't see your occasion?" }, void 0, false, {
        fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
        lineNumber: 126,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mx-auto mt-4 max-w-xl text-[var(--ink)]", children: "Every Pearl Gifts piece can be reimagined. Share your details — we'll come back with a bespoke proposal within 72 hours." }, void 0, false, {
        fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
        lineNumber: 129,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-xl bg-[var(--plum-deep)] hover:bg-[var(--plum)] px-7 py-3.5 text-sm font-medium text-white shadow-soft transition-all duration-300", children: [
          "Contact Us ",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
            lineNumber: 135,
            columnNumber: 26
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: WA_LINK, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.02]", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("svg", { viewBox: "0 0 24 24", className: "h-4 w-4 fill-current text-white", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { d: "M12.031 0C5.408 0 .025 5.385.015 12.013c0 2.118.553 4.185 1.602 5.998L0 24l6.157-1.615c1.768.966 3.758 1.472 5.86 1.474H12.03c6.621 0 12.008-5.384 12.019-12.013C24.06 5.385 18.654 0 12.031 0zm7.1 16.963c-.29.818-1.524 1.572-2.106 1.674-.582.102-1.164.204-4.805-1.226-3.64-1.43-5.918-5.071-6.1-5.317-.182-.245-1.493-1.956-1.493-3.73s.927-2.656 1.255-3.004c.328-.348.728-.429.983-.429s.51.01.728.02c.219.01.51-.082.802.614.291.695.983 2.41 1.055 2.56.073.15.111.327.01.531-.1.204-.146.327-.291.511-.146.184-.31.409-.437.541-.146.15-.3.314-.128.614.173.299.764 1.26 1.64 2.039.873.778 1.61 1.019 1.91 1.15s.473.102.646-.092c.173-.194.747-.868.946-1.165.2-.297.4-.245.674-.143s1.748.828 2.049.981c.3.153.51.225.583.348.073.123.073.715-.218 1.533z" }, void 0, false, {
            fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
            lineNumber: 139,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
            lineNumber: 138,
            columnNumber: 15
          }, this),
          "Message on WhatsApp"
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
          lineNumber: 137,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
        lineNumber: 133,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
      lineNumber: 125,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
      lineNumber: 124,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/collections.tsx?tsr-split=component",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
export {
  CollectionsPage as component
};
