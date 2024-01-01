import { DefaultTheme } from "styled-components";

import { darkTheme } from "../themes/darkTheme.ts";
import { lightTheme } from "../themes/lightTheme.ts";
import { natureTheme } from "../themes/natureTheme.ts";
import { oceanTheme } from "../themes/oceanTheme.ts";
import { spaceTheme } from "../themes/spaceTheme.ts";
import { sunriseTheme } from "../themes/sunriseTheme.ts";


export const themeMap: { [key: string]: DefaultTheme } = {
  dark: darkTheme,
  light: lightTheme,
  nature: natureTheme,
  ocean: oceanTheme,
  sunrise: sunriseTheme,
  space: spaceTheme,
};
