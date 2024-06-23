import getProjects from "@/libs/queries/getProjects";
import getSingleProject from "@/libs/queries/getSingleProject";
import Section from "@/widgets/Section";

export async function generateStaticParams() {
  const projects = await getProjects(1);

  const slugs = projects.map((project) => ({
    slug: project.slug
  }));

  return slugs;
}

export default async function page({ params }) {
  const { slug } = params;
  const data = await getSingleProject(slug);

  return (
    <Section className="md:py-10 grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
      <h1>{data.title}</h1>
    </Section>
  );
}

// Metadata
export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await getSingleProject(slug);

  return {
    title: "Project - " + data?.title || "Page Not found - Tallyfy"
  };
}
