import { DefaultTheme } from "styled-components";

export interface ThemeInterface extends DefaultTheme {
  colors: {
    primary: string;
    accent: string;
    warn: string;
    dark: string;
    gray: string;
  };
  fontWeight: {
    regular: number;
    bold: number;
  };
  fonts: {
    main: string;
  };
}
