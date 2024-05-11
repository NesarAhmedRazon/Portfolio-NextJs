export default function HomePage() {
  return <div>Home of nesar ahmed&apos;s profile</div>;
}

export async function generateMetadata() {
  const description =
    "Nesar Ahmed is a software engineer who loves to build things for the web. He is passionate about web performance, accessibility, and user experience.";
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
