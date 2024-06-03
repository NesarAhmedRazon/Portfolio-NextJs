import ButtonLink from "@/components/ButtonLink";
import Section from "@/widgets/Section";
import Image from "next/image";

export default function Portfolio({ data }: { data: any[] }) {
  return (
    <Section className="md:py-10 grid gap-4 md:gap-8 items-center">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl">Portfolio</h2>
        <ButtonLink text="See all >" href="#" variant="ghost" color="base" />
      </div>
      <div className="grid">
        {data.map((item, i) => (
          <div key={i} className="w-full md:w-1/2 mt-4 md:mt-0 relative pb-1/1">
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-48 md:h-64 object-cover rounded-lg"
              fill
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
