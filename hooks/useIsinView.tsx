import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

export function useIsInView(elementRef: any) {
  const [isInView, setInView] = useState(false);
  const windowDimensions = useWindowDimensions();
  const isClient = typeof window === "object";

  useEffect(() => {
    if (!isClient) return;
    const handleScroll = () => {
      if (elementRef.current) {
        const elem = elementRef.current.getBoundingClientRect();
        const isInFromTop = elem.top + elem.height > 0;
        //@ts-ignore
        const isInFromBottom = elem.top < windowDimensions?.height;
        setInView(isInFromTop && isInFromBottom);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return function() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowDimensions, isClient, elementRef]);

  return isInView;
}
