import Link from "next/link";
export function Header() {
  return (
    <header className="py-4 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex gap-6">
        <Link href="/" className="font-semibold">Maru</Link>
        <nav className="text-sm opacity-80 flex gap-4">
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
