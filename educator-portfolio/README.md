# Educator Portfolio — Dr. Mohammed Sajjad Hussain

A professional educator portfolio built with React, Vite, TypeScript, React Router, and Tailwind CSS.

## Tech Stack
- React + Vite (TypeScript)
- Tailwind CSS
- React Router

## Local Development
```bash
npm install
npm run dev
```

Build production assets:
```bash
npm run build
npm run preview
```

## Editing Site Content
All content lives in `src/pages/Home.tsx` and `src/components/Layout.tsx`.

- Hero (title, subtitle, paragraph, buttons): `Home.tsx` (top hero section)
- About (image + 3 paragraphs): `Home.tsx` (`#about` section)
- Experience (timeline): `Home.tsx` (`#experience` section)
- Education (cards): `Home.tsx` (`#education` section)
- Skills (chips + achievements): `Home.tsx` (`#skills` section)
- Publications (cards + buttons): `Home.tsx` (`#publications` section)
- Contact (email, LinkedIn, Netlify form): `Home.tsx` (`#contact` section)
- Header navigation and layout shell: `src/components/Layout.tsx`

Global styles and smooth scrolling:
- `src/index.css` (Tailwind base/components/utilities, smooth scroll)

## Replacing the Resume PDF
Place your resume at:
```
public/resume.pdf
```
The Download CV button already points to `/resume.pdf` and will download this file.

## Images & Assets
- Put images in `public/assets/` and reference them by `/assets/<name>`.
- Current profile image: `public/assets/profile.png` (used in About section).

## Deployment
This app builds to a static site in `dist/`.

### Deploy to Netlify
1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Netlify, create a new site from your repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. (Optional) `netlify.toml` is included for defaults and long-term caching of assets.

Forms with Netlify:
- The contact form is Netlify-ready (`data-netlify="true"`).
- Ensure the site is deployed on Netlify for submissions to work (no extra setup).

### Deploy to Vercel
1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel.
3. Build command: `npm run build`
4. Output directory: `dist`
- A `vercel.json` is included to route to `index.html`.

### Manual Build + Upload
1. Run `npm run build`
2. Upload the contents of `dist/` to any static host (S3, Cloudflare Pages, etc.)

## Customization Tips
- Colors: Adjust Tailwind classes in `Layout.tsx` and `Home.tsx` (e.g., `text-slate-800`, `bg-gray-50`, `text-blue-700`).
- Sections: Reorder by moving the corresponding JSX blocks in `Home.tsx`.
- Smooth scroll offset: Sections use `scroll-mt-24` to account for the sticky header.

## License
Personal/portfolio use. Replace content and assets as needed.

