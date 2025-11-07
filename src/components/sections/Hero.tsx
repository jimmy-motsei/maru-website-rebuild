"use client"
import Link from "next/link"
import { MotionConfig, motion, useReducedMotion, useMotionValue, useTransform } from "framer-motion"
import Button from "@/components/ui/button"
import { useCallback } from "react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } }
}

export default function Hero() {
  const prefersReduced = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-40, 40], [6, -6])
  const rotateY = useTransform(mx, [-40, 40], [-6, 6])
  const glowX = useTransform(mx, [-40, 40], ["0%", "100%"])

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(e.clientX - (r.left + r.width / 2))
    my.set(e.clientY - (r.top + r.height / 2))
  }, [mx, my])

  return (
    <MotionConfig reducedMotion="user">
      <section className="container py-14 md:py-20 grid gap-10 md:grid-cols-[1.2fr,1fr] items-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.h1 variants={item} className="font-semibold text-display">
            Clarity that <span className="relative inline-block text-brand-accent">
              converts
              <motion.span
                aria-hidden
                style={{ left: glowX }}
                className="pointer-events-none absolute -bottom-1 h-[3px] w-24 rounded-full bg-brand-accent/60"
              />
            </span>.
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-lg text-brand-muted max-w-xl">
            We design, build and ship AI automations that cut costs and unlock growth.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex gap-3">
            <Button href="/contact">Book a call</Button>
            <Button href="/services" variant="secondary">See services</Button>
          </motion.div>
        </motion.div>

        <motion.div
          onMouseMove={prefersReduced ? undefined : onMove}
          onMouseLeave={() => { mx.set(0); my.set(0) }}
          style={prefersReduced ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative h-64 md:h-96 rounded-2xl border border-brand-border bg-[linear-gradient(135deg,rgba(61,184,198,.16),transparent)] overflow-hidden"
          whileHover={prefersReduced ? undefined : { scale: 1.01, transition: { duration: 0.25 } }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(600px 300px at var(--x,50%) var(--y,30%), rgba(61,184,198,.18), transparent 60%)"
            }}
          />
        </motion.div>
      </section>
    </MotionConfig>
  )
}
