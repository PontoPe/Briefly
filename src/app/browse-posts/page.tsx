"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

/* ── Filter data ─────────────────────────────────────────── */

const objectives = [
  "Brand Identity",
  "Performance Marketing",
  "Growth/Lead Gen",
  "Awareness/Engagement",
];

const platforms = ["Instagram", "TikTok", "LinkedIn", "YouTube", "Email"];

const softwareStack = ["Figma", "Adobe CC", "HubSpot", "Shopify"];

const maturityLevels = ["Starting from Zero", "Scaling", "Enterprise"];

const aesthetics = ["Minimalist", "Bold", "Corporate"];

const quickFilters = [
  "Deliverable Type",
  "Budget Range",
  "Urgency",
  "Industry",
];

const quickFilterOptions: Record<string, string[]> = {
  "Deliverable Type": [
    "Static Social Posts",
    "Infographics",
    "Pitch Decks",
    "Reels / TikTok Editing",
    "2D Animation",
    "Ad Copy",
    "Landing Pages",
    "Media Buying",
  ],
  "Budget Range": [
    "Under $1,000",
    "$1,000 – $5,000",
    "$5,000 – $15,000",
    "$15,000+",
    "Monthly Retainer",
  ],
  Urgency: [
    "Flexible Timeline",
    "Standard (1–2 weeks)",
    "Rush (48–72 hours)",
    "Emergency / Same-day",
  ],
  Industry: [
    "E-commerce / DTC",
    "B2B / Enterprise SaaS",
    "Local Businesses",
    "Infoproducts / Education",
    "Gaming / Web3",
    "Fashion & Lifestyle",
  ],
};

/* ── Project data ────────────────────────────────────────── */

const featuredProject = {
  id: "1",
  title: "Global Brand Launch: Eco-Conscious Apparel",
  budget: "$8,500 – $12,000",
  timeline: "3 Months",
  location: "Remote",
  tags: ["Figma", "Brand Identity"],
  description:
    "Seeking a lead strategist for a multi-channel launch. Focus on storytelling and sustainable positioning.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC8l0ln6oGPwy3OcY25XTqeY4nMiYsd6mSeriKLc8tb8UW7ky2XdxB9o1E3dLfk7uUstFv-ZQPmA0OCVNobx8JxSdyRIiWZ75n9oqhnu37Jm9-h73ta8qLbMZeCdURXwmDV82a6ZrWj_ODCd8XSFcI9J8bcDZXww6KpIsTdkGlazhX6bES4V8RaJmQyT4hRUSdjZL4PGgm4en4re29Rx0XsclMqJm9B3R303b5MiCNUu6IE2PK3_AH2z374c56K5tdAgi2MdWgJKQA_",
};

const standardProjects = [
  {
    id: "2",
    icon: "brush",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    title: "Visual Identity for Fintech Startup",
    budget: "$2,500",
    tags: ["Brand Identity", "Figma", "Scaling"],
    description:
      "Brand guidelines and UI kit for a mobile banking application focusing on Gen-Z scaling.",
  },
  {
    id: "3",
    icon: "trending_up",
    iconBg: "bg-[#68fadd]",
    iconColor: "text-[#005145]",
    title: "Growth & SEO Strategy: B2B SaaS",
    budget: "$4,000/mo",
    tags: ["Growth/Lead Gen", "LinkedIn"],
    description:
      "Long-term partnership to scale organic traffic for an enterprise project management tool.",
  },
];

/* ── Component ───────────────────────────────────────────── */

