// Routing
import Link from "next/link";

// Design
import { IconExternalLink } from "@tabler/icons";

interface ExternalLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

/**
 * Link with a `_target="blank"` and an icon indicating an external link. Uses Next.js `<Link>` internally.
 *
 * @remarks A `<a>`.
 *
 * @public
 */
export default function ExternalLink({
  children,
  href,
  className,
}: ExternalLinkProps) {
  return (
    <Link href={href} passHref>
      <a target="_blank" className={className}>
        <span className="underline underline-offset-4">{children}</span>
        {/* Center the icon with the parent*/}
        <span className="flex items-center justify-center">
          <IconExternalLink width={12} height={12} />
        </span>
      </a>
    </Link>
  );
}
