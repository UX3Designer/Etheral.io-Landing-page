/// <reference types="react-scripts" />
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    isDark: boolean;

    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      transparent: string;
    };
    color: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    border: {
      primary: string;
    };
    button: {
      primaryBackground: string;
      primaryText: string;
      secondaryBackground: string;
      secondaryText: string;
    };
  }
}
