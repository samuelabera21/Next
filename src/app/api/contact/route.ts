import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

// Saves contact messages to Supabase, with graceful demo-mode behavior when env vars are missing.
export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { message: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json(
      {
        message:
          "Contact received in demo mode. Configure Supabase env vars to persist messages.",
      },
      { status: 200 },
    );
  }

  const { error } = await supabase.from("contacts").insert({
    name: body.name,
    email: body.email,
    message: body.message,
  });

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Message sent successfully." }, { status: 201 });
}
