"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

/* ── Static data ─────────────────────────────────────────── */

type Role = {
  id: string;
  role: string;
  icon: string;
  description: string;
  suggestedRate: string;
};

type Candidate = {
  id: string;
  name: string;
  initials: string;
  title: string;
  rating: number;
  projects: number;
  rate: string;
  match: number;
  tags: string[];
  badge?: string;
};

const roles: Role[] = [
  {
    id: "designer",
    role: "Lead Designer",
    icon: "palette",
    description:
      "Handles visual identity, campaign creatives, and art direction for the project.",
    suggestedRate: "$80 – $150/hr",
  },
  {
    id: "copywriter",
    role: "Copywriter",
    icon: "edit_note",
    description:
      "Crafts ad copy, landing page text, email sequences, and brand voice guidelines.",
    suggestedRate: "$60 – $120/hr",
  },
  {
    id: "smm",
    role: "Social Media Manager",
    icon: "share",
    description:
      "Plans content calendars, publishes posts, manages community engagement, and reports analytics.",
    suggestedRate: "$50 – $100/hr",
  },
  {
    id: "media-buyer",
    role: "Media Buyer",
    icon: "campaign",
    description:
      "Runs paid campaigns on Meta, Google, and TikTok. Manages ad spend and optimizes ROAS.",
    suggestedRate: "$70 – $140/hr",
  },
];

const candidates: Record<string, Candidate[]> = {
  designer: [
    {
      id: "d1",
      name: "Julianne V.",
      initials: "JV",
      title: "Brand Strategist & Visual Designer",
      rating: 4.9,
      projects: 128,
      rate: "$120/hr",
      match: 98,
      tags: ["Brand Identity", "Editorial", "Luxury"],
      badge: "Top Rated",
    },
    {
      id: "d2",
      name: "Kai Nakamura",
      initials: "KN",
      title: "Creative Director & Motion Designer",
      rating: 4.8,
      projects: 94,
      rate: "$140/hr",
      match: 91,
      tags: ["Motion", "3D", "Campaign"],
      badge: "Top Rated Plus",
    },
  ],
  copywriter: [
    {
      id: "c1",
      name: "Lara Monteiro",
      initials: "LM",
      title: "Performance Copywriter",
      rating: 5.0,
      projects: 76,
      rate: "$90/hr",
      match: 96,
      tags: ["Ad Copy", "Email", "DTC"],
      badge: "Top Rated",
    },
    {
      id: "c2",
      name: "Daniel Ortiz",
      initials: "DO",
      title: "Brand Storyteller & Content Strategist",
      rating: 4.7,
      projects: 53,
      rate: "$75/hr",
      match: 88,
      tags: ["Long-form", "SEO", "B2B"],
    },
  ],
  smm: [
    {
      id: "s1",
      name: "Sofia Amari",
      initials: "SA",
      title: "Social Media & Community Lead",
      rating: 5.0,
      projects: 68,
      rate: "$85/hr",
      match: 94,
      tags: ["Instagram", "TikTok", "Community"],
      badge: "Top Rated Plus",
    },
  ],
  "media-buyer": [
    {
      id: "m1",
      name: "Tomás Aguiar",
      initials: "TA",
      title: "Performance Marketing Specialist",
      rating: 4.9,
      projects: 112,
      rate: "$110/hr",
      match: 92,
      tags: ["Meta Ads", "Google Ads", "ROAS"],
      badge: "Top Rated",
    },
  ],
};

