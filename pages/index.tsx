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
          </div>
          <p className="text-xl lg:w-2/5">
            Start with a template. Make it real. All-new Hikium Tempo website
            builder.
          </p>
          <div className="flex lg:w-1/2">
            <Button isDisabled>Coming in September</Button>
          </div>
        </section>

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
          className="flex flex-col space-y-20 shadow-sm bg-black lg:bg-[#0D1015] text-white px-5 py-10 lg:px-20 lg:py-20 mx-0 lg:mx-5"
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
                aria-label="Cityscape at night"
              />
            </div>
          </div>
          <div className="flex justify-start">
            <div className="flex flex-col space-y-5 lg:w-1/3">
              <p className="text-xl">
                <b>Never obsolete.</b> Because we only create, you choose the
                deployment platform and when it's time to upgrade.
              </p>
            </div>
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
              <source src="video/colour.mp4" type="video/mp4" />
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

        <section className="flex flex-col space-y-10 lg:flex-row lg:space-x-20 lg:space-y-0 justify-center items-center">
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
        </section>

        <hr />

        {/* End of page call-to-action */}
        <section className="flex flex-col space-y-10 justify-center items-center text-center">
          <div style={{ width: "63px", height: "63px" }}>
            <BrandLogo />
          </div>
          <div className="flex flex-col space-y-2">
            <h2>Tempo is near</h2>
            <p className="text-xl">The new way to create.</p>
          </div>
          <Button isDisabled>Coming in September</Button>
        </section>

        <hr />

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
                For websites with one (1) page and no images. Excludes app
                files.
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
