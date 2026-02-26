# Web Cheddar - Next.js Professional Web Design & Development Agency Website

Official company site and portfolio scaffold for Web Cheddar. This repository powers the marketing website for Web Cheddar and serves as a portfolio example of production-ready Next.js patterns, component-driven design, and accessibility-first front-end work.

Live site: https://webcheddar.ca

Repository visibility: Public

---

## About this Project

This repository is a Next.js site intended for use in a portfolio to demonstrate clean component structure, accessibility, performance-focused builds, and practical production patterns for small marketing sites and blogs.

The site is organized with React components, CSS Modules, and a few tiny API routes for sending contact form submissions. It is lightweight, SEO-friendly, and easy to adapt for new clients or portfolio case studies.

---

## Key Sections

- Navigation: sticky header with responsive mobile navigation and accessible focus states
- Hero: full-bleed hero with CTAs and optimized images
- Services: service index and detail pages using dynamic routes
- Blog: article list and dynamic post pages at `/blog/[slug]`
- Contact: contact page with a 4-field form and serverless API route
- Clients & Testimonials: client grid and testimonial carousel/slider
- Devtools: small developer utilities (color palette & gradient generator)
- Footer: semantic footer with dynamic year and link columns

This codebase is used for the production site at `webcheddar.ca` and also functions as a reusable portfolio template for case studies.

---

## Tech Stack

- Next.js (React) — server-side features and routing
- React components — modular, reusable UI
- CSS Modules — scoped component styling
- Modern CSS — CSS Grid, Flexbox, custom properties, clamp()
- Optimized images — responsive `picture`/`img` usage and lazy-loading
- Minimal vanilla JS for interactions (no UI framework dependencies)

The project is intentionally dependency-light and designed for easy reuse across client projects and portfolio case studies.

---

## Notable Implementation Details

- Component-first structure under `components/` for easy reuse and maintenance.
- CSS Modules for predictable scoping and small bundle sizes.
- Dynamic routing for blog and services pages: `pages/blog/[slug].jsx` and `pages/services/[slug].jsx`.
- Lightweight API routes for contact handling in `api/contact.js` and `api/form.js` (can be wired to serverless functions or third-party form providers).
- Accessibility: semantic HTML, ARIA attributes where appropriate, and keyboard-navigable components.
- Performance: preloaded fonts (where configured), optimized images in `public/`, and minimal client-side JavaScript.

Notes: the API routes are small serverless-compatible endpoints; switch to your preferred form handling provider (SMTP, SendGrid, Netlify Forms, etc.) when deploying.

---

## Lighthouse & Performance

This project is built with performance in mind: responsive images, server-rendered pages, minimal JS, and CSS modules. With minor optimizations such as inlining critical CSS or self-hosting fonts, it is straightforward to reach high Lighthouse scores for Performance, Accessibility, Best Practices, and SEO.

---

## Project Structure

```
next-webcheddar/
├── api/
│   ├── contact.js
│   └── form.js
├── assets/
│   └── images/
├── components/
│   ├── devtools/
│   ├── home/
│   ├── ContactForm.component.jsx
│   └── Navigation.component.jsx
├── contexts/
│   └── ModalContext.js
├── data/
│   └── globalMeta.js
├── hooks/
│   └── useWindowSize.js
├── pages/
│   ├── _app.js
│   ├── index.js
│   ├── blog/
│   │   └── [slug].jsx
│   └── services/
│       └── [slug].jsx
├── public/
│   └── (images & static assets)
├── styles/
│   └── global.css
└── utils/
    └── utils.js
```

Refer to the `components/` directory for individual UI pieces and `pages/` for routing logic.

---

## About Me

I'm a front-end developer who builds pixel-accurate, accessible, and performant websites using modern front-end tooling. This repository is designed to be copyable and adaptable for portfolio case studies — swap the content, deploy, and showcase your work.

Web Cheddar is a small web studio focused on performant, accessible websites for small businesses. If you'd like help, I can:

- add a case-study section to this README with screenshots and metrics
- wire the contact API to an SMTP provider or serverless mail service
- create a short deploy guide for Vercel with automatic preview URLs

If you'd like, I can help:

- add a short case-study section to this README
- wire the contact API to an SMTP provider or serverless function
- prepare a single-page PDF summary of a project for your portfolio

---

_Built with care — minimal dependencies, clear structure, and production-ready patterns._
