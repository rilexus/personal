import { CSSProperties, useMemo } from "react";

function useStyle(style: CSSProperties, deps: any[]) {
  return useMemo(() => style, deps);
}

export default useStyle;
