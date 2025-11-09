"use client"
import Link from "next/link"
import { MotionConfig, motion, fadeUp, stagger } from "@/components/motion/presets"

export default function BottomCTA(){
  return (
    <MotionConfig reducedMotion="user">
      <section className="container py-20 md:py-28">
        <motion.div
          className="rounded-2xl border border-brand-border p-10 md:p-14 bg-[linear-gradient(135deg,rgba(16,185,129,.08),transparent)] text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={stagger}
        >
          <motion.h3 className="text-2xl md:text-3xl font-semibold" variants={fadeUp}>
            AI & automation will unlock growth. Find out how.
          </motion.h3>
          <motion.p className="mt-3 text-brand-muted" variants={fadeUp}>
            Kick off with a free Process Health Check — confirm value, then pilot fast.
          </motion.p>
          <motion.div className="mt-7 inline-flex gap-3" variants={fadeUp}>
            <Link href="/request-demo" className="rounded-xl bg-brand-accent text-brand-accent-fore px-5 py-3 font-medium">Request the health check</Link>
            <Link href="/contact" className="rounded-xl border border-brand-border px-5 py-3">Talk to an expert</Link>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  )
}
