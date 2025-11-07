"use client"

import { MotionConfig, motion, useReducedMotion } from "framer-motion"
import { Lightbulb, Workflow, Bot, BarChart3 } from "lucide-react"
import { Card, CardBody } from "@/components/ui/card"

const SERVICES = [
  { icon: Lightbulb, title: "AI Consulting", desc: "Strategy, roadmapping and vendor selection." },
  { icon: Workflow, title: "Workflow Automation", desc: "Design + build automated processes." },
  { icon: Bot, title: "Agent & Chat Solutions", desc: "Custom GPTs and chat widgets." },
  { icon: BarChart3, title: "Data & Reporting", desc: "Dashboards and KPI alerts." },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 18 } }
}

export default function ServicesGrid(){
  const prefersReduced = useReducedMotion()

  return (
    <MotionConfig reducedMotion="user">
      <section className="container py-12 md:py-16">
        <motion.h2
          className="text-headline font-semibold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
        >
          Services
        </motion.h2>

        <motion.div
          className="mt-8 grid gap-6 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {SERVICES.map(({icon:Icon, title, desc})=>(
            <motion.div
              key={title}
              variants={item}
              whileHover={prefersReduced ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <Card className="hover:shadow-soft transition-shadow">
                <CardBody>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-semibold">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-brand-muted">{desc}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </MotionConfig>
  )
}
