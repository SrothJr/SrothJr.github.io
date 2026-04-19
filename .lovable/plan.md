
## Portfolio for Md Nazim Hossain

A modern, fast, accessible multi-page portfolio with both light and dark modes and a clean "engineer" vibe — confident typography, monospace accents, subtle motion, no gimmicks.

### Visual direction
- **Theme**: Both light and dark mode with a system-detect default and a toggle in the header. Persisted in localStorage.
- **Type**: Inter (or similar geometric sans) for UI/body, JetBrains Mono for code-style accents (section labels like `// experience`, tech tags, terminal-style intro).
- **Color**: Neutral base (near-black / off-white) with a single electric accent (e.g. emerald or cyan) used sparingly for links, focus rings, and active states.
- **Motion**: Subtle fade/slide-in on scroll, smooth hover transitions. Respects `prefers-reduced-motion`.
- **Polish**: Custom focus rings, generous whitespace, tasteful grid lines, command-palette-style "engineer" details (e.g. small `⌘K` styling cues, mono labels).

### Site structure (multi-page)
1. **`/` — Home**
   - Hero: name, role ("Software Development Engineer · CSE @ Brac University"), short pitch from your "About Me".
   - Quick highlights: 3 featured projects, current role at uSavior, "Download CV" button.
   - Skills snapshot.
2. **`/about`** — Longer bio, education (Brac, CGPA 3.72, coursework), leadership story (Revolution, SLFC, Photography Club), interests.
3. **`/projects`** — All 6 projects (GardeniAR, Meal Sync, Student Help Desk, Drive Scraper, Another NoteApp, Pig Game, plus your old HTML site). Each card shows description, tech tags, and link placeholders.
4. **`/photography`** — Visual gallery showcasing your photography side. Responsive masonry/grid with lightbox view. Will use placeholder images you can swap later.
5. **`/contact`** — Contact info (email, phone, LinkedIn, GitHub, website) as placeholders, plus social links. No form.

### Shared layout
- Sticky header with logo/name, nav links (Home · About · Projects · Photography · Contact), theme toggle, and "Resume" download button.
- Footer with social icons, copyright, and a "Built with…" mono line.
- Mobile: hamburger menu, fully responsive down to ~320px.

### Resume download
- The uploaded CV PDF copied to `public/` and linked from the header button + a CTA on the home page.

### SEO & metadata
- Per-route `head()` with unique `title`, `description`, `og:title`, `og:description`.
- Your portrait used as `og:image` on the home/about pages.

### Accessibility & performance
- Semantic HTML, proper heading hierarchy, alt text on every image.
- Keyboard navigation, visible focus states, ARIA labels on icon buttons.
- WCAG AA contrast in both themes.
- Optimized images, route-level code-splitting (built-in via TanStack Router), preloading on hover.

### Content I'll use from your CV
All sections, projects, skills, education, and experience exactly as written. Contact details (email, phone, LinkedIn, GitHub URLs) will be visible placeholders you can replace in one file.

### What you'll want to swap later
- Real contact links (email, phone, LinkedIn, GitHub, personal site).
- Live URLs / GitHub repos for each project.
- Your own photos in the photography gallery (placeholders provided).
