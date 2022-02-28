import { createReducer } from "@reduxjs/toolkit";
import { toggleSidebar, toggleTheme } from "../actions/uiActions";

const themeLocalStorageKey = "theme-variant";

function getLocalThemeVariant() {
  return localStorage.getItem(themeLocalStorageKey);
}

function getDefaultThemeVariant() {
  const localThemeVariant = getLocalThemeVariant();
  if (localThemeVariant === "light" || localThemeVariant === "dark")
    return localThemeVariant;
  return "light";
}

function storeThemeVariant(theme: "light" | "dark") {
  localStorage.setItem(themeLocalStorageKey, theme);
}

type TUIReducer = {
  theme: "light" | "dark";
  isSidebarOpen: boolean;
};

const initialState: TUIReducer = {
  theme: getDefaultThemeVariant(),
  isSidebarOpen: false,
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(toggleSidebar, (state, action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    })
    .addCase(toggleTheme, (state, action) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      state.theme = newTheme;
      storeThemeVariant(newTheme);
    })
);
