
export interface ThemePropsI {
  theme: ThemeI
}
export interface ThemeI {
  colors: {
    prime: string;
    second: string;
    third: string;
    accent: string;
    text:{
      prime: string;
      second: string;
    }
    border: string;
  }
  shadow:{
    prime: string;
    second: string;
  }
}
export const defaultTheme: ThemeI = {
  colors: {
    prime: "#000000cc",
    second: "#565656",
    third: "#7f7f7fcc",
    accent: "rgb(0, 0, 238)",
    text:{
      prime:'#2d2d2d',
      second: "#4c4c4c",
    },
    border: "#ececec",
  },
  shadow: {
    prime: "0 3px 7px 0px #0000004d",
    second: "0 4px 13px 0px #0000004d",
  },
}
