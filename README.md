# 🍛 New Mumbai Family Dhaba — Digital Menu

A modern, responsive digital menu web app built with **Next.js 14 + React + TypeScript + Tailwind CSS**.

## Features

- 🔴🟢 **Veg / Non-Veg filter** — toggle to show only veg, non-veg, or all items
- 📂 **Category tabs** — quick navigation between all menu sections
- 🔍 **Live search** — instantly find any dish across the entire menu
- 💰 **Price display** — clean price badges for every item
- ⭐ **SPL badge** — highlights special items
- 📦 **Info bar** — parcel charges, prep time, no discount policy
- 📱 **Fully responsive** — works on mobile, tablet, desktop
- 🎨 **Warm saffron theme** — inspired by Indian dhaba aesthetics

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 14.2.3 |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3.3 |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy instantly on **Vercel**:

1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import project
3. Select the repo → Deploy

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Hero header with restaurant branding
│   │   ├── CategoryTabs.tsx    # Sticky nav tabs + veg/non-veg filter
│   │   ├── CategoryPanel.tsx   # Renders a full menu category
│   │   ├── MenuSectionBlock.tsx # A section within a category
│   │   ├── MenuItemCard.tsx    # Individual menu item card
│   │   ├── SearchBar.tsx       # Live search input
│   │   ├── SearchResults.tsx   # Search results display
│   │   └── Footer.tsx          # Footer with restaurant info
│   ├── globals.css             # Tailwind + custom CSS
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main page (client component)
└── data/
    └── menu.ts                 # All menu data (typed)
```

## Customization

- **Add/edit menu items**: Edit `src/data/menu.ts`
- **Change colors**: Edit CSS variables in `globals.css` or `tailwind.config.js`
- **Add images**: Add a `imageUrl` field to `MenuItem` type and render in `MenuItemCard`

---

*New Mumbai Family Dhaba · TPT Road, Taduku R.S.*
