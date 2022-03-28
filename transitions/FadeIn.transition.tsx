import * as React from "react"
import { ReactNode } from "react"

interface FadeinAnimationPropsI {
  duration: number
  children: ReactNode | ReactNode[]
  animate: boolean
  delay?: number
}
const FadeinAnimation = ({
  children,
  duration,
  animate,
  delay,
}: FadeinAnimationPropsI) => {
  return (
    <div
      style={{
        transition: `opacity ${animate ? duration : 200}ms`,
        opacity: animate ? 1 : 0,
        transitionDelay: delay ? `${animate ? delay : 0}ms` : "0ms",
      }}
    >
      {children}
    </div>
  )
}
export default FadeinAnimation
