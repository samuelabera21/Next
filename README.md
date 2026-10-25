# Samuel Abera Mekonn Portfolio

A modern, responsive, bilingual (English + Amharic) portfolio built with Next.js, Tailwind CSS, and Supabase.

## Stack

- Frontend: Next.js (App Router) + React + Tailwind CSS
- Backend: Next.js API Routes
- Database: PostgreSQL (Supabase)
- Deployment: Vercel
  
## Features

- Clean, modern, minimal UI
- Dark / Light mode toggle
- Language toggle (English / Amharic)
- Responsive design (mobile + desktop)
- Full portfolio sections (Hero, About, Skills, Projects, Blog, Contact, Footer)
- Blog routes with dynamic slug pages
- Contact form saving to Supabase
- Blog CRUD API for Supabase-backed posts
- SEO metadata, sitemap, robots

## Routes

- `/` Home
- `/projects` Projects
- `/blog` Blog list
- `/blog/[slug]` Blog post detail
- `/contact` Contact page

## API Endpoints

- `POST /api/contact` Save contact message
- `GET /api/contacts` List saved contact messages (admin use)
- `GET /api/blog` List blog posts
- `POST /api/blog` Create blog post
- `PUT /api/blog/:id` Update blog post
- `DELETE /api/blog/:id` Delete blog post
- `GET /api/blog/slug/:slug` Get blog post by slug

## Project Structure

```text
src/
	app/
		api/
		blog/
		contact/
		projects/
		layout.tsx
		page.tsx
		robots.ts
		sitemap.ts
	components/
	lib/
public/
supabase/
	schema.sql
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

```bash
cp .env.example .env.local
```

Fill these values in `.env.local`:

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

3. Create tables in Supabase SQL Editor by running:

```sql
-- File: supabase/schema.sql
```

4. Run dev server:

```bash
npm run dev
```

5. Open `http://localhost:3000`

## Supabase Schema

Use the SQL in `supabase/schema.sql`.

- `contacts`
	- `id` uuid
	- `name` text
	- `email` text
	- `message` text
	- `created_at` timestamp

- `blog_posts`
	- `id` uuid
	- `title` text
	- `slug` text (unique)
	- `content` text
	- `created_at` timestamp

## Deployment (Vercel + Supabase)

1. Push this project to GitHub.
2. Import repository into Vercel.
3. In Vercel Project Settings → Environment Variables, add:
	 - `SUPABASE_URL`
	 - `SUPABASE_SERVICE_ROLE_KEY`
4. Deploy.
5. Ensure tables are created in Supabase using `supabase/schema.sql`.

## Notes

- Replace `public/resume.pdf` with your final resume file.
- Update social/profile links in footer if needed.
- If Supabase variables are not configured, blog and contact APIs fall back to safe demo behavior.
