import { getClient } from "@/libs/apollo/client";
import { gql } from "graphql-tag";

export default async function getSingleProject(slug = "") {
  const revTime = process.env.NODE_ENV === "development" ? 180 : 180;
  const { data } = await getClient().query({
    query: query, // add your query here
    variables: {
      id: slug
    },

    errorPolicy: "all",
    context: {
      fetchOptions: {
        next: { revalidate: revTime }
      }
    }
  });

  return data?.webProject || [];
}

const query = gql`
  query Project($id: ID = "") {
    webProject(id: $id, idType: SLUG) {
      content(format: RENDERED)
      title(format: RENDERED)
    }
  }
`;
