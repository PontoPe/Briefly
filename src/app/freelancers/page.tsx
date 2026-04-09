import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

const freelancers = [
  {
    name: "Elena Rodriguez",
    title: "Brand Strategist & Visual Designer",
    rating: 4.9,
    projects: 127,
    hourlyRate: "$120",
    tags: ["Brand Identity", "Luxury", "Editorial"],
    badge: "Top Rated Plus",
    initials: "ER",
    specialties: ["Figma", "Adobe CC", "After Effects"],
  },
  {
    name: "Marcus Chen",
    title: "Performance Marketing Designer",
    rating: 4.8,
    projects: 94,
    hourlyRate: "$95",
    tags: ["Ad Creative", "Social Media", "SaaS"],
    badge: "Top Rated",
    initials: "MC",
    specialties: ["Meta Ads", "Google Ads", "Canva"],
  },
  {
    name: "Sofia Amari",
    title: "Motion Designer & Art Director",
    rating: 5.0,
    projects: 68,
    hourlyRate: "$150",
    tags: ["Motion", "3D", "Campaign"],
    badge: "Top Rated Plus",
    initials: "SA",
    specialties: ["After Effects", "Cinema 4D", "Premiere"],
  },
  {
    name: "Julian Aris",
    title: "UI/UX & Pitch Deck Specialist",
    rating: 4.9,
    projects: 83,
    hourlyRate: "$110",
    tags: ["Pitch Decks", "SaaS", "Minimalist"],
    badge: "Top Rated",
    initials: "JA",
    specialties: ["Figma", "Webflow", "Keynote"],
  },
  {
    name: "Camila Fuentes",
    title: "Social Media Designer",
    rating: 4.7,
    projects: 156,
    hourlyRate: "$75",
    tags: ["Instagram", "TikTok", "DTC"],
    badge: "Rising Talent",
    initials: "CF",
    specialties: ["Canva", "Figma", "CapCut"],
  },
  {
    name: "David Kim",
    title: "Brand Identity & Packaging",
    rating: 4.9,
    projects: 52,
    hourlyRate: "$135",
    tags: ["Packaging", "CPG", "Premium"],
    badge: "Top Rated Plus",
    initials: "DK",
    specialties: ["Illustrator", "InDesign", "Dimension"],
  },
];

const categories = [
  "All Designers",
  "Brand Identity",
  "Performance Marketing",
  "Social Media",
  "Motion & Video",
  "UI/UX",
  "Packaging",
];

export default function FreelancersPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(0,107,92,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-360 px-6 lg:px-8 py-20 text-center">
          <h1 className="font-display text-display-md font-extrabold text-white tracking-tight">
            Elite Marketing Designers
          </h1>
          <p className="mt-4 text-body-lg text-white/60 max-w-lg mx-auto">
            Browse vetted creative talent specialized in branding, campaigns,
            social media, and everything marketing.
          </p>
          {/* Search */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="flex bg-white/10 backdrop-blur-md rounded-full border border-white/20 p-1.5">
              <input
                type="text"
                placeholder="Search by name, skill, or industry..."
                className="flex-1 bg-transparent text-white placeholder:text-white/40 px-5 py-3 text-body-md focus:outline-none"
              />
              <button className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-display font-bold text-body-md hover:opacity-90 transition-opacity">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-360 mx-auto px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-5 py-2.5 rounded-full text-body-sm font-semibold whitespace-nowrap transition-colors ${
                i === 0
                  ? "bg-tertiary text-on-tertiary"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count + sort */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-body-md text-on-surface-variant">
            Showing <strong className="text-on-surface">248</strong> vetted
            designers
          </p>
          <div className="flex items-center gap-2">
            <span className="text-label-md text-on-surface-variant font-medium">
              Sort by:
            </span>
            <div className="bg-surface-container px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 cursor-pointer">
              Best Match
              <Icon name="expand_more" size={18} />
            </div>
          </div>
        </div>

        {/* Freelancer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancers.map((f) => (
            <Link
              key={f.name}
              href="/freelancer/1"
              className="bg-surface-container-lowest rounded-3xl p-6 hover:shadow-[0_20px_40px_rgba(29,27,32,0.06)] transition-all group block"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary-container font-display font-bold shrink-0">
                  {f.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-display text-title-md font-bold text-on-surface group-hover:text-primary transition-colors truncate">
                    {f.name}
                  </div>
                  <div className="text-body-sm text-on-surface-variant truncate">
                    {f.title}
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-sm font-bold mb-4 ${
                  f.badge === "Top Rated Plus"
                    ? "bg-secondary-container text-on-secondary-container"
                    : f.badge === "Top Rated"
                      ? "bg-primary/10 text-primary"
                      : "bg-tertiary-container/20 text-tertiary-container"
                }`}
              >
                <Icon name="verified" size={14} />
                {f.badge}
              </div>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mb-4">
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-label-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tools */}
              <div className="flex gap-2 flex-wrap mb-4">
                {f.specialties.map((tool) => (
                  <span
                    key={tool}
                    className="text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                <div className="flex items-center gap-1">
                  <Icon
                    name="star"
                    filled
                    size={18}
                    className="text-tertiary-container"
                  />
                  <span className="font-display font-bold text-body-md">
                    {f.rating}
                  </span>
                  <span className="text-body-sm text-on-surface-variant">
                    ({f.projects})
                  </span>
                </div>
                <span className="font-display font-bold text-primary text-body-lg">
                  {f.hourlyRate}
                  <span className="text-body-sm font-normal text-on-surface-variant">
                    /hr
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <Icon name="chevron_left" size={20} />
          </button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`w-10 h-10 rounded-full font-display font-bold text-body-sm transition-colors ${
                n === 1
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {n}
            </button>
          ))}
          <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <Icon name="chevron_right" size={20} />
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
