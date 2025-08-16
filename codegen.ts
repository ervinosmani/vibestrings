import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphql-api-brown.vercel.app/api/graphql",
  documents: ["src/**/*.{ts,tsx,graphql}"],
  generates: {
    "src/gql/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        reactApolloVersion: 3,
        addDocBlocks: false,
        maybeValue: "T | null",
      },
    },
    "src/gql/graphql.schema.json": { plugins: ["introspection"] },
  },
};

export default config;
