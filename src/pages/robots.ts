import { BASE_URL } from "@constants";
import { GetServerSideProps } from "next";


function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
}


// eslint-disable-next-line require-await
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robotsTxt = generateRobotsTxt();

  res.setHeader("Content-Type", "text/plain");
  res.write(robotsTxt);
  res.end();

  return {
    props: {}
  };
};


/** This function is purely required to ensure that the `getServerSideProps` can run when the sitemap is requested. */
function Robots() { }

export default Robots;