// First party design
import { Button, Card, Grid, GridContainer, Text } from "../components/design";

// First party components
import BrandLogo from "../components/brand/BrandLogo";

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
          <Card>
            <GridContainer gap={5} direction="column">
              <Grid>
                <div
                  style={{
                    backgroundColor: "#e9e1b0",
                    padding: "2em",
                    borderRadius: "1em",
                    width: "8em",
                  }}
                >
                  <div
                    style={{
                      width: "4em",
                      height: "4em",
                    }}
                  >
                    <BrandLogo />
                  </div>
                </div>
              </Grid>
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
          </Card>
        </GridContainer>
      </Grid>

      <Grid>
        <Footer />
      </Grid>
    </>
  );
}
