import { gql } from "@apollo/client";

export const GET_CATALOGS = gql`
  query getCatalogs {
    catalogs {
      name
      id
      products {
        id
        name
        image {
          id
          url
          fileName
        }
      }
    }
  }
`;
