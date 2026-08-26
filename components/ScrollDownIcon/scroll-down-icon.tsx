import * as React from "react"
import "./style"
import useScrollPosition from "../../hooks/useScrollPosition"
import { motion } from "framer-motion"
import {StyledMouse, StyledScrollDown} from "./style"

const fadeOutVariants = {
  hide: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
  visible: {
    opacity: 1,
  },
}

const ScrollDownIcon = () => {
  const scrollPos = useScrollPosition()
  return (
    <motion.div
      variants={fadeOutVariants}
      animate={scrollPos > 50 ? "hide" : "visible"}
    >
      <StyledMouse>
        <StyledScrollDown className="scroll-down" />
      </StyledMouse>
    </motion.div>
  )
}

export default ScrollDownIcon
