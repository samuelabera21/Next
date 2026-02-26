import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samuel-portfolio.vercel.app"),
  title: {
    default: "Samuel Abera Mekonn | Portfolio",
    template: "%s | Samuel Abera Mekonn",
  },
  description:
    "Software Engineering student focused on AI and software engineering. Explore projects, blog posts, and contact details.",
  openGraph: {
    title: "Samuel Abera Mekonn | Software Engineering Portfolio",
    description:
      "I build meaningful systems, algorithm tools, and AI demos.",
    url: "https://samuel-portfolio.vercel.app",
    siteName: "Samuel Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Abera Mekonn | Portfolio",
    description:
      "Software Engineering Student | AI & Software Engineer in training",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div aria-hidden className="ambient-bg">
          <span className="ambient-orb ambient-orb-1" />
          <span className="ambient-orb ambient-orb-2" />
          <span className="ambient-orb ambient-orb-3" />
          <span className="ambient-grid" />
        </div>
        <Providers>
          <div className="relative z-10">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
