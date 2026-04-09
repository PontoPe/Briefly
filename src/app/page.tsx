import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const categories = [
  { label: "Brand Identity", icon: "diamond" },
  { label: "Performance Marketing", icon: "trending_up" },
  { label: "Social Media", icon: "share" },
  { label: "Campaign Design", icon: "campaign" },
  { label: "Pitch Decks", icon: "slideshow" },
  { label: "Motion & Video", icon: "movie" },
];

const featuredFreelancers = [
  {
    name: "Elena Rodriguez",
    title: "Brand Strategist & Visual Designer",
    rating: 4.9,
    projects: 127,
    hourlyRate: "$120",
    tags: ["Brand Identity", "Luxury", "Editorial"],
    badge: "Top Rated Plus",
  },
  {
    name: "Marcus Chen",
    title: "Performance Marketing Designer",
    rating: 4.8,
    projects: 94,
    hourlyRate: "$95",
    tags: ["Ad Creative", "Social Media", "SaaS"],
    badge: "Top Rated",
  },
  {
    name: "Sofia Amari",
    title: "Motion Designer & Art Director",
    rating: 5.0,
    projects: 68,
    hourlyRate: "$150",
    tags: ["Motion", "3D", "Campaign"],
    badge: "Top Rated Plus",
  },
];

const stats = [
  { value: "2,400+", label: "Vetted Designers" },
  { value: "15,000+", label: "Projects Delivered" },
  { value: "4.9/5", label: "Avg. Client Rating" },
  { value: "98%", label: "On-Time Delivery" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(104,250,221,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(94,22,0,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-360 px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-secondary-container font-display text-label-lg font-bold uppercase tracking-widest mb-4">
              The Curated Canvas
            </p>
            <h1 className="font-display text-display-lg font-extrabold text-white leading-[1.05] tracking-tight">
              Where Brands Find Their{" "}
              <span className="text-secondary-container italic">
                Creative Edge.
              </span>
            </h1>
            <p className="mt-6 text-body-lg text-white/70 leading-relaxed max-w-xl">
              A curated marketplace connecting ambitious brands with elite
              marketing designers. Branding, campaigns, social media, and
              everything in between.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/brief/new"
                className="bg-secondary-container text-on-secondary-container px-8 py-3.5 rounded-full font-display font-bold text-body-lg hover:opacity-90 transition-opacity"
              >
                Post a Project
              </Link>
              <Link
                href="/marketplace"
                className="bg-white/10 text-white px-8 py-3.5 rounded-full font-display font-bold text-body-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Browse Designers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-surface-container-lowest -mt-6 relative z-10 mx-6 lg:mx-auto max-w-300 rounded-2xl shadow-[0_20px_40px_rgba(29,27,32,0.06)]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-outline-variant/20">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 lg:p-8 text-center">
              <div className="font-display text-headline-md font-extrabold text-primary">
                {stat.value}
              </div>
              <div className="mt-1 text-body-sm text-on-surface-variant">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-360 px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-label-lg font-bold uppercase tracking-widest text-tertiary mb-2">
            Specialized Talent
          </p>
          <h2 className="font-display text-display-sm font-extrabold text-on-surface tracking-tight">
            Every Corner of Marketing Design
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={`/marketplace?category=${encodeURIComponent(cat.label)}`}
              className="bg-surface-container-low hover:bg-surface-container-high p-6 rounded-2xl text-center transition-all hover:shadow-[0_20px_40px_rgba(29,27,32,0.06)] group"
            >
              <span className="material-symbols-outlined text-primary text-[32px] group-hover:scale-110 transition-transform inline-block">
                {cat.icon}
              </span>
              <div className="mt-3 font-display text-title-sm font-bold text-on-surface">
                {cat.label}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Freelancers */}
      <section className="bg-surface-container-low py-20">
        <div className="mx-auto max-w-360 px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-label-lg font-bold uppercase tracking-widest text-tertiary mb-2">
                Vetted Elite
              </p>
              <h2 className="font-display text-display-sm font-extrabold text-on-surface tracking-tight">
                Top Marketing Designers
              </h2>
            </div>
            <Link
              href="/freelancers"
              className="text-primary font-display font-bold text-body-md hover:underline"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredFreelancers.map((freelancer) => (
              <Link
                key={freelancer.name}
                href="/freelancer/1"
                className="bg-surface-container-lowest rounded-3xl p-6 hover:shadow-[0_20px_40px_rgba(29,27,32,0.06)] transition-shadow block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary font-display font-bold">
                      {freelancer.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-display text-title-md font-bold text-on-surface">
                        {freelancer.name}
                      </div>
                      <div className="text-body-sm text-on-surface-variant">
                        {freelancer.title}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-bold mb-4">
                  <span className="material-symbols-outlined text-[14px]">
                    verified
                  </span>
                  {freelancer.badge}
                </div>

                <div className="flex gap-2 flex-wrap mb-4">
                  {freelancer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-label-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px] text-tertiary-container">
                      star
                    </span>
                    <span className="font-display font-bold text-body-md">
                      {freelancer.rating}
                    </span>
                    <span className="text-body-sm text-on-surface-variant">
                      ({freelancer.projects} projects)
                    </span>
                  </div>
                  <span className="font-display font-bold text-primary text-body-lg">
                    {freelancer.hourlyRate}
                    <span className="text-body-sm font-normal text-on-surface-variant">
                      /hr
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-360 px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-label-lg font-bold uppercase tracking-widest text-tertiary mb-2">
            Streamlined Process
          </p>
          <h2 className="font-display text-display-sm font-extrabold text-on-surface tracking-tight">
            From Brief to Brilliance
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              icon: "edit_note",
              title: "Create Your Brief",
              desc: "Our AI-assisted brief builder helps you articulate exactly what you need — audience, deliverables, timeline, and budget.",
            },
            {
              step: "02",
              icon: "person_search",
              title: "Get Matched",
              desc: "Our algorithm matches you with vetted designers whose expertise, style, and availability align with your project.",
            },
            {
              step: "03",
              icon: "draw",
              title: "Collaborate Live",
              desc: "Work together in real-time with annotations, version control, brand kits, and milestone tracking — all in one hub.",
            },
            {
              step: "04",
              icon: "verified",
              title: "Receive & Own",
              desc: "Approve final deliverables, release escrow payment, and receive full IP transfer with source files.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-fixed mb-6">
                <span className="material-symbols-outlined text-primary text-[28px]">
                  {item.icon}
                </span>
              </div>
              <div className="font-display text-label-md font-bold text-tertiary uppercase tracking-widest mb-2">
                Step {item.step}
              </div>
              <h3 className="font-display text-title-lg font-bold text-on-surface mb-2">
                {item.title}
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-6 lg:mx-auto max-w-300 mb-20">
        <div className="bg-tertiary-container rounded-4xl p-12 lg:p-16 text-center">
          <h2 className="font-display text-display-sm font-extrabold text-white tracking-tight">
            Ready to curate your next campaign?
          </h2>
          <p className="mt-4 text-body-lg text-white/70 max-w-xl mx-auto">
            Join thousands of brands and agencies who trust Briefly to connect
            them with world-class marketing designers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/brief/new"
              className="bg-white text-tertiary-container px-8 py-3.5 rounded-full font-display font-bold text-body-lg hover:opacity-90 transition-opacity"
            >
              Post a Brief
            </Link>
            <Link
              href="/freelancers"
              className="bg-white/10 text-white px-8 py-3.5 rounded-full font-display font-bold text-body-lg hover:bg-white/20 transition-colors"
            >
              Browse Talent
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
