"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

const brandColors = [
  { hex: "#381E73", label: "Primary Purple", token: "primary" },
  { hex: "#006B5C", label: "Secondary Teal", token: "secondary" },
  { hex: "#5E1600", label: "Tertiary Burnt", token: "tertiary" },
  { hex: "#FDF7FF", label: "Surface", token: "surface" },
  { hex: "#1D1B20", label: "On Surface", token: "on-surface" },
  { hex: "#852300", label: "Accent Orange", token: "accent" },
];

const fonts = [
  {
    name: "Manrope",
    weight: "ExtraBold / Bold",
    usage: "Headlines, CTAs, Display",
    preview: "Aa",
  },
  {
    name: "Be Vietnam Pro",
    weight: "Regular / Medium",
    usage: "Body copy, Labels, Captions",
    preview: "Aa",
  },
];

const logos = [
  { label: "Primary Logo (Dark)", bg: "bg-inverse-surface", textColor: "text-white" },
  { label: "Primary Logo (Light)", bg: "bg-surface-container-lowest", textColor: "text-on-surface" },
  { label: "Icon Only", bg: "bg-primary-container", textColor: "text-on-primary-container" },
  { label: "Reversed", bg: "bg-tertiary-container", textColor: "text-white" },
];

const assets = [
  {
    name: "Brand_Guidelines_v4.pdf",
    size: "8.2 MB",
    icon: "picture_as_pdf",
    updated: "Oct 18, 2024",
  },
  {
    name: "Logo_Pack.zip",
    size: "15.4 MB",
    icon: "folder_zip",
    updated: "Oct 15, 2024",
  },
  {
    name: "Social_Templates.fig",
    size: "22.1 MB",
    icon: "grid_view",
    updated: "Oct 20, 2024",
  },
  {
    name: "Icon_Library.svg",
    size: "1.8 MB",
    icon: "shapes",
    updated: "Oct 10, 2024",
  },
];

export default function BrandKitPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

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
                Shared Repository
              </span>
              <h1 className="font-display text-display-sm font-extrabold text-on-surface tracking-tight">
                Brand Kit
              </h1>
              <p className="text-body-md text-on-surface-variant mt-2 max-w-xl">
                All brand guidelines, logos, color palettes, and font files in
                one shared space. Always up to date for every team member.
              </p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-tertiary-container text-on-tertiary rounded-full font-display font-bold text-body-sm hover:opacity-90 transition-all">
              <Icon name="cloud_upload" size={18} />
              Upload Assets
            </button>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Main */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              {/* Logo Variations */}
              <section className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <h2 className="font-display text-headline-sm font-bold mb-6 flex items-center gap-2">
                  <Icon name="image" size={24} className="text-primary" />
                  Logo Variations
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {logos.map((logo) => (
                    <div
                      key={logo.label}
                      className={`${logo.bg} rounded-2xl p-8 flex flex-col items-center justify-center aspect-3/2`}
                    >
                      <span
                        className={`font-display text-2xl font-extrabold tracking-tight ${logo.textColor}`}
                      >
                        Briefly
                      </span>
                      <span className="text-label-sm mt-2 opacity-60">
                        {logo.label}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Color Palette */}
              <section className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <h2 className="font-display text-headline-sm font-bold mb-6 flex items-center gap-2">
                  <Icon
                    name="palette"
                    size={24}
                    className="text-secondary"
                  />
                  Color Palette
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {brandColors.map((c) => (
                    <button
                      key={c.hex}
                      onClick={() => copyHex(c.hex)}
                      className="group text-left"
                    >
                      <div
                        className="w-full aspect-3/2 rounded-xl mb-3 transition-transform group-hover:scale-[1.02]"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div className="font-display font-bold text-body-sm text-on-surface">
                        {c.label}
                      </div>
                      <div className="text-label-sm text-on-surface-variant font-mono">
                        {copiedColor === c.hex ? "Copied!" : c.hex}
                      </div>
                    </button>
                  ))}
                </div>
              </section>

              {/* Typography */}
              <section className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <h2 className="font-display text-headline-sm font-bold mb-6 flex items-center gap-2">
                  <Icon
                    name="text_fields"
                    size={24}
                    className="text-tertiary-container"
                  />
                  Typography
                </h2>
                <div className="space-y-6">
                  {fonts.map((f) => (
                    <div
                      key={f.name}
                      className="flex items-center gap-6 bg-surface-container-low rounded-2xl p-6"
                    >
                      <div className="w-20 h-20 bg-surface-container-highest rounded-xl flex items-center justify-center shrink-0">
                        <span
                          className={`text-3xl font-bold text-on-surface ${f.name === "Manrope" ? "font-display" : "font-body"}`}
                        >
                          {f.preview}
                        </span>
                      </div>
                      <div>
                        <div className="font-display font-bold text-title-md text-on-surface">
                          {f.name}
                        </div>
                        <div className="text-body-sm text-on-surface-variant">
                          {f.weight}
                        </div>
                        <div className="text-label-sm text-on-surface-variant mt-1">
                          {f.usage}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              {/* Asset Files */}
              <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <h3 className="font-display text-title-md font-bold mb-6 flex items-center gap-2">
                  <Icon
                    name="folder_open"
                    size={20}
                    className="text-primary"
                  />
                  Asset Library
                </h3>
                <div className="space-y-3">
                  {assets.map((a) => (
                    <div
                      key={a.name}
                      className="flex items-center gap-3 bg-surface-container-low p-4 rounded-xl hover:bg-surface-container transition-colors group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon
                          name={a.icon}
                          size={20}
                          className="text-primary"
                        />
                      </div>
                      <div className="min-w-0 grow">
                        <div className="font-display font-bold text-body-sm text-on-surface truncate">
                          {a.name}
                        </div>
                        <div className="text-label-sm text-on-surface-variant">
                          {a.size} · {a.updated}
                        </div>
                      </div>
                      <Icon
                        name="download"
                        size={18}
                        className="text-on-surface-variant/40 group-hover:text-primary transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 border-2 border-dashed border-outline-variant/30 rounded-xl p-6 flex flex-col items-center gap-2 cursor-pointer hover:bg-primary-fixed/20 transition-colors">
                  <Icon
                    name="cloud_upload"
                    size={28}
                    className="text-on-surface-variant/40"
                  />
                  <p className="text-body-sm text-on-surface-variant text-center">
                    Drop files here or click to upload
                  </p>
                </div>
              </section>

              {/* Usage Guidelines */}
              <section className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <h3 className="font-display text-title-md font-bold mb-4 flex items-center gap-2">
                  <Icon
                    name="rule"
                    size={20}
                    className="text-tertiary-container"
                  />
                  Usage Guidelines
                </h3>
                <div className="space-y-4">
                  {[
                    "Maintain clear space equal to the logo's 'B' height on all sides",
                    "Never stretch, rotate, or apply effects to the logo",
                    "Use the reversed logo version on dark backgrounds only",
                    "Primary Purple and Teal are never used as text colors on light backgrounds below 18pt",
                  ].map((rule, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Icon
                          name="check"
                          size={14}
                          className="text-secondary"
                        />
                      </div>
                      <p className="text-body-sm text-on-surface-variant leading-relaxed">
                        {rule}
                      </p>
                    </div>
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
