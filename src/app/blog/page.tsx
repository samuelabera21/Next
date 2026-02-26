import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getAllBlogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Recent posts on software engineering, AI, and student projects.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="mt-3 text-muted-foreground">
            Insights from my learning journey in AI, backend systems, and product-focused software engineering.
          </p>
        </ScrollReveal>
        <div className="mt-8 space-y-4">
          {posts.map((post) => (
            <ScrollReveal key={post.id} delay={80}>
              <article className="rounded-2xl border border-border bg-card p-5 ai-hover glass-panel">
                <p className="text-xs text-muted-foreground">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
                <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{post.content.slice(0, 160)}...</p>
                <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-semibold underline">
                  Read more
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
