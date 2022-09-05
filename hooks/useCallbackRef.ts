// Forked from Chakra UI version 2.2.3
// https://github.com/chakra-ui/chakra-ui/blob/main/packages/hooks/src/use-callback-ref.ts

import { useCallback, useRef } from "react";
import { useSafeLayoutEffect } from "./useSafeLayoutEffect";

/**
 * React hook to persist any value between renders, but keeps it up-to-date if it changes.
 *
 * @param fn the function to persist
 * @param deps the function dependency list
 */
export function useCallbackRef<T extends (...args: any[]) => any>(
  fn: T | undefined,
  deps: React.DependencyList = []
): T {
  const ref = useRef(fn);

  useSafeLayoutEffect(() => {
    ref.current = fn;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(((...args) => ref.current?.(...args)) as T, deps);
}
