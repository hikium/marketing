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

  // Feature card animations
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

        {/* Homepage Video */}
        {/* <section></section> */}

        {/* Easy to use section */}
        <section className="flex flex-col space-y-5 md:flex-row md:space-x-10 md:space-y-0 mx-5 lg:mx-52">
          <Heading as="h2" className="w-1/3">
            Fast. Easy. Simple.
          </Heading>
          <div className="flex flex-col space-y-5">
            <p>Extraordinarily easy to use.</p>
            <p>
              Powered by Hikium Drag+Drop Code and Responsive Design
              Technologies, creating an element of elegance for the web has
              never been this easy.
            </p>
          </div>
        </section>

        {/* Code export */}
        <m.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <m.section
            variants={cardVariants}
            className="flex flex-col space-y-20 shadow-sm bg-black text-white p-20 mx-5"
            style={{
              borderTopLeftRadius: "2em",
              borderTopRightRadius: "2em",
              borderBottomLeftRadius: "2em",
              borderBottomRightRadius: "2em",
            }}
          >
            <div className="flex flex-col space-y-5">
              <Heading as="h2" className="">
                Portability.
              </Heading>
              <Heading as="h2" className="">
                Revolutionary.
              </Heading>
            </div>
            <div className="flex flex-col space-y-2">
              <p>With Hikium EC, your code is yours, forever.</p>
              <p>
                Export your website to only 3 files<sup>1</sup> and take your
                code to any deployment platform. Because EC only builds
                websites, you choose the deployment platform and you choose when
                it's time to upgrade.
              </p>
              <p>
                <b>5th generation content code</b> unlocks the media and
                accessibility features of the future. And with{" "}
                <b>ECMAScript 2022 international standard</b>
                <sup>2</sup> compatible logic code, it just works, today and
                tomorrow.
              </p>
            </div>
          </m.section>
        </m.div>

        {/* No account */}
        <section className="flex flex-col space-y-10 mx-5 lg:mx-52">
          <div className="flex flex-col space-y-2">
            <Heading as="h2">Hikium EC minds it's own business.</Heading>
            <Heading as="h2">Not yours.</Heading>
          </div>
          <div className="flex flex-col space-y-2">
            <p>
              Access the full potential of Hikium EC's creative limits, all
              without leaking your data. How can we promise that?
            </p>
            <p>
              Because we don't have your data in the first place. Hikium EC is
              the first website builder on the planet to offer a full suite of
              website creation tools, without any sign up required. Even your
              website data doesn't leave your device. With Hikium Storage
              Transfer, not one byte of your website leaves your device. It's
              yours, and your's alone.
            </p>
            <p></p>
          </div>
        </section>

        {/* Free */}
        <section className="flex flex-col space-y-10 mx-5 lg:mx-52">
          <div className="flex flex-col space-y-2">
            <Heading as="h2">Free. Priceless.</Heading>
          </div>
          <div className="flex flex-col space-y-2">
            <p>No sign-in. No cost.</p>
            <p>Access the power of Hikium EC without paying a cent.</p>
          </div>
        </section>

        {/* Responsive design */}
        <section className="flex flex-col space-y-10 mx-5 lg:mx-52">
          <div className="flex flex-col space-y-2">
            <Heading as="h2">3 breakpoints.</Heading>
            <Heading as="h2">1 technology.</Heading>
          </div>
          <p>
            With Hikium Responsive Design, building websites that look amazing
            on all devices is no longer a struggle. Simply select your
            breakpoint and design according to the screen size. And the best
            part? Responsive Design is completely open-source and available to
            everyone, everywhere.
          </p>
        </section>

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

        {/* M Marketing */}
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

        {/* Disclaimers */}
        <section className="flex flex-col space-y-0 mx-5 lg:mx-52 lg:w-1/3">
          <SupplementaryText>
            Early development version. Features may change before release.
          </SupplementaryText>
          <SupplementaryText>
            <ol className="list list-decimal pl-5">
              <li>
                For websites without images. Excludes EC application files.
              </li>
              <li>
                Compatible with ECMA-262, 13th edition, June 2022. ECMAScript®
                is a registered trademark of Ecma International.
              </li>
            </ol>
          </SupplementaryText>
        </section>

      </main>
    </>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout manualMargin={true}>{page}</Layout>;
};
