# Screenshot Replacement Guide

## Current Placeholders

The website currently uses placeholder elements where your LeaseHub screenshots should go.

## Where to Add Screenshots

### 1. Homepage Hero Section
**File:** `components/sections/hero-section.tsx`
**Location:** Dashboard preview in the hero area
**Recommended:** Main dashboard showing rent collection overview
**Size:** 800x600px or similar aspect ratio

### 2. Features Page
**File:** `app/(site)/features/page.tsx`
**Locations:** 4 feature sections with placeholder divs
**Recommended:**
- Rent Collection: Payment flow screenshot
- Tenant Management: Tenant list/detail view
- Maintenance Tracking: Request list with status
- Financial Reports: Sample report/chart

### 3. How It Works Section
**File:** `components/sections/how-it-works-section.tsx`
**Optional:** Could add small screenshots showing the 3 steps

## How to Replace

### Option 1: Static Images (Simple)
1. Take screenshots of your LeaseHub app
2. Save them to `public/images/`:
   - `dashboard.jpg` - Main dashboard
   - `rent-collection.jpg` - Payment flow
   - `tenant-management.jpg` - Tenant view
   - `maintenance.jpg` - Maintenance tracking
   - `reports.jpg` - Financial reports

3. Update components to use Image component:
```tsx
import Image from "next/image"

<Image 
  src="/images/dashboard.jpg" 
  alt="LeaseHub Dashboard"
  width={800}
  height={600}
  className="rounded-xl shadow-lg"
/>
```

### Option 2: Sanity CMS (Advanced)
1. Upload screenshots to Sanity Studio
2. Query them in components
3. Allows easy updates without code changes

## Screenshot Best Practices

1. **Use real data** (sanitized): Shows actual functionality
2. **Highlight key features**: Add subtle annotations if needed
3. **Consistent sizing**: Same aspect ratio for all
4. **High quality**: At least 2x resolution for retina displays
5. **WebP format**: Better compression, use if possible

## Quick Start

For immediate launch, use Option 1 (static images). You can always migrate to Sanity CMS later for more flexibility.
