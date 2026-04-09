import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

const guides = [
  {
    category: "Getting Started",
    icon: "rocket_launch",
    items: [
      {
        title: "How to Write a Killer Creative Brief",
        desc: "A step-by-step guide to writing briefs that attract top talent and reduce revision cycles.",
        readTime: "8 min read",
        tag: "For Clients",
      },
      {
        title: "Setting Up Your Freelancer Profile",
        desc: "Optimize your portfolio, write case studies that convert, and get verified faster.",
        readTime: "6 min read",
        tag: "For Designers",
      },
      {
        title: "Understanding Milestone-Based Payments",
        desc: "How escrow works, when payments release, and how to structure milestone deliverables.",
        readTime: "5 min read",
        tag: "For Everyone",
      },
    ],
  },
  {
    category: "Best Practices",
    icon: "school",
    items: [
      {
        title: "Feedback That Designers Love",
        desc: "How to give constructive, actionable design feedback using the annotation tool.",
        readTime: "7 min read",
        tag: "For Clients",
      },
      {
        title: "Pricing Your Marketing Design Work",
        desc: "Benchmark rates by deliverable type, experience level, and market geography.",
        readTime: "10 min read",
        tag: "For Designers",
      },
      {
        title: "Avoiding Scope Creep",
        desc: "Use revision limits, clear deliverable lists, and engagement models to protect your time.",
        readTime: "6 min read",
        tag: "For Everyone",
      },
    ],
  },
];

const tools = [
  {
    name: "Brief Builder",
    desc: "AI-assisted project scoping tool that walks you through objectives, audience, and deliverables.",
    icon: "edit_note",
    href: "/brief/new",
    cta: "Start a Brief",
  },
  {
    name: "Budget Calculator",
    desc: "Estimate project costs based on deliverable type, designer tier, and timeline urgency.",
    icon: "calculate",
    href: "/resources",
    cta: "Coming Soon",
  },
  {
    name: "Brand Kit Template",
    desc: "Downloadable template to organize your logos, colors, fonts, and voice guidelines.",
    icon: "palette",
    href: "/resources",
    cta: "Coming Soon",
  },
  {
    name: "Contract Templates",
    desc: "Pre-built NDA, work-for-hire, and retainer agreement templates for creative work.",
    icon: "gavel",
    href: "/resources",
    cta: "Coming Soon",
  },
];

const faqs = [
  {
    q: "How does Briefly vet freelancers?",
    a: "Every designer goes through a portfolio review, skill assessment, and reference check. Top Rated Plus designers are hand-picked by our curation team.",
  },
  {
    q: "What payment methods are supported?",
    a: "We support credit/debit cards, PIX (Brazil), Boleto, and international wire transfers through Stripe Connect.",
  },
  {
    q: "How does the escrow system work?",
    a: "When you fund a milestone, the payment is held securely. It's released to the freelancer only when you approve the deliverable.",
  },
  {
    q: "Can I hire a full team?",
    a: "Yes — our Team Assembly feature lets you assemble a squad (designer + copywriter + social media manager) for full campaign execution.",
  },
  {
    q: "What happens if I'm not satisfied?",
    a: "You have revision rounds built into every project. If issues persist, our mediation team steps in to resolve disputes.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-surface-container-low py-20">
        <div className="mx-auto max-w-360 px-6 lg:px-8 text-center">
          <p className="text-label-lg font-bold uppercase tracking-widest text-tertiary mb-2">
            Learn & Build
          </p>
          <h1 className="font-display text-display-sm font-extrabold text-on-surface tracking-tight">
            Resources & Guides
          </h1>
          <p className="mt-4 text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Everything you need to create better briefs, run smoother projects,
            and build lasting creative partnerships.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-360 px-6 lg:px-8 py-16">
        {/* Guides */}
        {guides.map((section) => (
          <section key={section.category} className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Icon
                name={section.icon}
                size={24}
                className="text-primary"
              />
              <h2 className="font-display text-headline-sm font-bold text-on-surface">
                {section.category}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.items.map((item) => (
                <div
                  key={item.title}
                  className="bg-surface-container-lowest rounded-2xl p-6 hover:shadow-[0_20px_40px_rgba(29,27,32,0.06)] transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-label-sm font-bold ${
                        item.tag === "For Clients"
                          ? "bg-primary/10 text-primary"
                          : item.tag === "For Designers"
                            ? "bg-tertiary-container/20 text-tertiary-container"
                            : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {item.tag}
                    </span>
                    <span className="text-label-sm text-on-surface-variant">
                      {item.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-title-md font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Tools */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Icon name="build" size={24} className="text-secondary" />
            <h2 className="font-display text-headline-sm font-bold text-on-surface">
              Tools & Templates
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)] flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center mb-4">
                  <Icon
                    name={tool.icon}
                    size={24}
                    className="text-primary"
                  />
                </div>
                <h3 className="font-display text-title-md font-bold text-on-surface mb-2">
                  {tool.name}
                </h3>
                <p className="text-body-sm text-on-surface-variant leading-relaxed grow">
                  {tool.desc}
                </p>
                <Link
                  href={tool.href}
                  className={`mt-4 inline-flex items-center gap-1 font-display font-bold text-body-sm ${
                    tool.cta === "Coming Soon"
                      ? "text-on-surface-variant cursor-default"
                      : "text-primary hover:underline"
                  }`}
                >
                  {tool.cta}
                  {tool.cta !== "Coming Soon" && (
                    <Icon name="arrow_forward" size={16} />
                  )}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-10">
            <p className="text-label-lg font-bold uppercase tracking-widest text-tertiary mb-2">
              Support
            </p>
            <h2 className="font-display text-headline-lg font-extrabold text-on-surface tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-surface-container-lowest rounded-2xl p-6"
              >
                <h3 className="font-display text-title-md font-bold text-on-surface mb-2">
                  {faq.q}
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
