# Development Guide

## Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Project Structure Explained

### App Router (Next.js 14)
- `app/(site)/` - Group route for main site pages
- `app/layout.tsx` - Root layout with metadata
- `page.tsx` files - Define pages at each route

### Components
- `components/ui/` - Reusable UI components (shadcn)
- `components/sections/` - Page-specific sections
- Each section is self-contained and reusable

### Styling
- Tailwind CSS for all styling
- Custom brand colors in `tailwind.config.js`
- `globals.css` for base styles and CSS variables

### Content Management
- Static content: Edit directly in page files
- Dynamic content: Manage via Sanity CMS
- Blog posts: Stored in Sanity (can start static)

## Making Changes

### Update Text Content
Edit the text directly in the page files:
- `app/(site)/page.tsx` - Homepage
- `app/(site)/features/page.tsx` - Features
- `app/(site)/pricing/page.tsx` - Pricing

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  renthive: {
    600: "#your-color-hex", // Primary brand color
  }
}
```

### Add New Page
1. Create folder: `app/(site)/new-page/`
2. Create `page.tsx` with your content
3. Add link to Navigation component

### Add Screenshots
1. Save images to `public/images/`
2. Import and use in components
3. See SCREENSHOTS.md for details

## SEO Checklist

Before launching, verify:

- [ ] Meta titles and descriptions in `layout.tsx`
- [ ] Open Graph image (create `public/og-image.jpg`)
- [ ] Favicon in `public/favicon.ico`
- [ ] robots.txt configured
- [ ] sitemap.xml generated (automatic with Next.js)
- [ ] Google Analytics or Plausible installed
- [ ] Domain configured in `layout.tsx` metadata

## Pre-Launch Checklist

- [ ] All placeholder text replaced
- [ ] Screenshots added
- [ ] Pricing information correct
- [ ] Contact form connected (Resend/Formspree/etc)
- [ ] App signup links working
- [ ] Mobile responsiveness tested
- [ ] Lighthouse score > 90
- [ ] Environment variables set
- [ ] Domain DNS configured
- [ ] SSL certificate active

## Performance Tips

1. Use Next.js Image component for all images
2. Keep bundle size small (dynamic imports for heavy components)
3. Use static generation where possible
4. Optimize images before adding to public/
5. Enable Vercel Analytics

## Getting Help

- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- shadcn/ui docs: https://ui.shadcn.com
- Sanity docs: https://www.sanity.io/docs
