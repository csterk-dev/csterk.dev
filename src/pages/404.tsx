import { SEOConfig } from "@atoms";
import { Container, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Fragment } from "react";


const Site404: NextPage = () => {

  return (
    <Fragment>
      <SEOConfig title="Page not found" />
      <Container>
        <Text
          as="h1"
          color="text.primary"
          fontFamily="heading"
          fontSize={{
            base: "lg",
            md: "xl"
          }}
          fontWeight="bold"
          lineHeight="shorter"
          textAlign="center"
        >
          404 - Sorry, this page couldn't be found
        </Text>
      </Container>
    </Fragment>
  );
};

export default Site404;