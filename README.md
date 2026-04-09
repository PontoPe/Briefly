This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Editorial Marketplace — Technical Architecture

> A curated marketplace connecting elite marketing & design freelancers with agencies and brands that demand excellence.

---

## System Architecture

```mermaid
graph TB
    subgraph CLIENT["🖥️ Client layer"]
        BRW["Browser (SPA)"]
        MOB["Mobile app — React Native"]
    end

    subgraph FRONTEND["⚡ Frontend — Vercel"]
        NEXT["Next.js 14<br/><small>App Router + TypeScript</small>"]
        TW["Tailwind CSS<br/><small>Design token system</small>"]
        TQ["TanStack Query<br/><small>Server state + cache</small>"]
        ZS["Zustand<br/><small>Client state</small>"]
    end

    subgraph API["🔌 API layer — NestJS"]
        GQL["GraphQL API<br/><small>Apollo Server</small>"]
        WS["WebSocket server<br/><small>Real-time events</small>"]
        WH["REST webhooks<br/><small>Stripe + integrations</small>"]
    end

    subgraph SERVICES["⚙️ Core services"]
        AUTH["Auth0<br/><small>OAuth + MFA + roles</small>"]
        STRIPE["Stripe Connect<br/><small>Escrow + payouts</small>"]
        LIVE["Liveblocks<br/><small>Annotations + presence</small>"]
        AI["Claude API<br/><small>AI brief assist</small>"]
    end

    subgraph DATA["🗄️ Data stores"]
        PG["PostgreSQL<br/><small>Core data + Prisma ORM</small>"]
        RD["Redis<br/><small>Cache + sessions + queues</small>"]
        MS["Meilisearch<br/><small>Faceted search + filters</small>"]
        S3["AWS S3<br/><small>Files + CloudFront CDN</small>"]
    end

    subgraph EXTERNAL["🌐 External integrations"]
        META["Meta Ads API"]
        GA["Google Analytics 4"]
        LI["LinkedIn / Credly"]
        MON["Sentry + PostHog"]
    end

    BRW -->|HTTPS| GQL
    BRW -->|WSS| WS
    MOB -->|HTTPS| GQL

    NEXT --> TQ
    NEXT --> TW
    NEXT --> ZS

    GQL --> AUTH
    GQL --> STRIPE
    WS --> LIVE
    GQL --> AI
    WH --> STRIPE

    AUTH --> PG
    AUTH --> RD
    STRIPE --> PG
    LIVE --> RD
    AI --> PG

    GQL --> PG
    GQL --> RD
    GQL --> MS
    GQL --> S3

    PG -.-> META
    PG -.-> GA
    PG -.-> LI
    PG -.-> MON

    classDef client fill:#f1efe8,stroke:#888780,color:#2c2c2a
    classDef frontend fill:#eeedfe,stroke:#7f77dd,color:#26215c
    classDef api fill:#e1f5ee,stroke:#1d9e75,color:#04342c
    classDef services fill:#e6f1fb,stroke:#378add,color:#042c53
    classDef data fill:#faeeda,stroke:#ef9f27,color:#412402
    classDef external fill:#f1efe8,stroke:#b4b2a9,color:#444441

    class BRW,MOB client
    class NEXT,TW,TQ,ZS frontend
    class GQL,WS,WH api
    class AUTH,STRIPE,LIVE,AI services
    class PG,RD,MS,S3 data
    class META,GA,LI,MON external
```

---

## Core Data Flow — Project Lifecycle

