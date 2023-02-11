"use client";

// Third party design
import {
  ButtonDropdown as GeistButtonDropdown,
  ButtonDropdownProps,
  ButtonDropdownItemProps,
} from "@geist-ui/core";

// Accessibility
import { useMediaQuery } from "@mantine/hooks";

export function ButtonDropdownItem({
  children,
  main,
}: ButtonDropdownItemProps) {
  return (
    <GeistButtonDropdown.Item main={main}>{children}</GeistButtonDropdown.Item>
  );
}

export function ButtonDropdown({
  children,
  disabled,
  loading,
}: ButtonDropdownProps) {
  const useIncreasedContrast = useMediaQuery("(prefers-contrast: more)");

  return (
    <GeistButtonDropdown
      disabled={disabled}
      loading={loading}
      type={useIncreasedContrast ? "secondary" : "default"}
    >
      {children}
    </GeistButtonDropdown>
  );
}
