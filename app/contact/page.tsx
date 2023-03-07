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
        <GridContainer
          justify="center"
          alignContent="center"
          direction="column"
        >
          <Grid>
            <GridContainer gap={1} direction="column">
              <Grid>
                <Mail size={48} />
              </Grid>
              <Grid>
                <Text h1>Get in touch.</Text>
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
                <Text small type="secondary">
                  We operate under the UTC+10 or UTC+11 time zones.
                </Text>
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