```mermaid
graph TD
    subgraph PHASE1["Phase 1 — Project creation + matching"]
        P1A["Client posts brief<br/><small>Multi-step form + brand kit upload</small>"]
        P1B["AI brief assist<br/><small>Claude suggests deliverables,<br/>budget + timeline</small>"]
        P1C["Index + search<br/><small>Meilisearch indexes all<br/>filter facets</small>"]
        P1D["Smart matching<br/><small>Notify relevant freelancers</small>"]
        P1A --> P1B --> P1C --> P1D
    end

    subgraph PHASE2["Phase 2 — Proposal + contract"]
        P2A["Freelancer submits proposal<br/><small>Template + case studies +<br/>milestones + revision limits</small>"]
        P2B["Contract generated<br/><small>Scope, IP clause, NDA,<br/>payment schedule</small>"]
        P2C["Escrow funded<br/><small>Client pays milestone 1 →<br/>Stripe holds funds</small>"]
        P2A --> P2B --> P2C
    end

    subgraph PHASE3["Phase 3 — Collaboration + delivery"]
        P3A["Workspace opens<br/><small>Brand kit, file uploads,<br/>real-time chat</small>"]
        P3B["Annotated feedback<br/><small>Client pins comments on<br/>specific design areas</small>"]
        P3C["Version control<br/><small>Each upload = new version<br/>Revision counter visible</small>"]
        P3A --> P3B --> P3C
    end

    subgraph PHASE4["Phase 4 — Approval + payment"]
        P4A["Client approves milestone<br/><small>Source files verified<br/>in escrow bucket</small>"]
        P4B["Escrow releases<br/><small>Stripe pays freelancer<br/>Platform takes 10-15%</small>"]
        P4C["IP auto-transfers<br/><small>Source files unlocked<br/>Copyright doc generated</small>"]
        P4A --> P4B --> P4C
    end

    subgraph PHASE5["Phase 5 — Performance + reputation"]
        P5A["Campaign tracking<br/><small>GA4 / Meta Ads connected<br/>Live ROAS, CTR, impressions</small>"]
        P5B["Mutual reviews<br/><small>Both parties rate<br/>Linked to project</small>"]
        P5C["Case study published<br/><small>Challenge → Solution → Results<br/>Metrics from live data</small>"]
        P5A --> P5B --> P5C
    end

    PHASE1 --> PHASE2 --> PHASE3 --> PHASE4 --> PHASE5

    PHASE4 -. "Retainer loop:<br/>repeats monthly" .-> PHASE3

    classDef phase1 fill:#eeedfe,stroke:#7f77dd,color:#26215c
    classDef phase2 fill:#e1f5ee,stroke:#1d9e75,color:#04342c
    classDef phase3 fill:#fbeaf0,stroke:#d4537e,color:#4b1528
    classDef phase4 fill:#faece7,stroke:#d85a30,color:#4a1b0c
    classDef phase5 fill:#e6f1fb,stroke:#378add,color:#042c53

    class P1A,P1B,P1C,P1D phase1
    class P2A,P2B,P2C phase2
    class P3A,P3B,P3C phase3
    class P4A,P4B,P4C phase4
    class P5A,P5B,P5C phase5
```

---

## Tech Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | Next.js 14, TypeScript, Tailwind CSS | App shell, SSR, design system |
| **State** | TanStack Query, Zustand | Server + client state management |
| **API** | NestJS, Apollo GraphQL, WebSockets | Unified API layer + real-time |
| **Auth** | Auth0 | OAuth, MFA, role-based access |
| **Payments** | Stripe Connect (Custom) | Escrow, milestones, retainer billing |
| **Real-time** | Liveblocks | Annotations, presence, collaboration |
| **AI** | Claude API (Anthropic) | Smart brief assist, matching |
| **Database** | PostgreSQL + Prisma | Core relational data |
| **Cache** | Redis | Sessions, queues, rate limiting |
| **Search** | Meilisearch | Faceted filtering, full-text search |
| **Storage** | AWS S3 + CloudFront | Design files, media, CDN delivery |
| **Monitoring** | Sentry, PostHog | Error tracking, product analytics |
| **Hosting** | Vercel (frontend), AWS ECS (backend) | Edge deployment, container orchestration |

---

## Security

- **Authentication**: Auth0 with OAuth 2.0, MFA, email verification
- **Authorization**: Role-based (Client, Freelancer, Admin) with row-level security
- **API**: JWT with short expiration + refresh token rotation, rate limiting via Redis
- **Payments**: PCI compliance via Stripe (no raw card data touches our servers)
- **Files**: S3 signed URLs with expiration, MIME type validation, malware scanning
- **Encryption**: AES-256 at rest for sensitive data (contracts, NDAs, financials)
- **Headers**: Helmet.js for CSP, HSTS, X-Frame-Options
- **IP Escrow**: Source files stored in isolated S3 bucket, unlocked only on payment release

---

## Build Phases

**Phase 1 — MVP** (Months 1-3)
Auth + profiles + portfolios + project posting + basic search/filters + Stripe escrow

**Phase 2 — Collaboration** (Months 4-5)
Workspace + annotated feedback + version control + brand kit + chat

**Phase 3 — Intelligence** (Months 6-7)
AI brief assist + smart matching + performance dashboard + analytics integrations

**Phase 4 — Scale** (Months 8+)
Template marketplace + team assembly + mobile app + advanced IP automation

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
