import * as React from "react";
import styled from "styled-components";
import { PoseGroup } from "react-pose";
import { useState } from "react";
import { ParagraphStyled } from "../../../pragraph/pragraph.style";
import { CenterMargin } from "../../../center-margin/center-margin.styled";
import Align from "../../../align/align";
import { TechIntro } from "./components/tech-info/tech-info";
import {
  techIcons,
  TechScrollView
} from "./components/tech-scroll-view/tech-scroll-view";
import { Section } from "../../../section/Section";
import { FadeInTransition } from "./transitions/FadeIn.transition";
import { Flex } from "../../../flex/Flex";

const TechWrapper = styled.div`
  text-align: center;
`;

export default function TechList() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const currIconInfo = [techIcons[hoveredIndex]];
  return (
    <Section>
      <Flex justify={"center"} align={"center"}>
        <TechWrapper>
          <TechIntro />
          <TechScrollView onMouseOver={setHoveredIndex} />

          <CenterMargin>
            <div
              style={{
                margin: "0 35px"
              }}
            >
              <Align position={"center"}>
                <PoseGroup animateOnMount enterPose={"enter"}>
                  {currIconInfo.map(({ name, desc }, idx) => (
                    <FadeInTransition key={`curr-icon-${name}`}>
                      <h3>{name}</h3>
                      <ParagraphStyled
                        style={{
                          height: "200px"
                        }}
                      >
                        {desc}
                      </ParagraphStyled>
                    </FadeInTransition>
                  ))}
                </PoseGroup>
              </Align>
            </div>
          </CenterMargin>
        </TechWrapper>
      </Flex>
    </Section>
  );
}
