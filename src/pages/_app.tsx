import type { AppProps } from "next/app";
import { Provider, Toaster } from "@atoms";
import { Anta, OpenSans } from "@fonts";
import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO_CONFIG, SITE_NAME, SITE_NAME_TEMPLATE, SITE_OWNER } from "@constants";
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
        canonical={DEFAULT_SEO_CONFIG.canonical}
        defaultTitle={SITE_NAME}
        description={DEFAULT_SEO_CONFIG.description}
        openGraph={{
          type: "website",
          locale: "en_AU",
          url: DEFAULT_SEO_CONFIG.canonical,
          siteName: SITE_NAME,
          title: DEFAULT_SEO_CONFIG.title,
          description: DEFAULT_SEO_CONFIG.description,
          images: [
            {
              url: DEFAULT_SEO_CONFIG.ogImage.url,
              width: DEFAULT_SEO_CONFIG.ogImage.width,
              height: DEFAULT_SEO_CONFIG.ogImage.height,
              alt: DEFAULT_SEO_CONFIG.title
            }
          ]
        }}
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