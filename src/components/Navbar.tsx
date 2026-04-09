"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

const publicLinks = [
  { label: "Browse", href: "/marketplace" },
  { label: "Projects", href: "/projects" },
  { label: "Freelancers", href: "/freelancers" },
  { label: "Resources", href: "/resources" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto max-w-360 px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="font-display text-xl font-extrabold tracking-tight text-primary"
          >
            Briefly
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {publicLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-body-md font-medium transition-colors ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/signin"
              className="hidden sm:inline-flex text-body-md font-medium text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/brief/new"
              className="hero-gradient text-on-primary px-5 py-2.5 rounded-full text-body-md font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Post a Project
              <Icon name="arrow_forward" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
