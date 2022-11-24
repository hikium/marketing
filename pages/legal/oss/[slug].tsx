// Types
import type { ReactElement } from "react";
import { GetStaticProps } from "next";

// SEO
import Head from "next/head";

// First party components
import Layout from "components/layouts/Layout";

// Markdown processing libraries
import fs from "fs";
import path from "path";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
// @ts-expect-error
import MDXProvider from "lib/MDXProvider";

interface OSPageTypes {
  source: any;
  componentOverrides: object;
  descriptionPath: string;
}

export default function OSSLegalPages({
  source,
  componentOverrides,
}: OSPageTypes) {
  return (
    <>
      <Head>
        <title>{source.frontmatter.name} &mdash; Hikium</title>
        <meta
          name="description"
          content={`${source.frontmatter.name} from Hikium.`}
        />
        <meta name="og:title" content={source.frontmatter.name} />
        <meta
          name="og:description"
          content={`${source.frontmatter.name} from Hikium.`}
        />
      </Head>

      <main>
        <MDXProvider>
          <MDXRemote {...source} components={componentOverrides} />
        </MDXProvider>
      </main>
    </>
  );
}
OSSLegalPages.getLayout = function getLayout(page: ReactElement) {
  return <Layout manualMargin={false}>{page}</Layout>;
};

interface PathProps {
  params: {
    slug: string;
  };
  mdxSource: MDXRemoteSerializeResult;
}

// @ts-ignore
export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
  // Find Markdown files
  const filePath = path.join(`public/markdown/legal/oss`, `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath);

  // Use the files to parse MDX
  // @ts-ignore
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
  });

  return {
    props: {
      source: mdxSource,
    },
  };
};
export const getStaticPaths = async () => {
  const pageContentPath = path.join(process.cwd(), "public/markdown/legal/oss");

  const pageFilePaths = fs
    .readdirSync(pageContentPath)
    .filter((path) => /\.mdx?$/.test(path));

  const paths = pageFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
