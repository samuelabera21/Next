import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

type BlogPayload = {
  title?: string;
  slug?: string;
  content?: string;
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

export async function GET() {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json({ message: "Supabase is not configured.", data: [] });
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, title, slug, content, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const body = (await request.json()) as BlogPayload;

  if (!body.title || !body.content) {
    return NextResponse.json(
      { message: "title and content are required." },
      { status: 400 },
    );
  }

  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json({ message: "Supabase is not configured." }, { status: 500 });
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .insert({
      title: body.title,
      slug: body.slug ? slugify(body.slug) : slugify(body.title),
      content: body.content,
    })
    .select("id, title, slug, content, created_at")
    .single();

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
