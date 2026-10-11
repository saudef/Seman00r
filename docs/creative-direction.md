# Semanoor × Origin — Creative direction

_Working document for the redesign on branch `claude/semanoor-website-redesign-khbt7r`. Private preview only; nothing is deployed._

## 1. Source reconciliation

**Primary source:** the uploaded code export `semanoor-website-code19` (draft `local-alliance-partners-20261010-19`, exported 11 Oct 2026). It is the byte-identical source of the latest development preview and supersedes the older accessible website.

**Blocked:** the two Semanoor URLs, `useorigin.com` and the attached style analysis are denied by this environment's network policy. Origin direction below is reconstructed from the brief's own token guidance plus public third-party descriptions of the Origin marketing site (near-black canvas, light classical serif display, neo-grotesque body, mono labels, white primary action).

**Differences between the accessible site (per brief) and the latest project, and how they were resolved:**

| Topic                   | Accessible site (brief)                                                      | Latest project (code19)                                                                                                                                                                                                                 | Decision                                                                                                                                           |
| ----------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero headline           | "From idea to solution. From solution to venture."                           | "Bringing intelligence to knowledge. Turning innovation into impact." (approved draft 16)                                                                                                                                               | Keep the newer approved headline in the hero. The older line survives as the Approach statement, where it describes the path from idea to venture. |
| Focus area 3 name       | Semaphore Startup Studio                                                     | Semanoor Startup Studio (approved draft 13)                                                                                                                                                                                             | "Semaphore" is treated as a transcription of سيمانور. Use **Semanoor Startup Studio**. Flagged for confirmation.                                   |
| Focus area 4 name       | Jawani portfolio                                                             | Jawani financial wallet & digital parenting                                                                                                                                                                                             | Use the project wording.                                                                                                                           |
| Exploration fields      | education, fintech, entrepreneurship, gaming, AI, superintelligence horizons | Intelligent learning, Fintech, Entrepreneurship & venture building, Artificial intelligence, E-publishing, Electronic games (six specialties); superintelligence appears as a foresight horizon inside the AI field and the vision copy | Keep the six specialties exactly as in the project. Superintelligence stays a horizon, not a seventh field.                                        |
| Partners / client logos | —                                                                            | Present in data, hidden by a rendering gate (draft 19)                                                                                                                                                                                  | Stay hidden. Data preserved.                                                                                                                       |
| Impact metrics          | —                                                                            | Four qualitative pillars, explicitly "instead of unapproved figures" (draft 09)                                                                                                                                                         | Presented as qualitative pillars with a visible note. No numbers.                                                                                  |
| Journey                 | —                                                                            | Four thematic, undated milestones (draft 09)                                                                                                                                                                                            | Presented as thematic milestones with a "dates pending approval" note.                                                                             |
| Articles                | —                                                                            | Three complete, final editorial articles (draft 09)                                                                                                                                                                                     | Shown as editorial; status field added and set to `final`.                                                                                         |
| Smart book              | —                                                                            | Static explanatory presentation, not a live demo                                                                                                                                                                                        | Labelled as a concept presentation.                                                                                                                |
| Contact                 | —                                                                            | Form opens a mailto draft                                                                                                                                                                                                               | Preserved and labelled "opens your email app".                                                                                                     |
| Content Studio          | —                                                                            | Local-only, localStorage, JSON import/export                                                                                                                                                                                            | Preserved, restyled, labelling kept.                                                                                                               |

## 2. Content hierarchy (extracted)

1. **Identity.** Semanoor, the brand of E-Learning & Training Company (Riyadh). An innovation and venture-building lab with intelligent e-learning at its core.
2. **Central narrative.** Bringing intelligence to knowledge; turning innovation into impact. Path: idea → solution → venture / impact.
3. **Four focus areas (organizational activities).** Intelligent e-learning · Education development projects · Semanoor Startup Studio · Jawani financial wallet & digital parenting.
4. **Six exploration fields (specialties that support the areas).** Intelligent learning · Fintech · Entrepreneurship & venture building · Artificial intelligence · E-publishing · Electronic games.
5. **Principles.** Human first · Intelligent learning with meaning · Responsible foresight.
6. **Products named in the source.** Semanoor learning platform (flagship), personalized smart book, content production engines, V Makkah, Jawani wallet.
7. **Evidence.** Eight approved documentary photographs; two approved 30-second introduction videos (AR/EN); the Semanoor–Elaph alliance photograph. Qualitative pillars only.
8. **Editorial.** Three final articles.
9. **Contact.** info@semanoor.com, X account, mailto form.

Distinction kept throughout: _focus areas are what Semanoor does; exploration fields are where it explores and proposes paths._

## 3. Translating Origin into Semanoor

