import dummyData from "@/libs/dummydata/portfolio.json";

export default async function getProjectsByCat(count = 10, page = 1, cat = "") {
  // return only the data for the category having the cat value
  return (
    dummyData?.data?.webProjects?.nodes.filter(
      (item) => item?.terms?.nodes[0].slug === cat
    ) || []
  );
}
