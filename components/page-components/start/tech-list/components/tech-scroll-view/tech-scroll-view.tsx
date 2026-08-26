import * as React from "react";
import { motion } from "framer-motion";
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

const childStaggerVariants = {
  visible: {
    transition: { staggerChildren: 0.1 }
  },
  hidden: {
    transition: { staggerChildren: 0.01 }
  }
};
export const TechScrollView: VFC<{ onMouseOver: (id: number) => void }> = ({
  onMouseOver
}) => {
  const ref = useRef<HTMLDivElement>(null);
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
        <motion.div
          ref={ref}
          variants={childStaggerVariants}
          animate={animate ? "visible" : "hidden"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}
        >
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
        </motion.div>
      </ItemList>
    </ScrollView>
  );
};