export default function BrowsePostsPage() {
  const [checkedObjectives, setCheckedObjectives] = useState<string[]>([
    "Brand Identity",
  ]);
  const [selectedMaturity, setSelectedMaturity] = useState("Scaling");
  const [openQuickFilter, setOpenQuickFilter] = useState<string | null>(null);
  const [quickSelections, setQuickSelections] = useState<Record<string, string[]>>({});

  const toggleObjective = (o: string) =>
    setCheckedObjectives((prev) =>
      prev.includes(o) ? prev.filter((x) => x !== o) : [...prev, o]
    );

  const toggleQuickSelection = (filter: string, option: string) =>
    setQuickSelections((prev) => {
      const current = prev[filter] || [];
      return {
        ...prev,
        [filter]: current.includes(option)
          ? current.filter((x) => x !== option)
          : [...current, option],
      };
    });

  return (
    <>
      <Navbar />

      {/* Quick Filter Bar */}
      <div className="fixed top-18.25 w-full z-40 bg-surface-container-lowest/90 backdrop-blur-sm border-b border-outline-variant/10">
        <div className="max-w-360 mx-auto px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-nowrap">
            {quickFilters.map((f) => {
              const isOpen = openQuickFilter === f;
              const count = (quickSelections[f] || []).length;
              return (
                <div key={f} className="relative">
                  <button
                    onClick={() => setOpenQuickFilter(isOpen ? null : f)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                      isOpen || count > 0
                        ? "bg-primary/10 text-primary"
                        : "bg-surface-container text-on-surface-variant hover:bg-primary/5"
                    }`}
                  >
                    {f}
                    {count > 0 && (
                      <span className="w-5 h-5 rounded-full bg-primary text-on-primary text-[10px] font-bold flex items-center justify-center">
                        {count}
                      </span>
                    )}
                    <Icon name={isOpen ? "expand_less" : "expand_more"} size={18} />
                  </button>

                  {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(29,27,32,0.12)] z-50 p-3 space-y-1">
                      {(quickFilterOptions[f] || []).map((option) => {
                        const selected = (quickSelections[f] || []).includes(option);
                        return (
                          <button
                            key={option}
                            onClick={() => toggleQuickSelection(f, option)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              selected
                                ? "bg-primary/10 text-primary"
                                : "text-on-surface-variant hover:bg-surface-container"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                selected
                                  ? "bg-primary border-primary"
                                  : "border-outline-variant/30"
                              }`}>
                                {selected && <Icon name="check" size={12} className="text-on-primary" />}
                              </span>
                              {option}
                            </span>
                          </button>
                        );
                      })}
                      {(quickSelections[f] || []).length > 0 && (
                        <button
                          onClick={() => setQuickSelections((prev) => ({ ...prev, [f]: [] }))}
                          className="w-full text-center text-label-sm font-bold text-primary pt-2 hover:underline"
                        >
                          Clear All
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <button className="flex items-center gap-2 text-primary font-bold text-sm px-4 py-2 hover:bg-primary/5 rounded-full transition-colors whitespace-nowrap">
            <Icon name="bookmark" size={20} />
            Save Filter Preset
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-40 pb-20 max-w-360 mx-auto px-8 min-h-screen">
        <div className="flex gap-12">
          {/* ── Sidebar Filters ──────────────────────────── */}
          <aside className="w-80 shrink-0 hidden lg:block sticky top-44 h-[calc(100vh-12rem)] overflow-y-auto pr-4 space-y-8 pb-8">
            {/* Business Objective */}
            <div>
              <button className="flex items-center justify-between w-full mb-4">
                <h3 className="text-label-md font-bold text-primary uppercase tracking-widest">
                  Business Objective
                </h3>
                <Icon name="expand_less" size={20} className="text-primary" />
              </button>
              <div className="space-y-3">
                {objectives.map((o) => (
                  <label
                    key={o}
                    className="flex items-center group cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={checkedObjectives.includes(o)}
                      onChange={() => toggleObjective(o)}
                      className="w-4 h-4 rounded border-outline-variant/30 text-primary focus:ring-primary/20"
                    />
                    <span className="ml-3 text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">
                      {o}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Platform Focus */}
            <div>
              <button className="flex items-center justify-between w-full mb-4">
                <h3 className="text-label-md font-bold text-primary uppercase tracking-widest">
                  Platform Focus
                </h3>
                <Icon name="expand_less" size={20} className="text-primary" />
              </button>
              <div className="flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/20 rounded-full text-label-sm font-bold cursor-pointer hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Software Stack */}
            <div>
              <button className="flex items-center justify-between w-full mb-4">
                <h3 className="text-label-md font-bold text-primary uppercase tracking-widest">
                  Software Stack
                </h3>
                <Icon name="expand_less" size={20} className="text-primary" />
              </button>
              <div className="space-y-3">
                {softwareStack.map((s) => (
                  <label
                    key={s}
                    className="flex items-center group cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-outline-variant/30 text-primary focus:ring-primary/20"
                    />
                    <span className="ml-3 text-sm font-medium text-on-surface-variant">
                      {s}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand Maturity */}
            <div>
              <button className="flex items-center justify-between w-full mb-4">
                <h3 className="text-label-md font-bold text-primary uppercase tracking-widest">
                  Brand Maturity
                </h3>
                <Icon name="expand_less" size={20} className="text-primary" />
              </button>
              <div className="grid grid-cols-1 gap-2">
                {maturityLevels.map((m) => (
                  <div
                    key={m}
                    onClick={() => setSelectedMaturity(m)}
                    className={`p-3 border rounded-xl cursor-pointer transition-all ${
                      selectedMaturity === m
                        ? "bg-primary/5 border-primary/40 shadow-[0_2px_8px_rgba(56,30,115,0.08)]"
                        : "border-outline-variant/20 hover:border-primary/30"
                    }`}
                  >
                    <p
                      className={`text-body-sm font-bold ${
                        selectedMaturity === m
                          ? "text-primary"
                          : "text-on-surface"
                      }`}
                    >
                      {m}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Collab Model & Creative Aesthetic & Language */}
            <div className="space-y-6">
              <div>
                <h3 className="text-label-md font-bold text-primary uppercase tracking-widest mb-4">
                  Collab Model
                </h3>
                <select className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-body-sm font-display font-bold py-3 px-4 focus:ring-1 focus:ring-primary focus:border-primary text-on-surface appearance-none cursor-pointer">
                  <option>Collaborative</option>
                  <option>Full Autonomy</option>
                  <option>Embedded</option>
                  <option>Consulting</option>
                </select>
              </div>

              <div>
                <h3 className="text-label-md font-bold text-primary uppercase tracking-widest mb-4">
                  Creative Aesthetic
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aesthetics.map((a) => (
                    <span
                      key={a}
                      className="px-3 py-1.5 border border-outline-variant/30 rounded-full text-xs font-bold text-on-surface-variant hover:text-primary hover:border-primary cursor-pointer transition-colors"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-label-md font-bold text-primary uppercase tracking-widest mb-4">
                  Language Requirements
                </h3>
                <div className="space-y-3">
                  {[
                    { lang: "English", min: 3 },
                    { lang: "Portuguese", min: 0 },
                    { lang: "Spanish", min: 0 },
                    { lang: "French", min: 0 },
                  ].map((l) => (
                    <div key={l.lang} className="flex items-center justify-between gap-3">
                      <span className="text-body-sm font-medium text-on-surface-variant min-w-0 shrink-0">{l.lang}</span>
                      <div className="flex items-center gap-1.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <button
                            key={i}
                            className={`w-6 h-6 rounded-lg text-[11px] font-bold flex items-center justify-center transition-colors ${
                              i < l.min
                                ? "bg-primary text-on-primary"
                                : "bg-surface-container text-on-surface-variant hover:bg-primary/10"
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-on-surface-variant mt-3 leading-relaxed">
                  Set minimum proficiency (1–5) per language. Only freelancers who meet all requirements will see this post.
                </p>
              </div>
            </div>
          </aside>

          {/* ── Main Area: Project Cards ─────────────────── */}
          <section className="grow min-w-0">
            {/* Heading + Sort */}
            <div className="mb-12 flex justify-between items-end">
              <div>
                <h1 className="text-4xl font-extrabold font-display tracking-tighter text-on-surface">
                  Available Projects
                </h1>
                <p className="text-on-surface-variant mt-2">
                  Showing 128 high-impact marketing opportunities based on your
                  filters
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-label-md text-on-surface-variant font-medium">
                  Sort by:
                </span>
                <div className="bg-surface-container px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 cursor-pointer">
                  Newest First
                  <Icon name="expand_more" size={18} />
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ── Featured Card (full-width) ── */}
              <Link
                href={`/browse-posts/${featuredProject.id}`}
                className="bg-surface-container-lowest p-8 rounded-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group md:col-span-2 relative overflow-hidden block"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-xl overflow-hidden bg-surface-container relative">
                    <Image
                      src={featuredProject.image}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-2">
                          <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            Featured Campaign
                          </span>
                          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            Scaling
                          </span>
                        </div>
                        <div className="text-2xl font-black text-primary">
                          {featuredProject.budget}
                        </div>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-on-surface mb-3">
                        {featuredProject.title}
                      </h3>
                      <p className="text-on-surface-variant text-body-md leading-relaxed mb-6">
                        {featuredProject.description}
                      </p>
                      <div className="flex gap-3 mb-6">
                        {featuredProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                        <Icon
                          name="schedule"
                          size={20}
                          className="text-primary"
                        />
                        {featuredProject.timeline}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                        <Icon
                          name="location_on"
                          size={20}
                          className="text-primary"
                        />
                        {featuredProject.location}
                      </div>
                      <span className="ml-auto bg-tertiary-container text-on-tertiary px-8 py-3 rounded-full font-bold text-sm tracking-tight hover:opacity-90 transition-opacity">
                        Apply Now
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* ── Standard Cards ── */}
              {standardProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/browse-posts/${project.id}`}
                  className="bg-surface-container-lowest p-6 rounded-xl hover:bg-surface-container-low transition-colors duration-300 block"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 ${project.iconBg} rounded-xl`}>
                      <Icon
                        name={project.icon}
                        className={project.iconColor}
                      />
                    </div>
                    <div className="text-lg font-bold text-primary">
                      {project.budget}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-on-surface mb-2">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                          i === 0
                            ? "bg-primary/5 text-primary"
                            : "bg-surface-container-high text-on-surface-variant"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="block w-full py-3 rounded-full border border-outline-variant/20 text-primary font-bold text-sm text-center hover:bg-primary hover:text-on-primary transition-all">
                    View Details
                  </span>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center items-center gap-4">
              <button className="p-3 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors">
                <Icon name="chevron_left" />
              </button>
              <div className="flex gap-2">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary font-bold">
                  1
                </span>
                <span className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant font-bold hover:bg-surface-container transition-colors cursor-pointer">
                  2
                </span>
                <span className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant font-bold hover:bg-surface-container transition-colors cursor-pointer">
                  3
                </span>
              </div>
              <button className="p-3 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors">
                <Icon name="chevron_right" />
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
