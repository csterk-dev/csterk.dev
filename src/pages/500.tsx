import { SEOConfig } from "@atoms";
import { Container, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Fragment } from "react";


const Site500: NextPage = () => {

  return (
    <Fragment>
      <SEOConfig title="Internal server error" />

      <Container>
        <Text
          as="h1"
          color="foreground.on-primary"
          fontFamily="heading"
          fontSize={{
            base: "9xl",
            md: "9xl",
            lg: "300px"
          }}
          fontWeight="bold"
          lineHeight="shorter"
          textAlign="center"
        >
          500 - Something went wrong
        </Text>
      </Container>
    </Fragment>
  );
};

export default Site500;