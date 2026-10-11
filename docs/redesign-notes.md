# Redesign notes, approvals and integrations

Branch `claude/semanoor-website-redesign-khbt7r`. Private preview only; the live deployment was not touched.

## What changed

- Whole visual system rebuilt on Origin's principles (see `creative-direction.md`); the Semanoor logo, names, copy facts and routes are preserved.
- Homepage re-sequenced: hero → focus/field signal strip → 30-second film → identity statement → four focus modules → smart book → approach → field explorer → journey → impact (paper) with archive → insights → contact.
- Supporting pages restyled: four solution pages (tinted with their focus-area colour), media library, Content Studio, 404.
- Copy refined in both languages where it faced visitors (hero description, CTAs, ecosystem intro, new approach/explorer/notes). Initiative names unchanged. Three inherited spacing typos fixed.
- Template leftovers removed: Zenith landing pages, placeholder logos, app-store buttons, fake statistics component.

## Decisions that need your confirmation

1. **"Semaphore Startup Studio"** (brief) vs **"Semanoor Startup Studio"** (project, approved draft 13). The site uses Semanoor Startup Studio.
2. **Hero headline.** Kept the approved "Bringing intelligence to knowledge. Turning innovation into impact." The older "From idea to solution. From solution to venture." now opens the Approach section.
3. **Hero description** was shortened to a two-sentence orientation line (what Semanoor is; four areas, six fields, one path). Previous wording is retained in the git history and can be restored in the Studio.
4. **Approach stage descriptions** (Explore, Prototype, Solution, Venture / impact) are paraphrased from the vision body and feature cards. Please approve or edit in Studio → Approach & stages.
5. **Explorer note** describes the tool as a curated, rule-based explorer, not an AI assistant and not active programmes.
6. **Journey dates.** All milestones stay `thematic`; set `status: "approved"` and a date in Studio → Journey once confirmed.
7. **Illustrative projects** (`impact.projects`) are still not rendered, as in the previous draft. Say if they should appear, labelled as illustrative.
8. **Partners** remain hidden. Four logos still lack names in `approvedMedia.ts`.
9. **Jawani card artwork.** The approved draft-17 card image is shown. The later request to remove card-network graphics and change proportions is still open.
10. **Social links.** Only X is filled. LinkedIn, Instagram, YouTube and the president's profiles stay empty until supplied.

## Integrations and setup

- **Hero loop video.** Rendered in Higgsfield (job `8d29b1a1-fdc7-4a74-9fa1-5e8fe5c97b43`) but the download host is denied by this environment's network policy. Either allow `d8j0ntlcm91z4.cloudfront.net` for the cloud environment, or download it from the Higgsfield library and save it as `client/public/site-assets/atmosphere/hero-loop.mp4` (H.264, 1280×720, no audio). Until then the hero crossfades five extracted frames, which already reproduces the drift.
- **Analytics.** `index.html` still references `%VITE_ANALYTICS_ENDPOINT%` / `%VITE_ANALYTICS_WEBSITE_ID%` for the platform's Umami tag; the standalone build strips it. Set the variables on the platform, or remove the tag.
- **Contact delivery.** The form opens the visitor's email app (mailto) and says so. A delivery service (form backend or email API) is required before any "sent" confirmation can be shown.
- **Content publishing.** The Studio is local only. Publishing requires an authenticated backend (previously discussed single-admin backend remains deferred).
- **Fonts.** Self-hosted under `/fonts` (SIL OFL). No external font requests.
- **Social preview image.** `og:image` points at the hero still; set an absolute URL once the domain is known.

## Verification performed

- TypeScript and production build pass.
- Playwright (Chromium) at 360, 390 and 1440 px in Arabic and English: navigation anchors, language switch (dir, title, meta, fonts), explorer tabs and signal-strip preselection, article dialog (open/close/Escape), film playback element, contact mailto path and toast, mobile menu, no horizontal overflow, reduced-motion behaviour, Content Studio save/apply/restore.
- Not tested: Safari/iOS devices, real screen readers, the Manus platform build with its runtime plugins.
