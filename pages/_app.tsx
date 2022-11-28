// Types
import type { ReactElement } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

// Global styles
import "../styles/globals.css";
import "@fontsource/dosis/700.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/600.css";

// Global providers
import { MotionConfig, LazyMotion, domAnimation } from "framer-motion";
import { useRouter } from "next/router";
import useAckee from "lib/useAckee";

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

  const { pathname } = useRouter();
  useAckee(
    pathname,
    {
      server: "https://ackee.hikium.com",
      domainId: "2e846c93-9ead-47d0-b8dc-1e9cc57d2520",
    },
    {
      detailed: true,
      ignoreLocalhost: true,
      ignoreOwnVisits: false,
    }
  );

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
