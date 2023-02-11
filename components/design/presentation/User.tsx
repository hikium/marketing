// Third party design
import { User as GeistUser } from "@geist-ui/core";

interface UserProps {
  children?: string;
  src?: string;
  name: string;
  href?: string;
}

/**
 * Displays user profile data, like a social media profile.
 *
 * Usage: to show a profile picture, name, and provide social media links for that user
 *
 * @public
 */
export default function User({ children, src, name, href }: UserProps) {
  return (
    <GeistUser src={src} name={name}>
      {href ? (
        <GeistUser.Link href={href}>{children}</GeistUser.Link>
      ) : (
        children
      )}
    </GeistUser>
  );
}
