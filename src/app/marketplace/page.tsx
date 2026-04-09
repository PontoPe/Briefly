import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const filters = [
  "Explore All",
  "Brand Kits",
  "Pitch Decks",
  "Ad Templates",
  "Social Bundles",
  "Motion Assets",
  "Presets",
  "Guidelines",
];

const trendingAssets = [
  {
    name: "Modern SaaS Brand Kit",
    designer: "Elena Rodriguez",
    price: "$89",
    rating: 4.9,
    downloads: "2.4k",
    tools: ["figma", "ai"],
    featured: true,
  },
  {
    name: "Ultra-Minimalist Deck",
    designer: "Julian Aris",
    price: "$45",
    rating: 5.0,
    downloads: "1.8k",
    tools: ["figma", "pptx"],
    featured: false,
  },
  {
    name: "Neo-Vibe Post Bundle",
    designer: "Sofia Amari",
    price: "$32",
    rating: 4.8,
    downloads: "3.1k",
    tools: ["figma", "psd"],
    featured: true,
  },
];

const collectionAssets = [
  {
    name: "Essential UI Icon Library",
    designer: "Marcus Chen",
    price: "$19",
    tools: ["svg", "figma"],
  },
  {
    name: "Aura Instagram Stories",
    designer: "Sofia Amari",
    price: "$24",
    tools: ["figma", "psd"],
  },
  {
    name: "Web3 Pitch System",
    designer: "Julian Aris",
    price: "$49",
    tools: ["figma", "keynote"],
  },
  {
    name: "High-Conv Ad Set",
    designer: "Elena Rodriguez",
    price: "$35",
    tools: ["figma", "psd"],
  },
];

export default function MarketplacePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,107,92,0.2),transparent_50%)]" />
        <div className="relative mx-auto max-w-360 px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="font-display text-[3.5rem] lg:text-[4.5rem] font-extrabold text-white leading-[1.05] tracking-tight">
            The Template Gallery
          </h1>
          <p className="mt-4 text-body-lg text-white/60 max-w-lg mx-auto">
            Premium, studio-grade assets built by the world&apos;s top marketing
            designers.
          </p>
          {/* Search */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="flex bg-white/10 backdrop-blur-md rounded-full border border-white/20 p-1.5">
              <input
                type="text"
                placeholder="Search brand kits, templates, assets..."
                className="flex-1 bg-transparent text-white placeholder:text-white/40 px-5 py-3 text-body-md focus:outline-none"
              />
              <button className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-display font-bold text-body-md hover:opacity-90 transition-opacity">
                Search Assets
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <div className="mx-auto max-w-360 px-6 lg:px-8 -mt-5 relative z-10">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {filters.map((filter, i) => (
            <button
              key={filter}
              className={`px-5 py-2.5 rounded-full text-body-sm font-semibold whitespace-nowrap transition-colors ${
                i === 0
                  ? "bg-tertiary text-on-tertiary"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Trending Assets */}
      <section className="mx-auto max-w-360 px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-label-lg font-bold uppercase tracking-widest text-tertiary mb-1">
              High Demand
            </p>
            <h2 className="font-display text-headline-lg font-extrabold text-on-surface">
              Trending Assets
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                arrow_back
              </span>
            </button>
            <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingAssets.map((asset) => (
            <Link
              key={asset.name}
              href="/marketplace"
              className="bg-surface-container-lowest rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_rgba(29,27,32,0.06)] transition-all group"
            >
              <div className="aspect-4/3 bg-primary-container/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary/30 text-[64px]">
                    palette
                  </span>
                </div>
                {asset.featured && (
                  <div className="absolute top-3 left-3 bg-tertiary-container text-on-tertiary px-3 py-1 rounded-full text-label-sm font-bold">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-title-md font-bold text-on-surface mb-1">
                  {asset.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-primary-container" />
                  <Link
                    href="/freelancer/1"
                    className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-colors"
                  >
                    {asset.designer}
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-tertiary text-title-md">
                    {asset.price}
                  </span>
                  <div className="flex items-center gap-3 text-body-sm text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        star
                      </span>
                      {asset.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        download
                      </span>
                      {asset.downloads}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bundle section */}
      <section className="mx-auto max-w-360 px-6 lg:px-8 pb-16">
        <div className="bg-surface-container rounded-4xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="flex-1 relative z-10">
            <div className="inline-flex bg-tertiary-container text-on-tertiary px-4 py-1.5 rounded-full text-label-sm font-bold mb-4">
              Limited Offer
            </div>
            <h3 className="font-display text-headline-lg font-extrabold text-on-surface mb-2">
              The Startup Launch Bundle
            </h3>
            <p className="text-body-md text-on-surface-variant mb-6 max-w-md">
              Brand kit, pitch deck, social templates, and ad creatives — everything
              a startup needs to launch with confidence.
            </p>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-display-sm font-extrabold text-primary">
                $129
              </span>
              <span className="text-body-md text-on-surface-variant line-through">
                $340
              </span>
            </div>
            <button className="bg-secondary text-on-secondary px-8 py-3.5 rounded-full font-display font-bold text-body-lg hover:opacity-90 transition-opacity">
              Buy Bundle & Save 60%
            </button>
          </div>
          <div className="relative w-80 h-60 shrink-0">
            <div className="absolute top-0 left-0 w-36 h-44 bg-surface-container-lowest rounded-2xl shadow-[0_20px_40px_rgba(29,27,32,0.08)] -rotate-6" />
            <div className="absolute top-4 left-12 w-36 h-44 bg-surface-container-low rounded-2xl shadow-[0_20px_40px_rgba(29,27,32,0.08)] rotate-3" />
            <div className="absolute top-2 left-24 w-36 h-44 bg-surface-container-lowest rounded-2xl shadow-[0_20px_40px_rgba(29,27,32,0.08)] rotate-[8deg]" />
            <div className="absolute top-8 left-36 w-36 h-44 bg-primary-fixed rounded-2xl shadow-[0_20px_40px_rgba(29,27,32,0.08)] -rotate-3" />
          </div>
        </div>
      </section>

      {/* Explore Collection */}
      <section className="mx-auto max-w-360 px-6 lg:px-8 pb-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-headline-lg font-extrabold text-on-surface">
            Explore the Collection
          </h2>
          <Link
            href="/marketplace"
            className="text-primary font-display font-bold text-body-md hover:underline"
          >
            View All Assets →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collectionAssets.map((asset) => (
            <Link
              key={asset.name}
              href="/marketplace"
              className="bg-surface-container-lowest rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_rgba(29,27,32,0.06)] transition-all group"
            >
              <div className="aspect-square bg-surface-container relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-tertiary/5 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant/20 text-[48px]">
                    image
                  </span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                    favorite
                  </span>
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-display text-title-sm font-bold text-on-surface mb-1">
                  {asset.name}
                </h3>
                <div className="flex items-center justify-between">
                  <Link
                    href="/freelancer/1"
                    className="text-body-sm text-on-surface-variant hover:text-primary hover:underline transition-colors"
                  >
                    {asset.designer}
                  </Link>
                  <span className="font-display font-bold text-tertiary text-body-md">
                    {asset.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
