import { GetServerSideProps } from "next";
import { BASE_URL } from "@constants";
import { allProjects } from "@contentlayer/generated";
import dayjs from "dayjs";


const staticRoutes = [
  {
    url: "",
    lastModified: dayjs().format(),
    changeFrequency: "weekly" as const,
    priority: 1.0
  }
];


const projectRoutes = allProjects.map((project) => ({
  url: `/projects/${project.slug}`,
  lastModified: project.date ? dayjs(project.date).format() : dayjs().format(),
  changeFrequency: "monthly" as const,
  priority: 0.8
}));


const allRoutes = [...staticRoutes, ...projectRoutes];


/** Generates the dynamic sitemap for our website. */
function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${allRoutes.map((route) => {
    return `
       <url>
           <loc>${BASE_URL}${route.url}</loc>
           <lastmod>${route.lastModified}</lastmod>
           <changefreq>${route.changeFrequency}</changefreq>
           <priority>${route.priority}</priority>
       </url>
     `;
  }).join("")}
   </urlset>
 `;
}


// eslint-disable-next-line require-await
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
};

/** This function is purely required to ensure that the `getServerSideProps` can run when the sitemap is requested. */
function SiteMap() { }

export default SiteMap;