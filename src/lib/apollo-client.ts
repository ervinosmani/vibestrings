import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const endpoint =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
  "https://graphql-api-brown.vercel.app/api/graphql";

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: endpoint }),
  cache: new InMemoryCache(),
});