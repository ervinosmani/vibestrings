// codegen.ts
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphql-api-brown.vercel.app/api/graphql",
  documents: ["src/**/*.{ts,tsx,graphql}"],
  generates: {
    // 1) Gjeneron typed DocumentNodes (graphql.ts) – i mbajmë
    "src/gql/": {
      preset: "client",
      plugins: [],
    },

    // 2) Gjeneron HOOK-e React Apollo (hooks.ts) – kjo fix-on errorin tënd
    "src/gql/hooks.ts": {
      plugins: [
        "@graphql-codegen/typescript",
        "@graphql-codegen/typescript-operations",
        "@graphql-codegen/typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        reactApolloVersion: 3,
        addDocBlocks: false,
        dedupeOperationSuffix: true,
      },
    },

    // 3) (opsionale) introspection
    "src/gql/graphql.schema.json": { plugins: ["introspection"] },
  },
  ignoreNoDocuments: true,
};

export default config;
