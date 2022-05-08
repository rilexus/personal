import React from "react";
import { v4 as uuid } from "uuid";
import Heading from "../Heading/Heading";
import Code from "../Code/Code";
import Text from "../Text/Text";
import Paragraph from "../Paragraph/Paragraph";

function Children({ _children }: any) {
  return (
    <>
      {_children.map(({ type, value, children, depth }: any) => {
        if (type === "heading") {
          return <Heading _children={children} depth={depth} key={uuid()} />;
        }
        if (type === "code") {
          return <Code value={value} key={uuid()} />;
        }
        if (type === "paragraph") {
          return <Paragraph _children={children} key={uuid()} />;
        }
        if (type === "text") {
          return <Text value={value} key={uuid()} />;
        }
        return null;
      })}
    </>
  );
}

export default Children;
