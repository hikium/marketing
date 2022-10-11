// Types
import { ReactElement, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

// Global styles
import "../styles/globals.css";
import "@fontsource/dosis/700.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/600.css";

// Global providers
import { MotionConfig, LazyMotion, domAnimation } from "framer-motion";
import * as ackeeTracker from "ackee-tracker";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function Application({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  // Analytics
  useEffect(() => {
    ackeeTracker
      .create("https://ackee.hikium.com")
      .record("2e846c93-9ead-47d0-b8dc-1e9cc57d2520");
  });

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <div className="bg-gray-50 dark:bg-black text-black dark:text-white">
          {getLayout(<Component {...pageProps} />)}
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}
