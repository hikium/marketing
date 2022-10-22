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

      <div className="flex flex-col space-y-10">
        <header>
          <Card className="h-80 bg-gradient-to-br from-brand/10 to-brand dark:to-brand/30 flex flex-col justify-between">
            <div className="flex flex-col space-y-5">
              <h1>Hikium Legal</h1>
              <p className="w-1/3">
                Hikium upholds the law, protecting what's right for all of us.
                Every day, every project, product, and service.
              </p>
            </div>
            <div className="flex justify-end">
              <IconGavel width={96} height={96} />
            </div>
          </Card>
        </header>
        <main className="flex flex-col space-y-10">
          <section>
            <Card className="w-1/3 flex flex-col space-y-5">
              <p>
                At Hikium, we only collect the data we need, and we protect what
                we collect every step of the way.
              </p>
              <Link href="/legal/privacy" passHref>
                <Button>Read our Privacy Statement</Button>
              </Link>
            </Card>
          </section>
          <section className="flex flex-col space-y-5">
            <h2 className="text-2xl">Terms</h2>
            <div className="flex flex-col space-y-2">
              <Link href="/legal/terms/ec" passHref>
                <Button>Hikium Experience Composer Terms of Usage</Button>
              </Link>
              <Link href="/legal/terms/website" passHref>
                <Button>Hikium Website Terms of Usage</Button>
              </Link>
            </div>
          </section>
          <section className="flex flex-col space-y-5">
            <h2 className="text-2xl">Open-Source at Hikium</h2>
            <div className="flex flex-col space-y-2">
              <Link href="/legal/opensource/oss-licenses" passHref>
                <Button>Open-Source Software License Information</Button>
              </Link>
              <Link href="/legal/opensource/font-licenses" passHref>
                <Button>Open-Source Font License Information</Button>
              </Link>
              <Link
                href="https://github.com/hikium/ddc/blob/main/LICENSE"
                passHref
              >
                <Button>Hikium Drag+Drop Code License</Button>
              </Link>
              <Link
                href="https://github.com/hikium/mxups/blob/main/LICENSE.txt"
                passHref
              >
                <Button>Hikium MXUPS License</Button>
              </Link>
            </div>
          </section>
          <section className="flex flex-col space-y-5">
            <h2 className="text-2xl">Team</h2>
            <div className="flex flex-col space-y-2">
              <Link href="/legal/affiliation" passHref>
                <Button>Project Affiliation Notice</Button>
              </Link>
              <Link href="/contact" passHref>
                <Button>Contact Hikium</Button>
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
