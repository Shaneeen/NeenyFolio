# Neenyfolio

Next.js App Router portfolio with Tailwind styling and a Notion-backed content layer.

## Setup

1. Install dependencies with `npm install`
2. Copy `.env.example` to `.env.local`
3. Add your Notion integration token and database IDs
4. Run `npm run dev`

## Notion shape

The site falls back to local sample content when Notion env vars are missing. Suggested properties:

- Projects DB: `Name`, `Slug`, `Category`, `Description`, `Year`, `Stack`, `Overview`, `Challenge`, `Impact`
- Experience DB: `Name`, `Type`, `Period`, `Organization`, `Description`, `Role`, `Category`, `Year`, `Tags`, `Icon`
- About DB: `Name`, `Type`, `Eyebrow`, `Body`, `Description`, `Icon`
- Playground DB: `Name`, `Type`, `Description`, `Category`, `Tag`, `Icon`, `ID`
