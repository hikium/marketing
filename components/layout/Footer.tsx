// Website footer

// Routing
import Link from "next/link";

// First party design
import { Grid, GridContainer, Text, Link as GeistLink } from "../design";

// Begin component
export default function Footer() {
  return (
    <div style={{ marginTop: "10em" }}>
      <GridContainer gap={5} direction="row">
        <Grid>
          <Text type="secondary" small>
            Hike higher.
          </Text>
        </Grid>
        <Grid>
          <GridContainer gap={2} direction="row">
            <Grid>
              <Text type="secondary" small>
                <Link href="/open-source" style={{ color: "inherit" }}>
                  Open-Source
                </Link>
              </Text>
            </Grid>
            <Grid>
              <Text type="secondary" small>
                <GeistLink href="/legal" useNewTab icon>
                  Legal &amp; Privacy
                </GeistLink>
              </Text>
            </Grid>
          </GridContainer>
        </Grid>
        <Grid>
          <Text type="secondary" small>
            Follow our hike{" "}
            <GeistLink href="https://twitter.com/hikium" useNewTab icon>
              @hikium
            </GeistLink>
          </Text>
        </Grid>
      </GridContainer>
    </div>
  );
}
