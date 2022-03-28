import { useState } from "react";
import useTimeout from "./useTimeout";

/**
 * @desc returns true after given delay
 * @param {number} delay
 * @return {boolean}
 */
export default function useSignal(delay: number) {
  // toggles value from false to true after timeout
  const [value, setValue] = useState(false);
  useTimeout(() => setValue(true), delay);
  return value;
}
