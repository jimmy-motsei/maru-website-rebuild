import { cn } from "@/lib/utils/cn"
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border border-brand-border bg-black/5 dark:bg-white/0", className)} {...props}/>
}
export function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props}/>
}
