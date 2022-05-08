import { useCallback, useEffect, useLayoutEffect, useState } from "react";

const inObject = (object: Object, key: string) => key in object;
const inWindow = (key: string) => inObject(window, key);
const inWeb = () => typeof window === "object";

const errorMessage = "MatchMedia is not supported!";

// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
const canUseDOM: boolean = !!(
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined"
);

const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

const useMediaQuery = (mediaQuery: string): boolean | undefined => {
  if (!inWeb() || !inWindow("matchMedia")) {
    console.warn(errorMessage);
    return false;
  }

  //eslint-disable-next-line
  const getMatches = useCallback(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    return mediaQueryList.matches;
  }, [mediaQuery]);

  //eslint-disable-next-line
  const [isVerified, setIsVerified] = useState<boolean>();

  //eslint-disable-next-line
  useIsomorphicLayoutEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const handle = () => {
      setIsVerified(getMatches());
    };

    try {
      mediaQueryList.addEventListener("change", handle);
    } catch (e) {
      // Safari (-.-)
      mediaQueryList.addListener(handle);
    }

    handle();
    return () => {
      try {
        mediaQueryList.removeEventListener("change", handle);
      } catch (e) {
        // Safari (-.-)
        mediaQueryList.removeListener(handle);
      }
    };
  }, [mediaQuery]);

  return isVerified;
};

export default useMediaQuery;
