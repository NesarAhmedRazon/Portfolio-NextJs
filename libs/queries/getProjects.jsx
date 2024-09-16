import dummyData from "@/libs/dummydata/portfolio.json";

export default async function getProjects(count = 10, page = 1) {
  return dummyData?.data?.webProjects?.nodes || [];
}
