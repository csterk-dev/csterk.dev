import type { AppProps } from "next/app";
import { Provider, Toaster } from "@atoms";
import { Anta, OpenSans } from "@fonts";
import { DefaultSeo } from "next-seo";
import { BASE_URL, SITE_NAME, SITE_NAME_TEMPLATE, SITE_OWNER } from "@constants";
import { colors } from "@theme";
import { SiteLayout } from "@molecules";


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={`${OpenSans.variable} ${Anta.variable}`}>
      <DefaultSeo
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/static/favicons/favicon.ico"
          },
          {
            rel: "icon",
            href: "/static/favicons/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png"
          },
          {
            rel: "icon",
            href: "/static/favicons/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png"
          },
          {
            rel: "apple-touch-icon",
            href: "/static/favicons/apple-touch-icon.png",
            sizes: "180x180"
          },
          {
            rel: "manifest",
            href: "/static/favicons/site.webmanifest"
          }
        ]}
        additionalMetaTags={[
          {
            name: "author",
            content: SITE_OWNER
          },
          {
            name: "viewport",
            // Prevents zooming behaviour on mobile devices when focusing a field.
            content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          }
        ]}
        canonical={BASE_URL}
        defaultTitle={SITE_NAME}
        themeColor={colors.brand[900].value}
        titleTemplate={SITE_NAME_TEMPLATE}
      />

      <Provider>
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
        <Toaster />
      </Provider>
    </div>
  );
}

export default App;