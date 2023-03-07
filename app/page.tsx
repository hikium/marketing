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
                <Text h1>Millions of print possibilities.</Text>
              </Grid>
              <Grid>
                <Text h1>Underscored by culture.</Text>
              </Grid>
              <Grid>
                <Text>The all-new Hikium Tempo creativity platform.</Text>
              </Grid>
              <Grid>
                <Text>Coming later this year.</Text>
              </Grid>
              <Grid>
                <Button disabled>Coming 2023</Button>
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
