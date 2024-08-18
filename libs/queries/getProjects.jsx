import { getClient } from "@/libs/apollo/client";
import dummyData from "@/libs/data/portfolio.json";
import { gql } from "graphql-tag";

export default async function getProjects(count = 10, page = 1) {
  if (process.env.NODE_ENV !== "development") {
    const { data } = await getClient().query({
      query: query, // add your query here
      variables: {
        first: count,
        offset: (page - 1) * count
      },

      errorPolicy: "all",
      context: {
        fetchOptions: {
          next: { revalidate: 180 }
        }
      }
    });

    return data?.webProjects?.nodes || [];
  } else {
    return dummyData?.data?.webProjects?.nodes || [];
  }
}

const query = gql`
  query Projects($first: Int = 10, $after: String = "") {
    webProjects(first: $first, after: $after) {
      nodes {
        slug
        title(format: RENDERED)
        featuredImage {
          node {
            altText
            sourceUrl(size: LARGE)
            title(format: RAW)
          }
        }
        terms {
          nodes {
            name
            ... on WebProjectCat {
              id
              name
              slug
              databaseId
            }
          }
        }
      }
    }
  }
`;
