"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

const teamMembers = [
  {
    name: "Elena Rodriguez",
    role: "Lead Designer",
    email: "elena@briefly.com",
    initials: "ER",
    permissions: "Editor",
  },
  {
    name: "Marcus Tan",
    role: "Copywriter",
    email: "marcus@briefly.com",
    initials: "MT",
    permissions: "Editor",
  },
  {
    name: "Julian Rossi",
    role: "Client",
    email: "julian@briefly.com",
    initials: "JR",
    permissions: "Owner",
  },
];

export default function SettingsPage() {
  const [projectName, setProjectName] = useState("Project Alpha");
  const [projectDesc, setProjectDesc] = useState(
    "Marketing campaign for Eco-Conscious Apparel — brand identity, social kits, and performance ad creatives."
  );
  const [visibility, setVisibility] = useState("private");
  const [notifications, setNotifications] = useState({
    milestones: true,
    comments: true,
    uploads: false,
    weekly: true,
  });

  const toggleNotif = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Navbar />
      <ProjectSidebar />

      <div className="ml-64 pt-4">
        <div className="max-w-300 mx-auto px-8 py-8">
          {/* Header */}
          <div className="mb-10">
            <span className="text-on-surface-variant font-bold tracking-widest text-label-sm uppercase mb-2 block">
              Configuration
            </span>
            <h1 className="font-display text-display-sm font-extrabold text-on-surface tracking-tight">
              Project Settings
            </h1>
          </div>

          <div className="max-w-3xl space-y-8">
            {/* General */}
            <section className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
              <h2 className="font-display text-headline-sm font-bold mb-6 flex items-center gap-2">
                <Icon name="settings" size={24} className="text-primary" />
                General
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant block mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full bg-surface-container-low px-4 py-3.5 rounded-xl ghost-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-body-md"
                  />
                </div>
                <div>
                  <label className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant block mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    value={projectDesc}
                    onChange={(e) => setProjectDesc(e.target.value)}
                    className="w-full bg-surface-container-low px-4 py-3.5 rounded-xl ghost-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-body-md resize-none"
                  />
                </div>
                <div>
                  <label className="text-label-sm font-bold uppercase tracking-widest text-on-surface-variant block mb-3">
                    Visibility
                  </label>
                  <div className="flex gap-3">
                    {(
                      [
                        {
                          id: "private",
                          label: "Private",
                          icon: "lock",
                          desc: "Only team members",
                        },
                        {
                          id: "team",
                          label: "Team",
                          icon: "group",
                          desc: "All org members",
                        },
                        {
                          id: "public",
                          label: "Public",
                          icon: "public",
                          desc: "Visible as case study",
                        },
                      ] as const
                    ).map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setVisibility(opt.id)}
                        className={`flex-1 p-4 rounded-xl text-center transition-all ${
                          visibility === opt.id
                            ? "border-2 border-primary bg-surface-container-lowest shadow-lg"
                            : "bg-surface-container-low ghost-border hover:bg-surface-container"
                        }`}
                      >
                        <Icon
                          name={opt.icon}
                          size={24}
                          className={
                            visibility === opt.id
                              ? "text-primary"
                              : "text-on-surface-variant"
                          }
                        />
                        <div className="font-display font-bold text-body-sm mt-2">
                          {opt.label}
                        </div>
                        <div className="text-label-sm text-on-surface-variant">
                          {opt.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Team & Permissions */}
            <section className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-headline-sm font-bold flex items-center gap-2">
                  <Icon name="group" size={24} className="text-secondary" />
                  Team & Permissions
                </h2>
                <button className="flex items-center gap-2 text-primary text-body-sm font-bold">
                  <Icon name="person_add" size={18} />
                  Invite Member
                </button>
              </div>
              <div className="space-y-3">
                {teamMembers.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-display font-bold text-label-sm">
                        {m.initials}
                      </div>
                      <div>
                        <div className="font-display font-bold text-body-sm text-on-surface">
                          {m.name}
                        </div>
                        <div className="text-label-sm text-on-surface-variant">
                          {m.email}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`px-3 py-1 rounded-full text-label-sm font-bold ${
                          m.permissions === "Owner"
                            ? "bg-tertiary-container/20 text-tertiary-container"
                            : "bg-surface-container-highest text-on-surface-variant"
                        }`}
                      >
                        {m.permissions}
                      </span>
                      {m.permissions !== "Owner" && (
                        <button className="text-on-surface-variant hover:text-on-surface transition-colors">
                          <Icon name="more_vert" size={20} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Notifications */}
            <section className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
              <h2 className="font-display text-headline-sm font-bold mb-6 flex items-center gap-2">
                <Icon
                  name="notifications"
                  size={24}
                  className="text-tertiary-container"
                />
                Notifications
              </h2>
              <div className="space-y-4">
                {(
                  [
                    {
                      key: "milestones",
                      label: "Milestone updates",
                      desc: "Payment releases, approvals, and deadline changes",
                    },
                    {
                      key: "comments",
                      label: "New comments & annotations",
                      desc: "When someone comments on a design or file",
                    },
                    {
                      key: "uploads",
                      label: "File uploads",
                      desc: "When new files are uploaded to the project",
                    },
                    {
                      key: "weekly",
                      label: "Weekly digest",
                      desc: "Summary email with project status and metrics",
                    },
                  ] as const
                ).map((n) => (
                  <div
                    key={n.key}
                    className="flex items-center justify-between py-3 border-b border-outline-variant/10 last:border-0"
                  >
                    <div>
                      <div className="font-display font-bold text-body-md text-on-surface">
                        {n.label}
                      </div>
                      <p className="text-body-sm text-on-surface-variant">
                        {n.desc}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleNotif(n.key)}
                      className={`w-12 h-7 rounded-full transition-colors relative ${
                        notifications[n.key]
                          ? "bg-primary"
                          : "bg-surface-container-highest"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all ${
                          notifications[n.key] ? "left-6" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* NDA & Contracts */}
            <section className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
              <h2 className="font-display text-headline-sm font-bold mb-2 flex items-center gap-2">
                <Icon name="gavel" size={24} className="text-primary" />
                NDA & Confidentiality
              </h2>
              <p className="text-body-sm text-on-surface-variant mb-6">
                Protect your project with built-in legal templates.
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "Standard NDA",
                    desc: "Mutual non-disclosure. Covers all project assets and communications.",
                    active: true,
                  },
                  {
                    label: "Work-for-Hire Agreement",
                    desc: "All deliverables are works made for hire — IP transfers on payment.",
                    active: true,
                  },
                  {
                    label: "Non-Compete Clause",
                    desc: "Prevent freelancers from working with direct competitors for 6 months.",
                    active: false,
                  },
                ].map((doc) => (
                  <div
                    key={doc.label}
                    className="flex items-center justify-between bg-surface-container-low p-5 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          doc.active
                            ? "bg-secondary/10"
                            : "bg-surface-container-highest"
                        }`}
                      >
                        <Icon
                          name={doc.active ? "check_circle" : "description"}
                          filled={doc.active}
                          size={20}
                          className={
                            doc.active
                              ? "text-secondary"
                              : "text-on-surface-variant"
                          }
                        />
                      </div>
                      <div>
                        <div className="font-display font-bold text-body-md text-on-surface">
                          {doc.label}
                        </div>
                        <p className="text-body-sm text-on-surface-variant">
                          {doc.desc}
                        </p>
                      </div>
                    </div>
                    <button className="text-primary text-body-sm font-bold hover:underline">
                      {doc.active ? "View" : "Enable"}
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Danger Zone */}
            <section className="bg-error/5 rounded-3xl p-8 border border-error/20">
              <h2 className="font-display text-headline-sm font-bold mb-2 text-error flex items-center gap-2">
                <Icon name="warning" size={24} />
                Danger Zone
              </h2>
              <p className="text-body-sm text-on-surface-variant mb-6">
                These actions are permanent and cannot be undone.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 ghost-border text-error rounded-full font-display font-bold text-body-sm hover:bg-error/5 transition-colors">
                  Archive Project
                </button>
                <button className="px-6 py-3 bg-error/10 text-error rounded-full font-display font-bold text-body-sm hover:bg-error/20 transition-colors">
                  Delete Project
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
