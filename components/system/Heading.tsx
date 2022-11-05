import { createElement } from "react";

interface HeadingProps {
  children: React.ReactNode;
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Product heading. Automatically supports custom fonts.
 *
 * @beta
 */
export default function Heading({ children, as }: HeadingProps) {
  // Return an element
  return createElement(as, { className: "text-xl md:text-4xl lg:text-7xl" }, [
    children,
  ]);
}
