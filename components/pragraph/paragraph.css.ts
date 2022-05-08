import { css } from "styled-components";
import { ThemePropsI } from "../../providers/swith-theme/themes/default.theme";

const paragraphCss = css`
  font-size: 1.1rem;
  line-height: 1.47059;
  font-weight: 400;
  letter-spacing: -0.022em;
  color: ${({ theme }: ThemePropsI) => theme.colors.text.prime};
  text-rendering: geometricPrecision;
`;
export default paragraphCss;
