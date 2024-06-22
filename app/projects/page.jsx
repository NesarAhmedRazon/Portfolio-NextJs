import getProjects from "@/libs/queries/getProjects";
import ItemCard from "@/components/Portfolio/Card"; // import the Card as ItemCard component
import Section from "@/widgets/Section";
import ButtonLink from "@/components/ButtonLink";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <Section className="md:py-10 md:gap-8 items-center">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl md:text-3xl">Projects</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
        {projects.map((item, i) => (
          <ItemCard key={i} data={item} title={true} />
        ))}
      </div>
    </Section>
  );
}
