import ButtonLink from "@/components/ButtonLink";
import Card from "@/components/Portfolio/Card";
import Section from "@/widgets/Section";

export default function Portfolio({ data }: { data: any[] }) {
  return (
    <Section className="md:py-10 md:gap-8 items-center">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl md:text-3xl">Portfolio</h2>
        <ButtonLink text="See all >" href="#" variant="ghost" color="base" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
        {data.map((item, i) => (
          <Card key={i} data={item} />
        ))}
      </div>
    </Section>
  );
}
