import getProjects from "@/libs/queries/getProjects";
import ItemCard from "@/components/Portfolio/Card"; // import the Card as ItemCard component
import Section from "@/widgets/Section";
import getProjectsByCat from "@/libs/queries/getProjectsByCat";

export default async function Projects() {
  //const projects = await getProjects();
  const projects = await getProjectsByCat(10, 1, "done");
  const inProgress = await getProjectsByCat(10, 1, "in-progress");

  return (
    <>
      {projects.length === 0 ? (
        <div className="text-center my-8">
          <p className="text-base md:text-2xl text-gray-300">
            Nothing done yet, I&apos;m working on new projects
          </p>
        </div>
      ) : (
        <>
          <Section className="md:pt-10 md:pb-0 md:gap-8 items-center justify-center ">
            <h1 className="text-2xl md:text-4xl text-center">
              Projects I&apos;ve worked on
            </h1>
          </Section>
          <Section className="md:py-10 md:gap-8 items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
              {projects.map((item, i) => (
                <ItemCard key={i} data={item} title={true} />
              ))}
            </div>
          </Section>
          <Section className="md:pt-10 md:pb-0 md:gap-8 items-center justify-center ">
            <h1 className="text-2xl md:text-4xl text-center">
              Projects I&apos;m working on
            </h1>
          </Section>
          <Section className="md:py-10 md:gap-8 items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
              {inProgress.map((item, i) => (
                <ItemCard key={i} data={item} title={true} />
              ))}
            </div>
          </Section>
        </>
      )}
    </>
  );
}
