import { m } from "framer-motion";

interface LoadingBarProps {
  useSmall?: boolean;
}

/**
 * Indicates a loading state
 *
 * @remarks A `<div>`.
 *
 * @public
 */
export default function LoadingBar({ useSmall }: LoadingBarProps) {
  return (
    <m.div
      className={`flex ${
        useSmall ? "w-12" : "w-24"
      } h-fit self-center rounded-full`}
    >
      <m.div
        className="w-3 h-3 rounded-full bg-black dark:bg-white"
        initial={{ x: 0 }}
        // Animate from left to right, then left
        animate={{
          x: [0, useSmall ? 36 : 72, 0],
        }}
        transition={{ repeat: Infinity }}
      />
    </m.div>
  );
}
