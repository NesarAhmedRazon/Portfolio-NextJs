import ButtonLink from "@/components/ButtonLink";
import Card from "@/components/Portfolio/Card";
import getProjects from "@/libs/queries/getProjects";
import PortfolioItem from "@/widgets/PortfolioItem";
import Section from "@/widgets/Section";

export default async function Portfolio({ items }) {
  const projects = await getProjects(items, 1); // get 5 projects from page 1

  return (
    <>
      {projects.length === 0 ? (
        <div className="text-center my-8">
          <p className="text-base md:text-2xl text-gray-300">
            Nothing done yet, I&apos;m working on new projects
          </p>
        </div>
      ) : (
        <Section className="md:py-10 md:gap-8 items-center">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl md:text-3xl">Projects</h2>
            <ButtonLink
              text="See all >"
              href="/projects"
              variant="ghost"
              color="base"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {projects.map((item, i) => (
              <Card key={i} data={item} />
            ))}
          </div>
        </Section>
      )}
      <Section className="md:py-10 md:gap-8 items-center grid">
        {projects.map((item, i) => (
          <PortfolioItem key={i} data={item} />
        ))}
      </Section>
    </>
  );
}
