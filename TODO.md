# Briefly — Full Project Roadmap

> Last updated: 2026-04-09

---

## ✅ Completed (Frontend Prototype)

- [x] All initial pages (landing, brief flow, browse-posts, case-study, freelancer profile, marketplace)
- [x] Project pages (collaborate, escrow, performance, versions, workspace, brand-kit, settings, calendar)
- [x] Public pages (projects, freelancers, resources, signin, team assembly)
- [x] Client profile page (`/client/[id]`)
- [x] Dead-link pages resolved
- [x] Tailwind v4 canonical class fixes + img→Image conversion
- [x] Design system compliance (DESIGN.md audit)
- [x] Freelancer profile: campaign analytics, certifications, video portfolio with real `<video>` playback
- [x] Quick filter dropdowns on browse-posts (4 top-bar filters)
- [x] Content calendar with week/list views
- [x] Team assembly page with role selection + candidate matching
- [x] Video lightbox on freelancer profile + case study

---

## Phase 1 — Frontend Completion

### 1.1 Visual-First Portfolios & Case Studies

- [ ] **Image carousel / gallery viewer** — Lightbox with prev/next navigation for portfolio items. Currently only single images or video; need a proper swipeable gallery.
  - _How:_ Build a `<GalleryLightbox>` client component using `useState` for index tracking. Render thumbnails below the main image. Use keyboard arrow key listeners + swipe gestures (touch events). No external deps needed.

- [ ] **Case study detail template** — Structured "Challenge → Solution → Results" format with metrics cards, before/after comparisons, and asset gallery.
  - _How:_ Create `/case-study/[id]/page.tsx` with a structured layout: hero with tags, a 3-section narrative (Challenge/Solution/Results each with icon + rich text area), a metrics grid (reuse the pattern from the existing case-study page), and an asset gallery grid at the bottom. Static data for now.

- [ ] **Brand specialization tags** — Filterable niche tags on freelancer profiles (e.g. "Minimalist Tech Branding", "DTC E-commerce Social Media").
  - _How:_ Add a `specializations` array to freelancer data. Render as pill tags on the profile. On `/freelancers` listing page, add tag filter chips that filter the displayed list client-side.

- [ ] **Live campaign links** — Portfolio items can link to live social media campaigns or external URLs.
  - _How:_ Add optional `liveUrl` field to portfolio items. Render an external-link icon button on the card that opens in a new tab.

### 1.2 Advanced Search & Filters

- [ ] **Advanced filters panel** — Expandable panel on `/browse-posts` with all 12 filter categories from the spec.
  - _How:_ Add an "Advanced Filters" toggle below the quick filter bar. Render a slide-down panel with grouped sections: Business Objective (5 options), Deliverable Type (4 groups), Industry/Niche (5+), Software/Tech Stack (4 groups), Project Type & Engagement (4), Budget & Results (3 sub-filters), Content Language & Market (language, geography, localization toggle), Brand Maturity (4 stages), Turnaround/Urgency (4 tiers), Platform/Channel (10+), Creative Style/Aesthetic (7 mood tags), Collaboration Model (4). Use checkbox groups per section. Store selections in a single `filters` state object. Add "Save Preset" button that persists to localStorage.

- [ ] **Visual browse mode** — Pinterest-style grid view for filtering by creative style/aesthetic with portfolio thumbnails.
  - _How:_ Add a view toggle (list/grid) to `/browse-posts`. Grid mode renders freelancer portfolio thumbnails in a masonry layout. Filter by style tags to narrow the visual results.

- [ ] **Saved filter presets** — "My sweet spot" saved searches for freelancers.
  - _How:_ Serialize current filter state to JSON, store in localStorage under a user-chosen name. Render a dropdown of saved presets that restores the filter state on click.

### 1.3 Project Scoping & Contracts UI

- [ ] **Retainer contract flow** — UI for creating monthly recurring service agreements.
  - _How:_ New `/brief/retainer/page.tsx` — form with: service description, monthly deliverables checklist, duration (3/6/12mo), monthly rate, renewal terms. Add "Retainer" option to the brief type selector in `/brief/new`.

- [ ] **Asset-based milestones** — Milestone editor where each milestone is tied to a specific deliverable.
  - _How:_ Enhance `/project/escrow` with an "Add Milestone" button. Each milestone: title, deliverable description, file type expected, payment amount, due date. Render as a vertical timeline with status indicators (pending/in-progress/delivered/approved).

