# RocketRoll Academic Suite Website

A captivating, modern website for RocketRoll Academic Suite built with Astro and Tailwind CSS.

## 🚀 Features

- ⚡ **Astro** - Lightning-fast static site generation
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Fully Responsive** - Optimized for all devices
- 🎯 **Modern Design** - Beautiful gradient designs and animations
- ⚡ **Fast Performance** - Optimized for speed and SEO

## 📋 Prerequisites

- Node.js >= 18.20.8 (or >= 20.3.0 recommended)
- npm >= 9.6.5

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro      # Navigation header
│   │   ├── Hero.astro        # Hero section with CTA
│   │   ├── Features.astro    # Features grid
│   │   ├── Solutions.astro   # Solutions for different user types
│   │   ├── Contact.astro     # Contact form section
│   │   └── Footer.astro      # Footer with links
│   ├── layouts/
│   │   └── Layout.astro      # Main layout wrapper
│   └── pages/
│       └── index.astro       # Homepage
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind configuration
└── package.json
```

## 🎨 Customization

### Colors

Edit `tailwind.config.mjs` to customize the color scheme:

```javascript
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ },
}
```

### Content

- Update component content in `src/components/`
- Modify hero text in `Hero.astro`
- Add/remove features in `Features.astro`
- Customize contact form in `Contact.astro`

## 🚀 Deployment

The site can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Connect your repository for automatic deployments
- **GitHub Pages**: Use GitHub Actions for deployment
- **Astro Cloud**: Official Astro hosting platform

```bash
npm run build
```

The built site will be in the `dist/` directory.

## 📝 License

Copyright © 2024 RocketRoll. All rights reserved.