export default function TeamAssemblyPage() {
  const [selectedRoles, setSelectedRoles] = useState<string[]>(["designer"]);
  const [hired, setHired] = useState<Record<string, string>>({});

  const toggleRole = (id: string) =>
    setSelectedRoles((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );

  const hireCandidate = (roleId: string, candidateId: string) =>
    setHired((prev) => ({
      ...prev,
      [roleId]: prev[roleId] === candidateId ? "" : candidateId,
    }));

  const totalHired = Object.values(hired).filter(Boolean).length;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-surface-container-low py-16">
        <div className="mx-auto max-w-360 px-6 lg:px-8">
          <p className="text-label-lg font-bold uppercase tracking-widest text-tertiary mb-2">
            Build Your Team
          </p>
          <h1 className="font-display text-display-sm font-extrabold text-on-surface tracking-tight">
            Team Assembly
          </h1>
          <p className="mt-3 text-body-lg text-on-surface-variant max-w-2xl">
            Hire a full creative squad for your campaign — designer, copywriter,
            social media manager, and media buyer — all matched to your
            project&apos;s needs.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-360 px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Role Selection */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-display text-title-lg font-bold text-on-surface mb-4">
              Select Roles
            </h2>
            {roles.map((role) => {
              const isSelected = selectedRoles.includes(role.id);
              const isHired = !!hired[role.id];
              return (
                <button
                  key={role.id}
                  onClick={() => toggleRole(role.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all ${
                    isSelected
                      ? "bg-surface-container-lowest shadow-[0_20px_40px_rgba(29,27,32,0.06)]"
                      : "bg-surface-container-low hover:bg-surface-container"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isHired
                          ? "bg-secondary/10"
                          : isSelected
                            ? "bg-primary-fixed"
                            : "bg-surface-container"
                      }`}
                    >
                      <Icon
                        name={isHired ? "check_circle" : role.icon}
                        filled={isHired}
                        size={20}
                        className={isHired ? "text-secondary" : isSelected ? "text-primary" : "text-on-surface-variant"}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-display text-title-sm font-bold text-on-surface">
                          {role.role}
                        </p>
                        {isHired && (
                          <span className="text-label-sm font-bold text-secondary">
                            Hired
                          </span>
                        )}
                      </div>
                      <p className="text-body-sm text-on-surface-variant mt-0.5 line-clamp-2">
                        {role.description}
                      </p>
                      <p className="text-label-sm font-bold text-primary mt-2">
                        {role.suggestedRate}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Summary */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 mt-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
              <h3 className="font-display text-title-md font-bold text-on-surface mb-3">
                Your Squad
              </h3>
              <p className="text-body-sm text-on-surface-variant mb-4">
                {totalHired} of {selectedRoles.length} roles filled
              </p>
              <div className="w-full h-2 rounded-full bg-surface-container mb-4">
                <div
                  className="h-2 rounded-full bg-secondary transition-all"
                  style={{
                    width:
                      selectedRoles.length > 0
                        ? `${(totalHired / selectedRoles.length) * 100}%`
                        : "0%",
                  }}
                />
              </div>
              <Link
                href="/brief/new"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-display font-bold text-body-md transition-all ${
                  totalHired > 0
                    ? "hero-gradient text-on-primary hover:opacity-90"
                    : "bg-surface-container text-on-surface-variant cursor-not-allowed"
                }`}
              >
                Continue to Brief
                <Icon name="arrow_forward" size={18} />
              </Link>
            </div>
          </div>

          {/* Right: Candidate Cards */}
          <div className="lg:col-span-8">
            <h2 className="font-display text-title-lg font-bold text-on-surface mb-6">
              Recommended Freelancers
            </h2>

            {selectedRoles.length === 0 ? (
              <div className="bg-surface-container-lowest rounded-2xl p-12 text-center">
                <Icon name="group_add" size={48} className="text-outline-variant mx-auto mb-4" />
                <p className="text-body-md text-on-surface-variant">
                  Select at least one role to see matched candidates.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {selectedRoles.map((roleId) => {
                  const role = roles.find((r) => r.id === roleId)!;
                  const roleCandidates = candidates[roleId] || [];
                  return (
                    <div key={roleId}>
                      <h3 className="font-display text-title-md font-bold text-primary mb-4 flex items-center gap-2">
                        <Icon name={role.icon} size={20} />
                        {role.role}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {roleCandidates.map((c) => {
                          const isHiredHere = hired[roleId] === c.id;
                          return (
                            <div
                              key={c.id}
                              className={`bg-surface-container-lowest rounded-2xl p-6 transition-all ${
                                isHiredHere
                                  ? "ring-2 ring-secondary shadow-[0_20px_40px_rgba(29,27,32,0.06)]"
                                  : "hover:shadow-[0_20px_40px_rgba(29,27,32,0.06)]"
                              }`}
                            >
                              <div className="flex items-start gap-4 mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary-container font-display font-bold shrink-0">
                                  {c.initials}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-0.5">
                                    <Link
                                      href="/freelancer/1"
                                      className="font-display text-title-sm font-bold text-on-surface hover:text-primary transition-colors"
                                    >
                                      {c.name}
                                    </Link>
                                    {c.badge && (
                                      <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full text-[10px] font-bold">
                                        {c.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-label-sm text-on-surface-variant truncate">
                                    {c.title}
                                  </p>
                                </div>
                                <div className="bg-primary/10 text-primary px-2 py-1 rounded-lg text-label-sm font-bold shrink-0">
                                  {c.match}%
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {c.tags.map((t) => (
                                  <span
                                    key={t}
                                    className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-surface-container-high text-on-surface-variant"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-label-sm text-on-surface-variant">
                                  <span className="flex items-center gap-1">
                                    <Icon name="star" filled size={14} className="text-tertiary" />
                                    <span className="font-bold text-on-surface">{c.rating}</span>
                                  </span>
                                  <span>{c.projects} projects</span>
                                  <span className="font-bold text-primary">{c.rate}</span>
                                </div>
                                <button
                                  onClick={() => hireCandidate(roleId, c.id)}
                                  className={`px-4 py-2 rounded-full text-label-sm font-bold transition-all ${
                                    isHiredHere
                                      ? "bg-secondary text-on-secondary"
                                      : "bg-surface-container text-primary hover:bg-primary/10"
                                  }`}
                                >
                                  {isHiredHere ? "Selected" : "Select"}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