- [ ] **Revision management system** — Define included revisions per quote, track revision rounds.
  - _How:_ Add revision counter to project settings. On the collaborate page, add a "Revision Round" tracker showing "Round 2 of 3 included" with a progress indicator. Extra revisions trigger a cost alert.

### 1.4 Collaboration & Feedback Tools

- [ ] **Annotated image feedback** — Click-on-design commenting tool (à la Figma/Frame.io).
  - _How:_ Build a `<AnnotationCanvas>` client component. Render the design image, overlay an invisible click-capture layer. On click, place a numbered pin and open a comment textarea. Store annotations as `{ x%, y%, comment, author, timestamp }`. Render pins on the image with tooltips. This is the most complex frontend feature — consider using `canvas` or absolute-positioned divs over the image.

- [ ] **Brand kit repository enhancement** — Upgrade `/project/brand-kit` with file upload zones, color swatch display (HEX input), font file listing, and logo variations grid.
  - _How:_ Restructure the brand-kit page into sections: Logo Variations (grid of logo files with light/dark/icon variants), Color Palette (swatches with HEX/RGB values, click to copy), Typography (font family cards with specimen preview), and Brand Guidelines (PDF upload/viewer). All static data for now, upload UI as visual placeholders.

- [ ] **Mood board / reference sharing** — In-context reference material sharing within projects.
  - _How:_ Add a "References" tab to the collaborate page. Grid of uploaded images with drag-to-reorder. Each can have a caption/note.

### 1.5 Remaining Page Enhancements

- [ ] **Client onboarding flow** — Guided wizard for first-time clients to create an AI-assisted brief.
  - _How:_ New `/onboarding/page.tsx` — multi-step wizard: Step 1 (company info), Step 2 (what do you need — deliverable picker), Step 3 (brand assets upload UI), Step 4 (AI brief suggestions – static mockup for now), Step 5 (review & post). Use step state with progress bar.

- [ ] **NDA / confidentiality templates** — Selectable NDA templates during project setup.
  - _How:_ Add an "NDA Required" toggle to project settings. When enabled, show a dropdown of template options (Mutual NDA, One-Way, Custom). Display a preview card of the selected template's key terms.

- [ ] **Chat / messaging UI** — Real-time messaging interface for client-freelancer communication.
  - _How:_ New `/project/chat/page.tsx` with ProjectSidebar. Message list with bubbles, text input, file attachment button, emoji picker placeholder. Static conversation data. Add "Chat" to ProjectSidebar nav.

- [ ] **Video call UI** — Briefing call interface or integration placeholder.
  - _How:_ New `/project/call/page.tsx` — video call room mockup with camera placeholders, mute/unmute, screen share, and end call buttons. Static UI only.

- [ ] **Template marketplace enhancement** — Freelancers can sell reusable templates.
  - _How:_ Enhance `/marketplace` with a "Templates" tab: social media kits, pitch deck templates, brand guide frameworks. Each card shows preview thumbnail, price, rating, sales count, and "Buy" button.

---

## Phase 2 — Backend & Infrastructure

### 2.1 Project Setup

- [ ] **Initialize Go backend** — Set up Go project with modular structure.
  - _How:_ Create a `backend/` directory. Use Go modules. Structure: `cmd/api/main.go`, `internal/` (handlers, services, repositories, models, middleware), `pkg/` (shared utilities). Use `chi` or `gin` for HTTP router. Set up `Makefile` for common commands.

- [ ] **GraphQL API layer** — Expose a GraphQL API for the frontend.
  - _How:_ Use `gqlgen` (Go GraphQL code-first generator). Define schema for: User, FreelancerProfile, ClientProfile, Project, Brief, Milestone, Proposal, Review, Message, Asset, Contract. Generate resolvers, wire to service layer.

- [ ] **PostgreSQL schema & migrations** — Design and version the database schema.
  - _How:_ Use `golang-migrate` or `goose` for migrations. Core tables: `users`, `freelancer_profiles`, `client_profiles`, `projects`, `briefs`, `milestones`, `proposals`, `reviews`, `messages`, `assets`, `contracts`, `nda_templates`, `certifications`, `portfolio_items`, `annotations`, `filter_presets`, `retainer_contracts`, `revision_rounds`. Add indexes on foreign keys and frequently filtered columns (industry, deliverable_type, budget_range). Use JSONB columns for flexible metadata (brand_kit_data, specialization_tags).

