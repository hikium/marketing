// "use client";

// Third party design
import {
  Input as GeistInput,
  InputPasswordProps,
  InputProps,
} from "@geist-ui/core";

export function InputPassword({
  children,
  value,
  initialValue,
  placeholder,
  type,
  disabled,
  clearable,
  label,
  labelRight,
  onChange,
}: InputPasswordProps) {
  return (
    <GeistInput.Password
      value={value}
      initialValue={initialValue}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      readOnly={disabled}
      clearable={clearable}
      label={label}
      labelRight={labelRight}
      onChange={onChange}
      w="100%"
    >
      {children}
    </GeistInput.Password>
  );
}
/**
 * Text input box.
 *
 * Usage: for single-line text input
 *
 * @public
 */
export function Input({
  children,
  value,
  initialValue,
  placeholder,
  type,
  disabled,
  clearable,
  label,
  labelRight,
  onChange,
}: InputProps) {
  return (
    <GeistInput
      value={value}
      initialValue={initialValue}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      readOnly={disabled}
      clearable={clearable}
      label={label}
      labelRight={labelRight}
      onChange={onChange}
      w="100%"
    >
      {children}
    </GeistInput>
  );
}
