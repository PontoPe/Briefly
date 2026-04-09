"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { Icon } from "@/components/Icon";

const versions = [
  {
    id: "v4.0",
    label: "v4.0",
    status: "Active",
    date: "Today at 11:24 AM",
    tags: ["UI Updates", "Typography"],
    note: "Updated the hero section typography to match the new Manrope guidelines.",
    author: "Elena R.",
  },
  {
    id: "v3.2",
    label: "v3.2",
    status: null,
    date: "Yesterday at 4:15 PM",
    tags: [],
    note: null,
    comments: 2,
    author: "Elena R.",
  },
  {
    id: "v3.0",
    label: "v3.0",
    status: null,
    date: "Oct 12, 2023",
    tags: [],
    note: null,
    author: "Marcus T.",
    revertable: true,
  },
];

const feedbackComments = [
  {
    author: "Elena R.",
    time: "2h ago",
    text: "The tonal shift in the container colors feels much more premium now. Can we verify the contrast on the teal chips?",
  },
  {
    author: "Marcus T.",
    time: "4h ago",
    text: "Confirmed. v4.0 fixes the spacing issues we saw in the mobile preview of v3.2.",
  },
];

export default function VersionsPage() {
  const [selectedVersion, setSelectedVersion] = useState("v4.0");
  const [diffMode, setDiffMode] = useState<"side-by-side" | "overlay">(
    "side-by-side"
  );

  return (
    <>
      <Navbar />
      <ProjectSidebar />

      <div className="ml-64 pt-4">
        <div className="max-w-300 mx-auto px-8 py-8">
          {/* Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-bold mb-4 uppercase tracking-wider">
                Collaboration Hub
              </span>
              <h1 className="font-display text-display-sm font-extrabold text-on-surface tracking-tight">
                Version History
              </h1>
              <p className="text-body-md text-on-surface-variant mt-2 max-w-xl">
                Review past iterations, compare changes between releases, and
                manage your editorial workflow with absolute precision.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 ghost-border text-primary rounded-full font-display font-bold text-body-sm hover:bg-surface-container transition-colors">
                <Icon name="history_edu" size={18} />
                Export Logs
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-tertiary-container text-on-tertiary rounded-full font-display font-bold text-body-sm hover:opacity-90 transition-all">
                <Icon name="add" size={18} />
                New Version
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Left: Timeline */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <div className="flex items-center justify-between px-2 mb-2">
                <h2 className="font-display text-title-md font-bold">
                  Timeline
                </h2>
                <span className="text-label-sm text-on-surface-variant uppercase tracking-widest font-medium">
                  Sort by Date
                </span>
              </div>

              {versions.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVersion(v.id)}
                  className={`w-full text-left p-6 rounded-2xl relative transition-all ${
                    selectedVersion === v.id
                      ? "bg-surface-container-highest ring-2 ring-primary"
                      : "bg-surface-container-low hover:bg-surface-container"
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3
                        className={`font-display text-title-lg font-extrabold ${
                          selectedVersion === v.id
                            ? "text-primary"
                            : "text-on-surface"
                        }`}
                      >
                        {v.label}{" "}
                        {v.status && (
                          <span className="text-label-sm font-normal text-on-surface-variant ml-2">
                            {v.status}
                          </span>
                        )}
                      </h3>
                      <p className="text-label-sm text-on-surface-variant">
                        {v.date}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-label-sm font-bold text-on-primary-container">
                      {v.author
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                  </div>

                  {/* Preview placeholder */}
                  {selectedVersion === v.id && (
                    <div className="aspect-video bg-inverse-surface rounded-xl mb-4 overflow-hidden relative">
                      <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon
                          name="image"
                          size={32}
                          className="text-white/20"
                        />
                      </div>
                    </div>
                  )}

                  {v.tags.length > 0 && (
                    <div className="flex gap-2 mb-3">
                      {v.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-label-sm font-bold rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {v.note && (
                    <div className="pt-3 border-t border-outline-variant/10">
                      <p className="text-body-sm italic text-on-surface-variant">
                        &ldquo;{v.note}&rdquo;
                      </p>
                    </div>
                  )}

                  {v.comments && (
                    <div className="flex items-center gap-1 text-label-sm text-on-surface-variant">
                      <Icon name="chat_bubble" size={14} />
                      {v.comments} Comments
                    </div>
                  )}

                  {v.revertable && (
                    <div className="mt-3">
                      <span className="flex items-center gap-1 px-4 py-2 bg-surface-container-highest rounded-full text-label-sm font-bold text-on-surface-variant hover:text-primary transition-colors w-fit">
                        <Icon name="history" size={14} />
                        Revert to this version
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Right: Diff Viewer + Feedback */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              {/* Diff Viewer */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                {/* Diff header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-error" />
                      <span className="text-body-sm font-bold text-on-surface">
                        v3.2 Original
                      </span>
                    </div>
                    <Icon
                      name="compare_arrows"
                      size={20}
                      className="text-on-surface-variant"
                    />
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-secondary" />
                      <span className="text-body-sm font-bold text-on-surface">
                        v4.0 Current
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-surface-container p-1 rounded-full">
                    <button
                      onClick={() => setDiffMode("side-by-side")}
                      className={`px-4 py-1.5 rounded-full text-label-sm font-bold transition-colors ${
                        diffMode === "side-by-side"
                          ? "bg-surface-container-highest text-primary"
                          : "text-on-surface-variant"
                      }`}
                    >
                      Side-by-Side
                    </button>
                    <button
                      onClick={() => setDiffMode("overlay")}
                      className={`px-4 py-1.5 rounded-full text-label-sm font-bold transition-colors ${
                        diffMode === "overlay"
                          ? "bg-surface-container-highest text-primary"
                          : "text-on-surface-variant"
                      }`}
                    >
                      Overlay
                    </button>
                  </div>
                </div>

                {/* Side-by-side comparison */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Original */}
                  <div className="rounded-2xl overflow-hidden">
                    <div className="bg-error/10 px-3 py-1.5 text-label-sm font-bold text-error uppercase tracking-wider">
                      Removed Elements
                    </div>
                    <div className="aspect-3/4 bg-surface-container relative border-2 border-dashed border-outline-variant/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-on-surface-variant/20 font-display text-body-lg italic">
                          Legacy Layout Canvas
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Current */}
                  <div className="rounded-2xl overflow-hidden">
                    <div className="bg-secondary/10 px-3 py-1.5 text-label-sm font-bold text-secondary uppercase tracking-wider">
                      New Optimizations
                    </div>
                    <div className="aspect-3/4 bg-surface-container-low relative">
                      <div className="p-6 space-y-4">
                        <div className="h-6 w-24 bg-surface-container-highest rounded" />
                        <div className="h-20 w-full bg-surface-container-highest rounded-xl" />
                        <div className="h-16 w-full bg-surface-container-highest rounded-xl" />
                        <div className="grid grid-cols-3 gap-3 mt-4">
                          <div className="h-16 bg-primary-fixed rounded-lg" />
                          <div className="h-16 bg-primary-fixed rounded-lg" />
                          <div className="h-16 bg-primary-fixed rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom row: Feedback + System Audit */}
              <div className="grid grid-cols-2 gap-6">
                {/* Feedback Context */}
                <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                  <h3 className="font-display text-label-md font-bold uppercase tracking-widest text-on-surface mb-5">
                    Feedback Context
                  </h3>
                  <div className="space-y-5">
                    {feedbackComments.map((c) => (
                      <div
                        key={c.author + c.time}
                        className="border-l-2 border-primary pl-4"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-label-sm font-bold text-on-primary-container">
                            {c.author
                              .split(" ")
                              .map((w) => w[0])
                              .join("")}
                          </div>
                          <div>
                            <span className="font-display font-bold text-body-sm text-on-surface">
                              {c.author}
                            </span>
                            <span className="ml-2 text-label-sm text-on-surface-variant">
                              {c.time}
                            </span>
                          </div>
                        </div>
                        <p className="text-body-sm text-on-surface-variant leading-relaxed">
                          {c.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Audit */}
                <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                  <h3 className="font-display text-label-md font-bold uppercase tracking-widest text-on-surface mb-5">
                    System Audit
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between text-body-sm mb-2">
                        <span className="text-on-surface font-bold">
                          Asset Integrity
                        </span>
                        <span className="text-secondary font-bold">
                          Verified
                        </span>
                      </div>
                      <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full w-[98%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-body-sm mb-2">
                        <span className="text-on-surface font-bold">
                          Style Sync
                        </span>
                        <span className="text-secondary font-bold">
                          Connected
                        </span>
                      </div>
                      <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full w-full" />
                      </div>
                    </div>
                  </div>

                  <button className="mt-6 w-full ghost-border text-primary py-3 rounded-xl font-display font-bold text-body-sm hover:bg-surface-container transition-colors">
                    Download Diff Manifest (PDF)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
