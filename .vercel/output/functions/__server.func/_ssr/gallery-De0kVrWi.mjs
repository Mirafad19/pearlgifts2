import { r as reactExports, b as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, P as PageHeader } from "./SiteLayout-BHTfQHw3.mjs";
import { I as IMG, V as VIDEO } from "./router-Bnacn66i.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const TILES = [{
  kind: "image",
  src: IMG.product1,
  alt: "Bespoke corporate hamper",
  span: "md:col-span-2 md:row-span-2",
  category: "Corporate Gifts"
}, {
  kind: "video",
  src: VIDEO.reel1,
  span: "",
  category: "Presentation"
}, {
  kind: "image",
  src: IMG.product2,
  alt: "Bamboo signature set",
  category: "High End Gift"
}, {
  kind: "image",
  src: IMG.product3,
  alt: "Engraved keepsake detail",
  span: "md:row-span-2",
  category: "Gift For Her"
}, {
  kind: "video",
  src: VIDEO.reel2,
  span: "",
  category: "Delivery"
}, {
  kind: "image",
  src: IMG.product4,
  alt: "Crystal award piece",
  category: "Wooden Plaques"
}, {
  kind: "image",
  src: IMG.product5,
  alt: "Presentation set close-up",
  category: "Bulk Orders"
}];
const CATEGORIES = ["All", "Corporate Gifts", "High End Gift", "Gift For Her", "Gift For Him", "Presentation", "Wooden Plaques", "Wallet", "Bulk Orders", "Towel", "Teachers Gifts", "Cufflinks", "Pillows", "Mugs", "Reviews", "Delivery"];
function GalleryPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const filteredTiles = activeCategory === "All" ? TILES : TILES.filter((t) => t.category === activeCategory);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteLayout, { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageHeader, { eyebrow: "Atelier Gallery", title: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      "A glimpse inside our",
      " ",
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("em", { className: "not-italic text-gradient-gold", children: "recent commissions" }, void 0, false, {
        fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
        lineNumber: 61,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
      lineNumber: 59,
      columnNumber: 52
    }, this), description: "Every piece below was hand-finished in our Lagos atelier and delivered within the past quarter." }, void 0, false, {
      fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "pb-14 md:pb-20", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-7xl px-5", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-12 flex flex-wrap justify-center gap-3", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { onClick: () => setActiveCategory(cat), className: `rounded-xl px-6 py-2.5 text-sm font-medium transition ${activeCategory === cat ? "bg-[var(--plum-deep)] text-white shadow-soft" : "border border-[var(--plum)]/20 text-[var(--plum)] hover:bg-[var(--plum)]/5"}`, children: cat }, cat, false, {
        fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
        lineNumber: 67,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid auto-rows-[240px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[260px]", children: filteredTiles.map((t, i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: `group relative overflow-hidden rounded-3xl bg-[var(--secondary)] ${t.span ?? ""}`, children: [
        t.kind === "image" ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("img", { src: t.src, alt: t.alt, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" }, void 0, false, {
          fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
          lineNumber: 74,
          columnNumber: 39
        }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("video", { src: t.src, autoPlay: true, muted: true, loop: true, playsInline: true, className: "h-full w-full object-cover" }, void 0, false, {
          fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
          lineNumber: 74,
          columnNumber: 188
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/65 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" }, void 0, false, {
          fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
          lineNumber: 75,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-x-5 bottom-5 translate-y-3 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-xs uppercase tracking-widest text-[var(--gold)]", children: "Commission" }, void 0, false, {
            fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
            lineNumber: 77,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "font-display text-lg", children: [
            "Bespoke piece №",
            i + 1
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
            lineNumber: 78,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
          lineNumber: 76,
          columnNumber: 17
        }, this)
      ] }, i, true, {
        fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
        lineNumber: 73,
        columnNumber: 42
      }, this)) }, void 0, false, {
        fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
      lineNumber: 65,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/gallery.tsx?tsr-split=component",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
export {
  GalleryPage as component
};
