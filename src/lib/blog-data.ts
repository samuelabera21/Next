import { cache } from "react";
import { getSupabaseAdmin } from "@/lib/supabase";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  created_at: string;
};

// Local fallback posts keep UI functional even before Supabase is configured.
const fallbackPosts: BlogPost[] = [
  {
    id: "local-1",
    title: "Building Reliable Student Projects That Feel Professional",
    slug: "building-reliable-student-projects",
    content:
      "In this post I share how I structure student projects to look and feel production-ready: clear architecture, predictable APIs, and polished interfaces.",
    created_at: "2026-02-01T08:00:00.000Z",
  },
  {
    id: "local-2",
    title: "From yfinance Data to ML Predictions: Lessons from Stock Agent",
    slug: "yfinance-to-ml-predictions",
    content:
      "The Stock Agent project taught me practical feature engineering, model lifecycle management, and how to connect ML outputs to usable frontend interfaces.",
    created_at: "2026-01-22T10:00:00.000Z",
  },
  {
    id: "local-3",
    title: "Improving API Design in Next.js",
    slug: "improving-api-design-nextjs",
    content:
      "I focus on consistent response formats, clear validation, and practical error handling patterns when designing API routes for portfolio apps.",
    created_at: "2026-01-10T09:30:00.000Z",
  },
];

export const getAllBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return fallbackPosts;
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, title, slug, content, created_at")
    .order("created_at", { ascending: false });

  if (error || !data) {
    return fallbackPosts;
  }

  return data as BlogPost[];
});

export const getBlogPostBySlug = cache(
  async (slug: string): Promise<BlogPost | null> => {
    const supabase = getSupabaseAdmin();

    if (!supabase) {
      return fallbackPosts.find((post) => post.slug === slug) ?? null;
    }

    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, content, created_at")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      return fallbackPosts.find((post) => post.slug === slug) ?? null;
    }

    return data as BlogPost;
  },
);
