// Types
import { ReactElement } from "react";

// SEO
import Head from "next/head";

// Layouts
import Layout from "components/layouts/Layout";

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
        <main>
          <div className="bg-black/10 dark:bg-white/10 px-5 py-2 font-display uppercase text-sm rounded-2xl w-fit">
            Coming Soon
          </div>
        </main>
      </div>
    </div>
  );
}
Legal.getLayout = function getLayout(page: ReactElement) {
  return <Layout manualMargin={false}>{page}</Layout>;
};
