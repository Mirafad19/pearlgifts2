import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, b as jsxDevRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-DS3cnxP5.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-7xl font-display text-foreground", children: "404" }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-4 text-muted-foreground", children: "This page can't be found." }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Link,
      {
        to: "/",
        className: "mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground",
        children: "Return Home"
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 21,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
function ErrorComponent({ error, reset }) {
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h1", { className: "text-xl font-display", children: "Something went wrong" }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "button",
      {
        onClick: () => {
          router2.invalidate();
          reset();
        },
        className: "mt-6 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground",
        children: "Try again"
      },
      void 0,
      false,
      {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 41,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
const Route$b = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pearl Gifts — Thoughtfully Crafted Luxury Gifting" },
      {
        name: "description",
        content: "Pearl Gifts curates bespoke corporate gifts, personalized keepsakes, awards and bamboo gift sets for organizations who give with intention."
      },
      { property: "og:title", content: "Pearl Gifts — Luxury Corporate & Personal Gifting" },
      {
        property: "og:description",
        content: "Bespoke gifting for boardrooms, milestones and meaningful moments."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("head", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(HeadContent, {}, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("body", { children: [
      children,
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Scripts, {}, void 0, false, {
        fileName: "/app/applet/src/routes/__root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/__root.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}
function RootComponent() {
  const { queryClient } = Route$b.useRouteContext();
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Outlet, {}, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 108,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/applet/src/routes/__root.tsx",
    lineNumber: 107,
    columnNumber: 5
  }, this);
}
const $$splitComponentImporter$a = () => import("./terms-2uv3gxGp.mjs");
const Route$a = createFileRoute("/terms")({
  head: () => ({
    meta: [{
      title: "Terms of Service — Pearl Gifts"
    }, {
      name: "description",
      content: "Terms of Service for Pearl Gifts Atelier. Please read before placing an order."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./submit-review-kPfMeyVm.mjs");
const Route$9 = createFileRoute("/submit-review")({
  head: () => ({
    meta: [{
      title: "Submit Your Review — Pearl Gifts"
    }, {
      name: "description",
      content: "Share your experience with Pearl Gifts. Submit your testimonial and help us continue to serve with excellence."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const LOGO_FULL_URL = "https://www.image2url.com/r2/default/images/1780426424020-9dc0dbca-dabf-460a-af11-79ccaef84e76.png";
const IMG = {
  award: "https://www.image2url.com/r2/default/images/1780426693316-16772d41-f13b-4baa-83e4-02cfe3991905.jpg",
  product1: "https://www.image2url.com/r2/default/images/1780426887281-37e05bfe-a432-41ef-bb60-a093455146ba.jpg",
  product2: "https://img.sanishtech.com/u/4e77107eb90725adb4a707c519219675.jpg",
  product3: "https://www.image2url.com/r2/default/images/1780427391097-0db9ee4a-eb72-4fc8-abfe-00376be2d9a1.jpg",
  product4: "https://www.image2url.com/r2/default/images/1780427485573-f54d394c-3161-46bc-821f-41950a30fd50.jpg",
  product5: "https://www.image2url.com/r2/default/images/1780427455850-5e7eae26-3b48-426e-9a54-7fbc7bc91c61.jpg"
};
const VIDEO = {
  reel1: "https://www.image2url.com/r2/default/videos/1780427481640-b54cb389-7c45-4230-a740-e448cd42e5a8.mp4",
  reel2: "https://www.image2url.com/r2/default/videos/1780427474116-9ba79ba6-6db3-4ce5-a320-017f8cc433a8.mp4"
};
const WA_LINK = "https://wa.me/2348170131438?text=Hello%20Pearl%20Gifts%2C%20I%27d%20like%20to%20discuss%20a%20gifting%20order.";
const NAV_LINKS = [
  { label: "Collections", to: "/collections" },
  { label: "Corporate", to: "/corporate" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Recognition", to: "/recognition" },
  { label: "FAQs", to: "/faq" },
  { label: "Contact", to: "/contact" }
];
const $$splitComponentImporter$8 = () => import("./recognition-DXOiqZH_.mjs");
const Route$8 = createFileRoute("/recognition")({
  head: () => ({
    meta: [{
      title: "Recognition & Awards — Pearl Gifts"
    }, {
      name: "description",
      content: "Pearl Gifts has been recognized as one of Africa's leading luxury gifting houses. A look at the awards and milestones along the way."
    }, {
      property: "og:title",
      content: "Recognition & Awards — Pearl Gifts"
    }, {
      property: "og:description",
      content: "Awards, milestones and client recognition for Pearl Gifts."
    }, {
      property: "og:image",
      content: IMG.award
    }, {
      name: "twitter:image",
      content: IMG.award
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./privacy-DE-k7Yta.mjs");
const Route$7 = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — Pearl Gifts"
    }, {
      name: "description",
      content: "Privacy Policy for Pearl Gifts Atelier. Learn how we protect your data."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./gallery-De0kVrWi.mjs");
const Route$6 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Atelier Gallery — Pearl Gifts"
    }, {
      name: "description",
      content: "A glimpse inside Pearl Gifts' Lagos atelier: recent commissions, bespoke bamboo cases, engraved keepsakes and the people behind each gift."
    }, {
      property: "og:title",
      content: "Atelier Gallery — Pearl Gifts"
    }, {
      property: "og:description",
      content: "Recent commissions and behind-the-scenes from our Lagos atelier."
    }, {
      property: "og:image",
      content: IMG.product3
    }, {
      name: "twitter:image",
      content: IMG.product3
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./faq-CDOzYdDe.mjs");
const Route$5 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQs — Pearl Gifts"
    }, {
      name: "description",
      content: "Frequently asked questions about Pearl Gifts, our process, delivery, customization, and corporate gifting programs."
    }, {
      property: "og:title",
      content: "FAQs — Pearl Gifts"
    }, {
      property: "og:description",
      content: "Answers to common questions about Pearl Gifts."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./corporate-PC25Dlyn.mjs");
const Route$4 = createFileRoute("/corporate")({
  head: () => ({
    meta: [{
      title: "Corporate Gifting Programs — Pearl Gifts"
    }, {
      name: "description",
      content: "End-to-end corporate gifting for HR, marketing and executive teams: bespoke onboarding kits, year-end hampers, partner appreciation and retainers."
    }, {
      property: "og:title",
      content: "Corporate Gifting — Pearl Gifts"
    }, {
      property: "og:description",
      content: "Managed corporate gifting programs with a single point of contact."
    }, {
      property: "og:image",
      content: IMG.product1
    }, {
      name: "twitter:image",
      content: IMG.product1
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-C_zQXSEf.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Pearl Gifts"
    }, {
      name: "description",
      content: "Reach Pearl Gifts curators directly. Most briefs receive a thoughtful response within two working hours."
    }, {
      property: "og:title",
      content: "Contact — Pearl Gifts"
    }, {
      property: "og:description",
      content: "Start your gifting brief with a Pearl Gifts curator."
    }, {
      property: "og:image",
      content: IMG.product5
    }, {
      name: "twitter:image",
      content: IMG.product5
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./collections-UkMTRqFP.mjs");
const Route$2 = createFileRoute("/collections")({
  head: () => ({
    meta: [{
      title: "Collections — Pearl Gifts Atelier"
    }, {
      name: "description",
      content: "Explore Pearl Gifts collections: corporate hampers, bamboo gift sets, personalized keepsakes, awards, event souvenirs and more — handcrafted in Lagos."
    }, {
      property: "og:title",
      content: "Collections — Pearl Gifts"
    }, {
      property: "og:description",
      content: "Curated gift collections for corporate, personal and milestone moments."
    }, {
      property: "og:image",
      content: IMG.product2
    }, {
      name: "twitter:image",
      content: IMG.product2
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-SSQqSLCs.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Pearl Gifts — Our Story"
    }, {
      name: "description",
      content: "Meet Pearl Gifts: a Lagos-based luxury gifting atelier crafting bespoke experiences for organizations that give with intention."
    }, {
      property: "og:title",
      content: "About Pearl Gifts"
    }, {
      property: "og:description",
      content: "Our story, values, and mission to elevate gifting."
    }, {
      property: "og:image",
      content: IMG.product1
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BmuBXdQE.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Pearl Gifts — Luxury Corporate & Bespoke Gifting Atelier"
    }, {
      name: "description",
      content: "Pearl Gifts designs, crafts and delivers bespoke corporate hampers, bamboo gift sets and personalized keepsakes for organizations that give with intention."
    }, {
      property: "og:title",
      content: "Pearl Gifts — Luxury Gifting Atelier"
    }, {
      property: "og:description",
      content: "Bespoke corporate gifts and personalized keepsakes, handcrafted in Lagos."
    }, {
      property: "og:image",
      content: IMG.product1
    }, {
      name: "twitter:image",
      content: IMG.product1
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TermsRoute = Route$a.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$b
});
const SubmitReviewRoute = Route$9.update({
  id: "/submit-review",
  path: "/submit-review",
  getParentRoute: () => Route$b
});
const RecognitionRoute = Route$8.update({
  id: "/recognition",
  path: "/recognition",
  getParentRoute: () => Route$b
});
const PrivacyRoute = Route$7.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$b
});
const GalleryRoute = Route$6.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$b
});
const FaqRoute = Route$5.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$b
});
const CorporateRoute = Route$4.update({
  id: "/corporate",
  path: "/corporate",
  getParentRoute: () => Route$b
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$b
});
const CollectionsRoute = Route$2.update({
  id: "/collections",
  path: "/collections",
  getParentRoute: () => Route$b
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$b
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CollectionsRoute,
  ContactRoute,
  CorporateRoute,
  FaqRoute,
  GalleryRoute,
  PrivacyRoute,
  RecognitionRoute,
  SubmitReviewRoute,
  TermsRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  IMG as I,
  LOGO_FULL_URL as L,
  NAV_LINKS as N,
  VIDEO as V,
  WA_LINK as W,
  router as r
};
