"use client";

// Third party design
import {
  Button as GeistButton,
  ButtonProps as GeistButtonProps,
} from "@geist-ui/core";

// Accessibility
import { useMediaQuery } from "@mantine/hooks";

interface ButtonProps {
  children?: GeistButtonProps["children"];
  auto?: GeistButtonProps["auto"];
  type?: GeistButtonProps["type"];
  disabled?: GeistButtonProps["disabled"];
  loading?: GeistButtonProps["loading"];
  icon?: GeistButtonProps["icon"];
  onClick?: GeistButtonProps["onClick"];
  htmlType?: GeistButtonProps["htmlType"];
  scale?: number;
}

export default function Button({
  children,
  auto,
  type,
  disabled,
  loading,
  icon,
  onClick,
  htmlType,
  scale,
}: ButtonProps) {
  const useIncreasedContrast = useMediaQuery("(prefers-contrast: more)");

  return (
    <GeistButton
      auto={auto}
      type={type ? type : useIncreasedContrast ? "secondary" : "default"}
      ghost={useIncreasedContrast}
      disabled={disabled}
      loading={loading}
      icon={icon}
      onClick={onClick}
      htmlType={htmlType}
      scale={scale}
    >
      {children}
    </GeistButton>
  );
}
