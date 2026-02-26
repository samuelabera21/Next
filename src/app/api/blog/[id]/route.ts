import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

type BlogUpdatePayload = {
  title?: string;
  slug?: string;
  content?: string;
};

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const body = (await request.json()) as BlogUpdatePayload;
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json({ message: "Supabase is not configured." }, { status: 500 });
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .update({
      title: body.title,
      slug: body.slug,
      content: body.content,
    })
    .eq("id", id)
    .select("id, title, slug, content, created_at")
    .single();

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json({ message: "Supabase is not configured." }, { status: 500 });
  }

  const { error } = await supabase.from("blog_posts").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Deleted successfully." });
}
