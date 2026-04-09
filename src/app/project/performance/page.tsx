"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

const stats = [
  {
    label: "Impressions",
    value: "1.2M",
    trend: "+14.2% vs prev.",
    up: true,
    accent: "primary",
  },
  {
    label: "Lead Volume",
    value: "842",
    trend: "+5.7% vs prev.",
    up: true,
    accent: "tertiary",
  },
  {
    label: "Avg. ROAS",
    value: "4.8x",
    trend: "-2.1% vs prev.",
    up: false,
    accent: "secondary",
  },
];

const chartDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN", "MON"];
const chartValues = [30, 45, 50, 55, 70, 80, 60, 55];

const certifications = [
  { name: "Meta Ads Expert", sub: "Certified 2024", icon: "campaign" },
  { name: "GA4 Advanced", sub: "Certified 2023", icon: "analytics" },
  { name: "SEO Copywriting", sub: "Vetted Skill", icon: "edit_note" },
];

const integrations = [
  {
    name: "Google Analytics 4",
    status: "Active Connection",
    desc: "Pulling real-time event data from 'Project Alpha' Web Property.",
    metrics: [
      { label: "Bounce Rate", value: "32.4%" },
      { label: "Session Duration", value: "4m 12s" },
    ],
  },
  {
    name: "Meta Ads Manager",
    status: "Active Connection",
    desc: "Tracking Facebook & Instagram performance across 4 active sets.",
    metrics: [
      { label: "CPC", value: "$0.84" },
      { label: "Ad Spend", value: "$12,450" },
    ],
  },
];

export default function PerformancePage() {
  const [period, setPeriod] = useState("30d");

  return (
    <>
      <Navbar />
      <ProjectSidebar />

      <div className="ml-64 pt-4">
        <div className="max-w-300 mx-auto px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-tertiary font-bold tracking-widest text-label-sm uppercase mb-2 block">
                Executive Overview
              </span>
              <h1 className="font-display text-display-sm font-extrabold text-on-surface tracking-tight">
                Campaign Performance
              </h1>
            </div>
            <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-full ghost-border">
              <button
                onClick={() => setPeriod("30d")}
                className={`px-6 py-2 rounded-full text-body-sm font-bold transition-colors ${
                  period === "30d"
                    ? "bg-surface-container-highest text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Last 30 Days
              </button>
              <button
                onClick={() => setPeriod("quarter")}
                className={`px-6 py-2 rounded-full text-body-sm font-bold transition-colors ${
                  period === "quarter"
                    ? "bg-surface-container-highest text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Last Quarter
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Stats Cards */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-surface-container p-6 rounded-2xl relative overflow-hidden group"
                >
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-110 ${
                      s.accent === "primary"
                        ? "bg-primary/5"
                        : s.accent === "tertiary"
                          ? "bg-tertiary/5"
                          : "bg-secondary/5"
                    }`}
                  />
                  <p className="text-body-sm text-on-surface-variant font-medium mb-1">
                    {s.label}
                  </p>
                  <h2 className="font-display text-headline-lg font-extrabold text-on-surface">
                    {s.value}
                  </h2>
                  <div
                    className={`mt-4 flex items-center gap-2 font-bold text-label-sm ${
                      s.up ? "text-secondary" : "text-error"
                    }`}
                  >
                    <Icon
                      name={s.up ? "trending_up" : "trending_down"}
                      size={16}
                    />
                    {s.trend}
                  </div>
                </div>
              ))}

              {/* Impact Chart */}
              <div className="sm:col-span-3 bg-surface-container-low p-8 rounded-2xl">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="font-display text-title-lg font-bold text-on-surface">
                      Impact Growth
                    </h3>
                    <p className="text-body-sm text-on-surface-variant">
                      Visualizing cross-channel conversion velocity
                    </p>
                  </div>
                  <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                    <Icon
                      name="more_vert"
                      size={20}
                      className="text-on-surface-variant"
                    />
                  </button>
                </div>

                {/* Simple bar chart */}
                <div className="flex items-end justify-between gap-3 h-48 mb-4">
                  {chartValues.map((v, i) => (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center gap-2"
                    >
                      <div
                        className={`w-full rounded-lg transition-all ${
                          i === 4 || i === 5
                            ? "bg-primary"
                            : "bg-primary-fixed-dim"
                        }`}
                        style={{ height: `${v * 2}px` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-label-sm text-on-surface-variant">
                  {chartDays.map((d, i) => (
                    <span key={i} className="flex-1 text-center">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Freelancer + Certifications */}
            <div className="md:col-span-4 space-y-6">
              {/* Freelancer Card */}
              <Link href="/freelancer/1" className="bg-primary rounded-3xl p-6 text-white block hover:opacity-95 transition-opacity">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                  <Icon name="person" size={32} className="text-white/80" />
                </div>
                <h3 className="font-display text-title-lg font-bold">
                  Elena Vance
                </h3>
                <p className="text-body-sm text-white/70 mb-4">
                  Growth Strategist & Editorial Expert
                </p>
                <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-label-sm font-bold">
                  <Icon name="verified" filled size={14} />
                  Top Rated Specialist
                </div>
              </Link>

              {/* Vetted Expertise */}
              <div className="bg-surface-container-low rounded-3xl p-6 ghost-border">
                <h3 className="font-display text-label-md font-bold uppercase tracking-wider text-on-surface mb-5">
                  Vetted Expertise
                </h3>
                <div className="space-y-4">
                  {certifications.map((c) => (
                    <div key={c.name} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">
                        <Icon
                          name={c.icon}
                          size={20}
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <div className="font-display font-bold text-body-md text-on-surface">
                          {c.name}
                        </div>
                        <div className="text-label-sm text-on-surface-variant uppercase tracking-wider">
                          {c.sub}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Integration Cards */}
            {integrations.map((integ) => (
              <div
                key={integ.name}
                className="md:col-span-6 bg-surface-container-lowest rounded-3xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center">
                    <Icon
                      name="insights"
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-title-md font-bold text-on-surface">
                        {integ.name}
                      </h3>
                      <span className="bg-secondary-container text-on-secondary-container px-3 py-0.5 rounded-full text-label-sm font-bold uppercase tracking-wider">
                        {integ.status}
                      </span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant leading-relaxed">
                      {integ.desc}
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 pt-4 border-t border-outline-variant/20">
                  {integ.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-label-sm text-on-surface-variant uppercase tracking-wider">
                        {m.label}
                      </div>
                      <div className="font-display text-title-md font-bold text-on-surface">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
