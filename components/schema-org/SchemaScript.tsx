import * as React from "react";
import { VFC } from "react";

const SchemaScript: VFC<{ schema: any }> = ({ schema }) => {
  return (
    <script
      type={"application/ld+json"}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    ></script>
  );
};

export { SchemaScript };
