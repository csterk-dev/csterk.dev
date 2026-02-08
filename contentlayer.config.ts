import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    image: {
      type: "string"
    },
    slug: {
      type: "string",
      required: true
    },
    date: {
      type: "date"
    },
    tags: {
      type: "list",
      of: { type: "string" }
    }
  }
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project]
});
