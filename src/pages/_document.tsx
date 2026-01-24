import { Head, Html, Main, NextScript } from "next/document";


const Document = () => {
  return (
    // Adding the suppressHydrationWarning prop to the html element is required to prevent the warning about the next-themes library. 
    // This property only applies one level deep, so it won't block hydration errors on other elements.
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};
export default Document;