import Image from "next/image";
import InfoCards from "./InfoCards";
import style from "./portfolio.module.scss";

export default function PortfolioItem({ data = [] }: { data: any }) {
  const imgSrc =
    data?.image || data?.featuredImage?.url || "/images/placeholder.png";

  return (
    <div className={`${style.container}`}>
      <div className={`${style.image}`}>
        <Image
          src={imgSrc}
          alt="Nesar Ahmed"
          objectFit="cover"
          className={`${style.image_file}`}
          width={512}
          height={427}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 300px, 200px"
        />
      </div>
      <div className={`${style.info}`}>
        <h2 className={`${style.info_title}`}>{data.title}</h2>
        <p className={`${style.info_excerpt}`}>{data?.excerpt || ""}</p>
        <InfoCards data={data?.terms} />
      </div>
    </div>
  );
}
