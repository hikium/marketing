"use client";

// Third party design
import { Loading as GeistLoading, LoadingProps } from "@geist-ui/core";

/**
 * Three-dot loading animation
 *
 * Usage: when a loading operation blocks user interaction
 *
 * @public
 */
export default function Loading({ children, spaceRatio }: LoadingProps) {
  return children ? (
    <GeistLoading spaceRatio={spaceRatio}>{children}</GeistLoading>
  ) : (
    <GeistLoading spaceRatio={spaceRatio} />
  );
}
