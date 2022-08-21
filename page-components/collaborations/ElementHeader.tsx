import * as React from "react";
import { FC } from "react";

const ElemHeader: FC = ({ children }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        height: "15vh",
        paddingLeft: "3rem"
      }}
    >
      {children}
    </div>
  );
};
export default ElemHeader;
