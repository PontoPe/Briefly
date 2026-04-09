# Design System Specification: Editorial Marketplace

## 1. Overview & Creative North Star
### The Creative North Star: "The Curated Canvas"
This design system rejects the "cookie-cutter" marketplace aesthetic in favor of a high-end editorial experience. We are not building a database; we are building a gallery. The system prioritizes breathing room, intentional asymmetry, and tonal depth to cater to a sophisticated audience of agencies and creative professionals.

By utilizing **The Curated Canvas** philosophy, we move away from rigid boxes and 1px borders. Instead, we use "Tonal Sculpting"—defining shapes and hierarchy through subtle shifts in surface color and light. This creates a digital environment that feels premium, fluid, and custom-tailored.

---

## 2. Colors: Tonal Depth & Vibrancy
Our palette balances the authority of deep purples with the creative energy of coral and teal.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined solely through background color shifts. For instance, a `surface-container-low` section sitting against a `surface` background creates a clean, sophisticated break without the "cheapness" of a stroke.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper.
*   **Base:** `surface` (#fdf7ff)
*   **Low Priority/Large Areas:** `surface-container-low` (#f8f2fa)
*   **Standard Cards/Containers:** `surface-container` (#f2ecf4)
*   **Floating/High Importance:** `surface-container-highest` (#e6e0e9)

### The "Glass & Gradient" Rule
To inject "soul" into the interface:
*   **Hero Sections:** Use a subtle linear gradient from `primary` (#381e73) to `primary-container` (#4f378b) at a 135-degree angle.
*   **Glassmorphism:** For floating navigation or modal overlays, use `surface` at 80% opacity with a `20px` backdrop-blur. This allows the vibrant accents of the underlying content to bleed through softly.

---

## 3. Typography: Editorial Authority
We use a dual-typeface system to balance technical precision with high-fashion flair.

*   **Display & Headlines (Manrope):** This is our "Editorial Voice." Large scales (`display-lg` at 3.5rem) should use tighter letter-spacing (-0.02em) to feel authoritative and modern.
*   **Body & Labels (Be Vietnam Pro):** This is our "Functional Voice." It provides exceptional legibility for project descriptions and freelancer bios. Use `body-md` (0.875rem) for most secondary information to keep the UI feeling "light."

**The Hierarchy Goal:** Use extreme scale contrast. A `display-md` headline paired with a `label-md` category creates a professional, high-end rhythmic tension that standard layouts lack.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often too heavy for a creative marketplace. We utilize **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. The natural contrast creates a "soft lift" that is felt rather than seen.
*   **Ambient Shadows:** If a card requires a floating state (e.g., hover), use a shadow tinted with `on-surface` (#1d1b20). 
    *   *Spec:* `0px 20px 40px rgba(29, 27, 32, 0.06)`. Large blur, ultra-low opacity.
*   **Ghost Border Fallback:** If a border is required for accessibility (e.g., inputs), use `outline-variant` (#cbc4d2) at **20% opacity**. Never use 100% opaque lines.

---

## 5. Components

### Project Cards
*   **Structure:** No borders. Use `surface-container-lowest` for the card body. 
*   **Visuals:** Media should have a `xl` (0.75rem) border radius.
*   **Spacing:** Use generous internal padding (24px) to emphasize the premium nature of the content.

### Freelancer Profiles
*   **Layout:** Use asymmetrical grids. Place the profile image overlapping the edge of a `surface-container` to break the "boxed-in" feel.
*   **Badges:** Use `secondary-container` (#68fadd) for "Top Rated" tags to provide a fresh teal pop against the deep purple typography.

### Category Filters
*   **Chips:** Use `full` roundedness (9999px). 
    *   *Unselected:* `surface-container-high` background.
    *   *Selected:* `tertiary` (#5e1600) background with `on-tertiary` text for a vibrant coral punch.
*   **Checkboxes:** Following the visual reference, use `primary` (#381e73) for checked states with a `md` (0.375rem) corner radius. The unchecked state should be a subtle `outline-variant` Ghost Border.

### Buttons
*   **Primary:** Gradient of `primary` to `primary-container`. `full` roundedness. High-contrast `on-primary` text.
*   **Secondary:** No fill. `outline-variant` (20% opacity) with `primary` text.
*   **Tertiary (The "Coral" Action):** Use `tertiary-container` (#852300) for high-energy creative calls-to-action like "Start Project."

---

## 6. Do's and Don'ts

### Do
*   **Do** use white space as a structural element. If you feel like you need a line, try adding 16px of space instead.
*   **Do** use the "Teal" (`secondary`) for success states or "Available" indicators to keep the vibe energetic.
*   **Do** nest containers (`surface-container-low` inside `surface`) to create natural hierarchy.

### Don't
*   **Don't** use pure black (#000) for text. Always use `on-surface` (#1d1b20) to maintain tonal softness.
*   **Don't** use hard, dark shadows. They look "dated" and "heavy," which clashes with the high-end editorial goal.
*   **Don't** use standard 1px borders. If a boundary is invisible, use a subtle color shift or a Ghost Border (20% opacity) instead.