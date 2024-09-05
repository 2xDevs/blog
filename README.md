# Blog Platform

A modern blog platform built with Next.js, TypeScript, Tailwind CSS, ShadCN UI and PostgreSQL (Prisma).

## Features

- Create, edit, and delete blog posts
- User authentication with NextAuth.js
- Server-side rendering (SSR) and static generation (SSG)
- Responsive design using Tailwind CSS
- ShadCN UI components for customization

## Tech Stack

- **Next.js** (React framework)
- **TypeScript** (type-safe JavaScript)
- **Tailwind CSS** (utility-first CSS)
- **ShadCN UI** (modern UI components)
- **Prisma** (ORM for database management)
- **PostgreSQL** (relational database)
- **pnpm** (package manager)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/2xDevs/blog.git
   cd blog
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables in `.env`. See `.env.example`:

   ```bash
    DATABASE_URL="postgresql://postgres:password@localhost:5432/blog"
    NEXT_API_URL="http://localhost:3000"
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="" # run `openssl rand -base64 64`
    GOOGLE_CLIENT_ID=""
    GOOGLE_CLIENT_SECRET=""
    CLOUDINARY_CLOUD_NAME=""
    CLOUDINARY_API_KEY=""
    CLOUDINARY_API_SECRET=""
   ```

4. Run the development server:

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `pnpm dev` – Start development server
- `pnpm build` – Build for production
- `pnpm start` – Start production server
- `pnpm lint` – Run linter
- `pnpm format` – Format code

---
