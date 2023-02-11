// Routing
import Link from "next/link";

// Head and SEO
import Head from "next/head";

// First party design
import {
  Button,
  Card,
  Grid,
  Text,
  Page,
  PageContent,
} from "../components/design";
import GeistProvider from "../components/design/GeistProvider";

// Begin page
export default function Custom404() {
  return (
    <>
      <Head>
        <title>Hikium - Page not found</title>
        <meta property="og:title" content="Hikium" />
        <meta name="description" content="Hikium" />
        <meta property="og:description" content="Page not found at Hikium" />
      </Head>

      {/* /app/layout.tsx does not apply to /pages */}
      <GeistProvider>
        <Page>
          <PageContent>
            <Grid>
              <Card>
                <Text>This page doesn't exist.</Text>
                <Link href="/" passHref>
                  <Button>Go Home</Button>
                </Link>
              </Card>
            </Grid>
          </PageContent>
        </Page>
      </GeistProvider>
    </>
  );
}
