import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Target, Zap } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { IMG, WA_LINK } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pearl Gifts — Our Story" },
      {
        name: "description",
        content:
          "Meet Pearl Gifts: a Lagos-based luxury gifting atelier crafting bespoke experiences for organizations that give with intention.",
      },
      { property: "og:title", content: "About Pearl Gifts" },
      { property: "og:description", content: "Our story, values, and mission to elevate gifting." },
      { property: "og:image", content: IMG.product1 },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Heart,
    title: "Intentionality",
    desc: "Every gift carries intention. We craft pieces that reflect the thought behind the gesture, not just the budget.",
  },
  {
    icon: Zap,
    title: "Craft Excellence",
    desc: "Bespoke doesn't mean slow. Our studio combines artisanal techniques with streamlined processes for quality and speed.",
  },
  {
    icon: Target,
    title: "Relationship First",
    desc: "We're partners, not vendors. Dedicated team per program. Thoughtful communication. Real relationships.",
  },
];

const STATS = [
  { label: "Brands Served", value: "500+" },
  { label: "Gifts Delivered", value: "50K+" },
  { label: "Years Crafting", value: "10+" },
  { label: "Artisans in Studio", value: "10" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About Us"
        title={
          <>
            Gifts that carry <em className="not-italic text-gradient-gold">real intention</em>
          </>
        }
        description="A decade of thoughtful craftsmanship. One mission: to elevate how organizations give."
      />

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-luxe">
              <img
                src={IMG.product1}
                alt="Pearl Gifts atelier workspace"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--plum-deep)]/30 via-transparent to-transparent" />
            </div>

            <div>
              <h2 className="font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
                How it started.
              </h2>
              <p className="mt-8 text-lg text-[var(--ink)] leading-relaxed">
                In 2014, we asked a simple question:{" "}
                <em className="italic">Why do most corporate gifts feel impersonal?</em>
              </p>
              <p className="mt-6 text-[var(--ink)] leading-relaxed">
                We noticed that the biggest organizations still relied on templated gifts,
                mass-produced hampers, and zero human connection. There was a gap — a space where
                genuine intention could live, where craftsmanship mattered, where every gift felt
                considered.
              </p>
              <p className="mt-6 text-[var(--ink)] leading-relaxed">
                So we built Pearl Gifts. A Lagos atelier built for organizations that understand
                that a gift carries the weight of every relationship behind it. Ten years later,
                we've delivered 50,000+ pieces, partnered with 500+ brands, and maintained one
                promise: bespoke always, templated never.
              </p>
              <div className="mt-12 grid grid-cols-2 gap-6 max-w-md">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl text-[var(--plum-deep)]">{s.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-[var(--ink)]/70">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cream)] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl md:text-5xl text-[var(--plum-deep)] text-balance">
              What we believe in.
            </h2>
            <p className="mt-6 text-[var(--ink)] leading-relaxed">
              Three principles guide everything we make and do.
            </p>
          </div>

          <div className="mt-18 grid gap-8 md:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl bg-white p-10 shadow-soft transition hover:shadow-luxe"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-gold text-[var(--plum-deep)]">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-[var(--plum-deep)]">{v.title}</h3>
                <p className="mt-3 text-[var(--ink)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="overflow-hidden rounded-[2.5rem] bg-[var(--plum-deep)] border border-[var(--plum)]/14 text-white shadow-luxe">
            <div className="grid gap-12 p-10 md:p-16 lg:gap-14">
              <div className="max-w-2xl">
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
                  The Atelier
                </span>
                <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance">
                  Built by artisans. Run with care.
                </h2>
                <p className="mt-6 max-w-lg text-white/90 leading-relaxed font-sans">
                  Our studio in Victoria Island, Lagos brings together leather workers, engravers,
                  woodworkers, and designers. Every piece is handled by the same hands from design
                  to delivery.
                </p>
                <p className="mt-6 max-w-lg text-white/90 leading-relaxed font-sans">
                  We've invested in sustainable practices, fair wages, and continuous skill
                  development because craft matters only when the people behind it are valued.
                </p>
              </div>

              <div className="grid gap-10 sm:grid-cols-3">
                {[
                  { number: "10+", label: "Specialist Artisans" },
                  { number: "36", label: "States Reached" },
                  { number: "72h", label: "Average Design Turnaround" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl text-[var(--gold)]">{stat.number}</p>
                    <p className="mt-2 text-sm text-white/75 uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[var(--plum-deep)] text-balance">
            Let's craft something meaningful together.
          </h2>
          <p className="mt-6 text-[var(--ink)] leading-relaxed">
            Whether you're planning your first gift or scaling a program, we'd love to hear your
            story.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--plum-deep)] hover:bg-[var(--plum)] px-7 py-3.5 text-sm font-medium text-white shadow-soft transition-all duration-300"
            >
              Explore Collections <ArrowRight className="h-4 w-4" />
            </Link>
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
              Schedule via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
