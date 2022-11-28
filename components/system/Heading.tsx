import { createElement } from "react";

interface HeadingProps {
  children: React.ReactNode;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

/**
 * Product heading. Automatically supports custom fonts.
 *
 * @beta
 */
export default function Heading({ children, as, className }: HeadingProps) {
  // Allow for additional classes to be applied
  const internalClassNames = `${className} text-5xl md:text-6xl lg:text-7xl`;

  // Return an element
  return createElement(as, { className: internalClassNames }, [children]);
}
