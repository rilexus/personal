import * as React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme, ThemeI } from "./themes/default.theme";
import { ReactNode } from "react";

interface SwitchThemePropsI {
  name: "default" | "black";
  children: ReactNode | ReactNode[];
}

export default function SwitchTheme({ name, children }: SwitchThemePropsI) {
  const inDev = process.env.NODE_ENV === "development";
  const themeType: any = {
    default: defaultTheme
  };
  if (!(name in themeType) && inDev) {
    console.warn(`This theme does not exist!: ${name}`);
  }
  const theme: ThemeI = name in themeType ? themeType[name] : {};
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
