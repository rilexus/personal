import { useEffect, useRef } from "react";

function useClickOutside(handler: any) {
  const ref = useRef<any>(null);
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current?.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler]);
  return ref;
}

export default useClickOutside;