- [ ] **Redis setup** — Session management, caching, real-time presence.
  - _How:_ Add Redis as a Docker service. Use for: session store (JWT refresh tokens), search query caching (TTL 5min), rate limiting (sliding window per IP/user), real-time presence ("user is viewing this design"), and pub/sub for WebSocket message distribution.

- [ ] **Search engine setup (Meilisearch or Typesense)** — Faceted search for all 12 filter dimensions.
  - _How:_ Deploy Meilisearch alongside the API. Index freelancer profiles and project postings. Configure filterable attributes for all filter categories (deliverable_type, industry, software, budget_range, urgency, platform, style, language, brand_maturity, collaboration_model, project_type). Sync on write via the Go service layer. Frontend search hits Meilisearch via the Go API (not directly).

### 2.2 Authentication & Security

- [ ] **Auth provider integration (Clerk or Auth0)** — OAuth, MFA, email verification, session management.
  - _How:_ Integrate Clerk (simpler DX with Next.js) or Auth0. Support: Google OAuth, LinkedIn OAuth (important for freelancer verification), email/password with verification, MFA via TOTP. On the Go side, validate JWTs from the auth provider in middleware. Store user IDs from the provider mapped to internal user records.

- [ ] **JWT auth middleware (Go)** — Validate tokens, extract user context, refresh rotation.
  - _How:_ Middleware that reads `Authorization: Bearer <token>`, validates signature + expiry against the auth provider's JWKS endpoint, and injects user context into the request. Implement refresh token rotation: short-lived access tokens (15min) + longer refresh tokens (7d) stored in Redis with single-use enforcement.

- [ ] **Role-based access control** — Freelancer, Client, Admin roles with granular permissions.
  - _How:_ Add `role` field to users table. Middleware checks role against route requirements. Freelancers can't create projects, clients can't submit proposals, admins can access moderation tools. Use a permissions map keyed by role.

- [ ] **Rate limiting** — Per-IP and per-user rate limits on all endpoints.
  - _How:_ Redis sliding window rate limiter. Defaults: 100 req/min per IP for public endpoints, 300 req/min per authenticated user, 10 req/min for auth endpoints (login/register). Return `429 Too Many Requests` with `Retry-After` header.

