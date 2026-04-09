"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

const steps = [
  { label: "Objective", icon: "flag", href: "/brief/new" },
  { label: "Audience", icon: "groups", href: "/brief/strategy" },
  { label: "Deliverables", icon: "inventory_2", href: "/brief/deliverables" },
  { label: "Timeline", icon: "schedule", href: "/brief/timeline" },
  { label: "Budget", icon: "payments", href: "/brief/review" },
];

export function BriefSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-surface-container-low z-40 flex flex-col">
      <div className="p-6">
        <div className="font-display text-title-sm font-bold text-on-surface">
          Project Brief
        </div>
        <div className="text-label-sm text-on-surface-variant">
          AI-Assisted Flow
        </div>
      </div>

      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {steps.map((step) => {
            const isActive = pathname === step.href;
            return (
              <li key={step.href}>
                <Link
                  href={step.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-r-full transition-colors text-body-md ${
                    isActive
                      ? "bg-surface-container-highest text-primary font-bold"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                  }`}
                >
                  <Icon name={step.icon} size={20} filled={isActive} />
                  {step.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-6">
        <button className="w-full ghost-border text-on-surface-variant py-2.5 rounded-xl text-body-sm font-medium hover:bg-surface-container transition-colors flex items-center justify-center gap-2">
          <Icon name="summarize" size={18} />
          View Summary
        </button>
      </div>
    </aside>
  );
}
