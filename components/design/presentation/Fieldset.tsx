// Third party design
import {
  Fieldset as GeistFieldset,
  FieldsetProps,
  FieldsetTitleProps,
  FieldsetContentProps,
  FieldsetFooterProps,
} from "@geist-ui/core";

export function FieldsetTitle({ children }: FieldsetTitleProps) {
  return <GeistFieldset.Title>{children}</GeistFieldset.Title>;
}

export function FieldsetContent({ children }: FieldsetContentProps) {
  return <GeistFieldset.Content>{children}</GeistFieldset.Content>;
}

export function FieldsetFooter({ children }: FieldsetFooterProps) {
  return <GeistFieldset.Footer>{children}</GeistFieldset.Footer>;
}

export function Fieldset({ children }: FieldsetProps) {
  return <GeistFieldset>{children}</GeistFieldset>;
}
