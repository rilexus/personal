import useScrollPosition from "./useScrollPosition";
//@ts-ignore
import * as eases from "eases";

export enum EasingFunctionNames {
  backInOut,
  backIn,
  backOut,
  bounceInOut,
  bounceIn,
  bounceOut,
  circInOut,
  circIn,
  circOut,
  cubicInOut,
  cubicIn,
  cubicOut,
  elasticInOut,
  elasticIn,
  elasticOut,
  expoInOut,
  expoIn,
  expoOut,
  linear,
  quadInOut,
  quadIn,
  quadOut,
  quartInOut,
  quartIn,
  quartOut,
  quintInOut,
  quintIn,
  quintOut,
  sineInOut,
  sineIn,
  sineOut
}

// linear interpolation
// https://mattdesl.svbtle.com/linear-interpolation
function lerp(startValue: number, endValue: number, t: number) {
  return startValue * (1 - t) + endValue * t;
}

/**
 * maps curr value to a value 0-1
 * @param from
 * @param curr
 * @param to
 */
function mapScrollPos(from: number, curr: number, to: number): number {
  if (curr <= from) return 0;
  if (curr >= to) return 1;
  return (curr - from) / (to - from);
}

export function useMapScrollToValue(
  startValue: number,
  endValue: number,
  fromScrollPos: number,
  toScrollPos: number,
  easingFunctionName?: EasingFunctionNames
) {
  const currScrollPos = useScrollPosition();
  const mappedPos = mapScrollPos(fromScrollPos, currScrollPos, toScrollPos);
  if (!easingFunctionName) return lerp(startValue, endValue, mappedPos);
  const availableFunctionNames = Object.keys(eases);
  const selectedName = availableFunctionNames[easingFunctionName];
  const selectedEaseFunction = eases[selectedName];
  const easedValue = selectedEaseFunction(mappedPos);
  return lerp(startValue, endValue, easedValue);
}
