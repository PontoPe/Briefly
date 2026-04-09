"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

const annotations = [
  {
    num: 1,
    author: "Julian Rossi",
    role: "Client",
    time: "2h ago",
    text: "OLHA AQUI COMO ELA EH LINDA",
  },
  {
    num: 2,
    author: "Julian Rossi",
    role: "Client",
    time: "1h ago",
    text: "E olha que lugar lindo.",
  },
];

const brandColors = [
  { hex: "#381E73", label: "#381E73" },
  { hex: "#006B5C", label: "#006B5C" },
  { hex: "#5E1600", label: "#5E1600" },
  { hex: "#FDF7FF", label: "#FDF7FF" },
];

const milestones = [
  {
    status: "completed",
    label: "Concept Development",
    amount: "$2,500",
    date: "Released on Oct 12",
  },
  {
    status: "in-progress",
    label: "Final Asset Delivery",
    amount: "$4,000",
    date: null,
  },
];

const versionHistory = [
  {
    label: "Version 4.0 - Typography Update",
    date: "Today, 2:45 PM",
    status: "active",
    desc: "Adjusted headline weight and layout spacing based on v3.5 feedback.",
  },
  {
    label: "Version 3.5 - Color Calibration",
    date: "Oct 24, 11:20 AM",
    status: "previous",
    desc: "Integrated new brand teal into primary call-to-action buttons.",
  },
  {
    label: "Version 3.0 - Major Layout Shift",
    date: "Oct 22, 09:15 AM",
    status: "previous",
    desc: "Restructured grid to emphasize editorial photography.",
  },
  {
    label: "Version 2.0 - Concept Refinement",
    date: "Oct 18, 4:00 PM",
    status: "archived",
    desc: null,
  },
  {
    label: "Version 1.0 - Initial Sketches",
    date: "Oct 15, 10:30 AM",
    status: "archived",
    desc: null,
  },
];

