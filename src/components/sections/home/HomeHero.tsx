"use client"

import Link from "next/link"
import { MotionConfig, motion, fadeUp, fadeIn, float, stagger } from "@/components/motion/presets"

export default function HomeHero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="container py-20 md:py-28">
        <motion.div
          className="grid gap-12 md:grid-cols-2 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <div>
            <motion.h1 className="text-4xl md:text-6xl font-semibold leading-tight" variants={fadeUp}>
              Clarity that <span className="text-brand-accent">converts.</span>
            </motion.h1>
            <motion.p className="mt-5 max-w-xl text-brand-muted" variants={fadeUp}>
              We design, build and ship AI automations that cut costs and unlock growth. Practical, measurable and POPIA-compliant.
            </motion.p>
            <motion.div className="mt-7 flex gap-3" variants={fadeUp}>
              <Link href="/contact" className="rounded-xl bg-brand-accent text-brand-accent-fore px-5 py-3 font-medium">Book a call</Link>
              <Link href="/services" className="rounded-xl  px-5 py-3">See services</Link>
            </motion.div>
            <motion.p className="mt-3 text-sm text-brand-muted" variants={fadeUp}>
              Start with a simple audit. See ROI in weeks, not months.
            </motion.p>
          </div>

          <motion.div
            className="relative h-72 md:h-[420px] rounded-2xl overflow-hidden bg-black/30"
            variants={fadeIn}
            {...float}
          >
            <video
              src="/media/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover edge-fade edge-fade"
            />
            <div className="pointer-events-none absolute inset-0" style={{
              background: "radial-gradient(700px 320px at 60% 20%, rgba(16,185,129,.16), transparent 60%)"
            }} />
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  )
}
