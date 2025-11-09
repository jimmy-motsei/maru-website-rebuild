"use client"
import { MotionConfig, motion } from "framer-motion"
export { MotionConfig, motion }

export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: .6, ease: [0.22, 1, 0.36, 1] } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: .6, ease: [0.22, 1, 0.36, 1] } }
}

export const float = {
  animate: {
    y: [0, -4, 0],
    transition: { duration: 6, ease: "easeInOut", repeat: Infinity }
  }
}
