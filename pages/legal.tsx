// Types
import { ReactElement } from "react";

// SEO
import Head from "next/head";

// Routing
import Link from "next/link";

// First party components
import Card from "components/system/Card";

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
          <h1>Hikium Legal</h1>
        </header>
        <main className="flex flex-col space-y-10">
          <section className="flex flex-col space-y-2">
            <Card>
              <div className="flex flex-col space-y-5">
                <h2>Hikium Web Services Privacy Statement</h2>
                <Link href="/legal/privacy" passHref>
                  <Button>View</Button>
                </Link>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col space-y-5">
                <h2>Hikium Experience Composer Terms of Usage</h2>
                <Button isDisabled>Coming Soon</Button>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col space-y-5">
                <h2>Hikium Website Terms of Usage</h2>
                <Link href="/legal/site-terms" passHref>
                  <Button>View</Button>
                </Link>
              </div>
            </Card>
          </section>
          <section className="grid gap-4 grid-cols-3 grid-rows-1">
            <Card>
              <div className="flex flex-col space-y-5">
                <h3 className="text-lg">Open-Source Software Licenses</h3>
                <Link href="/legal/oss/oss-licenses" passHref>
                  <Button>View</Button>
                </Link>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col space-y-5">
                <h3 className="text-lg">Open-Source Font Licenses</h3>
                <Link href="/legal/oss/font-licenses" passHref>
                  <Button>View</Button>
                </Link>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col space-y-5">
                <h3 className="text-lg">Project Affiliation Notice</h3>
                <Link href="/legal/project-affiliation" passHref>
                  <Button>View</Button>
                </Link>
              </div>
            </Card>
          </section>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Hikium projects, products, and services don't use cookies.
          </p>
          {/* <Link
            href="/legal/policy-dates"
            className="text-gray-600 dark:text-gray-400 text-sm"
            passHref
          >
            <a className="underline underline-offset-4 text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white hover:cursor-pointer text-sm">
              Major Policy First Effective Dates
            </a>
          </Link> */}
        </main>
      </div>
    </div>
  );
}
Legal.getLayout = function getLayout(page: ReactElement) {
  return <Layout manualMargin={false}>{page}</Layout>;
};
