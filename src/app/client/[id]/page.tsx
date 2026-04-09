import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

/* ── Static data ─────────────────────────────────────────── */

const projectHistory = [
  {
    title: "Q3 Brand Refresh",
    designer: "Julianne V.",
    designerHref: "/freelancer/1",
    category: "Brand Identity",
    budget: "$12,000",
    rating: 5.0,
    status: "Completed",
    date: "Sep 2024",
  },
  {
    title: "Performance Ad Campaign",
    designer: "Marcus Chen",
    designerHref: "/freelancer/1",
    category: "Paid Media",
    budget: "$8,500",
    rating: 4.9,
    status: "Completed",
    date: "Jul 2024",
  },
  {
    title: "Social Media Kit — Holiday",
    designer: "Sofia Amari",
    designerHref: "/freelancer/1",
    category: "Social Media",
    budget: "$3,200",
    rating: 5.0,
    status: "Completed",
    date: "Dec 2023",
  },
];

const activeProjects = [
  {
    title: "2025 Product Launch Campaign",
    designer: "Julianne V.",
    category: "Campaign Design",
    progress: 65,
    milestone: "Final Asset Delivery",
  },
];

const teamPreferences = [
  "Responds within 24 hours",
  "Clear briefs with references",
  "Milestone-based payments preferred",
  "Open to retainer engagements",
];

