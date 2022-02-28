import React from "react";
import { RootState, useAppSelector } from "../redux/store";
import { Theme, ThemeProvider as EmotionThemeProvider } from "@emotion/react";

type TThemesType = {
  dark: Theme;
  light: Theme;
};

const themes: TThemesType = {
  light: {
    isDark: false,
    background: {
      primary: "#fff",
      secondary: "#24272F",
      tertiary: "#6A7A8B",
      transparent: "rgba(0, 0, 0, 0.05)",
    },
    color: {
      primary: "#6A7A8B",
      secondary: "#FCFCFC",
      disabled: "#BFC6D1",
    },
    border: {
      primary: "#F2F2F2",
    },
    button: {
      primaryBackground: "#6A7A8B",
      primaryText: "#FCFCFC",
      secondaryBackground: "#BFC6D1",
      secondaryText: "#24272F",
    },
  },
  dark: {
    isDark: true,
    background: {
      primary: "#24272F",
      secondary: "#F2F2F2",
      tertiary: "#BFC6D1",
      transparent: "rgba(255, 255, 255, 0.05)",
    },
    color: {
      primary: "#BFC6D1",
      secondary: "#24272F",
      disabled: "#F2F2F2",
    },
    border: {
      primary: "rgba(242, 242, 242, 0.1)",
    },
    button: {
      primaryBackground: "#BFC6D1",
      primaryText: "#24272F",
      secondaryBackground: "#24272F",
      secondaryText: "#F2F2F2",
    },
  },
};

const ThemeProvider: React.FC = ({ children }) => {
  const { theme } = useAppSelector((state:RootState) => state.rootReducer.ui);
  // temp test
  const activeTheme: Theme = themes[theme];

  return (
    <EmotionThemeProvider theme={activeTheme}>{children}</EmotionThemeProvider>
  );
};

export default ThemeProvider;
