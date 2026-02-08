/* Types for @contentlayer/generated until first build creates the real types. */
declare module "@contentlayer/generated" {
  export const allProjects: Project[];

  export type Project = {
    title: string;
    description?: string;
    image?: string;
    slug: string;
    date?: string;
    tags?: string[];
    body: {
      code: string;
      raw: string;
    };
    _id: string;
    _raw: {
      sourceFilePath: string;
      sourceFileName: string;
      sourceFileDir: string;
      contentType: string;
      flattenedPath: string;
    };
  };
}
