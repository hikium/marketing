"use client";

// Third party design
import {
  ButtonGroup as GeistButtonGroup,
  ButtonGroupProps,
} from "@geist-ui/core";

// Accessibility
import { useMediaQuery } from "@mantine/hooks";

export default function ButtonGroup({ children, vertical }: ButtonGroupProps) {
  const useIncreasedContrast = useMediaQuery("(prefers-contrast: more)");

  return (
    <GeistButtonGroup
      vertical={vertical}
      type={useIncreasedContrast ? "secondary" : "default"}
      ghost={useIncreasedContrast}
    >
      {children}
    </GeistButtonGroup>
  );
}
