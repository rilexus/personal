import { useEffect, useState } from "react";

export function useAppearFromTop(elementRef: any) {
  const [isInView, setInView] = useState(false);
  const isClient = typeof window === "object";

  function handleScroll() {
    if (elementRef.current) {
      const elem = elementRef.current.getBoundingClientRect();
      const isInFromTop = elem.top + elem.height > 0;
      // const isInFromBottom = elem.top < windowDimensions.height
      setInView(isInFromTop);
    }
  }

  useEffect(() => {
    if (!isClient) return;
    window.addEventListener("scroll", handleScroll);
    return function() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isInView;
}
