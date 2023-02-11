// Routing
import Link from "next/link";

// First party design
import {
  Button,
  Grid,
  GridContainer,
  Text,
  Link as GeistLink,
} from "../../components/design";
import { Package } from "@geist-ui/icons";

// Layout
import Footer from "../../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Grid>
        <Package size={36} />
      </Grid>

      <Grid>
        <Text h1>Open-source at Hikium</Text>
      </Grid>

      <Grid>
        <GridContainer gap={0} direction="column">
          <Grid>
            <Text>At Hikium, we love open-source.</Text>
          </Grid>
          <Grid>
            <Text>
              We built the{" "}
              <GeistLink href="https://www.ulosino.com" icon>
                ULOSINO
              </GeistLink>{" "}
              open-source operating system knowledge platform, the MXUPS
              library, and so much more.
            </Text>
          </Grid>
        </GridContainer>
      </Grid>

      <Grid>
        <Link href="https://github.com/hikium" passHref>
          <Button>Our GitHub</Button>
        </Link>
      </Grid>

      <Grid>
        <Footer />
      </Grid>
    </>
  );
}
