// Types
import type { ReactElement } from "react";

// SEO
import Head from "next/head";

// Routing
import Link from "next/link";

// Layouts
import Layout from "components/layouts/Layout";

// First party design
import Button from "components/system/Button";
import SupplementaryText from "components/system/SupplementaryText";

// Third party design
import { IconLock, IconWifiOff } from "@tabler/icons";

// First party components
import BrandLogo from "components/brand/BrandLogo";

// Images
import Image from "next/image";
import imageChildThinking from "/public/images/child-canvas.webp";
import imageChildCoding from "/public/images/child-code.webp";
import imageCity from "/public/images/city.webp";

import { useEffect, useState, Suspense } from "react";
import { useInterval } from "hooks/useInterval";

export default function Home() {
  // Dynamic colours
  const filterNone = "";
  const filterHueRotate180 = "hue-rotate-180";
  const filterGreyscale = "grayscale";
  const filterSepia = "sepia";

  // Change the colour value of the string
  const [colourFiltersDemoIndex, setColourFiltersDemoIndex] = useState(0);
  const [colourFiltersDemo, setColourFiltersDemo] = useState(filterNone);
  const colourFiltersDemoColours = [
    filterNone,
    filterHueRotate180,
    filterGreyscale,
    filterSepia,
  ];

  // Every two seconds, go to the next colour
  useInterval(() => {
    setColourFiltersDemoIndex((colourFiltersDemoIndex + 1) % 4);
    setColourFiltersDemo(colourFiltersDemoColours[colourFiltersDemoIndex]);
  }, 2000);

  // "On" highlight colours
  const onBadgeHighlightYellow = "bg-highlight text-black";
  const onBadgeHighlightBlue = "bg-[#323cc1] text-white";
  const onBadgeHighlightOrange = "bg-[#ff8364] text-black";
  const onBadgeHighlightTeal = "bg-[#00ab8e] text-white";
  const onBadgeHighlightRed = "bg-[#c6007e] text-white";
  const [onBadgeHighlightIndex, setOnBadgeHighlightIndex] = useState(0);
  const [onBadgeHighlight, setOnBadgeHighlight] = useState(
    onBadgeHighlightYellow
  );
  const onBadgeHighlightOptions = [
    onBadgeHighlightYellow,
    onBadgeHighlightBlue,
    onBadgeHighlightOrange,
    onBadgeHighlightTeal,
    onBadgeHighlightRed,
  ];
  useInterval(() => {
    setOnBadgeHighlightIndex((colourFiltersDemoIndex + 1) % 5);
    setOnBadgeHighlight(onBadgeHighlightOptions[onBadgeHighlightIndex]);
  }, 2000);

  return (
    <>
      <Head>
        <title>Hikium</title>
        <meta
          name="description"
          content="Building the revolutionary Hikium Experience Composer website builder."
        />
        <meta name="og:title" content="Hikium" />
        <meta
          name="og:description"
          content="Building the revolutionary Hikium Experience Composer website builder"
        />
      </Head>

      <main className="flex flex-col space-y-48">
        <section className="flex flex-col space-y-10 px-5 lg:px-52 mt-32">
          <div className="flex flex-col space-y-2">
            <h1 className="text-7xl">
              Turn an idea{" "}
              <span className={`${onBadgeHighlight} rounded-full px-5`}>
                on
              </span>
              .
            </h1>
            <h1 className="text-7xl">All-new Hikium Tempo.</h1>
          </div>
          <p className="text-xl lg:w-2/5">
            Start with a template. Make it real.
          </p>
          <div className="flex lg:w-1/2">
            <Button isDisabled>Coming this year</Button>
          </div>
        </section>

        {/* <section className="flex flex-col space-y-10 lg:flex-row lg:space-x-20 lg:space-y-0 justify-center items-center">
          <div className="flex flex-col space-y-5">
            <IconWifiOff width={64} height={64} />
            <div className="flex flex-col space-y-0">
              <b className="text-xl">Work offline.</b>
              <p>
                Build anywhere, anytime.<sup>4</sup>
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <IconLock width={64} height={64} />
            <div className="flex flex-col space-y-0">
              <b className="text-xl">Private by design.</b>
              <p>
                We never see your data<sup>5</sup>, ever.
              </p>
            </div>
          </div>
        </section> */}

        {/* <hr /> */}

        {/* End of page call-to-action */}
        {/* <section className="flex flex-col space-y-10 justify-center items-center text-center">
          <div style={{ width: "63px", height: "63px" }}>
            <BrandLogo />
          </div>
          <div className="flex flex-col space-y-2">
            <h2>Tempo is near</h2>
            <p className="text-xl">The new way to create.</p>
          </div>
          <Button isDisabled>Coming in September</Button>
        </section> */}

        {/* <hr /> */}

        {/* Disclaimers */}
        <section className="flex flex-col space-y-0 mx-5 lg:mx-52 lg:w-1/3">
          <SupplementaryText>
            Early development version. Hikium Tempo is different from Hikium
            Experience Composer. Features may change before release.
          </SupplementaryText>
        </section>
      </main>
    </>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout manualMargin={true}>{page}</Layout>;
};