export default function CollaboratePage() {
  return (
    <>
      <Navbar />
      <ProjectSidebar />

      <div className="ml-64 pt-4">
        <div className="max-w-300 mx-auto px-8 py-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Main content */}
            <section className="col-span-12 lg:col-span-8 flex flex-col gap-6">
              {/* Design Canvas */}
              <div className="bg-surface-container rounded-3xl p-6 relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <Icon
                      name="design_services"
                      size={24}
                      className="text-primary"
                    />
                    <h3 className="font-display text-title-lg font-bold tracking-tight">
                      Main Campaign Visual - v4.0
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                      <Icon name="zoom_in" size={20} />
                    </button>
                    <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                      <Icon name="fullscreen" size={20} />
                    </button>
                  </div>
                </div>

                {/* Image canvas with annotation pins */}
                <div className="relative rounded-xl overflow-hidden bg-inverse-surface aspect-16/10">
                  <Image
                    src="/images/campaign-visual.jpg"
                    alt="Main Campaign Visual v4.0"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  {/* Annotation pins */}
                  <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-tertiary text-on-tertiary rounded-full flex items-center justify-center font-bold text-label-sm shadow-xl ring-4 ring-tertiary/20">
                    1
                  </div>
                  <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-tertiary text-on-tertiary rounded-full flex items-center justify-center font-bold text-label-sm shadow-xl ring-4 ring-tertiary/20">
                    2
                  </div>
                </div>

                {/* Annotation comments */}
                <div className="mt-6 flex flex-col gap-4">
                  {annotations.map((a) => (
                    <div
                      key={a.num}
                      className="bg-surface-container-lowest p-4 rounded-2xl flex gap-4 items-start"
                    >
                      <div className="w-8 h-8 bg-tertiary text-on-tertiary rounded-full shrink-0 flex items-center justify-center font-bold text-label-sm">
                        {a.num}
                      </div>
                      <div className="grow">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-display font-bold text-body-sm">
                            {a.author}{" "}
                            <span className="text-on-surface-variant font-normal">
                              ({a.role})
                            </span>
                          </span>
                          <span className="text-label-sm text-on-surface-variant">
                            {a.time}
                          </span>
                        </div>
                        <p className="text-body-sm text-on-surface-variant">
                          {a.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand Kit & Milestones */}
              <div className="grid grid-cols-2 gap-6">
                {/* Brand Kit */}
                <div className="bg-surface-container rounded-3xl p-6">
                  <h3 className="font-display text-title-md font-bold mb-6 flex items-center gap-2">
                    <Icon
                      name="palette"
                      size={20}
                      className="text-secondary"
                    />
                    Brand Kit
                  </h3>
                  {/* Logo placeholders */}
                  <div className="flex gap-3 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-inverse-surface flex items-center justify-center">
                      <Icon
                        name="image"
                        size={24}
                        className="text-white/30"
                      />
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-primary-container flex items-center justify-center">
                      <Icon
                        name="image"
                        size={24}
                        className="text-on-primary-container/30"
                      />
                    </div>
                  </div>
                  {/* Color swatches */}
                  <div className="grid grid-cols-2 gap-3">
                    {brandColors.map((c) => (
                      <div key={c.hex} className="flex items-center gap-2">
                        <div
                          className="w-8 h-8 rounded-lg"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className="text-label-sm text-on-surface-variant font-mono">
                          {c.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestones */}
                <div className="bg-surface-container rounded-3xl p-6">
                  <h3 className="font-display text-title-md font-bold mb-6 flex items-center gap-2">
                    <Icon
                      name="flag"
                      size={20}
                      className="text-tertiary-container"
                    />
                    Milestones
                  </h3>
                  <div className="space-y-4">
                    {milestones.map((m) => (
                      <div
                        key={m.label}
                        className={`p-4 rounded-2xl ${
                          m.status === "completed"
                            ? "bg-surface-container-lowest"
                            : "bg-surface-container-lowest"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className={`text-label-sm font-bold uppercase tracking-wider ${
                              m.status === "completed"
                                ? "text-secondary"
                                : "text-tertiary"
                            }`}
                          >
                            {m.status === "completed"
                              ? "Completed"
                              : "In Progress"}
                          </span>
                          <span className="font-display text-title-md font-bold text-on-surface">
                            {m.amount}
                          </span>
                        </div>
                        <div className="font-display font-bold text-body-md text-on-surface">
                          {m.label}
                        </div>
                        {m.date && (
                          <div className="text-label-sm text-on-surface-variant">
                            {m.date}
                          </div>
                        )}
                        {m.status === "in-progress" && (
                          <div className="mt-3 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                            <div className="h-full bg-tertiary-container rounded-full w-3/5" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Version History Sidebar */}
            <aside className="col-span-12 lg:col-span-4">
              <div className="bg-surface-container-low rounded-3xl p-6 ghost-border sticky top-28">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="history" size={20} className="text-primary" />
                  <h3 className="font-display text-title-md font-bold text-on-surface">
                    Version History
                  </h3>
                </div>

                <div className="space-y-4">
                  {versionHistory.map((v) => (
                    <div
                      key={v.label}
                      className={`p-4 rounded-2xl transition-colors ${
                        v.status === "active"
                          ? "bg-surface-container-lowest shadow-[0_10px_20px_rgba(29,27,32,0.04)]"
                          : "hover:bg-surface-container cursor-pointer"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`text-label-sm font-bold uppercase tracking-wider ${
                            v.status === "active"
                              ? "text-secondary"
                              : v.status === "previous"
                                ? "text-on-surface-variant"
                                : "text-outline"
                          }`}
                        >
                          {v.status}
                        </span>
                        <span className="text-label-sm text-on-surface-variant">
                          {v.date}
                        </span>
                      </div>
                      <div className="font-display font-bold text-body-md text-on-surface">
                        {v.label}
                      </div>
                      {v.desc && (
                        <p className="mt-1 text-body-sm text-on-surface-variant leading-relaxed">
                          {v.desc}
                        </p>
                      )}
                      {v.status === "active" && (
                        <div className="mt-3 flex gap-1">
                          <div className="w-6 h-6 rounded-full bg-primary-container" />
                          <div className="w-6 h-6 rounded-full bg-tertiary-container" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
