// Third party design
import { Tag as GeistTag, TagProps } from "@geist-ui/core";

/**
 * Display a keyword.
 *
 * Usage: in connection with particular operations or content
 *
 * @public
 */
export default function Tag({ children, type }: TagProps) {
  return <GeistTag type={type}>{children}</GeistTag>;
}
