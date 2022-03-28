/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import * as React from "react"
import { ReactNode } from "react"
import styled from "styled-components"


const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  // padding: 0 0px 1.0875rem 1.45rem;
  padding: 0;
`

interface LayoutPropsI {
  children: ReactNode | ReactNode[]
}

const Layout = ({ children }: LayoutPropsI) => {

  return (
    <>
      <StyledWrapper>{children}</StyledWrapper>
    </>
  )
}

export default Layout
