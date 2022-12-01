// Types
import type { ReactElement } from "react";

// SEO
import Head from "next/head";

// Routing
import Link from "next/link";

// First party components
import ECIcon from "components/brand/ECIcon";
import MInitiativesIcon from "components/brand/MInitiativesIcon";
import Button from "components/system/Button";
import SupplementaryText from "components/system/SupplementaryText";
import Heading from "components/system/Heading";

// Design
import { IconArrowRight, IconBrandSpotify } from "@tabler/icons";
import { m, Variants } from "framer-motion";

// Layouts
import Layout from "components/layouts/Layout";

import { useState, Suspense } from "react";
import { useInterval } from "hooks/useInterval";

export default function Home() {
  // Brand collaboration card animation
  const [isHeadingGreyed, setHeadingGreyed] = useState(false);
  const [showCultureHeading, setShowCultureHeading] = useState(false);
  useInterval(() => setHeadingGreyed(true), 1200);
  useInterval(() => setShowCultureHeading(true), 1750);

  // Feature card animations0
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
        delay: 0.1,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Hikium EC</title>
        <meta
          name="description"
          content="The element of element of the web. Building the revolutionary Hikium Experience Composer website builder."
        />
        <meta name="og:title" content="Hikium" />
        <meta
          name="og:description"
          content="The element of element of the web"
        />
      </Head>

      <main className="flex flex-col space-y-48">

      <video
              autoPlay={true}
              loop
              controlsList="nodownload"
              width={900}
              height={1600}
              style={{
                borderTopLeftRadius: "2em",
                borderTopRightRadius: "2em",
                borderBottomLeftRadius: "2em",
                borderBottomRightRadius: "2em",
              }}
              className="ml-auto mr-auto"
            >
              <source src="video/animation.mp4" type="video/mp4" />
            </video>

      </main>
    </>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout manualMargin={true}>{page}</Layout>;
};
