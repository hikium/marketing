// Types
import { ReactElement } from "react";

// SEO
import Head from "next/head";

// Routing
import Link from "next/link";

// First party components
import Card from "components/system/Card";

// Design
import { IconGavel } from "@tabler/icons";

// Layouts
import Layout from "components/layouts/Layout";
import Button from "components/system/Button";

export default function Legal() {
  return (
    <div className="flex flex-col py-2">
      <Head>
        <title>Hikium Legal</title>
        <meta
          name="description"
          content="Important legal documents and information for Hikium projects, products, and services."
        />
        <meta name="og:title" content="Hikium Legal" />
        <meta
          name="og:description"
          content="Legal information for Hikium projects, products, and services"
        />
      </Head>

      <div className="flex flex-col space-y-20">
        {/* <header>
          <Card className="h-80 flex flex-col justify-between">
            <div className="flex flex-col space-y-5">
              <h1>Hikium Legal</h1>
              <p className="w-1/3">
                Hikium upholds the law, protecting what's right for all of us.
                Every day, every project, product, and service.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="flex p-5 bg-brand rounded-3xl">
                <IconGavel width={96} height={96} />
              </div>
            </div>
          </Card>
        </header> */}
        <header
          className="flex flex-col justify-between"
          style={{
            height: "75vh",
          }}
        >
          <div />
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-8 justify-center align-center">
            <div className="flex p-5 bg-brand text-white dark:text-black rounded-3xl">
              <IconGavel width={64} height={64} />
            </div>
            <h1 style={{ fontSize: "4em" }}>Hikium Legal</h1>
          </div>
          <div className="flex flex-col space-y-5 md:flex-row md:justify-between md:space-y-0">
            <aside className="flex">
              <Card className="w-1/2 flex flex-col space-y-5">
                <p>
                  At Hikium, we only collect the data we need, and we protect
                  your data every step of the way.
                </p>
                <div className="flex">
                  <Link href="/legal/privacy" passHref>
                    <Button>Read our Privacy Statement</Button>
                  </Link>
                </div>
              </Card>
            </aside>
          </div>
        </header>
        <main className="flex flex-col space-y-10">
          <section className="flex flex-col space-y-5">
            <h2 className="text-2xl">Terms</h2>
            <div className="flex flex-col space-y-2">
              <Link href="/legal/terms/website" passHref>
                <Button>Hikium Marketing Website Terms of Usage</Button>
              </Link>
            </div>
          </section>
          <section className="flex flex-col space-y-5">
            <h2 className="text-2xl">Open-Source at Hikium</h2>
            <div className="flex flex-col space-y-2">
              <Link href="/legal/opensource/font-licenses" passHref>
                <Button>Open-Source Font License Information</Button>
              </Link>
            </div>
          </section>
          <section className="flex flex-col space-y-5">
            <h2 className="text-2xl">Team</h2>
            <div className="flex flex-col space-y-2">
              <Link href="/contact" passHref>
                <Button isDisabled>Contact Hikium</Button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
Legal.getLayout = function getLayout(page: ReactElement) {
  return <Layout manualMargin={false}>{page}</Layout>;
};
