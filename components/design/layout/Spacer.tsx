// Third party design
import { Spacer as GeistSpacer } from "@geist-ui/core";

interface SpacerProps {
  width?: number;
  height?: number;
}
export default function Spacer({ width, height }: SpacerProps) {
  return <GeistSpacer w={width} h={height} />;
}
