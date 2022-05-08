import React from "react";
import Children from "../Children/Children";
import { H1 } from "../../../../components/H1";
import { H2 } from "../../../../components/H2";

function Heading({ depth, _children }: any) {
  if (depth === 1) {
    return (
      <H1
        id={_children[0].value}
        style={{
          textAlign: "center"
        }}
      >
        <Children _children={_children} />
      </H1>
    );
  }
  if (depth === 2) {
    return (
      <H2
        id={_children[0].value}
        style={{
          marginTop: "3rem"
        }}
      >
        <Children _children={_children} />
      </H2>
    );
  }
  return null;
}

export default Heading;
