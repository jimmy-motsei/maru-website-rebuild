"use client"
import { Lightbulb, Workflow, Gauge, Shield } from "lucide-react"
import { MotionConfig, motion, fadeUp, stagger } from "@/components/motion/presets"

const items = [
  { Icon: Lightbulb, title: "Strategy to delivery", desc: "From discovery to live automations with owners and SLAs." },
  { Icon: Workflow, title: "Workflow first", desc: "Human-in-the-loop where it matters. Tools fit the process." },
  { Icon: Gauge, title: "Measurable ROI", desc: "Time saved, error rate and cycle time tracked from day one." },
  { Icon: Shield, title: "Safe & compliant", desc: "Access controls, audit trails and POPIA-safe data flows." }
]

export default function ValueGrid(){
  return (
    <MotionConfig reducedMotion="user">
      <section className="container py-16 md:py-20">
        <motion.h2 className="text-2xl md:text-3xl font-semibold" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}>
          Harness the power of AI & automation
        </motion.h2>
        <motion.div
          className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          {items.map(({Icon,title,desc})=>(
            <motion.div key={title} className="rounded-2xl border border-brand-border p-6 md:p-7 bg-[linear-gradient(135deg,rgba(16,185,129,.06),transparent)]" variants={fadeUp}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent">
                <Icon size={18}/>
              </span>
              <h3 className="mt-3 font-medium">{title}</h3>
              <p className="mt-2 text-sm text-brand-muted">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </MotionConfig>
  )
}