| Origin principle                                                        | Semanoor expression                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Near-black canvas, absolute darkness                                    | Semanoor navy instead of black: `#0c1a38` canvas, `#08122a` deep bands, `#12234a` / `#182d5a` surfaces. The brand blue of the logo (`#1a6fba`) is kept as an accent token. Generated backdrops are screen-blended so their black bases sit on the navy. |
| Light classical serif display, italic emphasis                          | **Newsreader** (variable, optical sizes, weight 300) for English display; italics for the accent phrase. **Amiri** for Arabic display, no italics, emphasis via colour.                                                                                 |
| Neo-grotesque body                                                      | **Inter** for English body and controls; **IBM Plex Sans Arabic** for Arabic.                                                                                                                                                                           |
| Monospace micro-labels                                                  | **JetBrains Mono** for short Latin labels (`01`, `SEMANOOR`, `FOCUS AREA`). Arabic labels use Plex Sans Arabic 500, no uppercase.                                                                                                                       |
| White primary action with arrow                                         | White pill button, dark text, directional arrow that flips in RTL. Ghost secondary.                                                                                                                                                                     |
| Coloured thematic panels                                                | Four focus-area modules: violet `#4a3fd3`, pale iris `#d7d2ff`, soft blue `#bfd6f3` (tinted from the Semanoor logo blue), orchid `#e6bfe4`.                                                                                                             |
| Occasional light section                                                | Impact section inverted to paper `#f3f2ee`.                                                                                                                                                                                                             |
| Restrained depth                                                        | Borders at 8–14 % white, no drop shadows except on the Jawani card artwork.                                                                                                                                                                             |
| ~1200 px content width, rounded modules                                 | 1200 px container, 24 px module radius, 16 px cards, 999 px pills.                                                                                                                                                                                      |
| Section rhythm: hero → statement → modules → editorial → closing action | See page structure.                                                                                                                                                                                                                                     |

Semanoor cues retained: the logo artwork untouched on a white tile in the header and footer; the logo blue feeds the soft-blue panel; gold kept only for the hero signal pulse and one highlight.

All fonts are SIL Open Font License, self-hosted under `client/public/fonts`.

## 4. Page structure (home)

1. **Header** — logo tile, descriptor, six anchors, language switch, white "Contact" pill.
2. **Hero** — full-bleed atmospheric loop (poster + reduced-motion fallback), mono eyebrow, centred serif headline with italic accent, description, primary + secondary actions.
3. **Signal strip** — the four focus areas and six fields stated as two labelled rows so the distinction is visible in the first scroll.
4. **Film module** — the approved 30-second video framed with generous spacing; plays on request with controls, not autoplay.
5. **Identity statement** — centred serif statement and lead.
6. **Focus areas** — four coloured modules in an asymmetric 7/5 · 5/7 grid, each with number, label, name, description, outcomes and link to its page.
7. **Smart book editorial** — alternating text and visual, four static stages drawn as a native diagram.
8. **Approach** — "From idea to solution. From solution to venture." with an SVG four-stage path and the three principles.
9. **Exploration** — six field selectors revealing a proposed path; labelled as a curated, rule-based explorer.
10. **Journey** — four thematic milestones on a horizontal editorial rail, dated-status note.
11. **Impact (paper)** — four qualitative pillars, three product highlights, documentary photo strip.
12. **Insights** — three articles as an editorial index; reader dialog.
13. **Contact** — serif invitation, display email, mailto form with accurate label, social links.
14. **Footer.**

Supporting routes preserved: `/solutions/:slug` (four pages), `/media`, `/studio`, 404.

## 5. Media plan

Generated with Higgsfield (access verified; credits available). All imagery conceptual: light, threads, horizons, lattices. No people, offices, products or screens.

| ID  | Use                          | Format               | Prompt direction                                                                                                                                               |
| --- | ---------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| H1  | Hero still / poster, desktop | 16:9                 | Near-black field, slow violet and pale-iris light drifting over a dark horizon, sparse constellation of connected points, large empty centre for the headline. |
| H1m | Hero still, mobile           | 9:16                 | Same world, vertical, light pushed to the lower third.                                                                                                         |
| H1v | Hero loop 8 s                | 16:9, image-to-video | Barely perceptible drift, no camera move, loopable.                                                                                                            |
| E1  | Identity statement backdrop  | 21:9                 | Threads of light converging to one bright point.                                                                                                               |
| E2  | Approach backdrop            | 21:9                 | A seed of light becoming a structured lattice, left to right (mirrored by CSS in RTL).                                                                         |
| E3  | Journey backdrop             | 21:9                 | Dark horizon with a soft iris-to-blue dawn.                                                                                                                    |
| E4  | Contact closing              | 16:9                 | Calm soft-blue haze on near-black.                                                                                                                             |

Focus-area and solution illustrations reuse the approved illustrations already in the project. Diagrams are native SVG.
