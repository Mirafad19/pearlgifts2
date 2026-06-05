import { b as jsxDevRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, P as PageHeader } from "./SiteLayout-BHTfQHw3.mjs";
import { W as WA_LINK } from "./router-Bnacn66i.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function SubmitReviewPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const emailBody = `
New Review Submission:

Name: ${formData.get("name")}
Company/Organization: ${formData.get("company")}
Position/Role: ${formData.get("position")}
Email: ${formData.get("email")}
Phone: ${formData.get("phone")}

Review:
${formData.get("review")}

---
Submitted on: ${(/* @__PURE__ */ new Date()).toLocaleString()}
    `;
    window.location.href = `mailto:hello@pearlgifts.co?subject=New Client Review Submission&body=${encodeURIComponent(emailBody)}`;
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SiteLayout, { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageHeader, { eyebrow: "Share Your Experience", title: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      "Help us improve by ",
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("em", { className: "not-italic text-gradient-gold", children: "sharing your story" }, void 0, false, {
        fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
        lineNumber: 32,
        columnNumber: 32
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
      lineNumber: 31,
      columnNumber: 58
    }, this), description: "Your feedback means everything to us. Tell us about your experience with Pearl Gifts." }, void 0, false, {
      fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mx-auto max-w-3xl px-5", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "rounded-3xl bg-[var(--cream)] p-10 md:p-14 shadow-soft", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "font-display text-2xl text-[var(--plum-deep)]", children: "Share Your Review" }, void 0, false, {
          fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-3 text-[var(--ink)]", children: "Your testimonial helps other organizations discover Pearl Gifts and understand the quality of our work." }, void 0, false, {
          fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("form", { onSubmit: handleSubmit, className: "mt-10 space-y-6", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "block text-sm font-medium text-[var(--plum-deep)] mb-2", children: "Full Name" }, void 0, false, {
                fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
                lineNumber: 47,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { required: true, type: "text", name: "name", placeholder: "Your name", className: "w-full rounded-2xl border-0 bg-white px-5 py-3 text-sm text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--plum)]/30" }, void 0, false, {
                fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
                lineNumber: 50,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
              lineNumber: 46,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "block text-sm font-medium text-[var(--plum-deep)] mb-2", children: "Company/Organization" }, void 0, false, {
                fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
                lineNumber: 53,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { required: true, type: "text", name: "company", placeholder: "Your organization", className: "w-full rounded-2xl border-0 bg-white px-5 py-3 text-sm text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--plum)]/30" }, void 0, false, {
                fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
                lineNumber: 56,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
              lineNumber: 52,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
            lineNumber: 45,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "block text-sm font-medium text-[var(--plum-deep)] mb-2", children: "Position/Role" }, void 0, false, {
                fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
                lineNumber: 62,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { required: true, type: "text", name: "position", placeholder: "e.g. Head of People", className: "w-full rounded-2xl border-0 bg-white px-5 py-3 text-sm text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--plum)]/30" }, void 0, false, {
                fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
                lineNumber: 65,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
              lineNumber: 61,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "block text-sm font-medium text-[var(--plum-deep)] mb-2", children: "Email Address" }, void 0, false, {
                fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
                lineNumber: 68,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { required: true, type: "email", name: "email", placeholder: "your@email.com", className: "w-full rounded-2xl border-0 bg-white px-5 py-3 text-sm text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--plum)]/30" }, void 0, false, {
                fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
                lineNumber: 71,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
              lineNumber: 67,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "block text-sm font-medium text-[var(--plum-deep)] mb-2", children: "Phone Number" }, void 0, false, {
              fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
              lineNumber: 76,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { type: "tel", name: "phone", placeholder: "+234 817 013 1438", className: "w-full rounded-2xl border-0 bg-white px-5 py-3 text-sm text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--plum)]/30" }, void 0, false, {
              fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
              lineNumber: 79,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "block text-sm font-medium text-[var(--plum-deep)] mb-2", children: "Your Review" }, void 0, false, {
              fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
              lineNumber: 83,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("textarea", { required: true, name: "review", rows: 6, placeholder: "Tell us about your experience with Pearl Gifts. What was memorable? How did our work impact your organization?", className: "w-full rounded-2xl border-0 bg-white px-5 py-3 text-sm text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--plum)]/30 resize-none" }, void 0, false, {
              fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
              lineNumber: 86,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-wrap gap-4 pt-4", children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { type: "submit", className: "inline-flex items-center gap-2 rounded-xl bg-[var(--plum-deep)] hover:bg-[var(--plum)] px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 cursor-pointer", children: [
              "Submit Review ",
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
                lineNumber: 91,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
              lineNumber: 90,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: WA_LINK, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.02]", children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("svg", { viewBox: "0 0 24 24", className: "h-4 w-4 fill-current text-white", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("path", { d: "M12.031 0C5.408 0 .025 5.385.015 12.013c0 2.118.553 4.185 1.602 5.998L0 24l6.157-1.615c1.768.966 3.758 1.472 5.86 1.474H12.03c6.621 0 12.008-5.384 12.019-12.013C24.06 5.385 18.654 0 12.031 0zm7.1 16.963c-.29.818-1.524 1.572-2.106 1.674-.582.102-1.164.204-4.805-1.226-3.64-1.43-5.918-5.071-6.1-5.317-.182-.245-1.493-1.956-1.493-3.73s.927-2.656 1.255-3.004c.328-.348.728-.429.983-.429s.51.01.728.02c.219.01.51-.082.802.614.291.695.983 2.41 1.055 2.56.073.15.111.327.01.531-.1.204-.146.327-.291.511-.146.184-.31.409-.437.541-.146.15-.3.314-.128.614.173.299.764 1.26 1.64 2.039.873.778 1.61 1.019 1.91 1.15s.473.102.646-.092c.173-.194.747-.868.946-1.165.2-.297.4-.245.674-.143s1.748.828 2.049.981c.3.153.51.225.583.348.073.123.073.715-.218 1.533z" }, void 0, false, {
                fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
                lineNumber: 95,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
                lineNumber: 94,
                columnNumber: 19
              }, this),
              "Chat with us instead"
            ] }, void 0, true, {
              fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
              lineNumber: 93,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "mt-6 text-xs text-[var(--ink)]/60", children: "By submitting this review, you agree that Pearl Gifts may feature your testimonial on our website with your name and organization." }, void 0, false, {
            fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
            lineNumber: 101,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-12 rounded-3xl bg-white p-8 md:p-10 text-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-[var(--ink)]", children: [
        "Have questions?",
        " ",
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: WA_LINK, target: "_blank", rel: "noreferrer", className: "font-medium text-[var(--plum)] hover:text-[var(--plum-deep)]", children: "Reach out to us on WhatsApp" }, void 0, false, {
          fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
          lineNumber: 111,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
        lineNumber: 109,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
        lineNumber: 108,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/routes/submit-review.tsx?tsr-split=component",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
export {
  SubmitReviewPage as component
};
