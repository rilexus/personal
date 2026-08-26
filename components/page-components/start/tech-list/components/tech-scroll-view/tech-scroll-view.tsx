import * as React from "react";
import { motion } from "framer-motion";
import ScrollView from "../../scroll-view/scroll-view";
import { TechIconAnimated } from "../tech-icon/tech-icon";
import { useRef, VFC } from "react";
import { useIsInView } from "../../../../../../hooks/useIsinView";
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
            <TechIconAnimated icon={icon} />
          </span>
        ))}
      </motion.div>
    </ScrollView>
  );
};
