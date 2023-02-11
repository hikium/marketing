"use client";

// Third party design
import {
  Grid as GeistGrid,
  GridProps,
  GridContainerProps,
} from "@geist-ui/core";

export function GridContainer({
  children,
  gap,
  wrap,
  justify,
  alignItems,
  alignContent,
  direction,
  xs,
  sm,
  md,
  lg,
  xl,
}: GridContainerProps) {
  return (
    <GeistGrid.Container
      gap={gap}
      wrap={wrap}
      justify={justify}
      alignItems={alignItems}
      alignContent={alignContent}
      direction={direction}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      {children}
    </GeistGrid.Container>
  );
}

export function Grid({
  children,
  justify,
  alignItems,
  alignContent,
  direction,
  xs,
  sm,
  md,
  lg,
  xl,
}: GridProps) {
  return (
    <GeistGrid
      justify={justify}
      alignItems={alignItems}
      alignContent={alignContent}
      direction={direction}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      {children}
    </GeistGrid>
  );
}
