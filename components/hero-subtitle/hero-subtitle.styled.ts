import styled from "styled-components";
import { ThemePropsI } from "../../providers/swith-theme/themes/default.theme";
import elasticFontSize from "../../utils/elasticFontSize";

export const HeroSubtitle = styled.h2`
  ${elasticFontSize(20, 40, 500, 1000)};
  line-height: 1;
  margin-bottom: 4rem;
  margin-top: 1rem;
  color: ${({ theme }: ThemePropsI) => theme.colors.text.prime};
`;
