# Web Cheddar - Professional Web Design & Development Agency Website

A comprehensive, production-ready Next.js website built for Web Cheddar Web Solutions, my full-service web development agency based in Toronto. This modern, responsive website showcases the company's services, portfolio, and expertise in web design, SEO, e-commerce, and digital marketing.

## 🎨 Key Features

### Modern UI/UX Design
- Fully responsive, mobile-first design
- Custom animations and transitions using CSS
- Smooth page transitions with NProgress integration
- Interactive components with hover effects and animations

### Technical Architecture
- Built with Next.js 13+ for optimal performance and SEO
- Server-side rendering (SSR) and static site generation (SSG)
- Dynamic routing for services and blog posts
- Modular component architecture for maintainability
- Custom hooks and context API for state management
- Headless CMS architecture using WordPress for blog content management

### Core Pages & Sections
- Dynamic homepage with hero section, services showcase, and testimonials
- Detailed service pages (Web Development, SEO, E-commerce, Social Media, Website Maintenance)
- Portfolio/projects showcase
- Blog powered by WordPress as a headless CMS - content managed in WordPress, consumed via REST API
- About page with company information
- Contact form with email integration (Nodemailer)
- Privacy policy and legal pages

### Advanced Functionality
- Custom modal system for "Get a Quote" forms
- Google Maps integration for location display
- Social media integration and sharing
- Newsletter subscription capability
- Breadcrumb navigation for improved UX
- Featured image components for headers
- Testimonial slider with client reviews
- Technology stack showcase

### Performance & SEO
- Optimized images with Next.js Image component
- Structured data (JSON-LD) for rich search results
- Open Graph and meta tags for social sharing
- Sitemap generation
- Google Analytics integration
- Vercel Speed Insights and Analytics
- Lazy loading and code splitting

### Content Management
- Centralized data management in `data` directory
- Services, testimonials, clients, and navigation data
- Easy content updates without code changes
- WordPress blog integration via REST API
- WordPress REST API integration for blog management - leveraging WordPress as a headless CMS for easy content creation and management while maintaining Next.js performance benefits


## 🛠️ Technologies Used

- **Framework:** Next.js (React)
- **Styling:** CSS Modules, Custom CSS
- **Icons:** React Icons
- **Analytics:** Google Analytics, Vercel Analytics
- **Deployment:** Vercel
- **Email:** Nodemailer
- **Carousel:** React Slick
- **Headless CMS:** WordPress (REST API integration)
- **Performance:** NProgress, Speed Insights

## 📁 Project Structure

```
next-webcheddar/
├── components/          # Reusable React components
├── pages/              # Next.js pages and API routes
├── public/             # Static assets (images, fonts)
├── styles/             # Global and component styles
├── data/               # Centralized data (services, testimonials, etc.)
├── utils/              # Utility functions and helpers
└── lib/                # Third-party integrations
```

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GA_ID=your_google_analytics_id
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🚢 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 📖 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js/)

## 🎯 Project Highlights

- Clean, maintainable codebase with consistent naming conventions
- Comprehensive error handling and loading states
- SEO-optimized with structured data
- Mobile-first responsive design
- Accessibility considerations (ARIA labels, semantic HTML)
- Production-ready with environment variable configuration
- Professional portfolio showcasing real client work

## 📝 License

This project is proprietary and confidential.

---

**Built with ❤️ by Web Cheddar Web Solutions**