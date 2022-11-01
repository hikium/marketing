// Types
import { ReactElement } from "react";

// SEO
import Head from "next/head";

// Routing
import Link from "next/link";
import { useRouter } from "next/router";

// First party components
import Button from "components/system/Button";
import SupplementaryText from "components/system/SupplementaryText";

// Design
import { IconArrowRight, IconRefresh } from "@tabler/icons";

// Layouts
import Layout from "components/layouts/Layout";

export default function Custom500() {
  const router = useRouter();
  return (
    <div className="flex flex-col py-2">
      <Head>
        <title>Hikium &mdash; Server Error</title>
        <meta name="description" content="There's a problem with the server." />
        <meta name="og:title" content="Hikium" />
        <meta
          name="og:description"
          content="There's a problem with the server"
        />
      </Head>

      <div className="flex flex-col space-y-10">
        <header className="flex flex-col-reverse md:flex-row md:justify-between">
          <h1>There's problems on the server</h1>
          <SupplementaryText className="mb-5 md:mb-0">
            HTTP 500
          </SupplementaryText>
        </header>
        <main className="flex flex-col space-y-10 w-fit">
          <div className="flex flex-col space-y-5">
            <p>
              We've detected that the server has encountered problems. No
              details are available at this time.
            </p>
            <p>
              Try again now, or try again later once the problem has passed.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <Button icon={<IconRefresh />} onClick={() => router.reload()}>
              Try Again
            </Button>
            <Link href="/" passHref>
              <Button icon={<IconArrowRight />}>Go Home</Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
Custom500.getLayout = function getLayout(page: ReactElement) {
  return <Layout manualMargin={false}>{page}</Layout>;
};
