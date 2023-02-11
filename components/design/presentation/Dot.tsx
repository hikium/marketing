// Third party design
import { Dot as GeistDot, DotProps } from "@geist-ui/core";

/**
 * Describes if an operation was a success, if there is a warning, or if there was an error.
 *
 * Usage: attached to a specific operation
 *
 * @public
 */
export default function Dot({ children, type }: DotProps) {
  return <GeistDot type={type}>{children}</GeistDot>;
}
