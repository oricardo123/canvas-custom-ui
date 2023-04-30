import { useLazyQuery } from "@apollo/client";
import { GET_COLLECTIONS } from "../graphql/queries";

export function useCollections() {
  const [
    getCollections,
    {
      data: dataCollections,
      error: errorCollections,
      loading: loadingCollections,
    },
  ] = useLazyQuery(GET_COLLECTIONS, {
    fetchPolicy: "network-only",
  });

  return {
    getCollections,
    dataCollections,
    errorCollections,
    loadingCollections,
  };
}
