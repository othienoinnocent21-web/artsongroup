# ArtSonGroup — Frontend

The public-facing website and admin dashboard for **ArtSonGroup**, a digital innovation company building health information systems, data platforms, and enterprise software across East Africa.

## Tech Stack

| Technology | Version |
|---|---|
| Next.js (App Router) | 16.4.2 |
| React | 19.3.0 |
| Tailwind CSS | v4 |
| Bootstrap Icons | 1.13.2 |
| ESLint | 9.x + `eslint-config-next` |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- The Go backend running on `http://localhost:8080` (optional — the site works without it; the API status indicator will show "Backend unavailable")

### Install dependencies

```powershell
cd frontend-next
npm install
```

### Run the development server

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```powershell
npm run build
npm run start
```

## Project Structure

```
frontend-next/
├── public/                  # Static assets served at /
│   ├── inn.jpeg
│   ├── inno.jpeg
│   ├── othieno.jpeg
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── app/                 # Next.js App Router
    │   ├── page.jsx                  # Home             →  /
    │   ├── about/page.jsx            # About            →  /about
    │   ├── services/page.jsx         # Services         →  /services
    │   ├── projects/page.jsx         # Projects         →  /projects
    │   ├── blog/page.jsx             # Blog listing     →  /blog
    │   ├── blog/[id]/page.jsx        # Blog article     →  /blog/:id
    │   ├── contact/page.jsx          # Contact          →  /contact
    │   ├── opportunities/page.jsx    # Opportunities    →  /opportunities
    │   ├── admin/                    # Admin dashboard  →  /admin/*
    │   ├── globals.css               # Global styles + Tailwind @theme
    │   └── layout.js                 # Root layout (Navbar + Footer)
    ├── components/          # Shared React components
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── AdminSidebar.jsx
    │   ├── AdminPanel.jsx
    │   ├── ApiStatus.jsx
    │   ├── BlogClient.jsx
    │   ├── ContactClient.jsx
    │   ├── ServicesClient.jsx
    │   ├── ProjectCard.jsx
    │   ├── ServiceCard.jsx
    │   ├── SectionHeader.jsx
    │   └── StatCard.jsx
    └── lib/
        └── articles.js      # Blog article data (single source of truth)
```

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Home — hero, services overview, recent engagements |
| `/about` | About ArtSonGroup — mission, team stats, story |
| `/services` | IT services with scroll animations |
| `/projects` | eAFYA EMR flagship + featured projects grid |
| `/blog` | Blog listing with search and category filter |
| `/blog/[id]` | Individual blog article (statically generated) |
| `/contact` | Partnership inquiry + support request forms |
| `/opportunities` | Career and tender openings |
| `/admin` | Admin dashboard overview |
| `/admin/company` | Company profile management |
| `/admin/company/advisors` | Board of Advisors |
| `/admin/company/partners` | Partner organizations |
| `/admin/products` | Software product listings |
| `/admin/services` | Service listing management |
| `/admin/opportunities` | Career and tender postings |
| `/admin/blog` | Blog article management |
| `/admin/inquiries` | Contact form submissions |
| `/admin/settings` | Administrator preferences |

## Backend API

The frontend expects the Go backend at `http://localhost:8080`. The health-check indicator in the bottom-right corner calls:

```
GET http://localhost:8080/api/health
```

To override the backend URL, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server at http://localhost:3000 |
| `npm run build` | Build optimised production bundle |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Related

- **Backend**: `../backend/` — Go API server (listens on `:8080`)
