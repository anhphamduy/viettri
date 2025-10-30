# VietTri Bootcamp Website - Setup Guide

## ✅ Completed Features

- ✅ Bilingual website (English/Vietnamese) with language toggle
- ✅ Modern, clean design with brand colors and Inter/Sora fonts
- ✅ Dark mode support
- ✅ All pages: Home, Instructors, Apply, Syllabus, Thank You
- ✅ SEO metadata, OpenGraph tags, and Course schema
- ✅ Responsive design with mobile support
- ✅ Sticky footer CTA for mobile

## 🔧 Configuration Needed

### 1. Airtable/Google Sheets Integration

Edit `app/api/apply/route.ts` to integrate with your chosen service:

**For Airtable:**
```typescript
const response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    records: [{ fields: formData }]
  })
});
```

**For Google Sheets:**
Use Google Sheets API or a service like Zapier/Make.com to save form submissions.

### 2. Email Notifications

Add email sending to `app/api/apply/route.ts`:

**For Resend:**
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: 'hello@viettri.com',
  to: ['team@viettri.com'],
  subject: 'New Application Received',
  html: `<p>New application from ${formData.name}</p>...`
});
```

**For SendGrid:**
Similar pattern using SendGrid SDK.

### 3. Stripe Payments

Install Stripe:
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js stripe
```

Create checkout session API route and integrate into pricing section.

### 4. Calendly Integration

Update the Calendly link in:
- `components/thank-you-content.tsx` (line 55)
- Hero section info session button links

Replace `https://calendly.com/viettri/info-session` with your actual Calendly link.

### 5. Google Analytics (GA4)

Add to `app/layout.tsx` in the `<head>` or use `next/script`:

```typescript
import Script from 'next/script';

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### 6. Instructor Photos

Replace placeholder initials in `components/instructors-content.tsx` with actual images:
- Use Next.js `Image` component
- Place images in `public/instructors/` folder
- Update the `<div>` elements with `<Image>` components

### 7. Environment Variables

Create `.env.local`:
```
AIRTABLE_API_KEY=your_key
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_ID=your_table_id
RESEND_API_KEY=your_key
STRIPE_SECRET_KEY=your_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key
GA_MEASUREMENT_ID=your_id
```

## 📝 Content Updates Needed

1. **Pricing dates**: Update early-bird deadline in `messages/en.json` and `messages/vi.json`
2. **Info session anchor**: Add `id="info-session"` to a section or create modal for booking

## 🚀 Deployment

The site is ready to deploy to Vercel, Netlify, or any Next.js hosting service.

For Vercel:
```bash
vercel
```

## 🎨 Customization

- Colors are defined in `tailwind.config.ts` and `app/globals.css`
- Fonts: Inter for body, Sora for headings (defined in `app/layout.tsx`)
- All content is in `messages/en.json` and `messages/vi.json`

## 📊 Performance & Accessibility

- Lighthouse optimization ready
- WCAG AA accessible
- SEO optimized with structured data
- Mobile-first responsive design

