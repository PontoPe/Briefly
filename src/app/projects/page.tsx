import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

const activeProjects = [
  {
    id: "alpha",
    name: "Project Alpha",
    client: "NovaBrand Co.",
    designer: "Elena Rodriguez",
    status: "In Progress",
    milestone: "Final Asset Delivery",
    budget: "$10,000",
    released: "$4,000",
    dueDate: "Nov 15, 2024",
    progress: 50,
    category: "Brand Identity",
  },
  {
    id: "beta",
    name: "Social Growth Engine",
    client: "FitTrack Health",
    designer: "Sofia Amari",
    status: "In Progress",
    milestone: "Content Calendar — Month 2",
    budget: "$3,600/mo",
    released: "$3,600",
    dueDate: "Ongoing",
    progress: 70,
    category: "Social Media",
  },
  {
    id: "gamma",
    name: "Fintech Visual Rebrand",
    client: "PayStream",
    designer: "Marcus Chen",
    status: "Under Review",
    milestone: "Brand Guidelines Approval",
    budget: "$8,500",
    released: "$2,500",
    dueDate: "Oct 28, 2024",
    progress: 35,
    category: "Performance Marketing",
  },
];

const pastProjects = [
  {
    name: "E-Commerce Holiday Kit",
    designer: "Julian Aris",
    category: "Ad Creative",
    completed: "Sep 2024",
    rating: 5.0,
  },
  {
    name: "SaaS Onboarding Flow",
    designer: "Elena Rodriguez",
    category: "UI/UX",
    completed: "Aug 2024",
    rating: 4.9,
  },
  {
    name: "DTC Launch Campaign",
    designer: "Sofia Amari",
    category: "Campaign Design",
    completed: "Jul 2024",
    rating: 4.8,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-20 max-w-360 mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-label-lg font-bold uppercase tracking-widest text-tertiary mb-2">
              Dashboard
            </p>
            <h1 className="font-display text-display-sm font-extrabold text-on-surface tracking-tight">
              My Projects
            </h1>
            <p className="text-body-md text-on-surface-variant mt-2">
              Track active engagements, review milestones, and manage your
              project portfolio.
            </p>
          </div>
          <Link
            href="/brief/new"
            className="flex items-center gap-2 bg-tertiary-container text-on-tertiary px-6 py-3 rounded-full font-display font-bold text-body-sm hover:opacity-90 transition-all"
          >
            <Icon name="add" size={18} />
            New Project
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Active Projects", value: "3", icon: "work", color: "primary" },
            { label: "Total Spent", value: "$24.6k", icon: "payments", color: "tertiary" },
            { label: "Avg. Rating Given", value: "4.9", icon: "star", color: "secondary" },
            { label: "Completed", value: "12", icon: "check_circle", color: "secondary" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]"
            >
              <Icon name={s.icon} size={24} className={`text-${s.color} mb-3`} />
              <div className="font-display text-headline-md font-extrabold text-on-surface">
                {s.value}
              </div>
              <div className="text-body-sm text-on-surface-variant">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Active Projects */}
        <section className="mb-16">
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-6">
            Active Projects
          </h2>
          <div className="space-y-4">
            {activeProjects.map((p) => (
              <Link
                key={p.id}
                href="/project/workspace"
                className="block bg-surface-container-lowest rounded-2xl p-6 hover:shadow-[0_20px_40px_rgba(29,27,32,0.06)] transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-on-primary-container text-label-sm">
                        {p.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-title-md font-bold text-on-surface truncate group-hover:text-primary transition-colors">
                          {p.name}
                        </h3>
                        <span
                          className={`px-3 py-0.5 rounded-full text-label-sm font-bold whitespace-nowrap ${
                            p.status === "In Progress"
                              ? "bg-primary/10 text-primary"
                              : "bg-tertiary-container/20 text-tertiary-container"
                          }`}
                        >
                          {p.status}
                        </span>
                      </div>
                      <div className="text-body-sm text-on-surface-variant">
                        {p.designer} · {p.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 shrink-0">
                    <div className="text-right hidden md:block">
                      <div className="text-label-sm text-on-surface-variant uppercase tracking-widest">
                        Current Milestone
                      </div>
                      <div className="font-display font-bold text-body-sm text-on-surface">
                        {p.milestone}
                      </div>
                    </div>
                    <div className="text-right hidden md:block">
                      <div className="text-label-sm text-on-surface-variant uppercase tracking-widest">
                        Budget
                      </div>
                      <div className="font-display font-bold text-body-sm text-primary">
                        {p.budget}
                      </div>
                    </div>
                    <div className="w-32">
                      <div className="flex justify-between text-label-sm mb-1">
                        <span className="text-on-surface-variant">
                          Progress
                        </span>
                        <span className="font-bold text-on-surface">
                          {p.progress}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-surface-container-high rounded-full">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${p.progress}%` }}
                        />
                      </div>
                    </div>
                    <Icon
                      name="chevron_right"
                      size={20}
                      className="text-on-surface-variant/40"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Past Projects */}
        <section>
          <h2 className="font-display text-headline-sm font-bold text-on-surface mb-6">
            Completed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pastProjects.map((p) => (
              <div
                key={p.name}
                className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-label-sm font-bold">
                    {p.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Icon name="star" filled size={16} className="text-tertiary-container" />
                    <span className="font-display font-bold text-body-sm">
                      {p.rating}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-title-md font-bold text-on-surface mb-1">
                  {p.name}
                </h3>
                <p className="text-body-sm text-on-surface-variant">
                  {p.designer} · {p.completed}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
