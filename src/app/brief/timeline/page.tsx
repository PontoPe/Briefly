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
  { num: 4, label: "Timeline" },
  { num: 5, label: "Review" },
];

const urgencyOptions = [
  {
    id: "flexible",
    icon: "calendar_month",
    label: "Flexible",
    desc: "No rush — let the designer plan",
    timeline: "3–6 weeks",
  },
  {
    id: "standard",
    icon: "schedule",
    label: "Standard",
    desc: "Typical turnaround window",
    timeline: "1–2 weeks",
  },
  {
    id: "rush",
    icon: "bolt",
    label: "Rush",
    desc: "Priority processing, rush fees apply",
    timeline: "48–72 hours",
  },
  {
    id: "emergency",
    icon: "emergency",
    label: "Emergency",
    desc: "Same-day or next-day delivery",
    timeline: "< 24 hours",
  },
];

const engagementTypes = [
  {
    id: "sprint",
    label: "One-off Sprint",
    desc: "A single project with defined start and end dates.",
    icon: "sprint",
  },
  {
    id: "retainer",
    label: "Monthly Retainer",
    desc: "Ongoing monthly services with a recurring budget.",
    icon: "autorenew",
  },
  {
    id: "milestone",
    label: "Milestone-Based",
    desc: "Payments triggered by specific deliverable approvals.",
    icon: "flag",
  },
  {
    id: "adhoc",
    label: "Ad-hoc Support",
    desc: "Ongoing design tweaks and support as needed.",
    icon: "handyman",
  },
];

