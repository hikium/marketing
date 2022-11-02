// Types
import type { ReactElement, ReactNode } from "react";

// SEO
import Head from "next/head";

// First party components
import Card from "components/system/Card";

// Design
import { m, Variants } from "framer-motion";

// Layouts
import Layout from "components/layouts/Layout";

export default function MPage() {
  // Animations
  // From https://codesandbox.io/s/framer-motion-5-3-scroll-triggered-animations-2hbg5
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  function AnimatedBar() {
    return (
      <m.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <m.div
          className="w-2 h-full rounded-full"
          style={{ backgroundColor: "#8a679c" }}
          variants={cardVariants}
        />
      </m.div>
    );
  }

  function InitiativeDetails({ children }: { children: ReactNode }) {
    return (
      <div className="flex flex-row space-x-5 w-full">
        <AnimatedBar />
        <section className="w-full">
          <Card>
            <div className="flex flex-col space-y-10">{children} </div>
          </Card>
        </section>
        <AnimatedBar />
      </div>
    );
  }

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
        <section
          className="flex flex-col justify-between"
          style={{
            height: "75vh",
          }}
        >
          <div />
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-8 justify-center align-center">
            <m.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3, delay: 1 }}
              style={{ fontSize: "4em" }}
            >
              Hikium
            </m.h1>
            <m.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              style={{ backgroundColor: "#8a679c" }}
              className="flex px-8 py-1 rounded-3xl text-white w-fit"
            >
              <h1 style={{ fontSize: "4em" }}>M</h1>
            </m.span>
            <m.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3, delay: 1 }}
              style={{ fontSize: "4em" }}
            >
              Initiatives
            </m.h1>
          </div>
          <div className="flex flex-col space-y-5 md:flex-row md:justify-between md:space-y-0">
            <p className="text-xl">Open-source at Hikium</p>
            <m.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col space-y-2 md:flex-row md:space-x-5 md:space-y-0"
            >
              <p className="text-xl">M for metaverse</p>
              <p className="text-xl">M for tomorrow</p>
            </m.div>
          </div>
        </section>
        <section className="flex flex-col space-y-10">
          <p className="text-xl w-1/3">
            At Hikium, we're committed to building tomorrow's technologies
            today. We're taking them open-source, free and priceless for all.
          </p>
          <p className="text-xl w-1/3">They are the Hikium M Initiatives.</p>
        </section>
        <InitiativeDetails>
          <div className="flex flex-col space-y-2">
            <h2>Persistent storage data</h2>
            <h2>Packed with liberty</h2>
          </div>
          <p className="text-lg">
            Meet Hikium Storage Transfer, the way to transfer decentralised
            storage data on the web.
          </p>
          <p className="text-lg">No account Hikium Storage Transfer</p>
        </InitiativeDetails>
        <InitiativeDetails>
          <div className="flex flex-col space-y-2">
            <h2>DDC</h2>
          </div>
          <p className="text-lg">
            Meet Hikium Storage Transfer, the way to transfer decentralised
            storage data on the web.
          </p>
          <p className="text-lg">No account Hikium Storage Transfer</p>
        </InitiativeDetails>
        <InitiativeDetails>
          <div className="flex flex-col space-y-2">
            <h2>Responsive design</h2>
          </div>
          <p className="text-lg">
            Meet Hikium Storage Transfer, the way to transfer decentralised
            storage data on the web.
          </p>
          <p className="text-lg">No account Hikium Storage Transfer</p>
        </InitiativeDetails>
        <section className="flex flex-col space-y-0 text-sm text-gray-600 dark:text-gray-400">
          <p>Early development versions. Features may change before release.</p>
        </section>
      </main>
    </>
  );
}
MPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout manualMargin={false}>{page}</Layout>;
};
