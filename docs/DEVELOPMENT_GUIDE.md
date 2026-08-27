# HosH Development Guide

This guide explains what currently exists, how to run the project in VS Code, and how to contribute safely.

## Current milestone

The repository currently contains the first visual and engineering foundation:

- Theme A: midnight black, deep navy, and cyan technical identity
- Responsive floating glass navigation and mobile menu
- Pointer-reactive cyan inspection beam
- Cinematic hero entrance animations
- Custom glowing cursor on desktop
- Continuous assurance marquee
- Animated reusable capability cards
- Central motion variants and easing
- Reduced-motion accessibility fallback
- Next.js metadata and initial security headers
- Strict TypeScript, ESLint, and production build validation

This is not the complete client website yet. Inner pages, final content, contact handling, complete page transitions, client assets, SEO expansion, and deployment verification remain upcoming milestones.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4
- Motion for React
- Lucide React icons
- Zod (reserved for validated forms)
- ESLint

## Requirements

Install:

1. Git
2. Node.js 20.9 or newer
3. Visual Studio Code

Recommended VS Code extensions:

- ESLint
- Tailwind CSS IntelliSense
- Prettier (optional; project formatting rules will be finalized later)

## Run in VS Code

### 1. Clone the repository

```bash
git clone https://github.com/Raazia-Imran/HosH-Corporate-Website.git
cd HosH-Corporate-Website
```

Alternatively, open the repository through VS Code's **Clone Git Repository** command.

### 2. Install dependencies

```bash
npm install
```

Do not commit the generated `node_modules` folder.

### 3. Start development

```bash
npm run dev
```

Open http://localhost:3000. Changes normally appear automatically after saving a source file.

Stop the server with `Ctrl+C`.

### 4. Validate before pushing

```bash
npm run lint
npm run build
```

Both commands should pass before a pull request is merged.

### 5. Test the production build locally

```bash
npm run build
npm run start
```

## Important folders

```text
src/
├── app/                 Routes, metadata, global styles and root layout
├── components/
│   ├── layout/          Navigation and future footer
│   ├── motion/          Global cursor and future transitions
│   └── sections/        Reusable homepage/page sections
├── config/              Navigation and structured site content
└── lib/                 Shared motion variants and utilities
```

Key files:

- `src/app/page.tsx`: homepage composition
- `src/app/layout.tsx`: global navigation, cursor, metadata and layout
- `src/app/globals.css`: palette, glass surfaces, grid, marquee and accessibility
- `src/components/sections/hero.tsx`: animated hero and assurance interface
- `src/components/sections/capabilities.tsx`: reusable service cards
- `src/config/site.ts`: navigation and provisional service content
- `src/lib/motion.ts`: shared animation values
- `next.config.ts`: security-related HTTP headers

## Content status

Current company statements, service descriptions, figures, and calls to action are provisional. Do not treat them as verified client claims.

Before publication, the client must confirm:

- Official company name and logo
- Tagline and company introduction
- Complete service and industry lists
- Certifications and accreditations
- Training courses
- Locations and geographic coverage
- Contact information
- Photographs, case studies, client logos, and permissions

## Collaboration workflow

Do not work directly on `main` for new features.

```bash
git checkout main
git pull origin main
git checkout -b feature/short-task-name
```

After making changes:

```bash
git add .
git commit -m "feat: describe the change"
git push -u origin feature/short-task-name
```

Open a pull request into `main`. Raazia reviews and merges it.

Suggested starter tasks for a junior contributor:

- Build one reusable footer component
- Improve one card's mobile layout
- Add accessible labels
- Write component documentation
- Add a small section using existing design tokens

## Engineering rules

- Keep TypeScript strict and avoid `any`
- Keep content/data outside complex UI where practical
- Prefer small reusable components
- Reuse centralized animation values
- Respect `prefers-reduced-motion`
- Do not expose secrets in client code
- Validate all future form input on both client and server
- Avoid unverified business claims
- Optimize images and load heavy animation libraries only where needed
- Check keyboard, touch, mobile, tablet, laptop, and wide-screen behaviour
- Run lint and build before merging

## Environment variables

No environment variables are required for the current milestone. A future contact form, CMS, analytics, or email service will require a documented `.env.example`; secrets must never be committed.
