import Link from "next/link";
import { content } from "@/lib/content";
import { getAllBlogPosts } from "@/lib/blog-data";
import { BlogSectionLabel } from "./blog-section-label";

export async function BlogPreviewSection() {
  const posts = (await getAllBlogPosts()).slice(0, 3);

  return (
    <section id="blog" className="scroll-mt-24 py-16">
      <div className="mb-6 flex items-center justify-between gap-4">
        <BlogSectionLabel text={content.blogTitle} />
        <Link href="/blog" className="text-sm font-semibold text-primary underline">
          View all
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="rounded-2xl border border-border bg-card p-5 ai-hover glass-panel">
            <p className="text-xs text-muted-foreground">
              {new Date(post.created_at).toLocaleDateString()}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{post.content}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-semibold underline"
            >
              Read more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
