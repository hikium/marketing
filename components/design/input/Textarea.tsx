// "use client";

// Third party design
import { Textarea as GeistTextarea, TextareaProps } from "@geist-ui/core";

/**
 * Text input box.
 *
 * Usage: for long-form text input
 *
 * @public
 */
export function Textarea({
  children,
  value,
  initialValue,
  placeholder,
  type,
  disabled,
  onChange,
}: TextareaProps) {
  return (
    <GeistTextarea
      value={value}
      initialValue={initialValue}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      readOnly={disabled}
      onChange={onChange}
      w="100%"
      h="100%"
    >
      {children}
    </GeistTextarea>
  );
}
