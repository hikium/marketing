"use client";

// Third party design
import { Link as GeistLink } from "@geist-ui/core";

interface LinkProps {
  children: string;
  href: string;
  useNewTab?: boolean;
  icon?: boolean;
  block?: boolean;
  target?: string;
}
/**
 * Navigate the user to another screen (page), or to another website. Uses Next.js `<Link>` under the hood.
 *
 * Usage: in sidebars, footers, and inline
 *
 * @public
 */
export default function Link({
  children,
  href,
  useNewTab,
  icon,
  block,
}: LinkProps) {
  // Not working
  // return (
  //   <NextLink href={href} passHref>
  //     <GeistLink icon={icon} block={block} color={false}>
  //       {children}
  //     </GeistLink>
  //   </NextLink>
  // );

  return (
    <GeistLink
      href={href}
      target={useNewTab ? "_blank" : undefined}
      icon={icon}
      // @ts-ignore: not typed
      highlight={false}
    >
      {children}
    </GeistLink>
  );
}
