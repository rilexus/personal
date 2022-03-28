import * as React from "react";
import styled from "styled-components";
import { FC } from "react";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 85px;
  align-items: center;
  margin: 20vh 0 5vh 0;
`;
const VisibleViewStyled = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 2px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 5px #8b8b8b;
    background-color: #f5f5f5;
    border-radius: 2px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #8b8b8b;
  }

  //margin-bottom: -30px;
`;
const ScrollView: FC = ({ children }) => {
  const scrollViewWidth = 1200;
  return (
    <Wrapper>
      <VisibleViewStyled>
        <div
          style={{
            minWidth: `${scrollViewWidth}px`
          }}
        >
          {children}
        </div>
      </VisibleViewStyled>
    </Wrapper>
  );
};
export default ScrollView;
