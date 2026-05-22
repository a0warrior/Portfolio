# Aaryn Warrior — Portfolio

Personal resume website built with Next.js 15, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Adding your headshot

**Option A — Click to upload (dev only)**
Click the headshot placeholder in the hero to upload a photo in the browser. This is temporary and resets on refresh.

**Option B — Permanent (recommended)**
1. Add your photo as `public/headshot.jpg`
2. Open `src/components/sections/Hero.tsx`
3. Replace the `<Image src={photo}` block with:
```tsx
import Image from 'next/image'
// ...
<Image src="/headshot.jpg" alt="Aaryn Warrior" width={200} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```
And remove the file input and state entirely.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Add New Project
3. Import your GitHub repo
4. Click Deploy — done ✓

## Project structure

```
src/
  app/
    layout.tsx       # Root layout + metadata
    page.tsx         # Main page (assembles all sections)
    globals.css      # Global styles + CSS variables
  components/
    sections/
      Hero.tsx
      About.tsx
      Skills.tsx
      Projects.tsx
      Experience.tsx
      Education.tsx
      Contact.tsx
    ui/
      Navbar.tsx
      ScrollNav.tsx
      CursorGlow.tsx
      IowaGisLayers.tsx
```

## Customization

- **Colors** — edit CSS variables in `globals.css`
- **Content** — each section file contains its own data as a const array at the top, easy to edit
- **New projects** — add to the `projects` array in `Projects.tsx`
