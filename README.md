# 🍳 Servd - Full Stack AI Recipe Platform & Smart Pantry Manager

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Strapi](https://img.shields.io/badge/Strapi-v5-4945FF?style=for-the-badge&logo=strapi)](https://strapi.io/)
[![Neon Database](https://img.shields.io/badge/Neon_DB-PostgreSQL-00E599?style=for-the-badge&logo=postgresql)](https://neon.tech/)
[![Google Gemini AI](https://img.shields.io/badge/Google_Gemini_AI-2.0-8E75B2?style=for-the-badge&logo=google)](https://ai.google.dev/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.com/)
[![Arcjet](https://img.shields.io/badge/Arcjet-Security-FF5722?style=for-the-badge)](https://arcjet.com/)

**Servd** is an AI-powered gourmet recipe generation platform and intelligent pantry manager. Designed to eliminate food waste and elevate home cooking, Servd uses computer vision and Google Gemini AI to scan your pantry from photos, suggest personalized recipes based on ingredients you already have, and generate step-by-step cooking guides for any dish in seconds.

---

## ✨ Features

- 📸 **AI Pantry Camera Scan**: Upload photos of your fridge or pantry. Google Gemini 2.0 vision identifies visible ingredients automatically and adds them to your digital pantry.
- 🥘 **"What Can I Cook Today?"**: Analyzes your current pantry items and generates instant recipe ideas tailored to available ingredients with zero food waste.
- 👨‍🍳 **"How to Cook?" AI Recipe Generator**: Type any dish name (e.g., *Butter Chicken*, *Beef Mandi*, *Chocolate Lava Cake*) to get step-by-step instructions, prep/cook times, calorie breakdown, categorized ingredient lists, and pro tips.
- 📸 **Unsplash Photography Integration**: Dynamically fetches high-resolution food photography for generated recipes.
- 🔐 **Clerk Authentication & Strapi Sync**: Secure user signup and signin via Clerk (Google, Email) auto-synchronized with a Strapi v5 headless CMS user database.
- 🛡️ **Arcjet Rate Limiting & Bot Protection**: Protects Gemini AI API quotas by enforcing tiered rate limits (`free` vs `pro`) and shield security rules against bot spam.
- ⭐ **Pro Tier Subscription**: Unlocks detailed nutrition breakdowns (Protein, Carbs, Fats, Fiber), unlimited AI pantry image scans, and priority recipe recommendations.
- 📄 **PDF Recipe Export**: Export any recipe into a clean, formatted printable PDF card using `@react-pdf/renderer`.
- ⚡ **Global Route & Navigation Loaders**: Instant loading progress bar and themed chef loaders during navigation and API operations.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | Next.js 15 (App Router), React 19, JavaScript |
| **Styling** | Tailwind CSS v4, Lucide React Icons, Shadcn UI / Radix UI |
| **Backend CMS** | Strapi v5 Headless CMS |
| **Database** | Neon Serverless PostgreSQL |
| **AI / ML** | Google Generative AI (`@google/generative-ai` - Gemini 2.0) |
| **Security & Limits** | Arcjet (`@arcjet/next`) Rate Limiting & Bot Detection |
| **Authentication** | Clerk (`@clerk/nextjs` with Neobrutalism theme) |
| **PDF Generation** | `@react-pdf/renderer` |
| **External APIs** | Unsplash API, TheMealDB API |

---

## 📁 Project Structure

```
AI Chief/
├── frontend/                     # Next.js 15 Frontend Application
│   ├── actions/                  # Server Actions (recipe, pantry, mealdb)
│   ├── app/                      # Next.js App Router pages & layouts
│   │   ├── (auth)/               # Auth routes (sign-in, sign-up)
│   │   ├── (main)/               # Main application pages
│   │   │   ├── dashboard/        # Recipe of the day & explore categories
│   │   │   ├── pantry/           # Digital pantry & pantry-based recipe AI
│   │   │   ├── recipe/           # Recipe generation & detail view
│   │   │   └── recipes/          # Saved recipe collections
│   │   ├── layout.js             # Root layout with Header, Toaster, TopProgressBar
│   │   └── loading.jsx           # Global suspense route loader
│   ├── components/               # UI components (RecipeCard, AddToPantryModal, etc.)
│   ├── hooks/                    # Custom hooks (useFetch)
│   └── lib/                      # Helper libraries (checkUser, arcjet, data)
│
└── backend/                      # Strapi v5 Headless CMS Backend
    ├── config/                   # Database, admin & middleware settings
    └── src/
        ├── api/                  # Strapi Content Types (recipes, saved-recipes, pantry-items)
        └── index.js              # Strapi bootstrap & customization scripts
```

---

## ⚙️ Environment Setup

### 1. Frontend Environment Variables (`frontend/.env.local`)

Create a `.env.local` file inside the `frontend/` directory:

```env
# Next.js Public Config
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Strapi Backend
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token

# AI & APIs
GEMINI_API_KEY=your_google_gemini_api_key
ARCJET_KEY=your_arcjet_key
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

### 2. Backend Environment Variables (`backend/.env`)

Create a `.env` file inside the `backend/` directory:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your_app_keys
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
TRANSFER_TOKEN_SALT=your_transfer_token_salt
DATABASE_CLIENT=postgres
DATABASE_URL=postgresql://user:password@neon_host/database_name?sslmode=require
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **npm** or **yarn** / **pnpm**
- **Strapi v5** backend running locally or hosted
- **Neon PostgreSQL** database instance

### 1. Install Dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd backend
npm install
```

### 2. Run Backend (Strapi CMS)

```bash
cd backend
npm run develop
```
The Strapi Admin panel will be accessible at `http://localhost:1337/admin`.

### 3. Run Frontend (Next.js)

In a new terminal window:
```bash
cd frontend
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛡️ Security & Rate Limiting with Arcjet

Servd enforces API protection via Arcjet:
- **Free Tier**: Limited meal recommendations per user/IP window to prevent quota exhaustion.
- **Pro Tier**: Elevated limit window for power users.
- **Bot Detection**: Blocks malicious automated requests attempting to abuse generative endpoints.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Acknowledgments

- [Next.js](https://nextjs.org/) for the App Router framework.
- [Google Gemini API](https://ai.google.dev/) for generative recipe and vision AI.
- [Strapi CMS](https://strapi.io/) & [Neon DB](https://neon.tech/) for flexible data management.
- [Clerk](https://clerk.com/) for authentication services.
- [Arcjet](https://arcjet.com/) for application security.