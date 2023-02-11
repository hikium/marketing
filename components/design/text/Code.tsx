// Third party design
import { Code as GeistCode, CodeProps } from "@geist-ui/core";

/**
 * Display inline computer code, or a code block.
 *
 * Usage: in API docs, etc
 *
 * @public
 */
export default function Code({ children, block, name }: CodeProps) {
  return (
    <GeistCode block={block} name={name} classic>
      {children}
    </GeistCode>
  );
}
