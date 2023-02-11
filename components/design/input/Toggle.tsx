// "use client";

// Third party design
import { Checkbox as GeistCheckbox, CheckboxProps } from "@geist-ui/core";

/**
 * Changes a boolean state.
 *
 * Usage: for enabling/disabling settings
 *
 * @public
 */
export default function Toggle({
  children,
  checked,
  defaultChecked,
  type,
  disabled,
  onClick,
}: CheckboxProps) {
  return (
    <GeistCheckbox
      checked={checked}
      defaultChecked={defaultChecked}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </GeistCheckbox>
  );
}
