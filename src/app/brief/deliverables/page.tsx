"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { BriefSidebar } from "@/components/BriefSidebar";
import { Icon } from "@/components/Icon";
import { Footer } from "@/components/Footer";

const steps = [
  { num: 1, label: "Foundation" },
  { num: 2, label: "Strategy" },
  { num: 3, label: "Deliverables" },
  { num: 4, label: "Review" },
];

const ipOptions = [
  {
    id: "buyout",
    label: "Full Buyout (Perpetual)",
    desc: "Complete ownership of all deliverables across all media and territories forever.",
  },
  {
    id: "commercial",
    label: "Commercial Use Only",
    desc: "Usage limited to marketing channels for 2 years. Creative retains portfolio rights.",
  },
];

export default function BriefDeliverablesPage() {
  const [selectedIP, setSelectedIP] = useState("buyout");
  const [deliverables, setDeliverables] = useState([
    "Brand Video",
    "Social Kit",
  ]);

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
                      step.num <= 3
                        ? step.num === 3
                          ? "bg-primary text-on-primary ring-4 ring-primary/20"
                          : "bg-secondary text-on-secondary"
                        : "bg-surface-container-highest text-on-surface-variant/40"
                    }`}
                  >
                    {step.num < 3 ? (
                      <Icon name="check" size={18} />
                    ) : (
                      step.num
                    )}
                  </div>
                  <span
                    className={`mt-2 text-label-sm font-semibold ${
                      step.num === 3
                        ? "text-primary"
                        : step.num < 3
                          ? "text-secondary"
                          : "text-on-surface-variant/40"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-20 h-px mx-4 mb-6 ${step.num < 3 ? "bg-secondary" : "bg-outline-variant/30"}`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-primary font-bold text-label-sm mb-4">
              <Icon name="auto_fix_high" size={16} />
              <span className="uppercase tracking-widest">
                Step 3 of 4: Deliverables
              </span>
            </div>
            <h1 className="font-display text-headline-lg font-extrabold text-on-surface mb-2">
              Smart Marketing Brief
            </h1>
            <p className="text-body-md text-on-surface-variant max-w-2xl">
              Define your brand&apos;s trajectory. Our AI-assisted tool maps
              your requirements to elite creative talent instantly.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Main form */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              {/* Target Audience */}
              <section className="bg-surface-container-low rounded-3xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-display text-title-lg font-bold text-on-surface mb-1">
                      Target Audience
                    </h3>
                    <p className="text-body-sm text-on-surface-variant">
                      Who are we speaking to? Be specific about demographics and
                      psychographics.
                    </p>
                  </div>
                  <Icon
                    name="groups"
                    size={24}
                    className="text-primary-container"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant">
                      Primary Segment
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tech-forward Gen Z"
                      className="bg-surface-container-lowest px-4 py-3.5 rounded-xl ghost-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-body-md"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant">
                      Core Pain Point
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Information overload"
                      className="bg-surface-container-lowest px-4 py-3.5 rounded-xl ghost-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-body-md"
                    />
                  </div>
                </div>
                <textarea
                  rows={4}
                  placeholder="Describe their lifestyle, values, and why they need your brand..."
                  className="w-full bg-surface-container-lowest px-4 py-3.5 rounded-xl ghost-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-body-md resize-none"
                />
              </section>

              {/* Brand Guidelines Upload */}
              <section className="bg-surface-container-low rounded-3xl p-8">
                <h3 className="font-display text-title-lg font-bold text-on-surface mb-1">
                  Brand Guidelines
                </h3>
                <p className="text-body-sm text-on-surface-variant mb-6">
                  Upload your visual identity docs or voice guidelines.
                </p>
                <div className="border-2 border-dashed border-outline-variant/30 rounded-2xl p-12 flex flex-col items-center justify-center gap-4 bg-surface-container-lowest hover:bg-primary-fixed/20 transition-all cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-primary-fixed/50 flex items-center justify-center">
                    <Icon
                      name="cloud_upload"
                      size={32}
                      className="text-primary"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-display font-bold text-on-surface">
                      Drop your brand book here
                    </p>
                    <p className="text-body-sm text-on-surface-variant">
                      PDF, AI, or PPTX (Max 50MB)
                    </p>
                  </div>
                </div>
              </section>

              {/* Reference Examples */}
              <section className="bg-surface-container-low rounded-3xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-title-lg font-bold text-on-surface">
                    Reference Examples
                  </h3>
                  <button className="flex items-center gap-1 text-primary text-body-sm font-bold">
                    <Icon name="add_circle" size={18} />
                    Add Link
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-3/4 bg-surface-container rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-tertiary/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        name="image"
                        size={32}
                        className="text-on-surface-variant/30"
                      />
                    </div>
                  </div>
                  <div className="aspect-3/4 bg-surface-container rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-linear-to-br from-tertiary/10 to-primary/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        name="image"
                        size={32}
                        className="text-on-surface-variant/30"
                      />
                    </div>
                  </div>
                  <div className="aspect-3/4 bg-surface-container-lowest rounded-2xl border-2 border-dashed border-outline-variant/30 flex items-center justify-center cursor-pointer hover:bg-surface-container transition-colors">
                    <Icon
                      name="add_photo_alternate"
                      size={32}
                      className="text-on-surface-variant/30"
                    />
                  </div>
                </div>
              </section>

              {/* Rights & IP Preferences */}
              <section className="bg-surface-container-low rounded-3xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Icon
                    name="gavel"
                    size={24}
                    className="text-tertiary-container"
                  />
                  <h3 className="font-display text-title-lg font-bold text-on-surface">
                    Rights & IP Preferences
                  </h3>
                </div>
                <div className="space-y-4">
                  {ipOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedIP(opt.id)}
                      className={`w-full text-left p-5 rounded-2xl transition-all ${
                        selectedIP === opt.id
                          ? "bg-surface-container-lowest ring-2 ring-primary"
                          : "bg-surface-container-lowest ghost-border hover:bg-surface-container"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center ${
                            selectedIP === opt.id
                              ? "bg-primary"
                              : "bg-surface-container-highest"
                          }`}
                        >
                          {selectedIP === opt.id && (
                            <Icon
                              name="check"
                              size={14}
                              className="text-on-primary"
                            />
                          )}
                        </div>
                        <span className="font-display font-bold text-on-surface">
                          {opt.label}
                        </span>
                      </div>
                      <p className="mt-2 ml-8 text-body-sm text-on-surface-variant">
                        {opt.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </section>

              {/* Action Bar */}
              <div className="flex items-center justify-between">
                <Link href="/brief/strategy" className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-on-surface transition-colors">
                  <Icon name="arrow_back" size={18} />
                  Back to Strategy
                </Link>
                <Link href="/brief/timeline" className="hero-gradient text-on-primary px-8 py-3.5 rounded-full font-display font-bold text-body-md hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2">
                  Continue to Timeline
                  <Icon name="arrow_forward" size={18} />
                </Link>
              </div>
            </div>

            {/* Right panel */}
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* Required Deliverables */}
                <div className="bg-surface-container-low rounded-3xl p-6 ghost-border">
                  <h3 className="font-display text-title-sm font-bold text-on-surface mb-4">
                    Required Deliverables
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {deliverables.map((d) => (
                      <span
                        key={d}
                        className="bg-tertiary-container text-on-tertiary px-3 py-1.5 rounded-full text-label-sm font-bold flex items-center gap-1"
                      >
                        {d}
                        <button
                          onClick={() =>
                            setDeliverables(
                              deliverables.filter((x) => x !== d)
                            )
                          }
                          className="ml-1 hover:opacity-70"
                        >
                          <Icon name="close" size={14} />
                        </button>
                      </span>
                    ))}
                    <button className="text-primary text-label-sm font-bold hover:underline">
                      + Add More
                    </button>
                  </div>
                  <div className="space-y-3 pt-4 border-t border-outline-variant/20">
                    <div className="flex items-center justify-between text-body-sm">
                      <span className="text-on-surface-variant">
                        Estimated Timeline
                      </span>
                      <span className="font-display font-bold text-on-surface">
                        3-4 Weeks
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-body-sm">
                      <span className="text-on-surface-variant">
                        Recommended Budget
                      </span>
                      <span className="font-display font-bold text-on-surface">
                        $8,500 - $12k
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI Brief Assist */}
                <div className="bg-secondary rounded-3xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="auto_awesome" filled size={20} />
                    <span className="font-display text-title-sm font-bold uppercase tracking-wider">
                      AI Brief Assist
                    </span>
                  </div>
                  <p className="text-body-sm text-white/80 leading-relaxed">
                    &ldquo;Based on your Gen-Z audience and video focus, we
                    suggest adding a{" "}
                    <strong>Short-form vertical cut</strong>{" "}
                    deliverable for TikTok/Reels impact.&rdquo;
                  </p>
                  <button className="mt-4 w-full bg-white/20 hover:bg-white/30 text-white py-2.5 rounded-xl text-body-sm font-bold transition-colors">
                    Accept Suggestion
                  </button>
                </div>

                {/* Save & Continue */}
                <Link href="/brief/review" className="w-full bg-tertiary-container text-on-tertiary py-4 rounded-2xl font-display font-bold text-body-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Save & Continue
                  <Icon name="arrow_forward" size={18} />
                </Link>
                <p className="text-center text-label-sm text-on-surface-variant">
                  Draft Saved Automatically
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
