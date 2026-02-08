import { NextSeo } from "next-seo";
import { FC, memo, useMemo } from "react";
import { BASE_URL } from "@constants";


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
  
  const absoluteImageUrl = useMemo(() => {
    if (!image) return undefined;
    return image.startsWith("http") ? image : `${BASE_URL}${image}`;
  }, [image]);
  
  return (
    <NextSeo
      canonical={canonical}
      description={description}
      openGraph={useMemo(() => ({
        images: absoluteImageUrl ? [
          {
            url: absoluteImageUrl,
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
      }), [absoluteImageUrl, imageWidth, imageHeight, title, description, post])}
      title={title}
    />
  );
};
_SEOConfig.displayName = "SEOConfig";

/** Built using next-seo to streamline metadata tags for SEO optimisation. */
export const SEOConfig = memo(_SEOConfig);