import styled from "styled-components"
import { ThemePropsI } from "../../providers/swith-theme/themes/default.theme"

export const ParagraphStyled = styled.p`
  font-size: 1.1rem;
  line-height: 1.47059;
  font-weight: 400;
  letter-spacing: -.022em; 
  color: ${({theme}:ThemePropsI)=>theme.colors.text.prime};
  text-rendering: geometricPrecision;
 
`
