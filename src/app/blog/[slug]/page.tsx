import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getBlogPostBySlug } from "@/lib/blog-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-xs text-muted-foreground">
          {new Date(post.created_at).toLocaleDateString()}
        </p>
        <h1 className="mt-2 text-3xl font-bold">{post.title}</h1>
        <article className="prose prose-zinc mt-8 dark:prose-invert">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </>
  );
}
