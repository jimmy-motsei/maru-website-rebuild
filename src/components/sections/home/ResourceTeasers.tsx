"use client"
import Link from "next/link"
import { MotionConfig, motion, fadeUp, stagger } from "@/components/motion/presets"

const posts = [
  { title: "What to automate first in B2B ops", href: "/knowledge" },
  { title: "Sales ops handoffs without breaking CRM", href: "/knowledge" },
  { title: "Build your first internal AI assistant safely", href: "/knowledge" }
]

export default function ResourceTeasers(){
  return (
    <MotionConfig reducedMotion="user">
      <section className="container py-16 md:py-20">
        <motion.h2 className="text-2xl md:text-3xl font-semibold" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}>
          Case studies, articles and resources
        </motion.h2>
        <motion.div
          className="mt-8 grid gap-5 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          {posts.map(p=>(
            <motion.div key={p.title} variants={fadeUp}>
              <Link href={p.href} className="block rounded-2xl border border-brand-border p-6 hover:border-brand-accent/40 transition-colors">
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-brand-muted">Read more →</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </MotionConfig>
  )
}
