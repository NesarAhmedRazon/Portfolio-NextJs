import Categories from "@/components/Portfolio/Categories";
import Image from "next/image";
import Link from "next/link";

export default function Card({ data, title }) {
  const url =
    data?.url ||
    process.env.NEXT_PUBLIC_BASE_URL + "/projects/" + data?.slug ||
    "#";
  const img =
    data?.image || data?.featuredImage?.node || "/images/placeholder.png";
  const imgSrc = img?.sourceUrl || img;

  return (
    <Link
      href={url}
      target={data.target || "_self"}
      className="card duration-200"
    >
      <div className=" relative aspect-sd overflow-hidden ">
        <Image
          alt={data.title}
          src={imgSrc}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 300px, 200px"
        />
      </div>

      {title && (
        <div className="w-full py-3">
          <h3 className="text-xl">{data.title}</h3>
          {data?.terms?.nodes && data?.terms?.nodes.length > 0 && (
            <Categories data={data} />
          )}
        </div>
      )}
    </Link>
  );
}
