# Semanoor atmosphere campaign — generated assets and shot list

Generated with Higgsfield on 11 October 2026 from the prompts below. All frames are conceptual
(light, threads, horizons); none depicts people, offices, products or screens, and none is
presented as documentary evidence. Source JPEGs are kept in `docs/media/source`; the web
versions live in `client/public/site-assets/atmosphere`.

| ID | File | Model | Size | Use |
| --- | --- | --- | --- | --- |
| H1a | `hero-desktop.webp`, `hero-poster.jpg` | GPT Image 2, 2k, high | 1920×1085 | Hero backdrop (desktop), poster for the loop |
| H1b | `hero-dawn.webp` | GPT Image 2, 2k, high | 1920×1085 | Alternate hero / closing backdrop (not wired yet) |
| H1m | `hero-mobile.webp` | GPT Image 2, 2k, high | 1080×1909 | Hero backdrop at phone widths |
| E1 | `statement.webp` | Nano Banana 2, 2k | 1600×678 | Vision statement backdrop |
| E2 | `approach.webp` | Nano Banana 2, 2k | 1600×678 | Approach backdrop (mirrors by reading direction in CSS) |
| E3 | `journey.webp` | Nano Banana 2, 2k | 1600×678 | Journey backdrop |
| E4 | `contact.webp` | Nano Banana 2, 2k | 1600×893 | Contact backdrop |
| H1v | `hero-loop.mp4` (pending) | Kling 3.0 pro, 8 s, silent, image-to-video from H1a | 16:9 | Hero loop; the page uses a CSS drift over H1a until the file is present |

Job IDs (Higgsfield library): H1a `1bed02c5-6808-425e-b6b1-a1e3986e4f61`, H1b `1d51d4ac-ab85-4500-9ec0-5c410ccdf730`, H1m `5ddc8c0c-8de9-4dc5-af6e-3a33333be3a2`, E1 `3ca5f56b-63de-4056-b25d-994345573ff9`, E2 `b45fbe06-4cb5-4a64-8b00-bc34923062d7`, E3 `a44f8b90-7c1c-4c7c-8fb5-15724193da68`, E4 `a781d529-3ff7-480c-b1bc-cebce1925ccd`, H1v `8d29b1a1-fdc7-4a74-9fa1-5e8fe5c97b43`.

## Prompts

**H1a — hero, desktop.** Ultra-wide atmospheric background for a premium editorial website hero. Near-black void with a faint dark horizon line in the lower third. Slow aurora-like veils of deep violet and pale iris light drifting across the darkness, with a sparse constellation of tiny luminous points joined by hairline threads only at the far left and far right edges. The centre of the frame is empty, calm negative space reserved for a headline. Subtle film grain, soft focus, cinematic realism of light. No text, no letters, no logos, no people, no objects, no planets, no sun.

**H1b — hero, dawn variant.** Ultra-wide atmospheric background for a premium editorial website hero. Almost entirely near-black. A single soft band of pale iris and powder-blue light lies low along the bottom edge like a distant dawn seen through mist, with a few faint threads of light rising from it and fading. Huge empty dark negative space above for a headline. Subtle grain, cinematic, restrained. No text, no letters, no logos, no people, no objects, no sun disc.

**H1m — hero, mobile.** Vertical atmospheric background for a premium website hero on a phone. Near-black void. Slow veils of deep violet and pale iris light gathered in the lower third of the frame with a few tiny luminous points joined by hairline threads near the bottom corners. The upper two thirds are empty, calm dark negative space for a headline. Subtle film grain, soft focus, cinematic. No text, no letters, no logos, no people, no objects, no planets.

**E1 — statement.** Near-black abstract editorial still: dozens of hairline threads of warm white and pale iris light converge into one soft bright point right of centre, like knowledge gathering. Deep shadow, fine film grain, generous empty negative space on the left. No text, no letters, no people, no objects.

**E2 — approach.** Near-black abstract editorial still: a small seed of warm light at the far left dissolves into a loose, structured lattice of soft blue and violet hairlines toward the right, suggesting an idea becoming a structure. Minimal, calm, fine grain, mostly dark. No text, no letters, no people, no objects.

**E3 — journey.** Near-black horizon with a very soft dawn gradient of iris and powder blue rising from the bottom edge into darkness, faint mist, immense calm, photographic. No text, no letters, no people, no sun disc, no objects.

**E4 — contact.** Near-black field with a calm soft-blue haze glowing at the bottom centre, like light behind frosted glass, fading into darkness above, mostly dark negative space, fine grain. No text, no letters, no people, no objects.

**H1v — hero loop (image-to-video from H1a).** Locked-off static camera, no camera movement. The violet and iris veils of light drift extremely slowly like aurora, the tiny luminous points shimmer faintly, the dark centre of the frame stays empty and calm. Ambient, seamless, barely perceptible motion, no new objects, no text, no people, no flashes, ends in the same state it began.

## Delivery notes

- The hero loop renders in Higgsfield but its download host (`d8j0ntlcm91z4.cloudfront.net`) is denied by this environment's network policy. Download it from the Higgsfield library (job H1v), transcode to H.264 at 1280×720, ~1.5 Mbps, no audio, and save it as `client/public/site-assets/atmosphere/hero-loop.mp4`. The page probes for the file and uses it automatically; otherwise the CSS drift stays in place.
- Focus-area modules, solution pages and the explorer reuse the approved illustrations already in `client/public/manus-storage`.
- Diagrams (smart-book stages, approach path, journey rail) are native HTML/SVG.
