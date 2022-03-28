import { useCallback, useEffect, useState } from "react";

export default function useWindowDimensions() {
  const isClient = typeof window === "object";

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }, [isClient]);

  const [size, setSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) return;
    function handleResize() {
      setSize(getSize());
    }
    window.addEventListener("resize", handleResize);
    return function() {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient, getSize]);

  return size || getSize();
}
