import * as React from "react"
import styled from "styled-components"

const Styled = styled.div`
  a {
    color: #00f;
    text-decoration: none;
  }
`

const HeaderLogo = () => {
  return (
    <Styled>
      <a href={"/"}>Stanislav Panchenko</a>
    </Styled>
  )
}

export default HeaderLogo
