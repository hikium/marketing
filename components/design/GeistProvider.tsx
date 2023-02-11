"use client";

// Types
import type { ReactElement } from "react";

// Geist provider
import { GeistProvider as GeistProviderTP, CssBaseline } from "@geist-ui/core";

// Other
import { useMediaQuery } from "@mantine/hooks";

import { useState, useEffect } from "react";

export default function GeistProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [themeType, setThemeType] = useState("light");
  const useDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    if (useDarkMode) {
      setThemeType("dark");
    } else {
      setThemeType("light");
    }
  }, [useDarkMode]);

  return (
    <>
      <GeistProviderTP themeType={themeType}>
        <CssBaseline />
        {children}
      </GeistProviderTP>
    </>
  );
}
