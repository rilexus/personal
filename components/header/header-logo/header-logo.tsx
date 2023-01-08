import * as React from "react";
import styled from "styled-components";
import { useMediaQuery } from "../../../hooks";

const Styled = styled.div`
  margin-left: 1rem;
  a {
    color: #00f;
    text-decoration: none;
  }
`;

const HeaderLogo = () => {
  const under480 = useMediaQuery("(max-width: 480px)");
  return (
    <Styled>
      <a href={"/"}>{under480 ? "SP" : "Stanislav Panchenko"}</a>
    </Styled>
  );
};

export default HeaderLogo;
