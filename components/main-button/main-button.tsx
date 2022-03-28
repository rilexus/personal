import React, { ReactNode, useRef } from "react"
import styled from "styled-components"
import { useIsInView } from "../../hooks/useIsinView"

const MainButtonStyled = styled.span`
  background-color: #272727;
  color: #e0e0e0;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.19);

  font-size: 0.8rem;
  font-weight: 600;
  padding: 15px 35px;
  // cursor: pointer;
  transition: transform 200ms, box-shadow 200ms;
  &:hover {
    transform: scale(0.986);
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.19);
  }
  a {
    text-decoration: none;
    color: #e0e0e0;
  }
`
interface Props {
  children: ReactNode | ReactNode[]
  onClick?: (e: any) => void
}
const MainButton = ({ children, onClick }: Props) => {
  const ref = useRef(null)
  const inView = useIsInView(ref)
  return (
    <MainButtonStyled ref={ref} onClick={onClick}>
      {children}
    </MainButtonStyled>
  )
}

export default MainButton
