/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetBrandWithModels($id: ID!) {\n    findUniqueBrand(id: $id) {\n      id\n      name\n      models {\n        id\n        name\n        type\n        image\n        price\n      }\n    }\n  }\n": typeof types.GetBrandWithModelsDocument,
    "\n  query GetBrands {\n    findAllBrands {\n      id\n      name\n      image\n      origin\n    }\n  }\n": typeof types.GetBrandsDocument,
    "\n  query BrandType {\n    __type(name: \"Brand\") {\n      name\n      fields {\n        name\n        type { kind name ofType { kind name } }\n      }\n    }\n  }\n": typeof types.BrandTypeDocument,
    "\n  query ModelType {\n    __type(name: \"Model\") {\n      name\n      fields {\n        name\n        type { kind name ofType { kind name } }\n      }\n    }\n  }\n": typeof types.ModelTypeDocument,
    "\n  query FindBrandModelsArgs {\n    __type(name: \"Query\") {\n      fields {\n        name\n        args {\n          name\n          type {\n            kind\n            name\n            ofType { kind name }\n          }\n        }\n      }\n    }\n  }\n": typeof types.FindBrandModelsArgsDocument,
    "\n  query Introspect {\n    __schema {\n      queryType { name }\n      types {\n        name\n        fields {\n          name\n          type { kind name ofType { kind name } }\n        }\n      }\n    }\n  }\n": typeof types.IntrospectDocument,
    "\n  query SortByEnum {\n    __type(name: \"sortBy\") {\n      name\n      kind\n      enumValues {\n        name\n        description\n      }\n    }\n  }\n": typeof types.SortByEnumDocument,
    "\n  query GetModel($brandId: ID!, $modelId: ID!) {\n    findUniqueModel(brandId: $brandId, modelId: $modelId) {\n      id\n      name\n      type\n      image\n      price\n      description\n      specs { __typename }     # placeholder, backend s’jep ende fusha të tjera\n      musicians { name }       # backend s’jep image/url/instrument\n    }\n  }\n": typeof types.GetModelDocument,
};
const documents: Documents = {
    "\n  query GetBrandWithModels($id: ID!) {\n    findUniqueBrand(id: $id) {\n      id\n      name\n      models {\n        id\n        name\n        type\n        image\n        price\n      }\n    }\n  }\n": types.GetBrandWithModelsDocument,
    "\n  query GetBrands {\n    findAllBrands {\n      id\n      name\n      image\n      origin\n    }\n  }\n": types.GetBrandsDocument,
    "\n  query BrandType {\n    __type(name: \"Brand\") {\n      name\n      fields {\n        name\n        type { kind name ofType { kind name } }\n      }\n    }\n  }\n": types.BrandTypeDocument,
    "\n  query ModelType {\n    __type(name: \"Model\") {\n      name\n      fields {\n        name\n        type { kind name ofType { kind name } }\n      }\n    }\n  }\n": types.ModelTypeDocument,
    "\n  query FindBrandModelsArgs {\n    __type(name: \"Query\") {\n      fields {\n        name\n        args {\n          name\n          type {\n            kind\n            name\n            ofType { kind name }\n          }\n        }\n      }\n    }\n  }\n": types.FindBrandModelsArgsDocument,
    "\n  query Introspect {\n    __schema {\n      queryType { name }\n      types {\n        name\n        fields {\n          name\n          type { kind name ofType { kind name } }\n        }\n      }\n    }\n  }\n": types.IntrospectDocument,
    "\n  query SortByEnum {\n    __type(name: \"sortBy\") {\n      name\n      kind\n      enumValues {\n        name\n        description\n      }\n    }\n  }\n": types.SortByEnumDocument,
    "\n  query GetModel($brandId: ID!, $modelId: ID!) {\n    findUniqueModel(brandId: $brandId, modelId: $modelId) {\n      id\n      name\n      type\n      image\n      price\n      description\n      specs { __typename }     # placeholder, backend s’jep ende fusha të tjera\n      musicians { name }       # backend s’jep image/url/instrument\n    }\n  }\n": types.GetModelDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBrandWithModels($id: ID!) {\n    findUniqueBrand(id: $id) {\n      id\n      name\n      models {\n        id\n        name\n        type\n        image\n        price\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBrandWithModels($id: ID!) {\n    findUniqueBrand(id: $id) {\n      id\n      name\n      models {\n        id\n        name\n        type\n        image\n        price\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBrands {\n    findAllBrands {\n      id\n      name\n      image\n      origin\n    }\n  }\n"): (typeof documents)["\n  query GetBrands {\n    findAllBrands {\n      id\n      name\n      image\n      origin\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BrandType {\n    __type(name: \"Brand\") {\n      name\n      fields {\n        name\n        type { kind name ofType { kind name } }\n      }\n    }\n  }\n"): (typeof documents)["\n  query BrandType {\n    __type(name: \"Brand\") {\n      name\n      fields {\n        name\n        type { kind name ofType { kind name } }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ModelType {\n    __type(name: \"Model\") {\n      name\n      fields {\n        name\n        type { kind name ofType { kind name } }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ModelType {\n    __type(name: \"Model\") {\n      name\n      fields {\n        name\n        type { kind name ofType { kind name } }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FindBrandModelsArgs {\n    __type(name: \"Query\") {\n      fields {\n        name\n        args {\n          name\n          type {\n            kind\n            name\n            ofType { kind name }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query FindBrandModelsArgs {\n    __type(name: \"Query\") {\n      fields {\n        name\n        args {\n          name\n          type {\n            kind\n            name\n            ofType { kind name }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Introspect {\n    __schema {\n      queryType { name }\n      types {\n        name\n        fields {\n          name\n          type { kind name ofType { kind name } }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Introspect {\n    __schema {\n      queryType { name }\n      types {\n        name\n        fields {\n          name\n          type { kind name ofType { kind name } }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SortByEnum {\n    __type(name: \"sortBy\") {\n      name\n      kind\n      enumValues {\n        name\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  query SortByEnum {\n    __type(name: \"sortBy\") {\n      name\n      kind\n      enumValues {\n        name\n        description\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetModel($brandId: ID!, $modelId: ID!) {\n    findUniqueModel(brandId: $brandId, modelId: $modelId) {\n      id\n      name\n      type\n      image\n      price\n      description\n      specs { __typename }     # placeholder, backend s’jep ende fusha të tjera\n      musicians { name }       # backend s’jep image/url/instrument\n    }\n  }\n"): (typeof documents)["\n  query GetModel($brandId: ID!, $modelId: ID!) {\n    findUniqueModel(brandId: $brandId, modelId: $modelId) {\n      id\n      name\n      type\n      image\n      price\n      description\n      specs { __typename }     # placeholder, backend s’jep ende fusha të tjera\n      musicians { name }       # backend s’jep image/url/instrument\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;