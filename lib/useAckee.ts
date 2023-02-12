// Forked from https://github.com/TristonWasik/use-ackee/tree/ts-conversion-and-action-support
// 27 October 2022

import { useMemo, useEffect } from "react";
import * as ackeeTracker from "ackee-tracker";

const isBrowser = typeof window !== "undefined";

export var ackeeInstance: ackeeTracker.AckeeInstance | undefined;

/**
 * Use Ackee in React.
 * Creates an instance once and a new record every time the pathname changes.
 * Safely no-ops during server-side rendering.
 * @param {String} pathname - Current path.
 * @param {Object} environment - Object containing the URL of the Ackee server and the domain id.
 * @param {ackeeTracker.TrackingOptions} options - Ackee options.
 */
export const useAckee = (
  pathname: string,
  environment: { server: string; domainId: string },
  options: ackeeTracker.TrackingOptions = {}
) => {
  ackeeInstance = useMemo(() => {
    if (isBrowser === false) return;

    return ackeeTracker.create(environment.server, options);
  }, [environment.server, options]);

  useEffect(() => {
    if (!ackeeInstance) {
      console.warn(
        "Skipped record creation because useAckee has been called in a non-browser environment"
      );
      return;
    }

    if (!pathname.length) {
      console.warn(
        "Skipped record creation because useAckee has been called without pathname"
      );
      return;
    }

    const attributes = ackeeTracker.attributes(options.detailed);
    const url = new URL(pathname, location.toString());

    return ackeeInstance.record(environment.domainId, {
      ...attributes,
      siteLocation: url.href,
    }).stop;
  }, [options.detailed, pathname, environment.domainId]);
};

export default useAckee;
