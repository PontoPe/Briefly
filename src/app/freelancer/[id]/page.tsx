import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

/* ── Static data ─────────────────────────────────────────── */

const skills = [
  { label: "Brand Strategy", primary: true },
  { label: "Adobe Creative Suite" },
  { label: "Growth Marketing" },
  { label: "UI/UX Design" },
  { label: "Typography" },
  { label: "Editorial Layout" },
  { label: "Motion Graphics" },
  { label: "Art Direction" },
];

const portfolioItems = [
  {
    title: "Aura Skin Care Rebrand",
    subtitle: "Full Identity System & Social Campaign",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqheR2H9EOsSAwIloi46c1dCNQ3dLGkmVrPAeXaG39fYEPMYPRDMocq2rkkyrLAxMYOHsdQ1CBlVjWKYG76CvKAsuARncTjxTddUNEp32pawavC4yghIehPSqijCBbVOfObmD9tys9pR1urbpUMUxulbnmDqbtlj8VVApEnakQiJTdCS91vwGemJ5HRCysF8ShwtHdOnk3KWxfNA-dRkUVOhkYV2gPVVCb12w9tdmdfYcqKd24Xxu2qmw9bq7XCTjRT0RQyL4w79OD",
    featured: true,
  },
  {
    title: "Velocity Growth",
    subtitle: "Growth Marketing Assets",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCoQe-xXfJlET2QTuCxqg0B7VBHMD6C40TRGkwn5ZUpJBYMmyZV9nVC__Am5t4TAbwisTPmIY7Mb2UtXVIw5zEV-Ck8pg_V-bSk_6Hr9BOuQVM_xfrl3qlt4XcC9Piv4i7CjsDmzp2XzQTkJU-UfTfiWR3UMsjtLtZUdBf0RtGFNoO-68T1qKNCKnxSMWGiQP5RUiwkStmK_v_LpeeXmd7RV32nkxg2-WV0ArskzkW6c3XVt5gb2hpTQRT85uSUEUQMRczjERf9c9Z6",
  },
  {
    title: "Modern Muse",
    subtitle: "Digital Publication Layout",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCb7p2087F676eMivrwKy6UauK8E5jX-HvHfZuRajxKL1wBGyopblBmlQL2hkRY5PQ8G-59k6dyMcGGyt6B8ZsbRKVnJxpshLTvekyYV_Ug11PAFq7IBUYnymobzz_HbHLvZLz0mNRtEHAxDcP3SuKC3vuRNzdG6JYlDNF09FoKKs1X6nWNxd26DU8MczrD8Mhj_saJqVAl-rZZqseOS4x4tYWmqdbo1Jcb2cLKnD7Y3sWKnY7_jViu7UbqKMtFABxlniBhqfRjnPPh",
  },
  {
    title: "Zenith FinTech",
    subtitle: "UI Design System",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtAMaUyvAYor-TRjksHOfM3IHx958PeczC5Y4ZZtk_x_-7hDIOZ05LMb3bsL4kAAJNmfz92_7c2femNNWfF3VANqXv2oa2w4OqSJShGhS8vic29UTLqpsgCwwDprFxmSUrTAcTWhSfOf8V2DWklcZWVZPiPuHpYHpNBnTH0HlxRASMGpNXKL4pMIjwwmXu2yOyraOiAPs9QtcsvfP8lAnOy5HybKysUT_ipHSmEB0beNLGFqeMWOpDMAfbtjOVoi4yInwR2ohoQQ6F",
  },
  {
    title: "Nexus Campaign",
    subtitle: "Visual Identity",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABkQzPl5ZAyThH8mglEzaG4nFKl_BIDxn8dNeGlEdgACFTba7XEOfbwpuarWGlP1oNYr8OSIMAZtmLS3F23xgEOJ-IUxpn7RYrWtiiosQGT1YtY8MsT0Sa3T6swUPcI-HNKJkFO4zGvfh3zC8348ow6QakLz5x27_qCseXAVuy2L4jnqHI71S-bLql0T20EHp3byUyZKX-TFQFNLIQlcu-SwWt2DwCPa_q_EJhZum4-47qS73_mqWQ6LIf-UqcAWPDDYh7jf8BY9p3",
  },
];

const reviews = [
  {
    stars: 5,
    text: '"Julianne completely transformed our brand\'s visual language. Her attention to detail is unmatched."',
    name: "Marcus Chen",
    role: "CMO, TechFlow",
    dotColor: "bg-primary-container",
  },
  {
    stars: 5,
    text: '"Highly professional and very efficient. The campaign graphics delivered resulted in a 40% CTR increase."',
    name: "Sarah Jenkins",
    role: "Founder, Bloom Agency",
    dotColor: "bg-secondary-container",
  },
];

/* ── Page ────────────────────────────────────────────────── */

