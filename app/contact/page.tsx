// First party design
import {
  Grid,
  GridContainer,
  Text,
  Link as GeistLink,
} from "../../components/design";
import { Mail } from "@geist-ui/icons";

// Layout
import Footer from "../../components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Grid>
        <Mail size={36} />
      </Grid>

      <Grid>
        <Text h1>Contact Hikium</Text>
      </Grid>

      <Grid>
        <GridContainer gap={0} direction="column">
          <Grid>
            <Text>Thanks for reaching out to the Hikium team!</Text>
          </Grid>
          <Grid>
            <Text>
              We prefer email. We're in Australia, so we operate under the
              UTC+10 or UTC+11 time zones.
            </Text>
          </Grid>
        </GridContainer>
      </Grid>

      <Grid>
        <Text>
          Simply email us at{" "}
          <GeistLink href="mailto:hikium-team@outlook.com" icon>
            hikium-team@outlook.com
          </GeistLink>
        </Text>
      </Grid>

      <Grid>
        <Footer />
      </Grid>
    </>
  );
}
