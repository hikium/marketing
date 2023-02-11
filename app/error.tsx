"use client";

// First party design
import {
  Button,
  Card,
  GridContainer,
  Loading,
  Text,
} from "../components/design";

import { useEffect, useState } from "react";

export default function GlobalErrorRoute({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const [errorCounter, setErrorCounter] = useState(0);
  const [isFakeLoading, setFakeLoading] = useState(true);

  useEffect(() => {
    console.error(error);

    if (errorCounter === 2) {
      setTimeout(() => setFakeLoading(false), 3000);
    }
  }, [error]);

  return errorCounter === 2 ? (
    isFakeLoading ? (
      <Card>
        <GridContainer justify="center">
          <Loading />
        </GridContainer>
      </Card>
    ) : (
      <Card>
        <Text>
          Something went wrong, and we couldn't figure out the problem. Go Home
          to jump into templates and restart your journey.
        </Text>
        <Button disabled>Try Again</Button>
      </Card>
    )
  ) : (
    <Card>
      <Text>
        Something went wrong. {errorCounter === 1 && "Try again one more time?"}
      </Text>
      <Button
        onClick={() => {
          setErrorCounter(errorCounter + 1);
          reset();
        }}
      >
        Try Again
      </Button>
    </Card>
  );
}
