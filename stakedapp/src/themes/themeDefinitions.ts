import { DefaultTheme } from "styled-components";
import { darkTheme } from "../themes/darkTheme";
import { lightTheme } from "../themes/lightTheme";
import { natureTheme } from "../themes/natureTheme";
import { oceanTheme } from "../themes/oceanTheme";
import { sunriseTheme } from "../themes/sunriseTheme";
import { spaceTheme } from "../themes/spaceTheme";


export const themeMap: { [key: string]: DefaultTheme } = {
  dark: darkTheme,
  light: lightTheme,
  nature: natureTheme,
  ocean: oceanTheme,
  sunrise: sunriseTheme,
  space: spaceTheme,
};
