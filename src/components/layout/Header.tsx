"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Button from "@/components/ui/button"

export default function Header(){
  const pathname = usePathname()
  const nav = [
    { href: "/services", label: "Services" },
    { href: "/knowledge", label: "Knowledge" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ]
  return (
    <header className="sticky top-0 z-40 border-b border-brand-border bg-white/80 dark:bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" aria-label="Maru home" className="flex items-center gap-2">
          <span className="block dark:hidden">
            <Image src="/brand/logo-light.png" alt="Maru" width={120} height={28} priority />
          </span>
          <span className="hidden dark:block">
            <Image src="/brand/logo-dark.png" alt="Maru" width={120} height={28} priority />
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-brand-muted">
          {nav.map(i => (
            <Link key={i.href} href={i.href}
              className={pathname===i.href ? "text-brand-text" : "hover:text-brand-text"}>
              {i.label}
            </Link>
          ))}
        </nav>
        <Button href="/contact" size="sm">Book a call</Button>
      </div>
    </header>
  )
}
