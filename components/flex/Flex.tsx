import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
  justify: "center"
  align: "center"
}

const Flex = ({ children, justify = "center", align = "center" }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: justify,
        alignContent: align,
      }}
    >
      {children}
    </div>
  )
}

export { Flex }
