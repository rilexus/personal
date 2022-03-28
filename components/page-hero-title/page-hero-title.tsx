import * as React from "react"

import { ReactNode } from "react"
import { PageTitleStyled } from "./page-hero-title.style"

interface PageTitlePropsI {
  url: string
  children: ReactNode
}
const PageHeroTitle = ({ url, children }: PageTitlePropsI) => {
  return <PageTitleStyled url={url}>{children}</PageTitleStyled>
}
export default PageHeroTitle
