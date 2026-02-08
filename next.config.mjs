import { withContentlayer } from "next-contentlayer";

export default withContentlayer({
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"]
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        pathname: "/**",
        protocol: "https"
      }
    ]
  },
  transpilePackages: []
});