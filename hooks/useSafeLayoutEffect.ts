// Forked from https://github.com/chakra-ui/chakra-ui/blob/main/packages/hooks/src/use-safe-layout-effect.ts

// Device detection
import { isBrowser } from "react-device-detect";

import { useEffect, useLayoutEffect } from "react";

/**
 * Uses device detection to check whether to use `useLayoutEffect` or `useEffect`
 */
export const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
