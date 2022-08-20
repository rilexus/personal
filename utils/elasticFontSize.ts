import { css } from "styled-components";

const elasticFontSize = (
  minFontSizeInPixel: number,
  maxFontSizeInPixel: number,
  minWindowWidth: number,
  maxWindowWidth: number
) => {
  // TODO: give a better name to this function
  return css`
    font-size: calc(
      ${minFontSizeInPixel} *
        (
          1px -
            clamp(
              0px,
              (100vw - ${minWindowWidth}px) /
                (${maxWindowWidth} - ${minWindowWidth}),
              1px
            )
        ) + ${maxFontSizeInPixel} *
        clamp(
          0px,
          (100vw - ${minWindowWidth}px) /
            (${maxWindowWidth} - ${minWindowWidth}),
          1px
        )
    );
  `;
};

export default elasticFontSize;
