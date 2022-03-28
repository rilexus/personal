import styled from "styled-components"
import { ThemePropsI } from "../../providers/swith-theme/themes/default.theme"

export const HeroSubtitle = styled.h2`
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 4rem;
  color: ${({theme}:ThemePropsI)=>theme.colors.text.prime};
`
