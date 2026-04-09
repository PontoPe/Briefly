import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

const milestones = [
  {
    label: "Concept Development",
    status: "completed",
    date: "Oct 5",
    amount: "$2,500",
  },
  {
    label: "Visual Direction Approval",
    status: "completed",
    date: "Oct 12",
    amount: "$1,500",
  },
  {
    label: "Final Asset Delivery",
    status: "in-progress",
    date: "Oct 28",
    amount: "$4,000",
  },
  {
    label: "Source File Handover",
    status: "upcoming",
    date: "Nov 5",
    amount: "$2,000",
  },
];

const recentActivity = [
  {
    icon: "upload_file",
    text: "Elena R. uploaded Brand_Guidelines_v4.ai",
    time: "2h ago",
  },
  {
    icon: "comment",
    text: "Julian Rossi left a comment on the hero visual",
    time: "4h ago",
  },
  {
    icon: "check_circle",
    text: "Milestone 2 approved and payment released",
    time: "Yesterday",
  },
  {
    icon: "palette",
    text: "Brand kit updated — new accent color added",
    time: "2 days ago",
  },
  {
    icon: "person_add",
    text: "Marcus T. joined as copywriter",
    time: "3 days ago",
  },
];

const teamMembers = [
  { name: "Elena Rodriguez", role: "Lead Designer", initials: "ER" },
  { name: "Marcus Tan", role: "Copywriter", initials: "MT" },
  { name: "Julian Rossi", role: "Client", initials: "JR" },
];

