import { useLazyQuery } from "@apollo/client";
import { GET_CATALOGS } from "../graphql/queries";

export function useCatalogs() {
  const [
    getCatalogs,
    { data: dataCatalogs, error: errorCatalogs, loading: loadingCatalogs },
  ] = useLazyQuery(GET_CATALOGS, {
    fetchPolicy: "network-only",
  });

  return {
    getCatalogs,
    dataCatalogs,
    errorCatalogs,
    loadingCatalogs,
  };
}
