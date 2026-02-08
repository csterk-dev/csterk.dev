import { Box, Container } from "@chakra-ui/react";
import { allProjects, type Project } from "@contentlayer/generated";
import dayjs from "dayjs";
import { useMDXComponent } from "next-contentlayer/hooks";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXComponents, SEOConfig } from "@atoms";
import { ProjectHero } from "@molecules";
import { Fragment, useMemo } from "react";
import { BASE_URL, SITE_OWNER } from "@constants";
import { ArticleJsonLd } from "next-seo";

const WORDS_PER_MINUTE = 200;

function readingTimeMinutes(rawBody: string): number {
  const words = rawBody
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

type ProjectPageProps = {
  project: Project;
};

const ProjectPage = ({ project }: ProjectPageProps) => {
  const MDXContent = useMDXComponent(project.body.code);

  const projectUrl = `${BASE_URL}/projects/${project.slug}`;
  const imageUrl = project.image ? (project.image.startsWith("http") ? project.image : `${BASE_URL}${project.image}`) : undefined;

  return (
    <Fragment>
      <SEOConfig
        canonical={projectUrl}
        description={project.description ?? undefined}
        image={project.image}
        post={{
          date: project.date,
          tags: project.tags
        }}
        title={project.title}
      />
      {project.date ?
        <ArticleJsonLd
          authorName={SITE_OWNER}
          dateModified={project.date}
          datePublished={project.date}
          description={project.description ?? ""}
          images={imageUrl ? [imageUrl] : []}
          publisherLogo={`${BASE_URL}/static/images/og-image.png`}
          publisherName={SITE_OWNER}
          title={project.title}
          type="BlogPosting"
          url={projectUrl}
        /> :
        null
      }
      <Container
        px={{
          base: 8,
          md: 20
        }}
      >
        <Box as="article" paddingBottom={16}>
          <ProjectHero
            description={project.description ?? undefined}
            maxWidth="4xl"
            mt={10}
            mx="auto"
            publishedDate={useMemo(() => project.date ? dayjs(project.date).format("D MMM YYYY") : undefined, [project.date])}
            readingTimeMinutes={useMemo(() => readingTimeMinutes(project.body.raw), [project.body.raw])}
            tags={project.tags}
            title={project.title}
          />
          <Box
            maxWidth="2xl"
            mx="auto"
            pt={8}

          >
            <MDXContent components={MDXComponents} />
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allProjects.map((project: Project) => ({
    params: {
      "project-name": project.slug
    }
  }));
  return {
    fallback: false,
    paths
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = (context) => {
  const slug = context.params?.["project-name"];
  if (typeof slug !== "string") {
    return { notFound: true };
  }
  const project = allProjects.find((p: Project) => p.slug === slug);
  if (!project) {
    return { notFound: true };
  }
  return { props: { project } };
};

export default ProjectPage;