export default function WorkspacePage() {
  return (
    <>
      <Navbar />
      <ProjectSidebar />

      <div className="ml-64 pt-4">
        <div className="max-w-300 mx-auto px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-secondary font-bold tracking-widest text-label-sm uppercase mb-2 block">
                Project Overview
              </span>
              <h1 className="font-display text-display-sm font-extrabold text-on-surface tracking-tight">
                Project Alpha
              </h1>
              <p className="text-body-md text-on-surface-variant mt-2 max-w-xl">
                Marketing campaign for Eco-Conscious Apparel — brand identity,
                social kits, and performance ad creatives.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/project/collaborate"
                className="flex items-center gap-2 px-6 py-3 ghost-border text-primary rounded-full font-display font-bold text-body-sm hover:bg-surface-container transition-colors"
              >
                <Icon name="group" size={18} />
                Open Canvas
              </Link>
              <button className="flex items-center gap-2 px-6 py-3 bg-tertiary-container text-on-tertiary rounded-full font-display font-bold text-body-sm hover:opacity-90 transition-all">
                <Icon name="download" size={18} />
                Export Brief
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Left column */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              {/* Progress Overview */}
              <section className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-display text-headline-sm font-bold flex items-center gap-2">
                    <Icon
                      name="flag"
                      size={24}
                      className="text-primary"
                    />
                    Milestone Progress
                  </h2>
                  <span className="text-label-sm text-on-surface-variant font-medium uppercase tracking-widest">
                    2 of 4 Complete
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-surface-container-high rounded-full mb-8">
                  <div className="w-1/2 h-full bg-primary rounded-full" />
                </div>

                <div className="space-y-4">
                  {milestones.map((m) => (
                    <div
                      key={m.label}
                      className={`flex items-center justify-between p-5 rounded-2xl transition-colors ${
                        m.status === "completed"
                          ? "bg-secondary/5"
                          : m.status === "in-progress"
                            ? "bg-primary/5 ring-2 ring-primary/20"
                            : "bg-surface-container-low"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            m.status === "completed"
                              ? "bg-secondary text-on-secondary"
                              : m.status === "in-progress"
                                ? "bg-primary text-on-primary"
                                : "bg-surface-container-highest text-on-surface-variant"
                          }`}
                        >
                          <Icon
                            name={
                              m.status === "completed"
                                ? "check"
                                : m.status === "in-progress"
                                  ? "pending"
                                  : "schedule"
                            }
                            size={20}
                          />
                        </div>
                        <div>
                          <div className="font-display font-bold text-on-surface">
                            {m.label}
                          </div>
                          <div className="text-label-sm text-on-surface-variant">
                            {m.status === "completed"
                              ? `Completed ${m.date}`
                              : m.status === "in-progress"
                                ? `Due ${m.date}`
                                : `Scheduled ${m.date}`}
                          </div>
                        </div>
                      </div>
                      <span className="font-display font-bold text-body-md text-on-surface">
                        {m.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recent Activity */}
              <section className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <h2 className="font-display text-headline-sm font-bold mb-6 flex items-center gap-2">
                  <Icon
                    name="history"
                    size={24}
                    className="text-tertiary-container"
                  />
                  Recent Activity
                </h2>
                <div className="space-y-1">
                  {recentActivity.map((a, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 py-4 border-b border-outline-variant/10 last:border-0"
                    >
                      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                        <Icon
                          name={a.icon}
                          size={20}
                          className="text-on-surface-variant"
                        />
                      </div>
                      <div className="grow">
                        <p className="text-body-md text-on-surface">
                          {a.text}
                        </p>
                      </div>
                      <span className="text-label-sm text-on-surface-variant whitespace-nowrap">
                        {a.time}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              {/* Project Summary Card */}
              <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <h3 className="font-display text-title-md font-bold mb-6 flex items-center gap-2">
                  <Icon
                    name="info"
                    size={20}
                    className="text-primary"
                  />
                  Project Details
                </h3>
                <div className="space-y-5">
                  <div>
                    <div className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
                      Budget
                    </div>
                    <div className="font-display font-bold text-title-lg text-primary">
                      $10,000
                    </div>
                    <div className="text-body-sm text-on-surface-variant">
                      $4,000 released · $6,000 in escrow
                    </div>
                  </div>
                  <div className="h-px bg-outline-variant/20" />
                  <div>
                    <div className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
                      Timeline
                    </div>
                    <div className="font-display font-bold text-on-surface">
                      Oct 1 — Nov 15, 2024
                    </div>
                    <div className="text-body-sm text-on-surface-variant">
                      18 days remaining
                    </div>
                  </div>
                  <div className="h-px bg-outline-variant/20" />
                  <div>
                    <div className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
                      Deliverables
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Brand Book", "Social Kit", "Ad Creatives", "Brand Video"].map(
                        (d) => (
                          <span
                            key={d}
                            className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-label-sm"
                          >
                            {d}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div className="h-px bg-outline-variant/20" />
                  <div>
                    <div className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
                      Category
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-label-sm font-bold">
                      Brand Identity
                    </span>
                  </div>
                </div>
              </section>

              {/* Team */}
              <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <h3 className="font-display text-title-md font-bold mb-6 flex items-center gap-2">
                  <Icon
                    name="groups"
                    size={20}
                    className="text-secondary"
                  />
                  Team
                </h3>
                <div className="space-y-4">
                  {teamMembers.map((m) => (
                    <div
                      key={m.name}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-display font-bold text-label-sm">
                        {m.initials}
                      </div>
                      <div>
                        <div className="font-display font-bold text-body-sm text-on-surface">
                          {m.name}
                        </div>
                        <div className="text-label-sm text-on-surface-variant">
                          {m.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 ghost-border rounded-xl text-body-sm font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
                  <Icon name="person_add" size={18} />
                  Invite Member
                </button>
              </section>

              {/* Quick Links */}
              <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <h3 className="font-display text-title-md font-bold mb-4">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  {[
                    {
                      icon: "palette",
                      label: "Brand Kit",
                      href: "/project/brand-kit",
                    },
                    {
                      icon: "history",
                      label: "Version History",
                      href: "/project/versions",
                    },
                    {
                      icon: "lock",
                      label: "File Escrow",
                      href: "/project/escrow",
                    },
                    {
                      icon: "analytics",
                      label: "Performance",
                      href: "/project/performance",
                    },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-container transition-colors group"
                    >
                      <Icon
                        name={link.icon}
                        size={20}
                        className="text-on-surface-variant group-hover:text-primary transition-colors"
                      />
                      <span className="text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">
                        {link.label}
                      </span>
                      <Icon
                        name="chevron_right"
                        size={18}
                        className="text-on-surface-variant/40 ml-auto"
                      />
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
