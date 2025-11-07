"use client"
import Button from "@/components/ui/button"
import { Placeholder } from "./Placeholder"
import { MotionConfig, motion } from "framer-motion"

export default function ServiceHero(){
  return (
    <MotionConfig reducedMotion="user">
      <section className="container py-16 md:py-20 grid gap-10 md:grid-cols-[1.1fr,1fr] items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            className="text-display font-semibold"
          >
            Your partner for <span className="text-brand-accent">AI-driven</span> process automation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .05 }}
            className="mt-4 text-lg text-brand-muted max-w-2xl"
          >
            We design, build and ship automations that increase revenue, reduce busywork, and make your team faster.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .1 }}
            className="mt-8 flex gap-3"
          >
            <Button href="/contact">Book a call</Button>
            <Button href="/request-demo" variant="secondary">Request a demo</Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-64 md:h-96"
        >
          <Placeholder className="h-full" />
        </motion.div>
      </section>
    </MotionConfig>
  )
}
