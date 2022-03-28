import * as React from "react";
import { FC } from "react";

const ContentH3: FC = ({ children }) => {
  return (
    <h3 style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>{children}</h3>
  );
};
export default ContentH3;
