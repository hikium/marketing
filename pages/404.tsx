// Types
import { ReactElement } from "react";

// SEO
import Head from "next/head";

// Routing
import Link from "next/link";

// First party components
import Button from "components/system/Button";
import SupplementaryText from "components/system/SupplementaryText";

// Design
import { IconArrowRight } from "@tabler/icons";

// Layouts
import Layout from "components/layouts/Layout";

export default function Custom404() {
  return (
    <div className="flex flex-col py-2">
      <Head>
        <title>Hikium &mdash; Page Not Found</title>
        <meta name="description" content="This page can't be found." />
        <meta name="og:title" content="Hikium" />
        <meta name="og:description" content="This page can't be found" />
      </Head>

      <div className="flex flex-col space-y-10">
        <header className="flex flex-col-reverse md:flex-row md:justify-between">
          <h1>Where? On the mountain!</h1>
          <SupplementaryText className="mb-5 md:mb-0">
            HTTP 404
          </SupplementaryText>
        </header>
        <main className="flex flex-col space-y-10 w-fit">
          <p>This page can't be found, but let's hike to Home.</p>
          <Link href="/" passHref>
            <Button icon={<IconArrowRight />}>Go Home</Button>
          </Link>
        </main>
      </div>
    </div>
  );
}
Custom404.getLayout = function getLayout(page: ReactElement) {
  return <Layout manualMargin={false}>{page}</Layout>;
};
