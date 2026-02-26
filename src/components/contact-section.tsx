"use client";

import { FormEvent, useState } from "react";
import { content } from "@/lib/content";
import { useLanguage } from "./providers";

export function ContactSection({ compact = false }: { compact?: boolean }) {
  const { locale } = useLanguage();
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus(result.message ?? "Something went wrong.");
      setIsSubmitting(false);
      return;
    }

    (event.target as HTMLFormElement).reset();
    setStatus(
      locale === "en"
        ? "Message sent successfully. Thank you for reaching out."
        : "መልዕክትዎ በተሳካ ሁኔታ ተልኳል። ስለ እርስዎ መገናኘት እናመሰግናለን።",
    );
    setIsSubmitting(false);
  }

  return (
    <section id="contact" className={`scroll-mt-24 ${compact ? "py-16" : "py-8"}`}>
      <h2 className="text-2xl font-bold sm:text-3xl">{content.contactTitle[locale]}</h2>
      <p className="mt-3 max-w-xl text-muted-foreground">
        {locale === "en"
          ? "I’m open to internships, remote work, and collaborations in AI and software engineering. Send me a message."
          : "በAI እና በሶፍትዌር ምህንድስና የኢንተርንሺፕ፣ የርቀት ስራ እና የትብብር ዕድሎች ክፍት ነኝ። መልዕክት ይላኩልኝ።"}
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-4 rounded-2xl border border-border bg-card p-5 glass-panel ai-hover"
      >
        <input
          name="name"
          required
          placeholder={locale === "en" ? "Your name" : "ስምዎ"}
          className="rounded-xl border border-border bg-background px-4 py-3 outline-none ring-primary transition focus:ring-2 focus:-translate-y-0.5"
        />
        <input
          type="email"
          name="email"
          required
          placeholder={locale === "en" ? "Your email" : "ኢሜይልዎ"}
          className="rounded-xl border border-border bg-background px-4 py-3 outline-none ring-primary transition focus:ring-2 focus:-translate-y-0.5"
        />
        <textarea
          name="message"
          rows={6}
          required
          placeholder={locale === "en" ? "Your message" : "መልዕክትዎ"}
          className="rounded-xl border border-border bg-background px-4 py-3 outline-none ring-primary transition focus:ring-2 focus:-translate-y-0.5"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-fit rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90 disabled:opacity-70 ai-hover"
        >
          {isSubmitting
            ? locale === "en"
              ? "Sending..."
              : "በመላክ ላይ..."
            : locale === "en"
              ? "Submit"
              : "አስገባ"}
        </button>
        {status ? <p className="text-sm text-muted-foreground">{status}</p> : null}
      </form>
    </section>
  );
}
