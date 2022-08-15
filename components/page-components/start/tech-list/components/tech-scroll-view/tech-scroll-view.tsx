import * as React from "react";
import posed from "react-pose";
import ScrollView from "../../scroll-view/scroll-view";
import { TechIconAnimated } from "../tech-icon/tech-icon";
import { useRef, VFC } from "react";
import { useIsInView } from "../../../../../../hooks/useIsinView";
import {
  ItemList,
  ItemListElement,
  Description
} from "@react-microdata/item-list";
import {
  ListItem,
  Description as ItemDescription
} from "@react-microdata/list-item";
import techIcons from "../../icons.data";

const ChildStaggger = posed.div({
  visible: {
    staggerChildren: 100
  },
  hidden: {
    staggerChildren: 10
  },
  init: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});
export const TechScrollView: VFC<{ onMouseOver: (id: number) => void }> = ({
  onMouseOver
}) => {
  const ref = useRef();
  const animate = useIsInView(ref);
  return (
    <ScrollView>
      <ItemList>
        <Description
          style={{
            display: "none"
          }}
        >
          Technology used by Stanislav Panchenko
        </Description>
        <ChildStaggger ref={ref} pose={animate ? "visible" : "hidden"}>
          {techIcons.map((icon, idx) => (
            <span
              key={`tech-icon-${idx}`}
              onMouseOver={() => {
                onMouseOver(idx);
              }}
            >
              <ItemListElement>
                <ListItem>
                  <ItemDescription
                    style={{
                      display: "none"
                    }}
                  >
                    {icon.desc}
                  </ItemDescription>
                  <TechIconAnimated icon={icon} />
                </ListItem>
              </ItemListElement>
            </span>
          ))}
        </ChildStaggger>
      </ItemList>
    </ScrollView>
  );
};
