import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { WA_LINK } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — Pearl Gifts" },
      {
        name: "description",
        content:
          "Frequently asked questions about Pearl Gifts, our process, delivery, customization, and corporate gifting programs.",
      },
      { property: "og:title", content: "FAQs — Pearl Gifts" },
      { property: "og:description", content: "Answers to common questions about Pearl Gifts." },
    ],
  }),
  component: FAQPage,
});

const FAQS = [
  {
    category: "Getting Started",
    items: [
      {
        q: "What's the minimum order for a bespoke gift?",
        a: "We work with orders from 1 unit upwards. For corporate programs, our minimum is 25 pieces per order. Individual customers can commission single pieces without any minimum.",
      },
      {
        q: "How long does the process take from concept to delivery?",
        a: "For standard collections, we can deliver within 10-14 business days. Bespoke commissions typically take 3-4 weeks depending on customization complexity. Rush orders are available for urgent timelines.",
      },
      {
        q: "Do you ship nationwide?",
        a: "Yes. We deliver across all 36 states in Nigeria with white-glove insured logistics. International shipping is available for select destinations — contact us for a quote.",
      },
      {
        q: "What's your pricing structure?",
        a: "Pricing varies by collection and customization. We offer transparent pricing with no hidden fees. Most pieces range from ₦50,000 to ₦500,000+. Request a quote for exact pricing based on your request.",
      },
    ],
  },
  {
    category: "Customization & Design",
    items: [
      {
        q: "Can I personalize gifts with company logos or names?",
        a: "Absolutely. We specialize in custom engraving, embroidery, embossing, and branded packaging. Our design studio will work with you to integrate your brand seamlessly.",
      },
      {
        q: "What materials do you work with?",
        a: "Primarily bamboo, full-grain leather, crystal, polished wood, brass, and silk. All materials are sourced from verified artisans and suppliers. Custom material requests are evaluated case-by-case.",
      },
      {
        q: "Can I see samples before ordering?",
        a: "For corporate programs and larger orders, we send sample pieces for approval before full production. For smaller commissions, we provide detailed moodboards and product specs.",
      },
      {
        q: "How many design iterations do you offer?",
        a: "Up to 3 design revisions are included in the consultation phase. Additional revisions are charged per our design fee schedule.",
      },
    ],
  },
  {
    category: "Corporate Programs",
    items: [
      {
        q: "What kind of corporate gifting programs do you run?",
        a: "We handle year-end hampers, onboarding kits, executive appreciation sets, partner/vendor gifting, event souvenirs, and quarterly retainers with stocked SKUs.",
      },
      {
        q: "Do you manage the entire process or just supply gifts?",
        a: "We manage everything — from design to dispatch. Our dedicated team handles design, sourcing, quality control, and white-glove delivery. You have a single point of contact throughout.",
      },
      {
        q: "Can you handle variable recipient names/addresses?",
        a: "Yes. We can personalize each piece with recipient names, titles, or addresses. Our system tracks customization data to ensure accuracy across 1,000+ pieces.",
      },
      {
        q: "What happens if I need to adjust quantities mid-production?",
        a: "Contact our team immediately. Small adjustments (±5%) are usually accommodated without delay. Larger changes may push timelines or incur fees.",
      },
    ],
  },
  {
    category: "Delivery & Returns",
    items: [
      {
        q: "Is delivery insured?",
        a: "Yes. All shipments are fully insured against loss or damage. We track deliveries in real-time and provide proof of delivery.",
      },
      {
        q: "What if a gift arrives damaged?",
        a: "We replace damaged pieces at no cost. Report damage within 48 hours of delivery with photos for a hassle-free replacement.",
      },
      {
        q: "Can I return or exchange items?",
        a: "Custom items cannot be returned, as they're made-to-order. We can discuss modifications or replacements if there's an error on our end.",
      },
      {
        q: "Do you handle gift wrapping or unboxing?",
        a: "Hand-wrapping and luxury packaging are included. For corporate orders, we can also arrange unboxing experiences or presentation video services.",
      },
    ],
  },
  {
    category: "General",
    items: [
      {
        q: "Are your products eco-friendly?",
        a: "We prioritize sustainable materials — bamboo, recycled packaging, and ethical sourcing. We're committed to minimizing environmental impact across our supply chain.",
      },
      {
        q: "Can I visit the atelier?",
        a: "Yes, by appointment. We welcome visits to see our workspace, meet the team, and discuss your project. Contact us to schedule.",
      },
      {
        q: "Do you work with international brands or non-profit organizations?",
        a: "Yes to both. We've served Fortune 500 companies, startups, nonprofits, and government institutions. Bulk rates and partnerships are available.",
      },
      {
        q: "What if I have a question not listed here?",
        a: "Reach out to hello@pearlgifts.co or message our team on WhatsApp. We respond to most inquiries within 2 hours during business hours.",
      },
    ],
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {FAQS.map((section, sectionIdx) => (
        <div key={section.category}>
          <h3 className="mb-6 font-display text-2xl text-[var(--plum-deep)]">{section.category}</h3>
          <div className="space-y-4">
            {section.items.map((item, itemIdx) => {
              const id = `${sectionIdx}-${itemIdx}`;
              const isOpen = openIndex === id;
              return (
                <button
                  key={id}
                  onClick={() => setOpenIndex(isOpen ? null : id)}
                  className="w-full text-left rounded-2xl border border-[var(--plum)]/15 bg-white p-6 shadow-soft transition hover:shadow-luxe hover:border-[var(--plum)]/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-display text-lg text-[var(--plum-deep)]">{item.q}</h4>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[var(--gold)] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {isOpen && <p className="mt-4 text-[var(--ink)] leading-relaxed">{item.a}</p>}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function FAQPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="FAQs"
        title={
          <>
            Questions about your <em className="not-italic text-gradient-gold">perfect gift</em>
          </>
        }
        description="Answers to common questions about our process, customization, delivery, and corporate programs. Can't find what you're looking for?"
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <FAQAccordion />

          <div className="mt-20 rounded-3xl bg-[var(--cream)] p-10 md:p-14 text-center">
            <h3 className="font-display text-2xl md:text-3xl text-[var(--plum-deep)]">
              Didn't find your answer?
            </h3>
            <p className="mt-4 text-[var(--ink)] font-sans">
              Chat with our team directly — we're here to help with any question, no matter how
              specific.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.02]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.031 0C5.408 0 .025 5.385.015 12.013c0 2.118.553 4.185 1.602 5.998L0 24l6.157-1.615c1.768.966 3.758 1.472 5.86 1.474H12.03c6.621 0 12.008-5.384 12.019-12.013C24.06 5.385 18.654 0 12.031 0zm7.1 16.963c-.29.818-1.524 1.572-2.106 1.674-.582.102-1.164.204-4.805-1.226-3.64-1.43-5.918-5.071-6.1-5.317-.182-.245-1.493-1.956-1.493-3.73s.927-2.656 1.255-3.004c.328-.348.728-.429.983-.429s.51.01.728.02c.219.01.51-.082.802.614.291.695.983 2.41 1.055 2.56.073.15.111.327.01.531-.1.204-.146.327-.291.511-.146.184-.31.409-.437.541-.146.15-.3.314-.128.614.173.299.764 1.26 1.64 2.039.873.778 1.61 1.019 1.91 1.15s.473.102.646-.092c.173-.194.747-.868.946-1.165.2-.297.4-.245.674-.143s1.748.828 2.049.981c.3.153.51.225.583.348.073.123.073.715-.218 1.533z" />
                </svg>
                Message our Team
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--plum)]/20 px-7 py-3.5 text-sm font-semibold text-[var(--plum-deep)] hover:bg-[var(--plum)]/5 transition-all duration-300"
              >
                Send an Email <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
