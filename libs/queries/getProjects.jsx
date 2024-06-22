import { gql } from "graphql-tag";
import { getClient } from "@/libs/apollo/client";

export default async function getProjects(count = 10, page = 1) {
  const { data } = await getClient().query({
    query: gql`
      query Portfolios($first: Int = 10) {
        portfolios(first: $first) {
          nodes {
            title(format: RENDERED)
            slug
            featuredImage {
              node {
                altText
                sourceUrl(size: LARGE)
                title(format: RAW)
              }
            }
          }
        }
      }
    `, // add your query here
    variables: {
      first: count,
      offset: (page - 1) * count
    },
    headers: {
      "Content-Type": "application/json",
      Credentials: "include"
    },
    fetchPolicy: "cache-first"
  });
  return data?.portfolios?.nodes;
}
