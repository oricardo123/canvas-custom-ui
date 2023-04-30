import { gql } from "@apollo/client";

export const GET_COLLECTIONS = gql`
  query getCollections {
    collections {
      name
      products
    }
  }
`;
