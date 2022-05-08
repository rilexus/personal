import { FC, HTMLAttributes, useMemo, ReactNode } from "react";
import { useTheme } from "styled-components";
import { useCSSProperties, useMediaQuery } from "../../hooks";
import { ThemeI } from "../../providers/swith-theme/themes/default.theme";

type MediaProps = { [Key in keyof ThemeI["breakpoints"]]?: number };

const descending = ([, a]: [string, number], [, b]: [string, number]) =>
  a > b ? -1 : 1;

/**
 * Centers children relative to the parent.
 * If media query values are provided, the width will be adjusted, 100% otherwise.
 * @example
 * <Center small={80} medium={50}>
 *     <div>
 *         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iste
 *         mollitia nemo nulla sapiente suscipit, tenetur totam? Aliquam culpa
 *         distinctio fugiat iste nihil odit quae reprehenderit tempore tenetur
 *         velit, voluptatibus.
 *     </div>
 * </Center>
 */
const Center: FC<{ children: ReactNode } & MediaProps &
  HTMLAttributes<HTMLDivElement>> = props => {
  const { breakpoints = {} } = useTheme() as ThemeI;

  const sortedMedia = useMemo(() => {
    // Since breakpoints do not change, this will run once.
    // Sort theme.media in descending order.
    //@ts-ignore
    return Object.entries(breakpoints).sort(descending);
  }, [breakpoints]);

  const queriesMap = sortedMedia.map(([queryName, deviceWidth], idx) => {
    // listen for every media query, if its satisfied => boolean
    return {
      // eslint-disable-next-line
      [queryName]: useMediaQuery(
        `(${
          sortedMedia.length - 1 === idx ? "max" : "min"
        }-width: ${deviceWidth}px)`
      ) // => boolean
    };
  });

  let width = 100;
  for (let i = 0; i < queriesMap.length; i++) {
    const currentQuery = queriesMap[i];
    const [[queryName, querySatisfied]] = Object.entries(currentQuery);
    if (querySatisfied && queryName in props) {
      // eslint-disable-next-line
      // @ts-ignore
      width = props[queryName]; // in percent
      // return first satisfied query width
      break;
    }
  }

  const style = useCSSProperties(
    {
      ...props.style,
      margin: "auto",
      width: `${width}%`
    },
    [width, props.style]
  );

  const filteredProps = useMemo(
    () =>
      Object.entries(props).reduce((acc, [key, value]) => {
        if (key in breakpoints) return acc;
        return {
          ...acc,
          [key]: value
        };
      }, {}),
    [props, breakpoints]
  );

  return (
    <div {...filteredProps} style={style}>
      {props.children}
    </div>
  );
};

export default Center;
