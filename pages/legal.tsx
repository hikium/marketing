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
      </Head>

      <div className="flex flex-col space-y-10">
        <h1>Hikium Legal</h1>
        <div className="bg-black/10 dark:bg-white/10 px-5 py-2 font-display uppercase text-sm rounded-2xl w-fit">
          Coming Soon
        </div>
      </div>
    </div>
  );
}
Legal.getLayout = function getLayout(page: ReactElement) {
  return <Layout manualMargin={false}>{page}</Layout>;
};
