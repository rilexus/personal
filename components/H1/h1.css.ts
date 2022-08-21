import { css } from "styled-components";
import elasticFontSize from "../../utils/elasticFontSize";
import { BREAK_POINT } from "../../css/media-queries";

const h1Css = css`
  ${elasticFontSize(35, 50, 300, BREAK_POINT.sm)};
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: 0em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
`;
export default h1Css;
