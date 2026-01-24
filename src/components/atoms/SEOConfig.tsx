import { NextSeo } from "next-seo";
import { FC, memo, useMemo } from "react";


type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  post?: {
    date?: string;
    tags?: string[];
  };
};


const _SEOConfig: FC<SEOProps> = (props) => {
  const { title, description, canonical, post, image, imageWidth = 1200, imageHeight = 630 } = props;
  return (
    <NextSeo
      canonical={canonical}
      description={description}
      openGraph={useMemo(() => ({
        images: image ? [
          {
            url: image,
            width: imageWidth,
            height: imageHeight,
            alt: title 
          }
        ] : undefined,
        title,
        description,
        article: post ? {
          publishedTime: post.date,
          tags: post.tags 
        } : undefined
      }), [image, imageWidth, imageHeight, title, description, post])}
      title={title}
    />
  );
}
_SEOConfig.displayName = "SEOConfig";

/** Built using next-seo to streamline metadata tags for SEO optimisation. */
export const SEOConfig = memo(_SEOConfig);