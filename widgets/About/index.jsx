import Section from "@/widgets/Section";
import Tabs from "@/widgets/Tabs";
import Image from "next/image";

export default function About() {
  return (
    <Section
      className="md:py-10 grid md:grid-cols-2 gap-4 md:gap-10 lg:gap-14 items-start"
      id="about"
    >
      <div className="w-full text-center md:text-left relative pb-5/7 aspect-5rp overflow-hidden bg-purple-200">
        <Image
          src="/images/profile/nesar_ahmed_1.jpg"
          alt="Nesar Ahmed"
          fill
          className=""
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 300px, 200px"
          priority
        />
      </div>

      <Tabs />
    </Section>
  );
}
