import * as React from "react";
import styled from "styled-components";
import { ThemePropsI } from "../../../../../../providers/swith-theme/themes/default.theme";
import { CenterMargin } from "../../../../../center-margin/center-margin.styled";

const PCentered = styled.p`
  width: 66%;
  max-width: 690px;
  margin-left: auto;
  margin-right: auto;
  font-size: 22px;
  line-height: 1.335;
  color: ${({ theme }: ThemePropsI) => theme.colors.text.prime};
`;
export const TechIntro = () => {
  return (
    <CenterMargin>
      <div
        style={{
          textAlign: "center"
        }}
      >
        <h1>
          I L
          <span
            style={{
              fontSize: "1.4rem"
            }}
          >
            ❤️
          </span>
          ve Technology!
        </h1>
        <PCentered>
          Every tool serves a certain purpose and solves a specific problem.
          Those are my tools which help me solving mine.
        </PCentered>
      </div>
    </CenterMargin>
  );
};
