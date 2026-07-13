# Annadaatatraders - Agriculture Products Distribution Website

A Next.js-based website for authentic agricultural products distribution with problem-first guidance and inquiry-based ordering.

## Features

✅ **Browse by Crop** - Find products suitable for specific crops  
✅ **Browse by Problem** - Start with field issues, get product recommendations  
✅ **Browse by Category** - Filter by product type (Insecticides, Fungicides, etc.)  
✅ **Product Details** - Comprehensive information including dosage, timing, and features  
✅ **Inquiry System** - WhatsApp and callback request forms  
✅ **Trust Information** - Authenticity checks and product verification  
✅ **Responsive Design** - Mobile-friendly interface with TailwindCSS

## Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **Styling**: TailwindCSS
- **Data**: Static product database (easily customizable)
- **Deployment**: Vercel-ready

## Project Structure

```
annadathatraders-jul2026/
├── app/
│   ├── data/
│   │   └── products.ts          # Product database and enums
│   ├── components/
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Footer.tsx           # Footer with contact info
│   │   └── InquiryForm.tsx      # WhatsApp inquiry form
│   ├── browse/
│   │   ├── crop/
│   │   ├── problem/
│   │   └── category/           # Browse pages
│   ├── product/
│   │   └── [id]/               # Dynamic product detail page
│   ├── about/                  # Company information
|   ├── contact/                # Contact information
│   ├── page.tsx                # Homepage
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── public/                     # Static assets
├── package.json
└── tsconfig.json
```

## Local Development

### Prerequisites
- Node.js 18+ and npm

### Setup

```bash
cd annadaatatraders
npm install
npm run dev
```

Visit `http://localhost:3000` (or the port shown in terminal)

## Customization

### Update Products

Edit `app/data/products.ts` to add/modify products:

```typescript
export const products: Product[] = [
  {
    id: "product-slug",
    name: "Product Name",
    description: "Description",
    category: "Insecticides",
    crops: ["Paddy", "Chilli"],
    targetProblems: ["Rice Blast"],
    dosage: "2-3 mL per liter",
    timing: "Apply at early panicle stage",
    supplier: "Supplier Name",
    features: ["Feature 1", "Feature 2"],
  },
];
```

### Update Contact Information

- **Header/Footer**: Edit contact details in `app/components/Footer.tsx`
- **Inquiry Form**: Update WhatsApp number in `app/components/InquiryForm.tsx`

### Update Content

- **Homepage**: `app/page.tsx`
- **About Page**: `app/about/page.tsx`

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Click "Deploy"
4. Your site will be live at `yourdomain.vercel.app`

### Deploy to Other Platforms

The project is a standard Next.js app and can be deployed to:
- AWS (Amplify, EC2)
- Google Cloud (App Engine, Cloud Run)
- Azure (App Service)
- DigitalOcean
- Any Node.js hosting

## SEO & Analytics

Update metadata in `app/layout.tsx` for better SEO:

```typescript
export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your site description",
};
```

## Color Scheme

- **Primary**: Green (#059669) - Trust, agriculture
- **Secondary**: Blue - Information
- **Accent**: Gray - Professional look

## Performance

- Static site generation for fast loading
- Optimized images and lazy loading
- TailwindCSS for minimal CSS bundle
- TypeScript for type safety

## Support & Customization

To customize further:
1. Update company name/branding globally
2. Add your WhatsApp/phone numbers
3. Modify colors in TailwindCSS classes
4. Add new product categories
5. Integrate with actual backend APIs

## License

This template is open for use and modification. Customize it for your agricultural supply business!

---

**Built with Next.js & TailwindCSS** ✨