export default function FreelancerProfilePage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-20 max-w-360 mx-auto px-8">
        {/* ── Profile Header ─────────────────────────────── */}
        <header className="relative mb-16">
          {/* Cover */}
          <div className="w-full h-64 rounded-xl overflow-hidden -mb-20 bg-surface-container-low relative">
            <Image
              className="object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAForWgh75DvAfdahfGbwpAuiqAQAO8VkZMTNYgyxHNeaNYbxAE4s9rEi_8mhLEEFKsmYMJhtSp7a-Ezr3Sy9ES01YLwl94jKYG6F16f6VIsF7hBYHuSEnKkGVV5o9awmPZ4FxMqBKEQLNmkPz-kZ72KtFuvzg5h0KU3l9tTbRyvYZUFRCxj8Pe5_z-MJcjv1eSltjPzOQFyutmhRWpOCEAXT81GkWIlSIB34cnCGkHAYW8s3-002pQ1eblC8g8p8G0y5WXse4mQAYv"
              alt=""
              fill
              sizes="100vw"
              priority
            />
          </div>

          {/* Avatar + Info */}
          <div className="relative z-10 flex flex-col md:flex-row items-end gap-8 px-12">
            <div className="w-48 h-48 rounded-xl overflow-hidden border-8 border-surface shadow-2xl bg-surface-container shrink-0 relative">
              <Image
                className="object-cover"
                src="/images/juju.jpg"
                alt="Julianne V."
                fill
                sizes="192px"
              />
            </div>

            <div className="flex-1 pb-4">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h1 className="text-display-md font-display font-extrabold tracking-tight text-primary">
                  Julianne V.
                </h1>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-md font-bold flex items-center gap-1">
                  <Icon name="stars" filled size={16} />
                  Top Rated
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-on-surface-variant">
                <div className="flex items-center gap-1">
                  <Icon name="location_on" className="text-primary" size={20} />
                  <span>London, UK</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="star" filled className="text-tertiary" size={20} />
                  <span className="font-bold text-on-surface">4.9/5.0</span>
                  <span className="text-sm">(128 Reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon
                    name="verified"
                    filled
                    className="text-secondary"
                    size={20}
                  />
                  <span>Expert Marketing Designer</span>
                </div>
              </div>
            </div>

            <div className="pb-4 flex gap-4">
              <button className="bg-tertiary-container text-on-tertiary font-bold px-8 py-3 rounded-full hover:opacity-90 transition-all flex items-center gap-2">
                Hire Me
                <Icon name="arrow_forward" size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* ── Main Content Grid ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Bio, Skills, Reviews */}
          <div className="lg:col-span-4 space-y-12">
            {/* About Me */}
            <section className="bg-surface-container-low p-8 rounded-xl">
              <h2 className="font-display text-xl font-bold mb-6 text-primary border-b border-outline-variant/20 pb-4">
                About Me
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                I am a strategic marketing designer specializing in high-growth
                brand identities and conversion-led digital campaigns. With over
                8 years of experience working with London&apos;s top agencies, I
                blend editorial aesthetics with data-driven strategy to create
                visuals that don&apos;t just look good—they perform.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Availability</span>
                  <span className="text-secondary font-bold">20 hrs/week</span>
                </div>
              </div>

              {/* Language Proficiency */}
              <div className="mt-6 pt-6 border-t border-outline-variant/20">
                <h3 className="text-sm font-bold text-on-surface mb-4">Language Proficiency</h3>
                <div className="space-y-3">
                  {[
                    { lang: "Portuguese", level: 5 },
                    { lang: "English", level: 4 },
                    { lang: "Spanish", level: 2 },
                    { lang: "French", level: 1 },
                  ].map((l) => (
                    <div key={l.lang} className="flex items-center justify-between gap-3">
                      <span className="text-sm text-on-surface-variant w-24 shrink-0">{l.lang}</span>
                      <div className="flex-1 flex items-center gap-1.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 flex-1 rounded-full ${
                              i < l.level ? "bg-primary" : "bg-outline-variant/20"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-on-surface-variant w-8 text-right">{l.level}/5</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Core Expertise */}
            <section>
              <h2 className="font-display text-xl font-bold mb-6 text-primary">
                Core Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s.label}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      s.primary
                        ? "bg-tertiary text-on-tertiary"
                        : "bg-surface-container-high text-on-surface-variant"
                    }`}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </section>

            {/* Client Reviews */}
            <section className="space-y-6">
              <h2 className="font-display text-xl font-bold text-primary">
                Client Reviews
              </h2>
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="p-6 bg-surface-container rounded-xl"
                >
                  <div className="flex items-center gap-1 mb-2 text-tertiary">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <Icon key={i} name="star" filled size={20} />
                    ))}
                  </div>
                  <p className="text-sm italic text-on-surface-variant mb-4">
                    {r.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full ${r.dotColor}`}
                    />
                    <div>
                      <p className="text-xs font-bold">{r.name}</p>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">
                        {r.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column: Portfolio */}
          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl font-extrabold text-primary mb-8 tracking-tight">
              Portfolio Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioItems.map((item) => (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-xl bg-surface-container-lowest ${
                    item.featured ? "md:col-span-2" : ""
                  }`}
                >
                  <Image
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      item.featured ? "h-100" : "h-72"
                    }`}
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={item.featured ? 400 : 288}
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 lg:p-8">
                    <h3 className="text-white text-lg lg:text-2xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-white/80">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="px-12 py-4 border border-outline-variant/30 text-primary font-bold rounded-full hover:bg-surface-container transition-colors">
                View More Work
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
