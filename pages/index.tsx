// Types
import type { ReactElement } from "react";

// SEO
import Head from "next/head";

// Routing
import Link from "next/link";

// Images
import Image from "next/image";
import imageChildCoding from "/public/images/child-code.webp";
import imageMountain from "/public/images/mountain.webp";

// First party components
import { ECLogo } from "components/brand/ECLogo";

// Hooks
import { useInterval } from "hooks/useInterval";

// Layouts
import Layout from "components/layouts/Layout";

import { useState } from "react";
import { IconCapture, IconWifiOff } from "@tabler/icons";

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

  return (
    <div className="flex flex-col py-2">
      <Head>
        <title>Hikium</title>
      </Head>

      <div className="flex flex-col space-y-48">
        <section className="flex flex-col space-y-10 px-5 lg:px-52">
          <div className="flex flex-col space-y-0">
            <div className="flex flex-row md:space-x-5">
              <h2
                style={{ fontSize: "5.5em" }}
                className="leading-none hidden md:flex"
              >
                The new Hikium
              </h2>
              <div className="hidden md:flex md:items-center md:justify-center ">
                <div className="w-20 h-20">
                  <ECLogo />
                </div>
              </div>
              {/* Mobile */}
              <h2
                style={{ fontSize: "5.5em" }}
                className="leading-none md:hidden"
              >
                The new Hikium EC
              </h2>
            </div>
            <h2 style={{ fontSize: "5.5em" }} className="leading-none">
              The elegance element
            </h2>
          </div>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-10">
            <p className="md:flex md:items-center md:justify-center">
              Free and priceless website building
            </p>
            {/* <div className="w-1/4">
              <Button>Open the App</Button>
            </div> */}
            <div className="w-fit">
              <div className="bg-black/10 dark:bg-white/10 px-5 py-2 font-display uppercase text-sm rounded-2xl">
                Coming Soon
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col space-y-0 mx-5 lg:mx-52 text-sm text-gray-600 dark:text-gray-400 lg:w-1/3">
          <p>Early development version. Features may change before release.</p>
        </section>
      </div>
    </div>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout manualMargin={true}>{page}</Layout>;
};
