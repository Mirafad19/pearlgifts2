import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Award, Leaf, Crown, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { IMG, VIDEO, WA_LINK } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pearl Gifts — Luxury Corporate & Bespoke Gifting Atelier" },
      {
        name: "description",
        content:
          "Pearl Gifts designs, crafts and delivers bespoke corporate hampers, bamboo gift sets and personalized keepsakes for organizations that give with intention.",
      },
      { property: "og:title", content: "Pearl Gifts — Luxury Gifting Atelier" },
      {
        property: "og:description",
        content: "Bespoke corporate gifts and personalized keepsakes, handcrafted in Lagos.",
      },
      { property: "og:image", content: IMG.product1 },
      { name: "twitter:image", content: IMG.product1 },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-18">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full bg-[var(--plum)]/15 blur-3xl" />
        <div className="absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[var(--gold)]/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-xl border border-[var(--plum)]/15 bg-white/60 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[var(--plum-deep)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />A Lagos luxury gifting
            atelier
          </span>
          <h1 className="mt-8 font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02] text-[var(--plum-deep)] text-balance">
            Thoughtfully <em className="not-italic text-gradient-gold">Crafted</em> Gifts
            <br className="hidden sm:block" /> For Every Occasion
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--ink)]">
            From boardroom milestones to founder appreciation hampers — Pearl Gifts designs, sources
            and hand-finishes bespoke gift experiences that carry the weight of your brand.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/collections"
              className="group inline-flex items-center gap-3 rounded-xl bg-[var(--plum-deep)] hover:bg-[var(--plum)] px-7 py-4 text-sm font-medium tracking-wide text-white shadow-soft transition-all duration-300"
            >
              Explore Collections
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-7 py-4 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.02]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.031 0C5.408 0 .025 5.385.015 12.013c0 2.118.553 4.185 1.602 5.998L0 24l6.157-1.615c1.768.966 3.758 1.472 5.86 1.474H12.03c6.621 0 12.008-5.384 12.019-12.013C24.06 5.385 18.654 0 12.031 0zm7.1 16.963c-.29.818-1.524 1.572-2.106 1.674-.582.102-1.164.204-4.805-1.226-3.64-1.43-5.918-5.071-6.1-5.317-.182-.245-1.493-1.956-1.493-3.73s.927-2.656 1.255-3.004c.328-.348.728-.429.983-.429s.51.01.728.02c.219.01.51-.082.802.614.291.695.983 2.41 1.055 2.56.073.15.111.327.01.531-.1.204-.146.327-.291.511-.146.184-.31.409-.437.541-.146.15-.3.314-.128.614.173.299.764 1.26 1.64 2.039.873.778 1.61 1.019 1.91 1.15s.473.102.646-.092c.173-.194.747-.868.946-1.165.2-.297.4-.245.674-.143s1.748.828 2.049.981c.3.153.51.225.583.348.073.123.073.715-.218 1.533z"/>
              </svg>
              Speak with our Team
            </a>
          </div>
          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-[var(--plum)]/10 pt-10">
            {[
              ["500+", "Brands served"],
              ["50K+", "Gifts delivered"],
              ["98%", "Repeat clients"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl text-[var(--plum-deep)]">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-[var(--ink)]/75">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-luxe">
            <img
              src={IMG.product1}
              alt="Signature Pearl Gifts bamboo presentation set with gold engraved nameplate"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/35 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-44 overflow-hidden rounded-2xl shadow-soft md:block">
            <img
              src={IMG.product3}
              alt="Detail of engraved keepsake"
              className="h-44 w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 hidden w-36 overflow-hidden rounded-2xl shadow-soft md:block">
            <img
              src={IMG.product5}
              alt="Bespoke presentation detail"
              className="h-36 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandStrip() {
  const brands = [
    "DANGOTE",
    "ACCESS",
    "MTN",
    "GTCO",
    "SHELL",
    "UNILEVER",
    "FLUTTERWAVE",
    "STANBIC",
  ];
  return (
    <section className="border-y border-[var(--plum)]/10 bg-white/60 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-[var(--ink)]/75">
          Trusted by organizations across the continent
        </p>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {brands.map((b) => (
            <div
              key={b}
              className="text-center font-display text-xl tracking-[0.18em] text-[var(--plum-deep)]/70 transition hover:text-[var(--plum-deep)]"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PREVIEW_COLLECTIONS = [
  {
    name: "Corporate Gifts",
    desc: "End-of-year hampers, onboarding sets, executive collections.",
    img: IMG.product1,
    icon: Sparkles,
  },
  {
    name: "Bamboo Gift Sets",
    desc: "Our signature sustainable luxury — soft to the earth.",
    img: IMG.product2,
    icon: Leaf,
  },
  {
    name: "Personalized Keepsakes",
    desc: "Engraved leather, monogrammed pieces, bespoke wrapping.",
    img: IMG.product3,
    icon: Crown,
  },
  {
    name: "Awards & Recognition",
    desc: "Crystal, wood and metal awards for milestone moments.",
    img: IMG.product4,
    icon: Award,
  },
];

function CollectionsPreview() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Our Collections
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
              A gift for every chapter of your story
            </h2>
          </div>
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-sm text-[var(--plum)] hover:text-[var(--plum-deep)]"
          >
            View all collections <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PREVIEW_COLLECTIONS.map((c, i) => (
            <Link to="/collections" key={c.name} className="group block">
              <article className="relative overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-luxe">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/85 via-[var(--plum-deep)]/15 to-transparent" />
                  <div className="absolute top-5 left-5 grid h-10 w-10 place-items-center rounded-full glass">
                    <c.icon className="h-4 w-4 text-[var(--plum-deep)]" />
                  </div>
                  <span className="absolute top-5 right-5 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--plum-deep)]">
                    0{i + 1}
                  </span>
                  <div className="absolute inset-x-5 bottom-5 text-white">
                    <h3 className="font-display text-xl">{c.name}</h3>
                    <p className="mt-1.5 text-sm text-white/90 line-clamp-2">{c.desc}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AtelierReel() {
  return (
    <section className="bg-[var(--cream)] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[9/12] overflow-hidden rounded-[2rem] shadow-luxe">
            <video
              src={VIDEO.reel1}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Inside the Atelier
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
              Where every gift is composed by hand.
            </h2>
            <p className="mt-6 text-[var(--ink)] leading-relaxed">
              Our Lagos atelier is where moodboards become objects — engraved bamboo, brushed brass,
              silk-lined boxes and hand-tied ribbon. Watch a glimpse of how an order moves from
              concept to delivery.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["10+", "Artisans"],
                ["36", "States covered"],
                ["72h", "Average turnaround"],
              ].map(([k, v]) => (
                <div key={v}>
                  <p className="font-display text-2xl text-[var(--plum-deep)]">{k}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-[var(--ink)]/70">
                    {v}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to="/gallery"
              className="mt-10 inline-flex items-center gap-3 rounded-xl border border-[var(--plum)]/20 px-6 py-3.5 text-sm font-medium text-[var(--plum-deep)] transition hover:bg-white"
            >
              See the gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecognitionTeaser() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="overflow-hidden rounded-[2.5rem] bg-[var(--plum-deep)] text-white shadow-luxe border border-[var(--plum)]/14">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[360px]">
              <img
                src={IMG.award}
                alt="Pearl Gifts industry award recognition"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--plum-deep)]/40" />
            </div>
            <div className="p-10 md:p-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
                Recognition
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
                Recognized for craft, consistency and care.
              </h2>
              <p className="mt-6 max-w-lg text-white/90 leading-relaxed font-sans">
                We're honored to be named among the continent's leading gifting houses — a
                recognition we owe to every team that has trusted us with their most considered
                moments.
              </p>
              <Link
                to="/recognition"
                className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[var(--gold)] hover:brightness-105 px-6 py-3.5 text-sm font-semibold text-[var(--plum-deep)] shadow-soft transition-all duration-300"
              >
                View the recognition <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSnippet() {
  return (
    <section className="py-12 md:py-18">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            What Our Clients Say
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
            Trusted by teams across the continent.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "Pearl Gifts handled our 2,400-piece year-end gifting flawlessly. Every box arrived perfectly.",
              author: "Adaeze Okonkwo",
              role: "Head of People, Fintech Lagos",
            },
            {
              quote:
                "The craftsmanship is genuinely world-class. Our executives still talk about their gifts months later.",
              author: "Tunde Bakare",
              role: "MD, Energy Group",
            },
            {
              quote:
                "We've moved our entire executive gifting program to Pearl. The service is unmatched.",
              author: "Ifeoma Eze",
              role: "Brand Director, Telecom Co.",
            },
          ].map((t) => (
            <figure
              key={t.author}
              className="rounded-3xl bg-white p-8 shadow-soft transition hover:shadow-luxe"
            >
              <blockquote className="font-display text-lg leading-snug text-[var(--plum-deep)]">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-[var(--plum)]/10 pt-5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--plum-deep)] text-[var(--gold)] font-display text-sm font-medium">
                  {t.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-medium text-[var(--ink)]">{t.author}</p>
                  <p className="text-xs text-[var(--ink)]/70">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/recognition"
            className="inline-flex items-center gap-2 text-sm text-[var(--plum)] hover:text-[var(--plum-deep)]"
          >
            See more recognition <ArrowRight className="h-4 w-4" />
          </Link>
          <span className="text-[var(--ink)]/30">•</span>
          <Link
            to="/submit-review"
            className="inline-flex items-center gap-2 text-sm text-[var(--plum)] hover:text-[var(--plum-deep)] font-medium"
          >
            Submit your review <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <BrandStrip />
      <CollectionsPreview />
      <AtelierReel />
      <TestimonialSnippet />
      <RecognitionTeaser />
    </SiteLayout>
  );
}
