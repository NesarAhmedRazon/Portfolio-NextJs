import Tag from "@/widgets/PortfolioItem/InfoCards/Tag";
import style from "@/widgets/PortfolioItem/portfolio.module.scss";

export default function InfoCards({ data = [] }: { data: any }) {
  return (
    <div className={`${style.info_tags}`}>
      {data.map((item: any, index: number) =>
        // if slug is 'done' or 'in-progress' items will not be shown
        item.slug !== "done" && item.slug !== "in-progress" ? (
          <Tag key={index} data={item} />
        ) : null
      )}
    </div>
  );
}
