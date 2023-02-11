// Third party design
import { Text as GeistText, TextProps } from "@geist-ui/core";

// Accessibility
import { useMediaQuery } from "@mantine/hooks";

export default function Text({
  // Not using `del` prop
  children,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  small,
  span,
  i,
  em,
  b,
  blockquote,
  type,
  onClick,
}: TextProps) {
  const useIncreasedContrast = useMediaQuery("(prefers-contrast: more)");
  const accessibleType =
    type === "secondary"
      ? useIncreasedContrast
        ? "default"
        : "secondary"
      : type === "warning"
      ? useIncreasedContrast
        ? "default"
        : "warning"
      : type
      ? type
      : "default";

  return (
    <GeistText
      h1={h1}
      h2={h2}
      h3={h3}
      h4={h4}
      h5={h5}
      h6={h6}
      small={small}
      i={i}
      span={span}
      em={em}
      b={b}
      blockquote={blockquote}
      type={accessibleType}
      onClick={onClick}
    >
      {children}
    </GeistText>
  );
}
