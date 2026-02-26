import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-3 text-muted-foreground">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 rounded-full bg-foreground px-5 py-2.5 text-background">
        Back Home
      </Link>
    </main>
  );
}
