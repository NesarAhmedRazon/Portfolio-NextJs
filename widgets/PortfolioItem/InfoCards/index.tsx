import Card from "@/widgets/PortfolioItem/InfoCards/Card";

export default function InfoCards({ data = [] }: { data: any }) {
  return (
    <div className="info pt-6 flex justify-start flex-wrap gap-x-3 gap-y-4">
      {data.map((item: any, index: number) =>
        // if slug is 'done' or 'in-progress' items will not be shown
        item.slug !== "done" && item.slug !== "in-progress" ? (
          <Card key={index} data={item} />
        ) : null
      )}
    </div>
  );
}