export default function BriefTimelinePage() {
  const [urgency, setUrgency] = useState("standard");
  const [engagement, setEngagement] = useState("milestone");
  const [startDate, setStartDate] = useState("");
  const [revisions, setRevisions] = useState(3);

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
                      step.num <= 4
                        ? step.num === 4
                          ? "bg-primary text-on-primary ring-4 ring-primary/20"
                          : "bg-secondary text-on-secondary"
                        : "bg-surface-container-highest text-on-surface-variant/40"
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
                        : step.num < 4
                          ? "text-secondary"
                          : "text-on-surface-variant/40"
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
          <div className="mb-8">
            <div className="flex items-center gap-2 text-primary font-bold text-label-sm mb-4">
              <Icon name="schedule" size={16} />
              <span className="uppercase tracking-widest">
                Step 4 of 5: Timeline & Budget
              </span>
            </div>
            <h1 className="font-display text-headline-lg font-extrabold text-on-surface mb-2">
              Smart Marketing Brief
            </h1>
            <p className="text-body-md text-on-surface-variant max-w-2xl">
              Set your timeline, engagement model, and revision expectations so
              we can match you with available talent.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Main form */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              {/* Urgency / Turnaround */}
              <section className="bg-surface-container-low rounded-3xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-display text-title-lg font-bold text-on-surface mb-1">
                      Turnaround Time
                    </h3>
                    <p className="text-body-sm text-on-surface-variant">
                      How quickly do you need the deliverables? Rush options may
                      incur additional fees.
                    </p>
                  </div>
                  <Icon
                    name="speed"
                    size={24}
                    className="text-primary-container"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {urgencyOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setUrgency(opt.id)}
                      className={`p-5 rounded-2xl text-left transition-all ${
                        urgency === opt.id
                          ? "border-2 border-primary shadow-lg bg-surface-container-lowest"
                          : "bg-surface-container-lowest ghost-border hover:bg-surface-container"
                      }`}
                    >
                      <Icon
                        name={opt.icon}
                        size={28}
                        className={
                          urgency === opt.id
                            ? "text-primary"
                            : "text-on-surface-variant"
                        }
                      />
                      <div className="mt-3 font-display text-title-sm font-bold text-on-surface">
                        {opt.label}
                      </div>
                      <p className="text-body-sm text-on-surface-variant mt-1">
                        {opt.desc}
                      </p>
                      <span className="inline-block mt-2 text-label-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                        {opt.timeline}
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Engagement Model */}
              <section className="bg-surface-container-low rounded-3xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-display text-title-lg font-bold text-on-surface mb-1">
                      Engagement Model
                    </h3>
                    <p className="text-body-sm text-on-surface-variant">
                      How should the project be structured? This affects payment
                      milestones and scheduling.
                    </p>
                  </div>
                  <Icon
                    name="handshake"
                    size={24}
                    className="text-primary-container"
                  />
                </div>
                <div className="space-y-3">
                  {engagementTypes.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setEngagement(opt.id)}
                      className={`w-full flex items-center gap-4 p-5 rounded-2xl text-left transition-all ${
                        engagement === opt.id
                          ? "border-2 border-primary bg-surface-container-lowest shadow-lg"
                          : "bg-surface-container-lowest ghost-border hover:bg-surface-container"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          engagement === opt.id
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container-highest text-on-surface-variant"
                        }`}
                      >
                        <Icon name={opt.icon} size={24} />
                      </div>
                      <div>
                        <div className="font-display font-bold text-on-surface">
                          {opt.label}
                        </div>
                        <p className="text-body-sm text-on-surface-variant">
                          {opt.desc}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </section>

              {/* Start Date & Revisions */}
              <section className="bg-surface-container-low rounded-3xl p-8">
                <h3 className="font-display text-title-lg font-bold text-on-surface mb-6">
                  Additional Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant">
                      Preferred Start Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="bg-surface-container-lowest px-4 py-3.5 rounded-xl ghost-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-body-md"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant">
                      Revision Rounds Included
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          setRevisions((r) => Math.max(0, r - 1))
                        }
                        className="w-10 h-10 rounded-xl bg-surface-container-lowest ghost-border flex items-center justify-center hover:bg-surface-container transition-colors"
                      >
                        <Icon name="remove" size={20} />
                      </button>
                      <span className="font-display text-title-lg font-extrabold text-on-surface w-12 text-center">
                        {revisions}
                      </span>
                      <button
                        onClick={() =>
                          setRevisions((r) => Math.min(10, r + 1))
                        }
                        className="w-10 h-10 rounded-xl bg-surface-container-lowest ghost-border flex items-center justify-center hover:bg-surface-container transition-colors"
                      >
                        <Icon name="add" size={20} />
                      </button>
                    </div>
                    <p className="text-label-sm text-on-surface-variant">
                      Additional revisions billed at the freelancer&apos;s
                      hourly rate.
                    </p>
                  </div>
                </div>
              </section>

              {/* Action Bar */}
              <div className="flex items-center justify-between">
                <Link
                  href="/brief/deliverables"
                  className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <Icon name="arrow_back" size={18} />
                  Back
                </Link>
                <Link
                  href="/brief/review"
                  className="bg-linear-to-r from-tertiary to-tertiary-container text-on-tertiary px-8 py-3.5 rounded-full font-display font-bold text-body-md hover:opacity-90 transition-opacity shadow-xl flex items-center gap-2 hover:scale-[1.02]"
                >
                  Next: Review & Match
                  <Icon name="arrow_forward" size={18} />
                </Link>
              </div>
            </div>

            {/* Right column — summary */}
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-24 bg-surface-container-lowest rounded-3xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <h3 className="font-display text-title-md font-bold mb-6 flex items-center gap-2">
                  <Icon
                    name="summarize"
                    size={20}
                    className="text-primary"
                  />
                  Brief Summary
                </h3>
                <div className="space-y-5">
                  <div>
                    <div className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
                      Turnaround
                    </div>
                    <div className="font-display font-bold text-on-surface capitalize">
                      {urgency}
                    </div>
                  </div>
                  <div className="h-px bg-outline-variant/20" />
                  <div>
                    <div className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
                      Engagement
                    </div>
                    <div className="font-display font-bold text-on-surface capitalize">
                      {engagement.replace("-", " ")}
                    </div>
                  </div>
                  <div className="h-px bg-outline-variant/20" />
                  <div>
                    <div className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
                      Revisions
                    </div>
                    <div className="font-display font-bold text-on-surface">
                      {revisions} rounds included
                    </div>
                  </div>
                  <div className="h-px bg-outline-variant/20" />
                  <div>
                    <div className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
                      Start Date
                    </div>
                    <div className="font-display font-bold text-on-surface">
                      {startDate || "Not set"}
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                  <div className="flex items-center gap-2 text-primary font-display font-bold text-body-sm mb-1">
                    <Icon name="auto_awesome" size={16} />
                    AI Recommendation
                  </div>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    Based on your deliverables, a milestone-based model with 1–2
                    week sprints tends to produce the best results for brand
                    identity projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
