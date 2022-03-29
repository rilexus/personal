import React, { VFC } from "react";

const Meta: VFC<{
  metas: { name?: string; content?: string; property?: string }[];
}> = ({ metas }) => {
  return (
    <>
      {metas.map((meta, idx) => {
        return <meta {...meta} key={`${meta.name || meta.property}-${idx}`} />;
      })}
    </>
  );
};

export default Meta;
