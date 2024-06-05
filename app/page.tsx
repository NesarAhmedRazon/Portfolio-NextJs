import { PortfolioItems } from "@/utils/PortfolioItems";
import Portfolio from "@/widgets/Portfolio";
import Section from "@/widgets/Section";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Section className="md:py-10 grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
        <div className="w-full text-center md:text-left py-4">
          <h1 className="text-4xl  md:text-5xl/tight lg:text-6xl/tight font-normal">
            <span className="text-2xl font-light">
              I&apos;m Web Developer <br />
            </span>
            Nesar Ahmed
          </h1>
          <p className="text-sm md:text-base mt-4 font-light">
            I&apos;m a web developer who loves to build things for the web.
            I&apos;m passionate about web performance, accessibility, and user
            experience.
          </p>
        </div>
        <div className="w-full text-center md:text-left relative pb-1/1 overflow-hidden order-first md:order-last">
          <Image
            src="/images/profile/pic.jpg"
            alt="Nesar Ahmed"
            fill
            className="p-0 md:p-4 lg:p-8 rounded-lg md:rounded-full"
          />
        </div>
      </Section>
      <Portfolio data={PortfolioItems} />
    </main>
  );
}

export async function generateMetadata() {
  const description =
    "Nesar Ahmed is a web developer who loves to build things for the web. He is passionate about web performance, accessibility, and user experience.";
  const url = process.env.NEXT_PUBLIC_BASE_URL || "/";
  const image = `${url}/images/profile/nesar_ahmed_og.png`;
  const title = "Nesar Ahmed";

  return {
    title: title,
    description: description,
    slug: "/",
    image: image,
    openGraph: {
      title: title,
      description: description,
      url: url,
      images: {
        url: image,
        width: 1200,
        height: 630,
        alt: `${title}'s profile picture`
      }
    }
  };
}
