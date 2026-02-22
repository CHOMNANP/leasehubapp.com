# RentHive Website

A modern, SEO-optimized marketing website for RentHive - property management software for small landlords.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **CMS:** Sanity (Headless)
- **Deployment:** Vercel (recommended)

## Features

✅ SEO-optimized with Next.js App Router  
✅ Responsive design (mobile-first)  
✅ Fast page loads with static generation  
✅ Headless CMS with Sanity  
✅ Blog with rich text content  
✅ Contact forms  
✅ Pricing tables  
✅ Feature showcases  

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Usually "production"
- `SANITY_API_TOKEN` - Your Sanity API token (for write operations)

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### 4. Set Up Sanity CMS

1. Create a Sanity account at [sanity.io](https://sanity.io)
2. Create a new project
3. Install Sanity CLI: `npm install -g @sanity/cli`
4. Run `sanity login` and authenticate
5. Copy your project ID to `.env.local`
6. Create an API token with write permissions

### 5. Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Project Structure

```
app/
├── (site)/                 # Site pages
│   ├── page.tsx           # Homepage
│   ├── features/
│   ├── pricing/
│   ├── about/
│   ├── contact/
│   └── blog/              # Blog (can be disabled initially)
├── layout.tsx             # Root layout
└── globals.css            # Global styles

components/
├── ui/                    # shadcn/ui components
└── sections/              # Page sections
    ├── navigation.tsx
    ├── footer.tsx
    ├── hero-section.tsx
    └── ...

sanity/
├── schemas/               # Sanity content schemas
│   ├── post.ts
│   ├── author.ts
│   ├── feature.ts
│   ├── testimonial.ts
│   └── pricingFaq.ts
└── config.ts

lib/
├── utils.ts               # Utility functions
└── sanity.ts              # Sanity client
```

## Customization

### Colors

Edit `tailwind.config.js` to change brand colors:

```javascript
colors: {
  renthive: {
    50: "#f0fdf4",
    100: "#dcfce7",
    // ... etc
  }
}
```

### Content

Update content in:
- `app/(site)/page.tsx` - Homepage content
- `app/(site)/features/page.tsx` - Features page
- `app/(site)/pricing/page.tsx` - Pricing page
- `app/(site)/about/page.tsx` - About page

### Images

Replace placeholder images:
1. Add images to `public/images/`
2. Update references in components
3. Or use Sanity CMS for dynamic images

## SEO

SEO is handled via Next.js Metadata API in `app/layout.tsx`:

- Title templates
- Meta descriptions
- Open Graph tags
- Twitter cards
- Robots.txt

## Performance

- Static generation for fast loads
- Image optimization with Next.js Image
- Code splitting by route
- CSS optimization with Tailwind

## License

Private - RentHive
