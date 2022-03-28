import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

export function useAppearFromBottom(elementRef: any) {
  const [isInView, setInView] = useState(false);
  const windowDimensions = useWindowDimensions();
  const isClient = typeof window === "object";

  useEffect(() => {
    if (!isClient) return;
    function handleScroll() {
      if (elementRef.current) {
        const elem = elementRef.current?.getBoundingClientRect();
        //@ts-ignore
        const isInFromBottom = elem.top < windowDimensions?.height;
        setInView(isInFromBottom);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return function() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowDimensions, isClient, elementRef]);

  return isInView;
}
