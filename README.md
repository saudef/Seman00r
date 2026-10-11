# Semanoor website

Bilingual (Arabic / English) corporate and innovation site for Semanoor, the brand of E-Learning & Training Company. React 18, Vite 7, Tailwind 4, wouter. Content is data; presentation is components.

## Run

```bash
npm install -g pnpm@10
pnpm install --frozen-lockfile
pnpm check                                          # TypeScript
pnpm exec vite --config vite.standalone.config.ts   # http://127.0.0.1:5173
pnpm exec vite build --config vite.standalone.config.ts && pnpm exec vite preview --config vite.standalone.config.ts
```

`vite.config.ts` is the original platform configuration (Manus runtime plugins, analytics tag). `vite.standalone.config.ts` runs the same app anywhere else. Hosting must serve `index.html` for `/media`, `/studio` and `/solutions/*` and serve `/assets`, `/site-assets`, `/fonts` and `/manus-storage` as files.

## Where things live

| Path | Purpose |
| --- | --- |
| `client/src/index.css` | Design system: tokens, typography, layout, every component style |
| `client/src/data/siteContent.ts` | Bilingual copy, visuals, media records, editorial status fields, validator |
| `client/src/data/solutionCatalog.ts` | The four focus-area pages |
| `client/src/data/productAchievements.ts` | Product highlights shown in Impact |
| `client/src/data/approvedMedia.ts` | Approved introduction videos; client logos (hidden) |
| `client/src/data/librarySuppliedMedia.ts` | Documentary photographs for the archive strip and library |
| `client/src/components/` | Page sections (`Hero`, `SignalStrip`, `FilmModule`, `Statement`, `FocusModules`, `SmartBookShowcase`, `Approach`, `Explorer`, `Journey`, `ImpactSection`, `Insights`, `ContactSection`), shell (`SiteHeader`, `SiteFooter`), primitives (`ui-kit`, `Reveal`), Content Studio |
| `client/src/pages/` | `Home`, `SolutionDetail`, `MediaLibrary` |
| `client/public/fonts/` | Self-hosted OFL fonts: Newsreader, Inter, JetBrains Mono, Amiri, IBM Plex Sans Arabic |
| `client/public/site-assets/atmosphere/` | Generated conceptual backdrops and hero loop frames |
| `client/public/manus-storage/` | Approved illustrations, photographs, videos and posters |
| `docs/` | Creative direction, media campaign, redesign notes and approvals |

## Content and status

Every record that is not established fact carries a status the presentation reads:

- `timeline.entries[].status` — `thematic` (undated, default) or `approved` with an ISO `date`.
- `insights.cards[].status` — `final` or `draft` (a Draft pill appears).
- `impact.projects[].kind` — `illustrative` or `case-study` (not rendered on the homepage today).
- `impact.metrics` are qualitative pillars by design; the note above them says so.

The Content Studio at `/studio` edits all of this in the browser, keeps drafts in `localStorage`, and imports or exports JSON packages. It is local only: it has no login and never publishes. Older packages without the new fields still import; defaults fill the gaps.

## Design system in one paragraph

Near-black canvas (`#0f1011`, deep bands `#090a0b`), graphite surfaces, hairline borders instead of shadows. Newsreader at weight 300 for English display with italic emphasis; Amiri for Arabic display without italics; Inter and IBM Plex Sans Arabic for body and controls; JetBrains Mono for short Latin labels. White pill buttons with a directional arrow that flips in RTL. Four thematic panels (violet, pale iris, soft blue, orchid) for the focus areas, one paper-light section for Impact. Tokens are CSS custom properties on `:root`; RTL swaps font families and the type scale.
