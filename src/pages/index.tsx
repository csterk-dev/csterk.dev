import { Fragment } from "react";
import { SEOConfig } from "@atoms";
import { Text } from "@chakra-ui/react";
import { NextPage } from "next";


const Home: NextPage = () => {
  return (
    <Fragment>
      <SEOConfig title="Home" />
      <Text fontFamily="heading">Home</Text>
    </Fragment>
  );
}

export default Home;