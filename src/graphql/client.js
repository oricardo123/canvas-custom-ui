import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
const client = new ApolloClient({
  uri: "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clh15u5nw3xu201umarfy6yoi/master",
  cache: new InMemoryCache(),
});

export default client;
