"use client";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { useMemo } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
