# Semanoor website — code of the current preview

**Source preview:** https://3000-imqjo00eh9gcwsdugf2b0-f97afde4.sg2.manus.computer/#home

**Current local draft:** `local-alliance-partners-20261010-19`

**Export date:** 11 October 2026

This archive contains the actual current project source behind the preview, including its unsaved local updates—not only the older saved checkpoint `7ad61ef7`. All copied application, server, package, lock and original configuration files are byte-identical to the source workspace at export time.

## Included

- React/TypeScript frontend, bilingual content, CSS and CSS modules.
- Homepage, four solution-detail routes, media library, and existing local content studio.
- Original Vite configuration, `package.json`, lockfile, TypeScript configuration and minimal static-file server.
- The 41 storage media files referenced by current source, including both approved 30-second introduction videos, their posters, six displayed specialization icons, ten illustrations, eight documentary photographs, the current Jawani card image and the retained partner logos. Partners remain hidden, as in the preview.
- The current hero artwork as a local file.
- `export-manifest.json` listing source checksums and media checksums.
- Optional `vite.standalone.config.ts` for running this download outside Manus. It is **an export-only addition**, not a change to the real website.

## Run locally

Use Node.js 22 or later and pnpm 10.

```bash
npm install -g pnpm@10
pnpm install --frozen-lockfile
pnpm check
pnpm exec vite --config vite.standalone.config.ts
```

Open `http://localhost:5173/` in your browser. You can switch Arabic/English from the header. The optional configuration serves bundled media locally; no storage credentials are needed.

If your installed pnpm version rejects a legacy patch/lockfile setting, use the exact package-manager version declared in `package.json`. Do not discard the lockfile as a first step.

## Build the standalone copy

```bash
pnpm exec vite build --config vite.standalone.config.ts
pnpm exec vite preview --config vite.standalone.config.ts
```

Open `http://localhost:4173/`. The static build is written to `dist/public/`. A hosting server must support SPA fallback to `index.html` for `/media`, `/studio`, and `/solutions/...`, and must serve `/assets/`, `/site-assets/`, and `/manus-storage/` as ordinary files. Hosting and deployment are not performed by this export.

To use the unmodified original project configuration in its intended Manus environment, the existing commands remain in `package.json`: `pnpm dev`, `pnpm build`, and `pnpm start`.

## What the optional configuration does

1. Uses React and Tailwind without the platform-specific preview/runtime plugins.
2. Replaces the existing public hero CDN URL with its identical bundled image **during transform only**.
3. Removes the platform-specific analytics script **during HTML transform only**.
4. Uses local development and preview ports.

No existing source file is edited for these transformations. The bundled public media directories exist only in this downloaded copy; they were not added to the managed original project.

## Main code locations

| File | Purpose |
| --- | --- |
| `client/src/pages/Home.tsx` | Homepage sections and orchestration |
| `client/src/components/NeuralHero.tsx` | Introductory headline, video and specialization strip |
| `client/src/components/HeroVideo.tsx` | Language-specific approved video player |
| `client/src/components/PhotoStrip.tsx` | Documentary photo strip and navigation |
| `client/src/pages/MediaLibrary.tsx` | Images and video library |
| `client/src/pages/SolutionDetail.tsx` | Four solution-detail pages |
| `client/src/data/siteContent.ts` | Editable bilingual website content |
| `client/src/data/solutionCatalog.ts` | Solution capabilities and product descriptions |
| `client/src/data/librarySuppliedMedia.ts` | Supplied photographs and language-specific library video |
| `client/src/index.css` | Existing global design system |

## Existing limits preserved

- At a 360px viewport, switching language without reloading can leave the final photograph partly beyond the carousel viewport. A fresh load/reload of the selected language displays it completely. This known issue was not changed by the code export.
- The content studio stores drafts locally in the visitor's browser. It is not an authenticated server-backed administration system. The previously discussed single-admin backend remains deferred.
- The smart-book showcase is a static explanatory presentation, not a live generative AI demo.
- The current Jawani image is the already-approved draft17 image. A later request to remove card-network graphics and present a different card proportion has not been implemented in this source.
- Metadata and source comments are preserved exactly; this is a code export, not a new content or SEO revision.

## Security and preservation

No `.env`, project secrets, storage API keys, credentialed preview gateway, Git history, `node_modules`, or unrelated private attachments are included. The original website files, repository state, checkpoint and publishing settings were not changed. The archive is not a newly published website.
