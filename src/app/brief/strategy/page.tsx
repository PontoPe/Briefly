"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { BriefSidebar } from "@/components/BriefSidebar";
import { Icon } from "@/components/Icon";

const maturityOptions = [
  { id: "zero", icon: "rocket_launch", label: "Starting from Zero" },
  { id: "scaling", icon: "trending_up", label: "Scaling Up" },
  { id: "established", icon: "workspace_premium", label: "Established Leader" },
];

const ageRanges = ["18-24", "25-34", "35-50"];
const interests = ["Tech Savvy", "Design Enthusiasts"];
const styles = ["Minimalist", "Bold & Vibrant", "Luxury / Premium", "Organic / Soft"];

const channels = [
  { name: "Instagram Reels", note: "High reach for 25-34", active: true },
  { name: "TikTok Ads", note: "Growing engagement", active: false },
  { name: "LinkedIn Native", note: "B2B crossover", active: true },
];

export default function BriefStrategyPage() {
  const [maturity, setMaturity] = useState("zero");
  const [selectedAge, setSelectedAge] = useState("25-34");
  const [selectedStyle, setSelectedStyle] = useState("Minimalist");

  return (
    <>
      <Navbar />
      <BriefSidebar />

      <div className="ml-64 pt-4">
        <div className="mx-auto max-w-[1100px] px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <p className="text-label-lg font-bold uppercase tracking-widest text-on-surface-variant mb-2">
              Step 02 — Step 05
            </p>
            <h1 className="font-display text-headline-lg font-extrabold text-on-surface mb-2">
              Strategy & Audience
            </h1>
            <p className="text-body-md text-on-surface-variant">
              Define your target audience, brand maturity, and creative
              preferences to attract the perfect talent.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Main form */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              {/* Brand Maturity */}
              <div className="bg-surface-container-low rounded-3xl p-6">
                <label className="block text-label-md font-bold uppercase tracking-wider text-on-surface mb-4">
                  Brand Maturity
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {maturityOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setMaturity(opt.id)}
                      className={`p-5 rounded-2xl text-center transition-all ${
                        maturity === opt.id
                          ? "border-2 border-primary shadow-lg bg-surface-container-lowest"
                          : "bg-surface-container-lowest ghost-border hover:bg-surface-container"
                      }`}
                    >
                      <Icon
                        name={opt.icon}
                        size={32}
                        className="text-primary"
                      />
                      <div className="mt-3 font-display text-title-sm font-bold text-on-surface">
                        {opt.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Core Demographics */}
              <div className="bg-surface-container-low rounded-3xl p-6">
                <label className="block text-label-md font-bold uppercase tracking-wider text-on-surface mb-4">
                  Core Demographics
                </label>
                <div className="mb-4">
                  <div className="text-body-sm text-on-surface-variant mb-2">
                    Age Range
                  </div>
                  <div className="flex gap-2">
                    {ageRanges.map((age) => (
                      <button
                        key={age}
                        onClick={() => setSelectedAge(age)}
                        className={`px-5 py-2 rounded-full text-body-sm font-semibold transition-colors ${
                          selectedAge === age
                            ? "bg-tertiary text-on-tertiary"
                            : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high"
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-body-sm text-on-surface-variant mb-2">
                    Interests
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {interests.map((interest, i) => (
                      <span
                        key={interest}
                        className={`px-4 py-2 rounded-full text-body-sm font-semibold ${
                          i === 0
                            ? "bg-tertiary-container/20 text-tertiary border border-tertiary/30"
                            : "bg-secondary-container/30 text-secondary border border-secondary/30"
                        }`}
                      >
                        {interest}
                      </span>
                    ))}
                    <button className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
                      <Icon name="add" size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Creative Style */}
              <div className="bg-surface-container-low rounded-3xl p-6 relative overflow-hidden">
                <label className="block text-label-md font-bold uppercase tracking-wider text-on-surface mb-4">
                  Creative Style
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {styles.map((style) => (
                    <button
                      key={style}
                      onClick={() => setSelectedStyle(style)}
                      className={`px-5 py-3 rounded-xl text-body-md font-semibold transition-all ${
                        selectedStyle === style
                          ? "border-2 border-primary text-primary bg-surface-container-lowest"
                          : "bg-surface-container-lowest ghost-border text-on-surface-variant hover:text-on-surface"
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 text-body-md text-on-surface-variant hover:text-on-surface transition-colors">
                  <Icon name="arrow_back" size={18} />
                  Back
                </button>
                <button className="bg-gradient-to-r from-tertiary to-tertiary-container text-on-tertiary px-8 py-3.5 rounded-full font-display font-bold text-body-md hover:opacity-90 transition-opacity shadow-xl flex items-center gap-2 hover:scale-[1.02]">
                  Next: Deliverables
                  <Icon name="arrow_forward" size={18} />
                </button>
              </div>
            </div>

            {/* Right panel - AI Insights */}
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-28 bg-surface-container-highest/50 backdrop-blur-md rounded-3xl p-6 ghost-border">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="auto_awesome" className="text-primary" size={20} />
                  <span className="font-display text-title-sm font-bold text-on-surface">
                    AI Insights
                  </span>
                </div>

                {/* Recommended Channels */}
                <div className="mb-6">
                  <div className="text-label-sm font-bold uppercase tracking-wider text-on-surface-variant mb-3">
                    Recommended Channels
                  </div>
                  <div className="space-y-3">
                    {channels.map((ch) => (
                      <div
                        key={ch.name}
                        className={`flex items-center justify-between ${
                          ch.active ? "opacity-100" : "opacity-50"
                        }`}
                      >
                        <div>
                          <div className="font-display text-body-md font-bold text-on-surface">
                            {ch.name}
                          </div>
                          <div className="text-label-sm text-on-surface-variant">
                            {ch.note}
                          </div>
                        </div>
                        {ch.active && (
                          <Icon
                            name="check_circle"
                            filled
                            size={20}
                            className="text-secondary"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Predicted Tone */}
                <div className="mb-6">
                  <div className="text-label-sm font-bold uppercase tracking-wider text-on-surface-variant mb-3">
                    Predicted Tone
                  </div>
                  <div className="flex items-center justify-between text-label-sm text-on-surface-variant mb-2">
                    <span>Casual</span>
                    <span>Formal</span>
                  </div>
                  <div className="h-2 bg-surface-container-low rounded-full">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <p className="mt-3 text-body-sm text-on-surface-variant italic">
                    &ldquo;For luxury aesthetics with a 25-34 audience, we
                    recommend a polished-yet-approachable tone.&rdquo;
                  </p>
                </div>

                <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-display font-bold text-body-md hover:opacity-90 transition-opacity">
                  Apply Recommendations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blurs */}
      <div className="fixed top-40 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </>
  );
}
