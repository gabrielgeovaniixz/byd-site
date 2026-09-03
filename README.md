# BYD — Built to Move You

A scroll-driven cinematic landing page. No animation library is required —
the video scrub and text crossfade both run on a single `requestAnimationFrame`
loop in `components/Hero.tsx`, which is the cheapest way to read scroll
position and touch `video.currentTime` on every frame without fighting
React's render cycle.

## Setup

1. Drop this into an existing Next.js 14+ App Router project (or `npx create-next-app@latest` and copy these files in).
2. Add your video at `public/video/byd-canyon.mp4`.
3. `npm install` (no extra dependencies beyond Next/React — see `package.json` below).
4. `npm run dev`.

## Video requirements

- **Format:** H.264 MP4, `faststart` flag enabled (`ffmpeg -movflags +faststart`) so metadata loads before the full file, which is what makes early scrubbing responsive.
- **Length:** ~10s as specified. Scroll distance is fixed at `500vh` in `Hero.module.css` (`.wrapper`) — lengthen it if you want a slower, more deliberate scrub.
- **Aspect ratio:** anything works since it's rendered with `object-fit: cover`, but 16:9 or wider reads best full-bleed. On very tall mobile viewports a strongly landscape video will crop the sides — consider a secondary portrait-cropped source if that matters for your brand.
- **Size:** keep it under ~8MB if possible. There's no artificial preloading beyond the browser default (`preload="auto"`); for a heavier file, add a poster frame (`<video poster="...">`) so the first screen never shows a blank frame while it buffers.

## How the scroll math works

`Hero.tsx` reads the hero wrapper's `getBoundingClientRect()` on scroll,
converts it into a single `progress` value from 0–1 across the whole
pinned section, and maps sub-ranges of that value to:

- H1 fade in/out (0–0.14)
- H1→H2 crossfade (0.14–0.28)
- video scrub, 0%→100% of the clip (0.26–1.0, with a small overlap so the video is already visible as the H2 fades)
- a black overlay that ramps up in the final 12% of scroll, so the hero dissolves into the CTA rather than cutting to it

All the breakpoints are named constants at the top of the file — change
the pacing there without touching the animation logic.

`video.currentTime` is only written when it's drifted more than one frame
(`~16ms`) from the target, which avoids redundant seeks — this is the
main lever for keeping scrubbing smooth on browsers (Safari especially)
that handle `currentTime` writes expensively.

## Accessibility

`prefers-reduced-motion: reduce` is respected: those users get the video
playing normally (autoplay, muted, looped) with a static, non-scroll-linked
headline instead of the pinned scrub. Focus states are visible
(`:focus-visible` in `globals.css`), and all interactive elements are
real `<a>`/`<button>` tags.

## package.json (dependencies only)

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  }
}
```

## File structure

```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Navigation.tsx
  Navigation.module.css
  Hero.tsx
  Hero.module.css
  ScrollVideo.tsx
  CTA.tsx
  CTA.module.css
public/
  video/
    byd-canyon.mp4   ← add your file here
```
