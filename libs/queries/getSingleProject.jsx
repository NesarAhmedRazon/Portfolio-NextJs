import dummyData from "@/libs/dummydata/portfolio.json";

export default async function getSingleProject(slug = "") {
  // return only the data for the slug value
  return (
    dummyData?.data?.webProjects?.nodes.filter(
      (item) => item?.slug === slug
    )[0] || {}
  );
}
