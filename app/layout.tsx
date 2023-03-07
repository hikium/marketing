// The global "root" layout
// Replaces _app.tsx in Next.js 12

// Routing
import Link from "next/link";

// Global styles
import "@fontsource/dosis/700.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/600.css";

// Global navigation
import {
  GridContainer,
  Page,
  PageContent,
  PageFooter,
  PageHeader,
  Text,
  Grid,
  Link as GeistLink,
} from "../components/design";
import BrandWordmark from "../components/brand/BrandWordmark";

// Global providers
import GeistProvider from "../components/design/GeistProvider";
import AckeeProvider from "./AckeeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head /> contains the nearest parent head.tsx. https://beta.nextjs.org/docs/api-reference/file-conventions/head */}
      <head />

      <AckeeProvider />

      <GeistProvider>
        <body>
          <Page>
            <PageHeader>
              <Link href="/" passHref>
                <div
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <BrandWordmark />
                </div>
              </Link>
            </PageHeader>
            <PageContent>
              <GridContainer gap={2} direction="column">
                {children}
              </GridContainer>
            </PageContent>
          </Page>
        </body>
      </GeistProvider>
    </html>
  );
}
