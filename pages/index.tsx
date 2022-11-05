// Types
import type { ReactElement } from "react";

// SEO
import Head from "next/head";

// First party components
import ECIcon from "components/brand/ECIcon";
// Add new brand icons here

// Design
import { IconArrowRight, IconBrandSpotify } from "@tabler/icons";
import { m } from "framer-motion";

// Layouts
import Layout from "components/layouts/Layout";
import Button from "components/system/Button";
import SupplementaryText from "components/system/SupplementaryText";

import { useState, Suspense } from "react";
import { useInterval } from "hooks/useInterval";
import Link from "next/link";
import MInitiativesIcon from "components/brand/MInitiativesIcon";
import Heading from "components/system/Heading";

export default function Home() {
  // Brand collaboration card animation
  const [isHeadingGreyed, setHeadingGreyed] = useState(false);
  const [showCultureHeading, setShowCultureHeading] = useState(false);
  useInterval(() => setHeadingGreyed(true), 1200);
  useInterval(() => setShowCultureHeading(true), 1750);

  return (
    <>
      <Head>
        <title>Hikium</title>
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
        {/* Headline marketing - our brand collaborations */}
        <section
          className="flex flex-col justify-between shadow-sm bg-black/5 dark:bg-white/5 p-20 mx-5"
          style={{
            borderTopLeftRadius: "2em",
            borderTopRightRadius: "2em",
            borderBottomLeftRadius: "2em",
            borderBottomRightRadius: "2em",
            height: "75vh",
          }}
        >
          <div className="flex flex-col space-y-0">
            <div className="flex flex-row md:space-x-5">
              <h2
                style={{ fontSize: "5.5em" }}
                className="leading-none hidden md:flex"
              >
                The new Hikium
              </h2>
              <div className="hidden md:flex md:items-center md:justify-center">
                <div className="w-20 h-20">
                  <ECIcon />
                </div>
              </div>
              {/* Mobile */}
              <h2
                style={{ fontSize: "2em" }}
                className="leading-none md:hidden"
              >
                The new Hikium EC
              </h2>
            </div>
            <div className="flex flex-row md:space-x-5">
              <h2
                style={{ fontSize: "5.5em" }}
                className="leading-none hidden md:flex"
              >
                Composes
              </h2>
              <Suspense
                fallback={
                  <h2
                    style={{ fontSize: "5.5em" }}
                    className="leading-none md:hidden"
                  >
                    Composes {showCultureHeading ? "culture" : "websites"}
                  </h2>
                }
              >
                {showCultureHeading ? (
                  <m.h2
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    style={{ fontSize: "5.5em" }}
                    className="leading-none hidden md:flex"
                  >
                    culture
                  </m.h2>
                ) : (
                  <m.h2
                    initial={{ scale: 1 }}
                    animate={{ scale: 0 }}
                    exit={{ scale: 1 }}
                    transition={{ delay: 1.6 }}
                    style={{
                      fontSize: "5.5em",
                      color: isHeadingGreyed ? "#9ca3af" : "inherit",
                    }}
                    className="leading-none hidden md:flex"
                  >
                    websites
                  </m.h2>
                )}
              </Suspense>
              {/* Mobile */}
              <h2
                style={{ fontSize: "2em" }}
                className="leading-none md:hidden"
              >
                Composes {showCultureHeading ? "culture" : "websites"}
              </h2>
            </div>
          </div>
          <div className="flex flex-col space-y-5 md:flex-row md:justify-between">
            <div className="flex flex-col md:flex-row space-y-2 md:space-x-5">
              {/* Album cover */}
              <div className="bg-black/25 dark:bg-white/25 h-36 w-36 rounded-2xl" />
              <div className="flex justify-center items-end">
                <Button icon={<IconBrandSpotify />}>Stream the Single</Button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-x-5 justify-center items-end">
              <SupplementaryText className="flex justify-center items-center text-end">
                Coming in 2023
              </SupplementaryText>
              <Button icon={<IconArrowRight />} isDisabled>
                Open the EC App
              </Button>
            </div>
          </div>
        </section>

        {/* Overview animation - TBC */}

        {/* Easy to use section */}
        <section>
          <Heading as="h2" className="text-red-400">
            Test
          </Heading>
        </section>

        {/* Code export */}
        <section></section>

        {/* No account */}
        <section></section>

        {/* Free */}
        <section></section>

        {/* Responsive design */}
        <section></section>

        {/* Product marketing will go here */}

        <section className="flex flex-col space-y-5 mx-5 lg:mx-52"></section>

        {/* End of page call-to-action */}
        <section className="flex flex-row justify-between mx-5 lg:mx-52">
          <div className="flex flex-row space-x-5 justify-center items-center">
            <div className="flex justify-center items-center">
              <div className="w-6 h-6">
                <ECIcon />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <p>Hikium Experience Composer website builder</p>
            </div>
          </div>
          {/* Replace with Open EC button when launched */}
          <span className="bg-black/5 dark:bg-white/5 px-5 rounded-full flex justify-center items-center text-sm font-display uppercase">
            Coming in 2023
          </span>
        </section>
        <section className="flex flex-col space-y-0 mx-5 lg:mx-52 text-sm text-gray-600 dark:text-gray-400 lg:w-1/3">
          <p>Early development version. Features may change before release.</p>
        </section>

        {/* M Marketing*/}

        <section className="flex flex-col space-y-5 mx-5 lg:mx-52">
          <div className="flex flex-row md:space-x-5 justify-center">
            <h2 className="leading-none hidden md:flex text-4xl">Hikium</h2>
            <div className="hidden md:flex md:items-center md:justify-center">
              <div className="w-10 h-10">
                <MInitiativesIcon />
              </div>
            </div>
            <h2 className="leading-none hidden md:flex text-4xl">
              Initiatives
            </h2>
            {/* Mobile */}
            <h2 style={{ fontSize: "2em" }} className="leading-none md:hidden">
              Hikium M Initiatives
            </h2>
          </div>
          <p className="text-center">M for metaverse. M for tomorrow.</p>
          <Link href="/m" passHref>
            <Button icon={<IconArrowRight />}>
              Discover open-source at Hikium
            </Button>
          </Link>
        </section>
      </main>
    </>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout manualMargin={true}>{page}</Layout>;
};
