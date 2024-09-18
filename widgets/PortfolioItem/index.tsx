import Image from "next/image";
import InfoCards from "./InfoCards";

export default function PortfolioItem({ data = [] }: { data: any }) {
  const imgSrc =
    data?.image || data?.featuredImage?.url || "/images/placeholder.png";

  return (
    <div className="bg-white grid grid-cols-3 justify-start items-center shadow relative">
      <div className="lg:w-auto lg:h-full text-center md:text-left pb-5/7 aspect-4rp overflow-hidden bg-white pb-1/1">
        <Image
          src={imgSrc}
          alt="Nesar Ahmed"
          objectFit="contain"
          width={1000}
          height={833}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 300px, 200px"
          unoptimized
        />
      </div>
      <div className="textContainer p-8 px-14 col-span-2">
        <h2 className="text-2xl md:text-3xl mb-4">{data.title}</h2>
        <p className="text-sm md:text-base mt-4">{data?.excerpt || ""}</p>
        <InfoCards data={data?.terms} />
      </div>
    </div>
  );
}
