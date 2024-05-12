import Section from "@/widgets/Section";

export default function HomePage() {
  return (
    <main>
      <Section className="md:py-10 ">
        <div className="w-full md:w-1/2 text-center md:text-left py-4">
          <h1 className="text-4xl md:text-6xl/tight font-normal">
            I&apos;m Web Developer <br />
            Nesar Ahmed
          </h1>
          <p className="text-sm md:text-base mt-4 font-light">
            I&apos;m a web developer who loves to build things for the web.
            I&apos;m passionate about web performance, accessibility, and user
            experience.
          </p>
        </div>
      </Section>
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
