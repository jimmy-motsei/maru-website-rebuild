"use client"
import Image from "next/image"
import { MotionConfig, motion, fadeIn, stagger } from "@/components/motion/presets"

const logos = [
  { src: "/images/ecosystem/openai.svg", alt: "OpenAI" },
  { src: "/images/ecosystem/hubspot.svg", alt: "HubSpot" },
  { src: "/images/ecosystem/github.svg", alt: "GitHub" },
  { src: "/images/ecosystem/zapier.svg", alt: "Zapier" },
  { src: "/images/ecosystem/notion.svg", alt: "Notion" },
  { src: "/images/ecosystem/meta.svg", alt: "Meta" }
]

export default function IntegrationsBand(){
  return (
    <MotionConfig reducedMotion="user">
      <section className="border-y border-brand-border bg-[linear-gradient(0deg,rgba(16,185,129,.05),transparent)]">
        <div className="container py-10 md:py-14">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-10 md:gap-14 opacity-80"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
          >
            {logos.map(l=>(
              <motion.div key={l.alt} className="relative h-7 w-24" variants={fadeIn}>
                <Image src={l.src} alt={l.alt} fill className="object-contain" sizes="96px" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  )
}
