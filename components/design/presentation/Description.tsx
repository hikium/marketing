// Third party design
import {
  Description as GeistDescription,
  DescriptionProps,
} from "@geist-ui/core";

/**
 * Describes a section.
 *
 * Usage: to describe a section that is a part of a larger component (e.g. a "keyboard" section in an "accessibility settings" page)
 *
 * @public
 */
export default function Description({ title, content }: DescriptionProps) {
  return <GeistDescription title={title} content={content} />;
}
