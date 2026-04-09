import Link from "next/link";

const platformLinks = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Support", href: "/support" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-low mt-auto">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-display text-xl font-extrabold text-primary">
              Briefly
            </span>
            <p className="mt-3 text-body-sm text-on-surface-variant leading-relaxed">
              The curated marketplace for marketing-focused designers. Branding,
              campaigns, assets, and social media — all in one place.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-display text-label-lg font-bold uppercase tracking-wider text-on-surface mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-label-lg font-bold uppercase tracking-wider text-on-surface mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Inspired */}
          <div>
            <h4 className="font-display text-label-lg font-bold uppercase tracking-wider text-on-surface mb-4">
              Stay Inspired
            </h4>
            <p className="text-body-sm text-on-surface-variant mb-4">
              Get curated design inspiration and platform updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-surface-container-lowest px-4 py-2.5 rounded-xl text-body-sm ghost-border focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="bg-primary text-on-primary px-5 py-2.5 rounded-xl text-body-sm font-semibold hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-outline-variant/20 text-center text-body-sm text-on-surface-variant">
          &copy; {new Date().getFullYear()} Briefly. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
