"use client";

// Types
import type { ReactElement } from "react";

// Geist provider
import {
  GeistProvider as GeistProviderTP,
  CssBaseline,
  Themes,
} from "@geist-ui/core";

// Other
import { useMediaQuery } from "@mantine/hooks";

import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/700.css";

import { useState, useEffect } from "react";

export default function GeistProvider({
  children,
}: {
  children: ReactElement;
}) {
  // Custom theming
  const customLightModeTheme = Themes.createFromLight({
    type: "customLightModeTheme",
    font: {
      sans: "Public Sans",
    },
  });
  const customDarkModeTheme = Themes.createFromDark({
    type: "customDarkModeTheme",
    font: {
      sans: "Public Sans",
    },
  });

  // Colour modes
  const [themeType, setThemeType] = useState("light");
  const useDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    if (useDarkMode) {
      setThemeType("customDarkModeTheme");
    } else {
      setThemeType("customLightModeTheme");
    }
  }, [useDarkMode]);

  return (
    <>
      <GeistProviderTP
        themes={[customLightModeTheme, customDarkModeTheme]}
        themeType={themeType}
      >
        <CssBaseline />
        {children}
      </GeistProviderTP>
    </>
  );
}
