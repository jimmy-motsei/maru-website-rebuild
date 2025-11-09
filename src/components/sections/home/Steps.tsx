"use client"
import { MotionConfig, motion, fadeUp, stagger } from "@/components/motion/presets"

const steps = [
  { n: "01", title: "Free Process Health Check", desc: "Quick discovery to spot wins and confirm ROI." },
  { n: "02", title: "Personalised Plan", desc: "Prioritised roadmap with clear owners and measurables." },
  { n: "03", title: "Build & Pilot", desc: "Implement automations and dashboards with guardrails." },
  { n: "04", title: "Support & Iterate", desc: "SLA-backed support and continuous optimisation." }
]

export default function Steps(){
  return (
    <MotionConfig reducedMotion="user">
      <section className="container py-16 md:py-20">
        <motion.h2 className="text-2xl md:text-3xl font-semibold" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}>
          Your 4 steps to automation success
        </motion.h2>
        <motion.div
          className="mt-8 grid gap-5 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          {steps.map(s=>(
            <motion.div key={s.n} className="rounded-2xl border border-brand-border p-6" variants={fadeUp}>
              <div className="text-brand-accent font-semibold">{s.n}</div>
              <h3 className="mt-1 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-brand-muted">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </MotionConfig>
  )
}
