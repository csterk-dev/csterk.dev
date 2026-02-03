import { Box, Container } from "@chakra-ui/react";
import { allProjects, type Project } from "@contentlayer/generated";
import dayjs from "dayjs";
import { useMDXComponent } from "next-contentlayer/hooks";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXComponents } from "@atoms";
import { ProjectHero } from "@molecules";

const WORDS_PER_MINUTE = 200;

function readingTimeMinutes(rawBody: string): number {
  const words = rawBody.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

type ProjectPageProps = {
  project: Project;
};

const ProjectPage = ({ project }: ProjectPageProps) => {
  const MDXContent = useMDXComponent(project.body.code);

  return (
    <Box as="article" paddingBottom={16}>
      <Container>
        <ProjectHero
          description={project.description ?? undefined}
          maxWidth="4xl"
          mt={10}
          mx="auto"
          publishedDate={project.date ? dayjs(project.date).format("D MMM YYYY") : undefined}
          readingTimeMinutes={readingTimeMinutes(project.body.raw)}
          tags={project.tags}
          title={project.title}
        />
        <Box maxWidth="2xl" mx="auto" pt={8}>
          <MDXContent components={MDXComponents} />
        </Box>
      </Container>
    </Box>
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
