// Third party design
import { Note as GeistNote, NoteProps } from "@geist-ui/core";

/**
 * Display a note, success message, warning message, or error message.
 *
 * Usage: in connection with particular operations or content
 *
 * @public
 */
export default function Note({ children, type, label }: NoteProps) {
  return (
    <GeistNote type={type} label={type === "error" ? false : label}>
      {children}
    </GeistNote>
  );
}
