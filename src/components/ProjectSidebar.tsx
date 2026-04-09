"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

const navItems = [
  { label: "Workspace", icon: "dashboard", href: "/project/workspace" },
  { label: "Collaborate", icon: "group", href: "/project/collaborate" },
  { label: "Calendar", icon: "calendar_month", href: "/project/calendar" },
  { label: "Brand Kit", icon: "palette", href: "/project/brand-kit" },
  { label: "Performance", icon: "analytics", href: "/project/performance" },
  { label: "Settings", icon: "settings", href: "/project/settings" },
];

interface ProjectSidebarProps {
  projectName?: string;
  projectSubtitle?: string;
}

export function ProjectSidebar({
  projectName = "Project Alpha",
  projectSubtitle = "Marketing Campaign",
}: ProjectSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-surface-container-low z-40 flex flex-col">
      <div className="p-6">
        {/* Project identity */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary font-display font-bold text-sm">
            {projectName
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div>
            <div className="font-display text-title-sm font-bold text-on-surface">
              {projectName}
            </div>
            <div className="text-label-sm text-on-surface-variant">
              {projectSubtitle}
            </div>
          </div>
        </div>

        {/* Share button */}
        <button className="w-full bg-tertiary-container text-on-tertiary py-2.5 rounded-xl text-body-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          <Icon name="share" size={18} />
          Share Project
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-r-full transition-colors text-body-md ${
                    isActive
                      ? "bg-surface-container-highest text-primary font-bold"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                  }`}
                >
                  <Icon name={item.icon} size={20} filled={isActive} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
