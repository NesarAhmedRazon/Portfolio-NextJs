import { gql } from "graphql-tag";
import { getClient } from "@/libs/apollo/client";

export default async function getProjectsByCat(count = 10, page = 1, cat = "") {
  const revTime = process.env.NODE_ENV === "development" ? 0 : 180;
  const { data } = await getClient().query({
    query: query, // add your query here
    variables: {
      id: cat,
      first: count,
      offset: (page - 1) * count
    },

    errorPolicy: "all",
    context: {
      fetchOptions: {
        next: { revalidate: revTime }
      }
    }
  });

  return data?.webProjectCat?.webProjects?.nodes || [];
}

const query = gql`
  query Projects($first: Int = 10, $after: String = "", $id: ID = "done") {
    webProjectCat(id: $id, idType: SLUG) {
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
  }
`;
