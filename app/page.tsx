// First party design
import { Button, Grid, GridContainer, Text } from "../components/design";

// Layout
import Footer from "../components/layout/Footer";

export default function HomePage() {
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
                <Text h1>All-new Hikium Tempo.</Text>
              </Grid>
              <Grid>
                <Text>Start with a template. Make anything real.</Text>
              </Grid>
              <Grid>
                <Text>We're building it right now. More soon.</Text>
              </Grid>
              <Grid>
                <Button disabled>Coming Late 2023</Button>
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
