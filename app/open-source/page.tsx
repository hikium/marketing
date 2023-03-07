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

export default function OpenSourcePage() {
  return (
    <>
      <Grid>
        <GridContainer
          justify="center"
          alignContent="center"
          direction="column"
        >
          <Grid>
            <GridContainer gap={1} direction="column">
              <Grid>
                <Package size={48} />
              </Grid>
              <Grid>
                <Text h1>We love open-source.</Text>
              </Grid>
              <Grid>
                <Text>
                  Building software that gives back to the community is the
                  Hikium way.
                </Text>
              </Grid>
              <Grid>
                <Text>
                  Open-source encourages and inspires young people to pursue
                  careers in STEM fields. We're excited about how <br /> we can
                  do this. We want to turn our ambition into action as soon as
                  we can.
                </Text>
              </Grid>
              <Grid>
                <Text>
                  That's why we're etching open-source communities into the
                  fabric that makes Hikium Tempo. Because open-source <br />{" "}
                  software powers our lives more and more, we want to excite
                  generations present and emerging about what we share.
                </Text>
              </Grid>
              <Grid>
                <Text>Check out our GitHub to learn more.</Text>
              </Grid>
              <Grid>
                <Link href="https://github.com/hikium" passHref>
                  <Button>Our GitHub</Button>
                </Link>
              </Grid>
            </GridContainer>
          </Grid>
        </GridContainer>
      </Grid>

      <Grid>
        <Footer />
      </Grid>
    </>
  );
}
