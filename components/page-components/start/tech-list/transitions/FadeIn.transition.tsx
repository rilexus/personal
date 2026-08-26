import * as React from "react"
import { forwardRef } from "react"
import { motion, HTMLMotionProps } from "framer-motion"

const fadeInVariants = {
  init: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.7 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.07 },
  },
}

const FadeInTransition = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ children, ...rest }, ref) => (
    <motion.div ref={ref} variants={fadeInVariants} initial="init" {...rest}>
      {children}
    </motion.div>
  )
)

export {FadeInTransition}
