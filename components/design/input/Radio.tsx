"use client";

// Third party design
import {
  Radio as GeistRadio,
  RadioProps,
  RadioGroupProps,
  RadioDescriptionProps,
} from "@geist-ui/core";

export function RadioDescription({ children }: RadioDescriptionProps) {
  return <GeistRadio.Description>{children}</GeistRadio.Description>;
}

export function RadioGroup({
  children,
  initialValue,
  value,
  useRow,
  disabled,
  onChange,
}: RadioGroupProps) {
  return (
    <GeistRadio.Group
      initialValue={initialValue}
      value={value}
      useRow={useRow}
      disabled={disabled}
      onChange={onChange}
    >
      {children}
    </GeistRadio.Group>
  );
}

export function Radio({
  children,
  value,
  type,
  disabled,
  onClick,
}: RadioProps) {
  return (
    <GeistRadio value={value} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </GeistRadio>
  );
}