export default function ClientProfilePage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-20 max-w-360 mx-auto px-8">
        {/* ── Profile Header ─────────────────────────────── */}
        <header className="relative mb-16">
          <div className="w-full h-48 rounded-xl overflow-hidden bg-linear-to-br from-primary to-primary-container" />

          <div className="relative z-10 flex flex-col md:flex-row items-end gap-8 px-12 -mt-16">
            <div className="w-32 h-32 rounded-xl bg-surface-container-lowest shadow-2xl border-4 border-surface flex items-center justify-center shrink-0">
              <span className="font-display text-display-sm font-extrabold text-primary">
                NV
              </span>
            </div>

            <div className="flex-1 pb-2">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h1 className="text-display-sm font-display font-extrabold tracking-tight text-on-surface">
                  NovaStar Brands
                </h1>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-md font-bold flex items-center gap-1">
                  <Icon name="verified" filled size={16} />
                  Verified Client
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-on-surface-variant">
                <div className="flex items-center gap-1">
                  <Icon name="location_on" className="text-primary" size={20} />
                  <span>São Paulo, Brazil</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="business" className="text-primary" size={20} />
                  <span>E-commerce / DTC</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="calendar_month" className="text-primary" size={20} />
                  <span>Member since Jan 2023</span>
                </div>
              </div>
            </div>

            <div className="pb-2">
              <Link
                href="/brief/new"
                className="hero-gradient text-on-primary font-bold px-8 py-3 rounded-full hover:opacity-90 transition-all flex items-center gap-2"
              >
                Send Proposal
                <Icon name="arrow_forward" size={20} />
              </Link>
            </div>
          </div>
        </header>

        {/* ── Stats Bar ──────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Projects Posted", value: "18", icon: "folder" },
            { label: "Total Spent", value: "$86.4k", icon: "payments" },
            { label: "Avg. Rating Given", value: "4.9", icon: "star" },
            { label: "Avg. Response Time", value: "< 4hrs", icon: "schedule" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-surface-container-lowest rounded-2xl p-6 text-center"
            >
              <Icon name={stat.icon} size={24} className="text-primary mx-auto mb-2" />
              <p className="text-headline-sm font-display font-extrabold text-on-surface">
                {stat.value}
              </p>
              <p className="text-label-sm text-on-surface-variant">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── Main Grid ──────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-10">
            {/* About */}
            <section className="bg-surface-container-low p-8 rounded-xl">
              <h2 className="font-display text-xl font-bold mb-4 text-primary">
                About
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                NovaStar Brands is a DTC e-commerce company specializing in
                premium skincare and wellness products. We work with
                top-tier creative freelancers to build campaigns that
                blend editorial aesthetics with performance marketing.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Company Size</span>
                  <span className="font-bold text-on-surface">50-200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Website</span>
                  <span className="font-bold text-secondary">novastarbrands.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Hiring Since</span>
                  <span className="font-bold text-on-surface">Jan 2023</span>
                </div>
              </div>
            </section>

            {/* Working Style */}
            <section>
              <h2 className="font-display text-xl font-bold mb-4 text-primary">
                Working Style
              </h2>
              <div className="space-y-2">
                {teamPreferences.map((pref) => (
                  <div
                    key={pref}
                    className="flex items-start gap-2 p-3 bg-surface-container-lowest rounded-xl"
                  >
                    <Icon name="check_circle" filled size={18} className="text-secondary mt-0.5 shrink-0" />
                    <span className="text-body-sm text-on-surface-variant">{pref}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Industries */}
            <section>
              <h2 className="font-display text-xl font-bold mb-4 text-primary">
                Industries
              </h2>
              <div className="flex flex-wrap gap-2">
                {["E-commerce", "DTC", "Skincare", "Wellness", "Lifestyle"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-high text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Active Projects */}
            {activeProjects.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-extrabold text-primary mb-6 tracking-tight">
                  Active Projects
                </h2>
                {activeProjects.map((proj) => (
                  <div
                    key={proj.title}
                    className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display text-title-lg font-bold text-on-surface">
                          {proj.title}
                        </h3>
                        <p className="text-body-sm text-on-surface-variant">
                          with {proj.designer} · {proj.category}
                        </p>
                      </div>
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-label-sm font-bold">
                        In Progress
                      </span>
                    </div>
                    <div className="mb-2 flex items-center justify-between text-label-sm text-on-surface-variant">
                      <span>Current: {proj.milestone}</span>
                      <span className="font-bold text-on-surface">{proj.progress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-container">
                      <div
                        className="h-2 rounded-full bg-secondary"
                        style={{ width: `${proj.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </section>
            )}

            {/* Project History */}
            <section>
              <h2 className="font-display text-2xl font-extrabold text-primary mb-6 tracking-tight">
                Project History
              </h2>
              <div className="space-y-4">
                {projectHistory.map((proj) => (
                  <div
                    key={proj.title}
                    className="bg-surface-container-lowest rounded-2xl p-6 hover:shadow-[0_20px_40px_rgba(29,27,32,0.06)] transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-title-md font-bold text-on-surface">
                          {proj.title}
                        </h3>
                        <p className="text-body-sm text-on-surface-variant">
                          by{" "}
                          <Link
                            href={proj.designerHref}
                            className="text-primary font-bold hover:underline"
                          >
                            {proj.designer}
                          </Link>{" "}
                          · {proj.date}
                        </p>
                      </div>
                      <span className="text-title-md font-display font-bold text-primary">
                        {proj.budget}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-label-sm font-bold bg-primary/10 text-primary">
                          {proj.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-label-sm font-bold bg-secondary/10 text-secondary">
                          {proj.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-tertiary">
                        {Array.from({ length: Math.floor(proj.rating) }).map((_, i) => (
                          <Icon key={i} name="star" filled size={16} />
                        ))}
                        <span className="ml-1 text-label-sm font-bold text-on-surface">
                          {proj.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Freelancer Reviews of Client */}
            <section>
              <h2 className="font-display text-2xl font-extrabold text-primary mb-6 tracking-tight">
                Freelancer Reviews
              </h2>
              <div className="space-y-4">
                {[
                  {
                    designer: "Julianne V.",
                    text: "Excellent client — clear briefs, fast feedback, and always pays on time. A pleasure to collaborate with.",
                    rating: 5,
                  },
                  {
                    designer: "Marcus Chen",
                    text: "NovaStar knows exactly what they want. Great communication and well-structured milestones.",
                    rating: 5,
                  },
                  {
                    designer: "Sofia Amari",
                    text: "Very professional team. Provided all brand assets upfront and the revision process was smooth.",
                    rating: 5,
                  },
                ].map((r) => (
                  <div
                    key={r.designer}
                    className="p-6 bg-surface-container rounded-xl"
                  >
                    <div className="flex items-center gap-1 mb-2 text-tertiary">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Icon key={i} name="star" filled size={18} />
                      ))}
                    </div>
                    <p className="text-sm italic text-on-surface-variant mb-3">
                      &ldquo;{r.text}&rdquo;
                    </p>
                    <p className="text-xs font-bold text-on-surface">
                      {r.designer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
