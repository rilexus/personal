import React from "react";
import useStyle from "../../hooks/useStyle";

const VerticalSpacer = ({ value = "0" }) => {
  const s = useStyle(
    {
      paddingTop: value
    },
    [value]
  );
  return <div style={s} />;
};

export default VerticalSpacer;
