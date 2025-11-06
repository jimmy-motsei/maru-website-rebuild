import Link from "next/link";
import { listPageSlugs } from "@/lib/mdx";

// Title-case helper (services -> Services, ai-tools -> Ai Tools)
function prettify(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Only show “core” pages if they exist, in this order.
// Add/remove keys as your repo requires.
const PREFERRED = ["services", "work", "about", "studio", "contact", "knowledge", "privacy-policy", "terms-conditions"];

export async function Header() {
  // Collect available top-level slugs from /content/pages
  const slugs = await listPageSlugs();              // e.g., [["services"], ["contact"], ["blog","post-1"]]
  const top = new Set<string>();
  for (const s of slugs) if (s.length >= 1) top.add(s[0]);

  // Pick preferred ones that actually exist, fall back to whatever exists
  const primary = PREFERRED.filter((k) => top.has(k));
  const fallback = Array.from(top).filter((k) => !primary.includes(k) && k !== "index");

  const nav = primary.length ? primary : fallback.slice(0, 5); // keep it tidy

  return (
    <header className="py-4 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex gap-6 items-center">
        <Link href="/" className="font-semibold">Maru</Link>
        <nav className="text-sm opacity-80 flex gap-4">
          {nav.map((slug) => (
            <Link key={slug} href={`/${slug}`}>{prettify(slug)}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}