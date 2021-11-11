import { FC, memo, ReactNode } from "react";
import { GlobalStyle } from "./global-style";
import { ThemeProvider } from "styled-components";
import { ThemeInterface } from "./types";

const customTheme: ThemeInterface = {
  colors: {
    primary: "#009688",
    accent: "#94C720",
    dark: "#404040",
    gray: "#8D8D8D",
    warn: "#C70D38",
    bg: "#f2f2f2",
    lightGray: "#b7b3b37a",
  },
  fontWeight: {
    regular: 400,
    bold: 700,
  },
  fonts: {
    main: "Roboto",
  },
};

const Theme: FC<ReactNode> = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyle customTheme={customTheme} />
      {children}
    </ThemeProvider>
  );
};

export default memo(Theme);
