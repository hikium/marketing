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
import Heading from "components/system/Heading";

// Third party design
import {
  IconArrowRight,
  IconBrandSpotify,
  IconCapture,
  IconLock,
  IconWifiOff,
} from "@tabler/icons";
import { m, Variants } from "framer-motion";

// First party components
import ECIcon from "components/brand/ECIcon";
import MInitiativesIcon from "components/brand/MInitiativesIcon";

// Images
import Image from "next/image";
import imageChildThinking from "/public/images/child-canvas.webp";
import imageChildCoding from "/public/images/child-code.webp";
import imageCity from "/public/images/city.webp";
import imageMountain from "/public/images/mountain.webp";

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
        // delay: 0.05,
      },
    },
  };

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
          className="flex flex-col justify-between shadow-sm bg-black/5 dark:bg-white/5 px-5 py-10 lg:px-20 lg:py-20 mx-0 lg:mx-5"
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
        {/* <section className="flex px-5 lg:px-52">
          <video
            autoPlay={true}
            loop
            controlsList="nodownload"
            style={{
              borderTopLeftRadius: "2em",
              borderTopRightRadius: "2em",
              borderBottomLeftRadius: "2em",
              borderBottomRightRadius: "2em",
            }}
            className="w-fit h-fit"
          >
            <source src="video/animation.mp4" type="video/mp4" />
          </video>
        </section> */}

        {/* Easy to use section */}
        <section
          className="flex flex-col space-y-10 lg:flex-row lg:justify-between lg:space-y-0 px-5 lg:px-52"
          style={{
            borderTopLeftRadius: "2em",
            borderTopRightRadius: "2em",
            borderBottomLeftRadius: "2em",
            borderBottomRightRadius: "2em",
          }}
        >
          <div className="hidden lg:flex">
            <Image
              src={imageChildThinking}
              priority
              alt="Child looking off to the side, thinking deeply"
              layout="fixed"
              width={500}
              height={800}
              style={{
                borderTopLeftRadius: "2em",
                borderTopRightRadius: "2em",
                borderBottomLeftRadius: "2em",
                borderBottomRightRadius: "2em",
              }}
            />
          </div>
          <div className="flex items-end">
            <div className="flex flex-col space-y-5">
              <h3 className="text-3xl">Compose with design.</h3>
              <p className="text-xl">It's a breeze.</p>
              <div className="flex flex-col space-y-0">
                <b className="text-xl">Drag and drop.</b>
                <p>Put text, links, photos, and more in their place.</p>
                <SupplementaryText>
                  Powered by Hikium canvas technologies
                </SupplementaryText>
              </div>
              <div className="flex flex-col space-y-0">
                <b className="text-xl">Beautiful components.</b>
                <p>Whatever the screen, they just fit.</p>
                <SupplementaryText>
                  Powered by Hikium Responsive Design
                </SupplementaryText>
              </div>
            </div>
          </div>
        </section>
        <section
          className="flex flex-col space-y-10 lg:flex-row lg:justify-between lg:space-y-0 px-5 lg:px-52"
          style={{
            borderTopLeftRadius: "2em",
            borderTopRightRadius: "2em",
            borderBottomLeftRadius: "2em",
            borderBottomRightRadius: "2em",
          }}
        >
          <div className="flex items-end">
            <div className="flex flex-col space-y-5">
              <h3 className="text-3xl">Deploy with code.</h3>
              <p className="text-xl">It's easy.</p>
              <div className="flex flex-col space-y-0">
                <b className="text-xl">
                  5<sup>th</sup> generation content code.<sup>1</sup>
                </b>
                <p>The living standard.</p>
              </div>
              <div className="flex flex-col space-y-0">
                <b className="text-xl">
                  ECMAScript® 2022 logic code.<sup>2</sup>
                </b>
                <p>The international standard.</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex">
            <Image
              src={imageChildCoding}
              alt="Child looking at code"
              layout="fixed"
              width={500}
              height={800}
              style={{
                borderTopLeftRadius: "2em",
                borderTopRightRadius: "2em",
                borderBottomLeftRadius: "2em",
                borderBottomRightRadius: "2em",
              }}
            />
          </div>
        </section>

        {/* Code export */}
        <section
          className="flex flex-col space-y-20 shadow-sm bg-black text-white px-5 py-10 lg:px-20 lg:py-20 mx-0 lg:mx-5"
          style={{
            borderTopLeftRadius: "2em",
            borderTopRightRadius: "2em",
            borderBottomLeftRadius: "2em",
            borderBottomRightRadius: "2em",
          }}
        >
          <h3 className="text-5xl">
            Portability.
            <br />
            Revolutionary.
          </h3>
          <div className="flex flex-col space-y-10 lg:flex-row lg:justify-between lg:space-y-0">
            <p className="text-xl lg:w-1/3">
              <b>You own your code.</b> Export your website to only 3 files
              <sup>3</sup> and take your code to any deployment platform.
            </p>
            <div className="hidden lg:flex">
              <Image
                src={imageCity}
                width={600}
                height={400}
                style={{
                  borderTopLeftRadius: "2em",
                  borderTopRightRadius: "2em",
                  borderBottomLeftRadius: "2em",
                  borderBottomRightRadius: "2em",
                }}
              />
            </div>
          </div>
          <div className="flex justify-start">
            <div className="flex flex-col space-y-5 lg:w-1/3">
              <p className="text-xl">
                <b>Never obsolete.</b> Because Hikium EC only builds websites,
                you choose the deployment platform and when it's time to
                upgrade.
              </p>
            </div>
          </div>
        </section>

        {/* Free */}
        <section className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-20 mx-5 lg:mx-52">
          <div className="flex flex-col space-y-2">
            <Heading as="h2">Free. Priceless.</Heading>
          </div>
          <div className="flex lg:justify-center lg:items-center">
            <p className="text-xl">No cost, never and ever.</p>
          </div>
        </section>

        <section
          className="flex flex-col space-y-20 shadow-sm bg-black/5 dark:bg-white/5 px-5 py-10 lg:px-20 lg:py-20 mx-0 lg:mx-5"
          style={{
            borderTopLeftRadius: "2em",
            borderTopRightRadius: "2em",
            borderBottomLeftRadius: "2em",
            borderBottomRightRadius: "2em",
          }}
        >
          <h3 className="text-5xl">
            Science.
            <br />
            It makes brilliance.
          </h3>
          <div className="flex flex-col space-y-10 lg:flex-row lg:justify-between lg:space-y-0">
            <video
              autoPlay={true}
              loop
              controlsList="nodownload"
              width={700}
              height={1400}
              style={{
                borderTopLeftRadius: "2em",
                borderTopRightRadius: "2em",
                borderBottomLeftRadius: "2em",
                borderBottomRightRadius: "2em",
              }}
              className={colourFiltersDemo}
            >
              <source src="images/colour.mp4" type="video/mp4" />
            </video>
            <p className="text-xl lg:w-1/3">
              <b>View the hue the whole way around.</b> Rotate and turn colours
              with filters.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <div className="flex flex-col space-y-5 lg:w-1/3">
              <p className="text-xl">
                <b>Proximity algorithms ahead.</b> Hikium EC detects when things
                are too close.
              </p>
              <p className="text-xl">
                <b>Your contrast copilot.</b> Raw colour contrast ratios,
                calculated on the fly.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 px-5 lg:px-52">
          <div className="flex flex-col space-y-5 lg:w-1/3">
            <IconWifiOff width={64} height={64} />
            <div className="flex flex-col space-y-0">
              <b className="text-xl">Work offline.</b>
              <p>
                Compose anywhere, anytime.<sup>4</sup>
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 lg:w-1/3">
            <IconLock width={64} height={64} />
            <div className="flex flex-col space-y-0">
              <b className="text-xl">Private by design.</b>
              <p>
                Your data<sup>5</sup> never leaves your device.
                <br /> We never see it.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 lg:w-1/3">
            <div style={{ width: "63px", height: "63px" }}>
              <MInitiativesIcon />
            </div>
            <div className="flex flex-col space-y-0">
              <b className="text-xl">Open-source at Hikium.</b>
              <p>
                The M Initiatives. Open-source, for the metaverse and beyond.
              </p>
            </div>
            <Link href="/m" passHref>
              <Button icon={<IconArrowRight />}>
                Discover open-source at Hikium
              </Button>
            </Link>
          </div>
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
              <p>
                Hikium Experience Composer website builder{" "}
                <span className="bg-black/5 dark:bg-white/5 ml-2 px-2 rounded-full inline-block lg:hidden justify-center items-center text-sm font-display uppercase">
                  Coming in 2023
                </span>
              </p>
            </div>
          </div>
          {/* Replace with Open EC button when launched */}
          <span className="bg-black/5 dark:bg-white/5 px-5 rounded-full hidden lg:flex justify-center items-center text-sm font-display uppercase">
            Coming in 2023
          </span>
        </section>

        {/* Disclaimers */}
        <section className="flex flex-col space-y-0 mx-5 lg:mx-52 lg:w-1/3">
          <SupplementaryText>
            Early development version. Features may change before release.
          </SupplementaryText>
          <SupplementaryText>
            Some media from{" "}
            <Link href="/legal/attributions">our stock media partners</Link>.
          </SupplementaryText>
          <SupplementaryText>
            <ol className="list list-decimal pl-5">
              <li>
                Exported code compatible with the HTML Living Standard
                specification, a subset of HTML5.
              </li>
              <li>
                Exported code compatible with ECMA-262, 13th edition, June 2022.
                Actual implementation may differ from specification. ECMAScript®
                is a registered trademark of Ecma International.
              </li>
              <li>
                For websites with one (1) page and no images. Excludes EC files.
              </li>
              <li>
                Internet connection required to enable offline use. Compatible
                software required. Some features require an Internet connection.
              </li>
              <li>
                "Your data" means Web Storage.{" "}
                <Link href="/legal/privacy">Privacy Statement...</Link>
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
