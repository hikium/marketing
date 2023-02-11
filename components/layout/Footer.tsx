// Website footer

import { Grid, GridContainer, Text, Link as GeistLink } from "../design";

// Begin component
export default function Footer() {
  return (
    <div style={{ marginTop: "10em" }}>
      <GridContainer gap={5} direction="row">
        <Grid>
          <Text type="secondary" small>
            The beginning.
          </Text>
        </Grid>
        <Grid>
          <GridContainer gap={2} direction="row">
            <Grid>
              <Text type="secondary" small>
                <GeistLink href="/legal" useNewTab icon>
                  Legal
                </GeistLink>
              </Text>
            </Grid>
            <Grid>
              <Text type="secondary" small>
                <GeistLink href="/legal/privacy" useNewTab icon>
                  Privacy
                </GeistLink>
              </Text>
            </Grid>
            <Grid>
              <Text type="secondary" small>
                <GeistLink href="/open-source">Open-Source</GeistLink>
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
