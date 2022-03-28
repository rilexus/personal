import * as React from "react"
import styled from "styled-components"
import useSignal from "../../../../hooks/useSignal"

const BG = styled.div`
  background-image: url("https://media.giphy.com/media/2SYpZ92iLQsF6QZl5u/source.gif");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.04;
  background-size: cover;
  background-position: center;
`
const Styled = styled.div<{ opacity: number }>`
  position: fixed;
  top: 0;
  z-index: -1;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 1000ms;
  opacity: ${({ opacity }) => opacity || 0};
`
const HeroBackground = () => {
  const animate = useSignal(1000)
  return (
    <Styled
      opacity={animate ? 1 : 0}
    >
      <BG />
    </Styled>
  )
}
export default HeroBackground
