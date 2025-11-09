# Crazypaws Global

Pet Supplies Contract Manufacturer - OEM/ODM Solutions

## About

Crazypaws Global is a leading pet supplies contract manufacturer specializing in OEM and ODM solutions for brands, retailers, and e-commerce platforms worldwide.

## Core Services

- **OEM Manufacturing**: Original Equipment Manufacturing for pet products
- **ODM Solutions**: Original Design Manufacturing with custom designs
- **Private Label**: Complete private label pet product solutions

## Product Categories

- Pet Furniture & Elevated Beds
- Dog Harnesses & Leashes
- Pet Toys
- Pet Bowls & Feeders
- Pet Grooming Products
- Pet Apparel
- Pet Care Accessories

## Technology Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## CMS Admin Panel

Access the content management system at `/admin/login`

**Default Credentials:**
- Username: `admin`
- Password: `crazypaws2025`

### TinyMCE Editor Configuration

The CMS uses TinyMCE for rich text editing. To configure:

**Option 1: Use TinyMCE Cloud (Recommended)**
1. Sign up for a FREE account at [https://www.tiny.cloud/auth/signup/](https://www.tiny.cloud/auth/signup/)
2. Get your API key from the dashboard
3. Create a `.env.local` file:
   ```bash
   cp .env.local.example .env.local
   ```
4. Add your API key to `.env.local`:
   ```
   NEXT_PUBLIC_TINYMCE_API_KEY=your-api-key-here
   ```
5. Restart the dev server

**Option 2: Self-Hosted Mode (Default)**
- No configuration needed
- Uses local TinyMCE files (auto-copied during npm install)
- You may see a console warning, but the editor works fine

For more details, see [CMS_README.md](./CMS_README.md)

## SEO Optimization

This website is optimized for B2B buyers searching for:
- Pet supplies contract manufacturers
- OEM/ODM pet product services
- Private label pet products
- Custom pet product manufacturing

## Certifications

- CA65 Compliant
- RoHS Certified
- REACH Certified

## Contact

Visit [https://crazypaws-global.com](https://crazypaws-global.com) for more information.
