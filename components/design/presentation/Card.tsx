// Third party design
import { Card as GeistCard, CardProps } from "@geist-ui/core";

// Accessibility
import { useMediaQuery } from "@mantine/hooks";

export default function Card({ children, type }: CardProps) {
  const useIncreasedContrast = useMediaQuery("(prefers-contrast: more)");

  return (
    <GeistCard
      type={type ? type : useIncreasedContrast ? "secondary" : "default"}
    >
      {children}
    </GeistCard>
  );
}
