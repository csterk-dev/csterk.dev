import Head from "next/head";
import { FC, memo } from "react";


type StructuredDataProps = {
  data: Record<string, unknown>;
};


const _StructuredData: FC<StructuredDataProps> = ({ data }) => {
  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        type="application/ld+json"
      />
    </Head>
  );
};
_StructuredData.displayName = "StructuredData";


/** 
 * Component for adding JSON-LD structured data to pages for enhanced SEO.
 * Used for schema types not available in next-seo (Person, WebSite, etc.)
 */
export const StructuredData = memo(_StructuredData);
