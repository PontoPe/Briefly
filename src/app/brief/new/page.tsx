"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { BriefSidebar } from "@/components/BriefSidebar";
import { Icon } from "@/components/Icon";

const objectives = [
  {
    id: "brand",
    icon: "diamond",
    title: "Brand Identity",
    desc: "Build or refresh a complete visual identity system.",
  },
  {
    id: "performance",
    icon: "trending_up",
    title: "Performance Marketing",
    desc: "Ad creative, landing pages, and conversion-focused assets.",
  },
  {
    id: "growth",
    icon: "rocket_launch",
    title: "Growth / Lead Gen",
    desc: "Content, campaigns, and funnels designed to acquire and convert.",
  },
  {
    id: "culture",
    icon: "groups",
    title: "Internal Culture",
    desc: "Employee branding, internal comms, and culture-focused design.",
  },
];

const steps = [
  { num: 1, label: "Foundation" },
  { num: 2, label: "Strategy" },
  { num: 3, label: "Deliverables" },
  { num: 4, label: "Review" },
];

export default function BriefFoundationPage() {
  const [selectedObjective, setSelectedObjective] = useState("performance");

  return (
    <>
      <Navbar />
      <BriefSidebar />

      <div className="ml-64 pt-4">
        <div className="mx-auto max-w-[1100px] px-8 py-8">
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-0 mb-12">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-body-md ${
                      step.num === 1
                        ? "bg-primary text-on-primary ring-4 ring-primary/20"
                        : "bg-surface-container-highest text-on-surface-variant/40"
                    }`}
                  >
                    {step.num}
                  </div>
                  <span
                    className={`mt-2 text-label-sm font-semibold ${
                      step.num === 1
                        ? "text-primary"
                        : "text-on-surface-variant/40"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-20 h-px bg-outline-variant/30 mx-4 mb-6" />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Main form */}
            <div className="col-span-12 lg:col-span-8">
              <h1 className="font-display text-headline-lg font-extrabold text-on-surface mb-2">
                Project Foundation
              </h1>
              <p className="text-body-md text-on-surface-variant mb-8">
                Define the core identity and the primary business ambition for
                this engagement.
              </p>

              {/* Project Name */}
              <div className="mb-8">
                <label className="block text-label-md font-bold uppercase tracking-wider text-on-surface mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Q4 Brand Refresh: Neo-Nordic Aesthetic"
                  className="w-full bg-surface-container-low px-5 py-3.5 rounded-xl text-body-lg ghost-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Business Objective */}
              <div className="mb-8">
                <label className="block text-label-md font-bold uppercase tracking-wider text-on-surface mb-4">
                  Business Objective
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {objectives.map((obj) => (
                    <button
                      key={obj.id}
                      onClick={() => setSelectedObjective(obj.id)}
                      className={`p-5 rounded-2xl text-left transition-all ${
                        selectedObjective === obj.id
                          ? "bg-primary text-on-primary shadow-xl"
                          : "bg-surface-container-lowest ghost-border hover:bg-surface-container-low"
                      }`}
                    >
                      <Icon
                        name={obj.icon}
                        size={28}
                        className={
                          selectedObjective === obj.id
                            ? "text-on-primary"
                            : "text-primary"
                        }
                      />
                      <div
                        className={`mt-3 font-display text-title-sm font-bold ${
                          selectedObjective === obj.id
                            ? "text-on-primary"
                            : "text-on-surface"
                        }`}
                      >
                        {obj.title}
                      </div>
                      <div
                        className={`mt-1 text-body-sm ${
                          selectedObjective === obj.id
                            ? "text-on-primary/70"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {obj.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <label className="block text-label-md font-bold uppercase tracking-wider text-on-surface mb-2">
                  Project Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your project goals, context, and any specific requirements..."
                  className="w-full bg-surface-container-low px-5 py-3.5 rounded-xl text-body-md ghost-border focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <button className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors">
                  Save Draft
                </button>
                <button className="hero-gradient text-on-primary px-8 py-3.5 rounded-full font-display font-bold text-body-md hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2">
                  Continue to Strategy
                  <Icon name="arrow_forward" size={18} />
                </button>
              </div>
            </div>

            {/* Right column */}
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* AI Brief Assist */}
                <div className="bg-primary rounded-3xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="bolt" filled size={20} />
                    <span className="font-display text-title-sm font-bold">
                      AI Brief Assist
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-label-sm font-bold uppercase tracking-wider text-white/60 mb-1">
                        Pro Tip #1
                      </div>
                      <p className="text-body-sm text-white/80">
                        Focus on the &ldquo;Why&rdquo; — the strongest briefs
                        lead with business context, not deliverable lists.
                      </p>
                    </div>
                    <div>
                      <div className="text-label-sm font-bold uppercase tracking-wider text-white/60 mb-1">
                        Contextual Insight
                      </div>
                      <p className="text-body-sm text-white/80">
                        Performance Marketing projects attract 3x more proposals
                        when including target KPIs.
                      </p>
                    </div>
                  </div>
                  <button className="mt-5 w-full bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-xl text-body-sm font-semibold transition-colors flex items-center justify-center gap-2">
                    Scan for Improvements
                    <Icon name="arrow_forward" size={16} />
                  </button>
                </div>

                {/* Recent Templates */}
                <div className="bg-surface-container-low rounded-3xl p-6 ghost-border">
                  <h3 className="font-display text-title-sm font-bold text-on-surface mb-4">
                    Recent Templates
                  </h3>
                  {["SaaS Growth Sprint", "Luxury E-commerce"].map(
                    (template) => (
                      <button
                        key={template}
                        className="w-full flex items-center justify-between py-3 text-body-md text-on-surface-variant hover:text-primary transition-colors"
                      >
                        {template}
                        <Icon name="chevron_right" size={18} />
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chat */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-tertiary-container rounded-full flex items-center justify-center shadow-xl hover:opacity-90 transition-opacity z-50">
        <Icon name="chat_bubble" filled className="text-on-tertiary" />
      </button>
    </>
  );
}
