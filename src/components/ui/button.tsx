import Link from "next/link"
import { cn } from "@/lib/utils/cn"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  href?: string
  variant?: "primary"|"secondary"|"ghost"
  size?: "sm"|"md"|"lg"
}

const base = "inline-flex items-center justify-center rounded-xl font-medium transition-colors"
const sizes = { sm:"h-9 px-3 text-sm", md:"h-11 px-5", lg:"h-12 px-6 text-lg" }
const variants = {
  primary: "bg-brand-accent text-brand-accent-fore shadow-soft hover:opacity-90",
  secondary: "border border-brand-border text-brand-text hover:bg-white/5",
  ghost: "text-brand-text hover:bg-white/5"
}

export default function Button({ asChild, href, variant="primary", size="md", className, ...props }: Props){
  const cls = cn(base, sizes[size], variants[variant], className)
  if (href) return <Link href={href} className={cls}>{props.children}</Link>
  return <button className={cls} {...props} />
}
