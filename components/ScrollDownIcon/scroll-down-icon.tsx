import * as React from "react"
import "./style"
import useScrollPosition from "../../hooks/useScrollPosition"
import posed from "react-pose"
import {StyledMouse, StyledScrollDown} from "./style"

const FadeOutAnimation = posed.div({
  hide: {
    opacity: 0,
    transition: ({}) => ({
      opacity: { duration: 100 },
    }),
  },
  visible: {
    opacity: 1,
  },
})

const ScrollDownIcon = () => {
  const scrollPos = useScrollPosition()
  return (
    <FadeOutAnimation pose={scrollPos > 50 ? "hide" : "visible"}>
      <StyledMouse>
        <StyledScrollDown className="scroll-down" />
      </StyledMouse>
    </FadeOutAnimation>
  )
}

export default ScrollDownIcon
