import { useCallback, useState } from "react"

export default function useHover() {
  const [event, setHover] = useState({
    hovered: false,
    target: null
  });

  return {
    event,
    bind:{
      onMouseEnter: useCallback((e) => {
        setHover({
          hovered: true,
          target: e.target
        });
      }, []),
      onMouseLeave: useCallback((e) => {
        setHover({
          hovered: false,
          target: e.target
        });
      }, []),
    }
  }
}