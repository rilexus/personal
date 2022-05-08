import { useMemo, CSSProperties } from "react";

function useCSSProperties(style: CSSProperties, deps: any[]) {
  return useMemo<CSSProperties>(() => style, deps);
}

export default useCSSProperties;