- [ ] **Input sanitization & validation** — Every endpoint validates and sanitizes input.
  - _How:_ Use Go struct validation tags. Sanitize HTML from all text inputs (prevent XSS). Validate file uploads server-side: check MIME type against allowlist (image/*, application/pdf, video/mp4, .ai, .psd, .fig), enforce max file size (50MB for design files, 500MB for video), scan with ClamAV for malware.

- [ ] **HTTPS & security headers** — Enforce HTTPS, set security headers.
  - _How:_ TLS termination at the load balancer/reverse proxy. Add middleware for: `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Content-Security-Policy`, `Referrer-Policy`. CORS whitelist only the frontend domain(s).

- [ ] **Data encryption at rest** — Encrypt sensitive data in the database.
  - _How:_ Use AES-256-GCM encryption for: contract terms, NDA content, financial details, personal identification data. Encryption keys managed via AWS KMS or environment variables (never in code). PostgreSQL `pgcrypto` extension for column-level encryption where needed.

### 2.3 File Storage & Asset Management

- [ ] **AWS S3 + CloudFront** — File storage with CDN delivery.
  - _How:_ Two S3 buckets: `briefly-assets` (portfolios, brand kits, general uploads) and `briefly-escrow` (source files held in escrow — stricter ACLs). CloudFront distribution in front of the assets bucket for global CDN. All uploads go through the Go API (pre-signed upload URLs), never directly from the browser to S3 without authorization.

- [ ] **Image/video processing pipeline** — Thumbnails, optimized previews, video transcoding.
  - _How:_ On upload, trigger a processing job: images get resized to thumbnail (300px), preview (1200px), and original stored. Use `imgproxy` or a Lambda function. Videos get a poster frame extracted and optionally transcoded to web-optimized MP4 (H.264). Store processed variants alongside originals with a naming convention.

- [ ] **Source file escrow logic** — Files locked until payment releases.
  - _How:_ Escrowed files live in the restricted S3 bucket. No pre-signed download URLs are generated until the escrow service confirms final payment. On payment release: generate time-limited signed URL, flip the `escrow_status` to `released`, trigger IP transfer document generation.

### 2.4 Payments & Escrow

- [ ] **Stripe Connect integration (Custom accounts)** — Full marketplace payment flow.
  - _How:_ Freelancers onboard via Stripe Connect (Custom or Express). Client pays → funds held in platform Stripe account → milestone approved by client → `transfer` created to freelancer's connected account minus platform fee. Use Stripe's `PaymentIntents` for initial charge, `Transfers` for payout. Support: credit card, PIX (Brazil), Boleto. Webhook listeners for: `payment_intent.succeeded`, `transfer.created`, `account.updated`.

- [ ] **Milestone-based release** — Payments tied to deliverable milestones.
  - _How:_ Each project has N milestones. Client funds the full project upfront (held by Stripe). As each milestone is approved, the corresponding portion is released to the freelancer. If disputed, funds remain held until resolution. Admin can intervene on disputes.

- [ ] **Retainer/subscription billing** — Monthly recurring charges for retainer contracts.
  - _How:_ Use Stripe `Subscriptions` for retainer contracts. Monthly charge → platform holds → releases to freelancer on the billing cycle. Support pause/cancel from either side with notice period logic.

- [ ] **Platform commission logic** — Fee calculation and split payments.
  - _How:_ Configurable platform fee (e.g. 10-15%). Calculated at payment time. Stripe `application_fee_amount` on transfers handles this natively. Display fee breakdown to both parties in the UI.

### 2.5 Real-Time Layer

- [ ] **WebSocket infrastructure** — Real-time communication backbone.
  - _How:_ Go WebSocket server using `gorilla/websocket` or `nhooyr/websocket`. Redis pub/sub for horizontal scaling across multiple server instances. Channels per project for: chat messages, annotation events, presence updates, notification pushes.

- [ ] **Liveblocks evaluation / integration** — For collaboration features (annotations, presence, cursors).
  - _How:_ Evaluate Liveblocks for the annotation/feedback feature. If adopted: use their rooms API (one room per project), presence for "who's viewing", comments API for annotations. If self-hosting: build equivalent with WebSockets + Redis, store annotation state in PostgreSQL.

- [ ] **Real-time chat** — Project-scoped messaging.
  - _How:_ Messages stored in PostgreSQL (`messages` table: id, project_id, sender_id, content, attachments, created_at). Delivered in real-time via WebSocket channel. On reconnect, fetch missed messages via REST with `after` cursor pagination.

### 2.6 AI Layer

- [ ] **AI brief assistant** — Smart brief suggestions powered by LLM.
  - _How:_ Server-side only (API keys never on client). Client fills in target audience + deliverable type → Go API sends structured prompt to Anthropic Claude API → returns suggested brief additions, timeline estimates, budget ranges. Use platform's historical project data to ground suggestions. Cache common prompt patterns in Redis. Rate-limit AI calls per user.

- [ ] **Smart matching / recommendations** — Connect right freelancer to right brief.
  - _How:_ Scoring algorithm in Go: match brief requirements (industry, deliverable type, budget, tools) against freelancer profiles (specializations, past work, tools, ratings). Weight factors: specialization match (40%), industry experience (25%), rating + completion rate (20%), availability (15%). Return ranked list. Optionally enhance with embeddings (store freelancer profile embeddings, compute brief embedding, cosine similarity) using a vector DB or pgvector.

---

## Phase 3 — Integrations & Advanced Features

### 3.1 Third-Party Integrations

- [ ] **LinkedIn / Credly certification verification** — Verify freelancer skills.
  - _How:_ LinkedIn OAuth to pull certifications. Credly API to verify badges. Store verified status per certification. Display "Verified" badge on profile.

- [ ] **Meta Business Suite / Google Ads integration** — Pull campaign performance data.
  - _How:_ OAuth connection to Meta and Google APIs. Freelancers authorize access → system pulls campaign metrics (impressions, CTR, ROAS, conversions) → displays on freelancer profile as verified performance data. Read-only access only.

- [ ] **Figma / Canva embed support** — Embed live design previews.
  - _How:_ Accept Figma file URLs, use Figma embed API to render live preview in the collaboration hub. For Canva, use their embed SDK. Display alongside uploaded static files.

- [ ] **Content calendar sync** — Integrate with Meta Business Suite for publishing.
  - _How:_ OAuth to Meta Business Suite. Two-way sync: scheduled posts from Briefly's calendar → published via Meta API. Pull published post performance back into the calendar view.

### 3.2 Rights & IP Management

- [ ] **Automated copyright transfer** — Legal transfer triggered on final payment.
  - _How:_ On final milestone payment release: generate a PDF copyright transfer document from a template (freelancer name, client name, asset descriptions, date, project ID). Store in S3. Notify both parties. Update asset records with `ip_transferred: true` and transfer date.

- [ ] **Source file delivery verification** — Verify working files (.ai, .psd, .fig) before final payout.
  - _How:_ Final milestone requires file upload. System validates: file exists, file type matches expected format (check extension + MIME), file size is non-trivial (not an empty file). Client gets preview access to verify. Only after client confirms → payment releases.

### 3.3 Trust & Quality

- [ ] **Curated freelancer tier** — Manual vetting for top-tier freelancers.
  - _How:_ Admin review queue. Freelancers apply for "Curated" status with portfolio review. Admin scores on: portfolio quality, case study depth, response rate, client ratings. Approved freelancers get a "Curated" badge, priority in search results, and access to premium project postings.

- [ ] **Skill assessments** — Platform-administered tests for specific tools.
  - _How:_ Build assessment system: multiple choice + practical (upload a design that meets criteria). For tools like Meta Ads or Google Analytics, integrate with official certification APIs where available. Display score/badge on profile.

- [ ] **Project-tied testimonials** — Reviews linked to specific projects with deliverable previews.
  - _How:_ After project completion, prompt client for review. Review is linked to the specific project and displays alongside the portfolio item(s) from that project. Show: star rating, text review, project title, deliverables delivered, budget range.

---

## Phase 4 — Infrastructure & DevOps

- [ ] **Docker setup** — Containerize all services.
  - _How:_ Dockerfiles for: Go API, Meilisearch, Redis, PostgreSQL (dev only). `docker-compose.yml` for local development with all services. Multi-stage builds for Go (builder → alpine runtime).

- [ ] **CI/CD pipeline (GitHub Actions)** — Automated test, lint, deploy.
  - _How:_ Workflows: (1) On PR: lint (eslint + golangci-lint), type-check, unit tests, build check. (2) On merge to main: deploy to staging. (3) On release tag: deploy to production. Separate workflows for frontend (Vercel) and backend (AWS ECS / Railway).

- [ ] **Vercel deployment (frontend)** — Production frontend hosting.
  - _How:_ Connect GitHub repo to Vercel. Configure environment variables (API URL, Clerk keys, Stripe public key). Enable preview deployments for PRs. Set up custom domain.

- [ ] **AWS ECS / Railway (backend)** — Production backend hosting.
  - _How:_ If AWS: ECS Fargate with ALB, auto-scaling based on CPU/memory. If Railway: simpler setup, deploy from Dockerfile, built-in PostgreSQL and Redis addons. Start with Railway for speed, migrate to AWS when scaling requires it.

- [ ] **Monitoring & observability** — Error tracking, analytics, infra monitoring.
  - _How:_ Sentry for frontend (Next.js SDK) + backend (Go SDK) error tracking. PostHog or Mixpanel for product analytics (filter usage, brief completion rates, funnel drop-offs). Datadog or Better Stack for infrastructure: API latency, error rates, DB query performance, Redis hit rates.

- [ ] **Staging environment** — Full staging replica for testing.
  - _How:_ Separate staging deployment with its own database, Redis, Meilisearch, and Stripe test mode. Seed with realistic test data. All PRs auto-deploy a preview.

---

## Architecture Notes

```
Frontend (Next.js)  →  GraphQL API (Go + gqlgen)  →  PostgreSQL
     ↕                        ↕                          ↕
  Clerk (Auth)          Redis (cache/sessions)      Meilisearch
     ↕                        ↕
  Vercel               WebSockets (real-time)
                              ↕
                     S3 + CloudFront (files)
                              ↕
                     Stripe Connect (payments)
                              ↕
                     Anthropic API (AI brief assist)
```

**State management (frontend):** Zustand for client state, TanStack Query for server state.
**ORM equivalent (Go):** sqlc (type-safe SQL) or GORM.
**Search:** Meilisearch with faceted filtering for all 12 filter dimensions.
**Auth:** Clerk (or Auth0) — never build auth from scratch.
**Payments:** Stripe Connect Custom — the only serious marketplace option.
**AI:** Anthropic Claude API, server-side only, rate-limited per user.
