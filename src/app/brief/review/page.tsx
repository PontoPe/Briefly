"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { BriefSidebar } from "@/components/BriefSidebar";
import { Icon } from "@/components/Icon";

const steps = [
  { num: 1, label: "Foundation" },
  { num: 2, label: "Strategy" },
  { num: 3, label: "Deliverables" },
  { num: 4, label: "Review" },
];

const matchedFreelancers = [
  {
    name: "Julian Aris",
    title: "3D Interaction Designer",
    match: 98,
    rate: "$120/hr",
    quote:
      "Expert in high-end fashion 3D environments and immersive WebGL...",
    cta: "View Reel",
  },
  {
    name: "Elena Vance",
    title: "Visual Narrative Lead",
    match: 94,
    rate: "$150/hr",
    quote:
      "Former agency lead for LVMH projects. Specialist in premium digital editorials...",
    cta: "View Portfolio",
  },
];

export default function BriefReviewPage() {
  return (
    <>
      <Navbar />
      <BriefSidebar />

      <div className="ml-64 pt-4">
        <div className="mx-auto max-w-275 px-8 py-8">
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-0 mb-12">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-body-md ${
                      step.num === 4
                        ? "bg-primary text-on-primary ring-4 ring-primary/20"
                        : "bg-secondary text-on-secondary"
                    }`}
                  >
                    {step.num < 4 ? (
                      <Icon name="check" size={18} />
                    ) : (
                      step.num
                    )}
                  </div>
                  <span
                    className={`mt-2 text-label-sm font-semibold ${
                      step.num === 4
                        ? "text-primary"
                        : "text-secondary"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-20 h-px mx-4 mb-6 ${step.num < 4 ? "bg-secondary" : "bg-outline-variant/30"}`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-primary font-bold text-label-sm mb-4">
              <span className="uppercase tracking-widest">Step 4 of 4</span>
              <div className="h-px flex-1 bg-outline-variant/20" />
            </div>
            <h1 className="font-display text-display-sm font-extrabold text-on-surface tracking-tight mb-4">
              Review &{" "}
              <span className="text-primary italic">Match.</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              Your brief is ready for the collective. Review the AI-generated
              projections and preview the high-end talent already showing high
              compatibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Summary */}
            <div className="lg:col-span-2 space-y-8">
              {/* Comprehensive Summary */}
              <section className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <div className="flex justify-between items-start mb-8">
                  <h2 className="font-display text-headline-md font-bold text-primary">
                    The Vision
                  </h2>
                  <Link href="/brief/timeline" className="text-on-surface-variant flex items-center gap-1 text-body-sm font-semibold hover:text-primary transition-colors">
                    <Icon name="edit" size={16} />
                    Edit Brief
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div>
                    <h3 className="text-label-sm font-bold uppercase tracking-widest text-outline mb-2">
                      Project Name
                    </h3>
                    <p className="text-body-lg font-medium text-on-surface">
                      Vanguard Q3 Digital Editorial
                    </p>
                  </div>
                  <div>
                    <h3 className="text-label-sm font-bold uppercase tracking-widest text-outline mb-2">
                      Industry
                    </h3>
                    <p className="text-body-lg font-medium text-on-surface">
                      Luxury Fashion & Arts
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-label-sm font-bold uppercase tracking-widest text-outline mb-2">
                      Core Objective
                    </h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      Create a multi-dimensional digital experience for the
                      launch of the &lsquo;Ethereal&rsquo; collection. The
                      focus is on high-fashion storytelling through interactive
                      typography and generative visuals.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-label-sm font-bold uppercase tracking-widest text-outline mb-2">
                      Deliverables
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {[
                        "Interactive Microsite",
                        "3D Motion Loops",
                        "Press Kit",
                      ].map((d) => (
                        <span
                          key={d}
                          className="px-3 py-1 bg-surface-container text-primary rounded-full text-label-sm font-bold"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-label-sm font-bold uppercase tracking-widest text-outline mb-2">
                      Primary Software
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Cinema 4D", "Webflow"].map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 bg-secondary-container/30 text-secondary rounded-full text-label-sm font-bold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Smart Matching Preview */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-headline-md font-extrabold text-on-surface">
                    Smart Matching Preview
                  </h2>
                  <div className="flex items-center gap-1 text-secondary text-body-sm font-bold">
                    <Icon name="verified" filled size={16} />
                    Vetted Elite Only
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {matchedFreelancers.map((f) => (
                    <Link
                      key={f.name}
                      href="/freelancer/1"
                      className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)] block hover:shadow-[0_20px_40px_rgba(29,27,32,0.08)] transition-shadow"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary font-display font-bold">
                            {f.name
                              .split(" ")
                              .map((w) => w[0])
                              .join("")}
                          </div>
                          <div className="absolute -top-2 -right-2 bg-secondary text-on-secondary text-label-sm font-bold px-2 py-0.5 rounded-full">
                            {f.match}%
                          </div>
                        </div>
                        <div>
                          <div className="text-label-sm text-on-surface-variant uppercase tracking-wider">
                            Match
                          </div>
                          <div className="font-display text-title-md font-bold text-on-surface">
                            {f.name}
                          </div>
                          <div className="text-body-sm text-on-surface-variant">
                            {f.title}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-0.5 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="star"
                            filled
                            size={14}
                            className="text-tertiary-container"
                          />
                        ))}
                      </div>

                      <p className="text-body-sm text-on-surface-variant italic mb-4 leading-relaxed">
                        &ldquo;{f.quote}&rdquo;
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                        <span className="font-display font-bold text-on-surface text-body-md">
                          {f.rate}
                        </span>
                        <button className="text-primary font-display font-bold text-label-sm uppercase tracking-wider hover:underline">
                          {f.cta}
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: AI Brief Assist */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* AI Brief Assist */}
                <div className="bg-primary rounded-3xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-6">
                    <Icon name="auto_awesome" filled size={20} />
                    <span className="font-display text-title-sm font-bold">
                      AI Brief Assist
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="text-label-sm font-bold uppercase tracking-wider text-white/60 mb-2">
                      Recommended Budget
                    </div>
                    <div className="font-display text-headline-lg font-extrabold">
                      $12,500 - $18,000
                    </div>
                    <p className="mt-2 text-body-sm text-white/60">
                      Based on 42 similar fashion-tech projects in the last 6
                      months.
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="text-label-sm font-bold uppercase tracking-wider text-white/60 mb-2">
                      Estimated Timeline
                    </div>
                    <div className="font-display text-headline-lg font-extrabold">
                      6 - 8 Weeks
                    </div>
                    <p className="mt-2 text-body-sm text-white/60">
                      Typical for high-fidelity 3D and custom development
                      cycles.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="font-display text-body-md font-bold mb-1">
                      Market Insight
                    </div>
                    <p className="text-body-sm text-white/70 leading-relaxed">
                      Demand for Cinema 4D talent is peaking. Post within 24h to
                      secure top artists before Q3 kicks off.
                    </p>
                  </div>
                </div>

                {/* Post Project CTA */}
                <button className="w-full bg-tertiary-container text-on-tertiary py-4 rounded-2xl font-display font-bold text-body-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-xl">
                  Post Project
                  <Icon name="send" size={18} />
                </button>

                <button className="w-full ghost-border text-on-surface-variant py-3.5 rounded-2xl font-display font-bold text-body-md hover:bg-surface-container transition-colors">
                  Save as Draft
                </button>

                <p className="text-center text-label-sm text-on-surface-variant leading-relaxed">
                  By posting, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="text-primary underline"
                  >
                    Editorial Excellence Standards
                  </Link>{" "}
                  and Talent Protection Terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
