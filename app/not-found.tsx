// First party design
import { Note } from "../components/design";

export default function NotFound() {
  return (
    <Note type="error">
      This page can't be found. Go Home or check the URL for spelling mistakes.
      (404)
    </Note>
  );
}
