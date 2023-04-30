import { gql } from "@apollo/client";

export const GET_CATALOGS = gql`
  query getCatalogs {
    catalogs {
      name
      id
      image {
        url
      }
      products {
        id
        name
        description
        image {
          id
          url
          fileName
        }
      }
    }
  }
`;
