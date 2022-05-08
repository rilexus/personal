import React from "react";
import styled, { css } from "styled-components";

const preCss = css`
  background-color: #f5f5f7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-top: 36px;
  margin-bottom: 36px;
`;

const StyledPre = styled.pre`
  ${preCss};
`;

function Code({ value }: any) {
  return <StyledPre>{value}</StyledPre>;
}

export default Code;
