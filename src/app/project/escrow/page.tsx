"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { Icon } from "@/components/Icon";

const files = [
  {
    name: "Brand_Guidelines_v4.ai",
    size: "42.5 MB",
    type: "Adobe Illustrator",
    icon: "description",
    verified: true,
  },
  {
    name: "Social_Kit_Final.fig",
    size: "12.8 MB",
    type: "Figma Project",
    icon: "grid_view",
    verified: true,
  },
];

const checklist = [
  {
    id: "fonts",
    label: "Fonts Outlined",
    desc: "All typography converted to vector paths for universal compatibility.",
    checked: true,
  },
  {
    id: "assets",
    label: "Assets Embedded",
    desc: "All linked images and raster assets are embedded directly within source files.",
    checked: true,
  },
  {
    id: "layers",
    label: "Layers Organized",
    desc: "Layers named, grouped, and unnecessary drafts removed from the final file.",
    checked: false,
  },
];

export default function EscrowPage() {
  const [checks, setChecks] = useState(
    Object.fromEntries(checklist.map((c) => [c.id, c.checked]))
  );

  return (
    <>
      <Navbar />
      <ProjectSidebar />

      <div className="ml-64 pt-4">
        <div className="max-w-300 mx-auto px-8 py-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-secondary font-bold text-body-sm mb-4">
              <Icon name="verified" filled size={16} />
              Final Project Stage: Source File Escrow
            </div>
            <h1 className="font-display text-display-sm font-extrabold text-on-surface tracking-tight mb-4">
              The Final Handover.
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Ensure all intellectual property and technical assets are verified
              before completing the release. Once confirmed, legal ownership and
              funds will be transferred instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: The Vault */}
            <div className="lg:col-span-8 space-y-8">
              {/* File Vault */}
              <section className="bg-surface-container-lowest rounded-4xl p-8 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-display text-headline-sm font-bold flex items-center gap-2">
                    <Icon name="lock" size={24} className="text-primary" />
                    The File Vault
                  </h3>
                  <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-label-sm font-bold uppercase tracking-widest">
                    Secure Transfer Active
                  </span>
                </div>

                {/* File Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {files.map((f) => (
                    <div
                      key={f.name}
                      className="bg-surface-container-low p-6 rounded-2xl flex items-center gap-4 group hover:bg-surface-container transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon
                          name={f.icon}
                          size={24}
                          className="text-primary"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-bold text-on-surface truncate">
                          {f.name}
                        </p>
                        <p className="text-label-sm text-on-surface-variant">
                          {f.size} &bull; {f.type}
                        </p>
                      </div>
                      {f.verified && (
                        <Icon
                          name="check_circle"
                          filled
                          size={20}
                          className="text-secondary"
                        />
                      )}
                    </div>
                  ))}

                  {/* Upload placeholder */}
                  <div className="bg-surface-container-low p-6 rounded-2xl flex items-center gap-4 border-2 border-dashed border-outline-variant/30 cursor-pointer hover:bg-surface-container transition-colors">
                    <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center">
                      <Icon
                        name="add"
                        size={24}
                        className="text-outline"
                      />
                    </div>
                    <div>
                      <p className="font-display font-bold text-on-surface-variant">
                        Upload PSD Files
                      </p>
                      <p className="text-label-sm text-on-surface-variant">
                        Drag or click to add source
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical Verification Checklist */}
                <div>
                  <h4 className="font-display text-label-md font-bold uppercase tracking-widest text-on-surface mb-5">
                    Technical Verification Checklist
                  </h4>
                  <div className="space-y-4">
                    {checklist.map((c) => (
                      <div key={c.id} className="flex gap-3 items-start">
                        <button
                          onClick={() =>
                            setChecks((prev) => ({
                              ...prev,
                              [c.id]: !prev[c.id],
                            }))
                          }
                          className={`w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            checks[c.id]
                              ? "bg-primary"
                              : "bg-surface-container-highest"
                          }`}
                        >
                          {checks[c.id] && (
                            <Icon
                              name="check"
                              size={16}
                              className="text-on-primary"
                            />
                          )}
                        </button>
                        <div>
                          <div className="font-display font-bold text-body-md text-on-surface">
                            {c.label}
                          </div>
                          <p className="text-body-sm text-on-surface-variant">
                            {c.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Legal IP Transfer Notice */}
              <section className="bg-surface-container-lowest rounded-4xl p-8 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-tertiary-container rounded-xl flex items-center justify-center shrink-0">
                    <Icon
                      name="gavel"
                      size={24}
                      className="text-on-tertiary"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-title-lg font-bold text-on-surface mb-3">
                      Legal IP Transfer Notice
                    </h3>
                    <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">
                      By clicking &ldquo;Release Funds,&rdquo; you acknowledge
                      that the freelancer has satisfied all project
                      deliverables. Briefly automatically executes a{" "}
                      <strong className="text-on-surface">
                        full copyright transfer agreement
                      </strong>{" "}
                      upon payment release. All Intellectual Property (IP)
                      rights, titles, and interests in the work products listed
                      in the Vault are hereby irrevocably assigned to the
                      Client.
                    </p>
                    <Link
                      href="/terms"
                      className="text-primary font-display font-bold text-body-sm flex items-center gap-1 hover:underline"
                    >
                      Review Transfer Agreement Details
                      <Icon name="open_in_new" size={14} />
                    </Link>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Escrow Summary */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* Escrow Summary */}
                <div className="bg-surface-container-low rounded-3xl p-6 ghost-border">
                  <h3 className="font-display text-label-md font-bold uppercase tracking-widest text-on-surface mb-6">
                    Escrow Summary
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-body-md text-on-surface-variant">
                        Project Total
                      </span>
                      <span className="font-display font-bold text-on-surface">
                        $4,250.00
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-body-md text-on-surface-variant">
                        Escrow Fee (3%)
                      </span>
                      <span className="font-display font-bold text-on-surface">
                        $127.50
                      </span>
                    </div>
                    <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                      <span className="font-display font-bold text-on-surface">
                        Release Amount
                      </span>
                      <span className="font-display text-headline-md font-extrabold text-primary">
                        $4,122.50
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <button className="w-full bg-primary text-on-primary py-4 rounded-2xl font-display font-bold text-body-lg hover:opacity-90 transition-opacity shadow-xl">
                  Release Funds & Complete Transfer
                </button>

                <button className="w-full ghost-border text-on-surface py-3.5 rounded-2xl font-display font-bold text-body-md hover:bg-surface-container transition-colors">
                  Request Revision
                </button>

                {/* Payment Protection */}
                <div className="flex items-center gap-3 py-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                    <Icon
                      name="shield"
                      filled
                      size={20}
                      className="text-on-secondary-container"
                    />
                  </div>
                  <div>
                    <div className="text-label-sm font-bold uppercase tracking-wider text-on-surface">
                      Payment Protected by
                    </div>
                    <div className="text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Briefly Escrow
                    </div>
                  </div>
                </div>

                {/* Technical Review Promo */}
                <div className="bg-surface-container-high rounded-3xl p-6">
                  <h4 className="font-display text-title-sm font-bold text-on-surface mb-2">
                    Need a Technical Review?
                  </h4>
                  <p className="text-body-sm text-on-surface-variant mb-4">
                    Our experts can verify your source files for $49 per asset.
                  </p>
                  <button className="text-primary font-display font-bold text-body-sm flex items-center gap-1 hover:underline">
                    Book Expert Review
                    <Icon name="arrow_forward" size={14} />
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
