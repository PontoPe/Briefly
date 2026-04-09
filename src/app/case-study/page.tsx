import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const metrics = [
  { label: "ROAS", value: "8.4x", trend: "+32%", up: true },
  { label: "CTR", value: "4.2%", trend: "+18%", up: true },
  { label: "Conversion Rate", value: "12.1%", trend: "+24%", up: true },
  { label: "New Acquisitions", value: "45k+", trend: "+41%", up: true },
];

const assets = [
  { title: "Hero Campaign Visual", type: "social" },
  { title: "Brand Identity Suite", type: "brand" },
  { title: "Performance Ad Set", type: "ads" },
];

export default function CaseStudyPage() {
  return (
    <>
      <Navbar />

      {/* Hero header */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="flex gap-2 mb-4">
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-bold">
                Brand Campaign
              </span>
              <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-label-sm">
                Performance Marketing
              </span>
            </div>
            <h1 className="font-display text-display-md font-extrabold text-primary leading-tight tracking-tight">
              Project Alpha: Redefining Digital Serenity
            </h1>
            <p className="mt-4 text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
              A comprehensive brand campaign that redefined digital presence
              through editorial design, strategic storytelling, and
              performance-driven creative assets.
            </p>
          </div>

          {/* Freelancer card */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 w-full lg:w-80 shadow-[0_20px_40px_rgba(29,27,32,0.06)]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary font-display font-bold">
                ER
              </div>
              <div>
                <div className="text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Strategist
                </div>
                <div className="font-display text-title-md font-bold text-on-surface">
                  Elena Rodriguez
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-bold">
              <span className="material-symbols-outlined text-[14px]">
                verified
              </span>
              Top Rated Plus
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8">
            <div className="aspect-[16/10] bg-primary-container/20 rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary/30 text-[80px]">
                  image
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
            <div className="flex-1 bg-surface-container rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface-variant/20 text-[48px]">
                  photo_library
                </span>
              </div>
            </div>
            <div className="flex-1 bg-primary-container rounded-3xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[28px]">
                  play_arrow
                </span>
              </div>
              <div>
                <div className="font-display text-title-md font-bold text-white">
                  Campaign Reel
                </div>
                <div className="text-body-sm text-white/60">2:34 min</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-surface-container-low rounded-2xl p-6"
            >
              <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-2">
                {m.label}
              </div>
              <div className="font-display text-display-sm font-extrabold text-primary">
                {m.value}
              </div>
              <div className="mt-1 flex items-center gap-1 text-secondary text-body-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  trending_up
                </span>
                {m.trend}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Challenge */}
          <div className="bg-surface-container-lowest rounded-3xl p-8">
            <h3 className="font-display text-headline-sm font-extrabold text-on-surface mb-6">
              The Challenge
            </h3>
            <ul className="space-y-4">
              {[
                "Fragmented brand identity across 12 channels",
                "Below-average CTR on paid campaigns",
                "No cohesive visual language for digital",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[20px] flex-shrink-0 mt-0.5">
                    close
                  </span>
                  <span className="text-body-md text-on-surface-variant">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-surface-container-lowest rounded-3xl p-8">
            <h3 className="font-display text-headline-sm font-extrabold text-on-surface mb-6">
              The Solution
            </h3>
            <ul className="space-y-4">
              {[
                "Unified editorial design system across all touchpoints",
                "Performance-optimized ad creative with A/B variants",
                "Motion-first social content strategy",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span className="text-body-md text-on-surface-variant">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="bg-surface-container-high rounded-3xl p-8">
            <h3 className="font-display text-headline-sm font-extrabold text-on-surface mb-6">
              Key Results
            </h3>
            {/* Progress bars */}
            <div className="space-y-5 mb-6">
              <div>
                <div className="flex justify-between text-body-sm mb-1.5">
                  <span className="text-on-surface-variant">Engagement</span>
                  <span className="font-bold text-on-surface">94%</span>
                </div>
                <div className="h-2 bg-surface-container-lowest rounded-full">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "94%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-body-sm mb-1.5">
                  <span className="text-on-surface-variant">
                    Brand Sentiment
                  </span>
                  <span className="font-bold text-on-surface">88%</span>
                </div>
                <div className="h-2 bg-surface-container-lowest rounded-full">
                  <div
                    className="h-full bg-secondary rounded-full"
                    style={{ width: "88%" }}
                  />
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <blockquote className="border-l-2 border-primary pl-4 italic text-body-md text-on-surface-variant">
              &ldquo;Elena transformed our entire digital presence. The results
              speak for themselves.&rdquo;
              <div className="mt-2 not-italic font-bold text-body-sm text-on-surface">
                — VP of Marketing, Project Alpha
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Campaign Assets */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 pb-16">
        <h2 className="font-display text-headline-lg font-extrabold text-on-surface mb-8">
          Campaign Assets
        </h2>
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
          {assets.map((asset) => (
            <div
              key={asset.title}
              className="min-w-[400px] bg-surface-container-lowest rounded-3xl overflow-hidden flex-shrink-0 group"
            >
              <div className="aspect-[4/5] bg-surface-container relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant/20 text-[56px]">
                    image
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="font-display text-title-md font-bold text-on-surface">
                  {asset.title}
                </div>
                <div className="text-body-sm text-on-surface-variant capitalize">
                  {asset.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-6 lg:mx-auto max-w-[1200px] mb-20">
        <div className="bg-tertiary-container rounded-[2rem] p-12 lg:p-16 text-center">
          <h2 className="font-display text-display-sm font-extrabold text-white tracking-tight">
            Ready to curate your next campaign?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/brief/new"
              className="bg-white text-tertiary-container px-8 py-3.5 rounded-full font-display font-bold text-body-lg hover:opacity-90 transition-opacity"
            >
              Start Project with Elena
            </Link>
            <Link
              href="/case-study"
              className="bg-white/10 text-white px-8 py-3.5 rounded-full font-display font-bold text-body-lg hover:bg-white/20 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
