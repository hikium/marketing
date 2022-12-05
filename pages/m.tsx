// Types
import type { ReactElement } from "react";

// SEO
import Head from "next/head";

// Layouts
import Layout from "components/layouts/Layout";
import MInitiativesIcon from "components/brand/MInitiativesIcon";

export default function MPage() {
  // Animations
  // From https://codesandbox.io/s/framer-motion-5-3-scroll-triggered-animations-2hbg5
  // const cardVariants: Variants = {
  //   offscreen: {
  //     y: 300,
  //   },
  //   onscreen: {
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       bounce: 0.4,
  //       duration: 0.8,
  //     },
  //   },
  // };
  // function AnimatedBar() {
  //   return (
  //     <m.div
  //       className="card-container"
  //       initial="offscreen"
  //       whileInView="onscreen"
  //       viewport={{ once: true, amount: 0.8 }}
  //     >
  //       <m.div
  //         className="w-2 h-full rounded-full"
  //         style={{ backgroundColor: "#8a679c" }}
  //         variants={cardVariants}
  //       />
  //     </m.div>
  //   );
  // }

  // function InitiativeDetails({ children }: { children: ReactNode }) {
  //   return (
  //     <div className="flex flex-row space-x-5 w-full">
  //       <AnimatedBar />
  //       <section className="w-full">
  //         <Card>
  //           <div className="flex flex-col space-y-10">{children} </div>
  //         </Card>
  //       </section>
  //       <AnimatedBar />
  //     </div>
  //   );
  // }

  return (
    <>
      <Head>
        <title>Hikium M Initiatives</title>
        <meta
          name="description"
          content="Open-source at Hikium. We're making tomorrow's technology free and priceless for all."
        />
        <meta name="og:title" content="Hikium M Initiatives" />
        <meta name="og:description" content="Open-source at Hikium" />
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
            <h1 style={{ fontSize: "4em" }}>Hikium</h1>
            <span className="flex justify-center items-center">
              <span className="w-20 h-20">
                <MInitiativesIcon />
              </span>
            </span>
            <h1 style={{ fontSize: "4em" }}>Initiatives</h1>
          </div>
          <div className="flex flex-col space-y-5 md:flex-row md:justify-between md:space-y-0">
            <p className="text-xl">Open-source at Hikium</p>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-5 md:space-y-0">
              <p className="text-xl">M for metaverse</p>
              <p className="text-xl">M for tomorrow</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col space-y-5 text-xl lg:w-1/3">
          <p>
            At Hikium, we're committed to building tomorrow's technologies
            today. We're making them open-source, free and priceless for all.
          </p>
          <p>They are the Hikium M Initiatives.</p>
        </section>
        {/* <InitiativeDetails>
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
            <h2>Hikium DDC</h2>
          </div>
          <p className="text-lg">
            The magic behind Hikium EC is now avalible to anyone, to be used anywhere.
          </p>
          <p className="text-lg">No account Hikium Storage Transfer</p>
        </InitiativeDetails>
        <InitiativeDetails>
          <div className="flex flex-col space-y-2">
            <h2>Hikium Responsive Design</h2>
          </div>
          <p className="text-lg">
            Hikium Responsive Design keeps your site looking amazing, no matter what screen size or device it's being viewed on.
          </p>
          <p className="text-lg">Hikium RD uses three unique breakpoints - mobile, tablet, and desktop.</p>
        </InitiativeDetails> */}
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
