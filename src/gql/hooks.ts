import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Brand = {
  __typename?: 'Brand';
  categories?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  models?: Maybe<Array<Model>>;
  name?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<Scalars['String']['output']>;
};

export type Model = {
  __typename?: 'Model';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  musicians?: Maybe<Array<Musician>>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  specs: Specs;
  type?: Maybe<Scalars['String']['output']>;
};

export enum ModelSortField {
  Name = 'name',
  Price = 'price',
  Type = 'type'
}

export type Musician = {
  __typename?: 'Musician';
  bands?: Maybe<Array<Scalars['String']['output']>>;
  musicianImage?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  findAllBrands: Array<Brand>;
  findBrandModels?: Maybe<Array<Maybe<Model>>>;
  findUniqueBrand?: Maybe<Brand>;
  findUniqueModel?: Maybe<Model>;
  searchModels: Array<Model>;
};


export type QueryFindBrandModelsArgs = {
  id: Scalars['ID']['input'];
  sortBy: SortBy;
};


export type QueryFindUniqueBrandArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindUniqueModelArgs = {
  brandId: Scalars['ID']['input'];
  modelId: Scalars['ID']['input'];
};


export type QuerySearchModelsArgs = {
  brandId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Specs = {
  __typename?: 'Specs';
  bodyWood?: Maybe<Scalars['String']['output']>;
  bridge?: Maybe<Scalars['String']['output']>;
  fingerboardWood?: Maybe<Scalars['String']['output']>;
  neckWood?: Maybe<Scalars['String']['output']>;
  pickups?: Maybe<Scalars['String']['output']>;
  scaleLength?: Maybe<Scalars['String']['output']>;
  tuners?: Maybe<Scalars['String']['output']>;
};

export type SortBy = {
  field: ModelSortField;
  order: SortOrder;
};

/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __Directive = {
  __typename?: '__Directive';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  isRepeatable: Scalars['Boolean']['output'];
  locations: Array<__DirectiveLocation>;
  args: Array<__InputValue>;
};


/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __DirectiveArgsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies. */
export enum __DirectiveLocation {
  /** Location adjacent to a query operation. */
  Query = 'QUERY',
  /** Location adjacent to a mutation operation. */
  Mutation = 'MUTATION',
  /** Location adjacent to a subscription operation. */
  Subscription = 'SUBSCRIPTION',
  /** Location adjacent to a field. */
  Field = 'FIELD',
  /** Location adjacent to a fragment definition. */
  FragmentDefinition = 'FRAGMENT_DEFINITION',
  /** Location adjacent to a fragment spread. */
  FragmentSpread = 'FRAGMENT_SPREAD',
  /** Location adjacent to an inline fragment. */
  InlineFragment = 'INLINE_FRAGMENT',
  /** Location adjacent to a variable definition. */
  VariableDefinition = 'VARIABLE_DEFINITION',
  /** Location adjacent to a schema definition. */
  Schema = 'SCHEMA',
  /** Location adjacent to a scalar definition. */
  Scalar = 'SCALAR',
  /** Location adjacent to an object type definition. */
  Object = 'OBJECT',
  /** Location adjacent to a field definition. */
  FieldDefinition = 'FIELD_DEFINITION',
  /** Location adjacent to an argument definition. */
  ArgumentDefinition = 'ARGUMENT_DEFINITION',
  /** Location adjacent to an interface definition. */
  Interface = 'INTERFACE',
  /** Location adjacent to a union definition. */
  Union = 'UNION',
  /** Location adjacent to an enum definition. */
  Enum = 'ENUM',
  /** Location adjacent to an enum value definition. */
  EnumValue = 'ENUM_VALUE',
  /** Location adjacent to an input object type definition. */
  InputObject = 'INPUT_OBJECT',
  /** Location adjacent to an input object field definition. */
  InputFieldDefinition = 'INPUT_FIELD_DEFINITION'
}

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
  __typename?: '__EnumValue';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
  __typename?: '__Field';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};


/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldArgsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
  __typename?: '__InputValue';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']['output']>;
  isDeprecated: Scalars['Boolean']['output'];
  deprecationReason?: Maybe<Scalars['String']['output']>;
};

/** A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations. */
export type __Schema = {
  __typename?: '__Schema';
  description?: Maybe<Scalars['String']['output']>;
  /** A list of all types supported by this server. */
  types: Array<__Type>;
  /** The type that query operations will be rooted at. */
  queryType: __Type;
  /** If this server supports mutation, the type that mutation operations will be rooted at. */
  mutationType?: Maybe<__Type>;
  /** If this server support subscription, the type that subscription operations will be rooted at. */
  subscriptionType?: Maybe<__Type>;
  /** A list of all directives supported by this server. */
  directives: Array<__Directive>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  __typename?: '__Type';
  kind: __TypeKind;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  specifiedByURL?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<__Field>>;
  interfaces?: Maybe<Array<__Type>>;
  possibleTypes?: Maybe<Array<__Type>>;
  enumValues?: Maybe<Array<__EnumValue>>;
  inputFields?: Maybe<Array<__InputValue>>;
  ofType?: Maybe<__Type>;
  isOneOf?: Maybe<Scalars['Boolean']['output']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeInputFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  Interface = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = 'NON_NULL'
}

export type GetBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBrandsQuery = { __typename?: 'Query', findAllBrands: Array<{ __typename?: 'Brand', id: string, name?: string | null, image?: string | null, origin?: string | null }> };

export type BrandTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type BrandTypeQuery = { __typename?: 'Query', __type?: { __typename?: '__Type', name?: string | null, fields?: Array<{ __typename?: '__Field', name: string, type: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } }> | null } | null };

export type ModelTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type ModelTypeQuery = { __typename?: 'Query', __type?: { __typename?: '__Type', name?: string | null, fields?: Array<{ __typename?: '__Field', name: string, type: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } }> | null } | null };

export type FindBrandModelsArgsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindBrandModelsArgsQuery = { __typename?: 'Query', __type?: { __typename?: '__Type', fields?: Array<{ __typename?: '__Field', name: string, args: Array<{ __typename?: '__InputValue', name: string, type: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } }> }> | null } | null };

export type IntrospectQueryVariables = Exact<{ [key: string]: never; }>;


export type IntrospectQuery = { __typename?: 'Query', __schema: { __typename?: '__Schema', queryType: { __typename?: '__Type', name?: string | null }, types: Array<{ __typename?: '__Type', name?: string | null, fields?: Array<{ __typename?: '__Field', name: string, type: { __typename?: '__Type', kind: __TypeKind, name?: string | null, ofType?: { __typename?: '__Type', kind: __TypeKind, name?: string | null } | null } }> | null }> } };

export type SortByEnumQueryVariables = Exact<{ [key: string]: never; }>;


export type SortByEnumQuery = { __typename?: 'Query', __type?: { __typename?: '__Type', name?: string | null, kind: __TypeKind, enumValues?: Array<{ __typename?: '__EnumValue', name: string, description?: string | null }> | null } | null };

export type GetBrandWithModelsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetBrandWithModelsQuery = { __typename?: 'Query', findUniqueBrand?: { __typename?: 'Brand', id: string, name?: string | null, models?: Array<{ __typename?: 'Model', id: string, name?: string | null, type?: string | null, image?: string | null, price?: number | null }> | null } | null };

export type GetModelQueryVariables = Exact<{
  brandId: Scalars['ID']['input'];
  modelId: Scalars['ID']['input'];
}>;


export type GetModelQuery = { __typename?: 'Query', findUniqueModel?: { __typename?: 'Model', id: string, name?: string | null, type?: string | null, image?: string | null, price?: number | null, description?: string | null, specs: { __typename?: 'Specs', bodyWood?: string | null, neckWood?: string | null, fingerboardWood?: string | null, bridge?: string | null, pickups?: string | null, scaleLength?: string | null, tuners?: string | null }, musicians?: Array<{ __typename?: 'Musician', name?: string | null, bands?: Array<string> | null, musicianImage?: string | null }> | null } | null };


export const GetBrandsDocument = gql`
    query GetBrands {
  findAllBrands {
    id
    name
    image
    origin
  }
}
    `;
export function useGetBrandsQuery(baseOptions?: Apollo.QueryHookOptions<GetBrandsQuery, GetBrandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBrandsQuery, GetBrandsQueryVariables>(GetBrandsDocument, options);
      }
export function useGetBrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBrandsQuery, GetBrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBrandsQuery, GetBrandsQueryVariables>(GetBrandsDocument, options);
        }
export function useGetBrandsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBrandsQuery, GetBrandsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBrandsQuery, GetBrandsQueryVariables>(GetBrandsDocument, options);
        }
export type GetBrandsQueryHookResult = ReturnType<typeof useGetBrandsQuery>;
export type GetBrandsLazyQueryHookResult = ReturnType<typeof useGetBrandsLazyQuery>;
export type GetBrandsSuspenseQueryHookResult = ReturnType<typeof useGetBrandsSuspenseQuery>;
export type GetBrandsQueryResult = Apollo.QueryResult<GetBrandsQuery, GetBrandsQueryVariables>;
export const BrandTypeDocument = gql`
    query BrandType {
  __type(name: "Brand") {
    name
    fields {
      name
      type {
        kind
        name
        ofType {
          kind
          name
        }
      }
    }
  }
}
    `;
export function useBrandTypeQuery(baseOptions?: Apollo.QueryHookOptions<BrandTypeQuery, BrandTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandTypeQuery, BrandTypeQueryVariables>(BrandTypeDocument, options);
      }
export function useBrandTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandTypeQuery, BrandTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandTypeQuery, BrandTypeQueryVariables>(BrandTypeDocument, options);
        }
export function useBrandTypeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BrandTypeQuery, BrandTypeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BrandTypeQuery, BrandTypeQueryVariables>(BrandTypeDocument, options);
        }
export type BrandTypeQueryHookResult = ReturnType<typeof useBrandTypeQuery>;
export type BrandTypeLazyQueryHookResult = ReturnType<typeof useBrandTypeLazyQuery>;
export type BrandTypeSuspenseQueryHookResult = ReturnType<typeof useBrandTypeSuspenseQuery>;
export type BrandTypeQueryResult = Apollo.QueryResult<BrandTypeQuery, BrandTypeQueryVariables>;
export const ModelTypeDocument = gql`
    query ModelType {
  __type(name: "Model") {
    name
    fields {
      name
      type {
        kind
        name
        ofType {
          kind
          name
        }
      }
    }
  }
}
    `;
export function useModelTypeQuery(baseOptions?: Apollo.QueryHookOptions<ModelTypeQuery, ModelTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ModelTypeQuery, ModelTypeQueryVariables>(ModelTypeDocument, options);
      }
export function useModelTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ModelTypeQuery, ModelTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ModelTypeQuery, ModelTypeQueryVariables>(ModelTypeDocument, options);
        }
export function useModelTypeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ModelTypeQuery, ModelTypeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ModelTypeQuery, ModelTypeQueryVariables>(ModelTypeDocument, options);
        }
export type ModelTypeQueryHookResult = ReturnType<typeof useModelTypeQuery>;
export type ModelTypeLazyQueryHookResult = ReturnType<typeof useModelTypeLazyQuery>;
export type ModelTypeSuspenseQueryHookResult = ReturnType<typeof useModelTypeSuspenseQuery>;
export type ModelTypeQueryResult = Apollo.QueryResult<ModelTypeQuery, ModelTypeQueryVariables>;
export const FindBrandModelsArgsDocument = gql`
    query FindBrandModelsArgs {
  __type(name: "Query") {
    fields {
      name
      args {
        name
        type {
          kind
          name
          ofType {
            kind
            name
          }
        }
      }
    }
  }
}
    `;
export function useFindBrandModelsArgsQuery(baseOptions?: Apollo.QueryHookOptions<FindBrandModelsArgsQuery, FindBrandModelsArgsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindBrandModelsArgsQuery, FindBrandModelsArgsQueryVariables>(FindBrandModelsArgsDocument, options);
      }
export function useFindBrandModelsArgsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindBrandModelsArgsQuery, FindBrandModelsArgsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindBrandModelsArgsQuery, FindBrandModelsArgsQueryVariables>(FindBrandModelsArgsDocument, options);
        }
export function useFindBrandModelsArgsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindBrandModelsArgsQuery, FindBrandModelsArgsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindBrandModelsArgsQuery, FindBrandModelsArgsQueryVariables>(FindBrandModelsArgsDocument, options);
        }
export type FindBrandModelsArgsQueryHookResult = ReturnType<typeof useFindBrandModelsArgsQuery>;
export type FindBrandModelsArgsLazyQueryHookResult = ReturnType<typeof useFindBrandModelsArgsLazyQuery>;
export type FindBrandModelsArgsSuspenseQueryHookResult = ReturnType<typeof useFindBrandModelsArgsSuspenseQuery>;
export type FindBrandModelsArgsQueryResult = Apollo.QueryResult<FindBrandModelsArgsQuery, FindBrandModelsArgsQueryVariables>;
export const IntrospectDocument = gql`
    query Introspect {
  __schema {
    queryType {
      name
    }
    types {
      name
      fields {
        name
        type {
          kind
          name
          ofType {
            kind
            name
          }
        }
      }
    }
  }
}
    `;
export function useIntrospectQuery(baseOptions?: Apollo.QueryHookOptions<IntrospectQuery, IntrospectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IntrospectQuery, IntrospectQueryVariables>(IntrospectDocument, options);
      }
export function useIntrospectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IntrospectQuery, IntrospectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IntrospectQuery, IntrospectQueryVariables>(IntrospectDocument, options);
        }
export function useIntrospectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IntrospectQuery, IntrospectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IntrospectQuery, IntrospectQueryVariables>(IntrospectDocument, options);
        }
export type IntrospectQueryHookResult = ReturnType<typeof useIntrospectQuery>;
export type IntrospectLazyQueryHookResult = ReturnType<typeof useIntrospectLazyQuery>;
export type IntrospectSuspenseQueryHookResult = ReturnType<typeof useIntrospectSuspenseQuery>;
export type IntrospectQueryResult = Apollo.QueryResult<IntrospectQuery, IntrospectQueryVariables>;
export const SortByEnumDocument = gql`
    query SortByEnum {
  __type(name: "sortBy") {
    name
    kind
    enumValues {
      name
      description
    }
  }
}
    `;
export function useSortByEnumQuery(baseOptions?: Apollo.QueryHookOptions<SortByEnumQuery, SortByEnumQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SortByEnumQuery, SortByEnumQueryVariables>(SortByEnumDocument, options);
      }
export function useSortByEnumLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SortByEnumQuery, SortByEnumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SortByEnumQuery, SortByEnumQueryVariables>(SortByEnumDocument, options);
        }
export function useSortByEnumSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SortByEnumQuery, SortByEnumQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SortByEnumQuery, SortByEnumQueryVariables>(SortByEnumDocument, options);
        }
export type SortByEnumQueryHookResult = ReturnType<typeof useSortByEnumQuery>;
export type SortByEnumLazyQueryHookResult = ReturnType<typeof useSortByEnumLazyQuery>;
export type SortByEnumSuspenseQueryHookResult = ReturnType<typeof useSortByEnumSuspenseQuery>;
export type SortByEnumQueryResult = Apollo.QueryResult<SortByEnumQuery, SortByEnumQueryVariables>;
export const GetBrandWithModelsDocument = gql`
    query GetBrandWithModels($id: ID!) {
  findUniqueBrand(id: $id) {
    id
    name
    models {
      id
      name
      type
      image
      price
    }
  }
}
    `;
export function useGetBrandWithModelsQuery(baseOptions: Apollo.QueryHookOptions<GetBrandWithModelsQuery, GetBrandWithModelsQueryVariables> & ({ variables: GetBrandWithModelsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBrandWithModelsQuery, GetBrandWithModelsQueryVariables>(GetBrandWithModelsDocument, options);
      }
export function useGetBrandWithModelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBrandWithModelsQuery, GetBrandWithModelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBrandWithModelsQuery, GetBrandWithModelsQueryVariables>(GetBrandWithModelsDocument, options);
        }
export function useGetBrandWithModelsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBrandWithModelsQuery, GetBrandWithModelsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBrandWithModelsQuery, GetBrandWithModelsQueryVariables>(GetBrandWithModelsDocument, options);
        }
export type GetBrandWithModelsQueryHookResult = ReturnType<typeof useGetBrandWithModelsQuery>;
export type GetBrandWithModelsLazyQueryHookResult = ReturnType<typeof useGetBrandWithModelsLazyQuery>;
export type GetBrandWithModelsSuspenseQueryHookResult = ReturnType<typeof useGetBrandWithModelsSuspenseQuery>;
export type GetBrandWithModelsQueryResult = Apollo.QueryResult<GetBrandWithModelsQuery, GetBrandWithModelsQueryVariables>;
export const GetModelDocument = gql`
    query GetModel($brandId: ID!, $modelId: ID!) {
  findUniqueModel(brandId: $brandId, modelId: $modelId) {
    id
    name
    type
    image
    price
    description
    specs {
      bodyWood
      neckWood
      fingerboardWood
      bridge
      pickups
      scaleLength
      tuners
    }
    musicians {
      name
      bands
      musicianImage
    }
  }
}
    `;
export function useGetModelQuery(baseOptions: Apollo.QueryHookOptions<GetModelQuery, GetModelQueryVariables> & ({ variables: GetModelQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetModelQuery, GetModelQueryVariables>(GetModelDocument, options);
      }
export function useGetModelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetModelQuery, GetModelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetModelQuery, GetModelQueryVariables>(GetModelDocument, options);
        }
export function useGetModelSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetModelQuery, GetModelQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetModelQuery, GetModelQueryVariables>(GetModelDocument, options);
        }
export type GetModelQueryHookResult = ReturnType<typeof useGetModelQuery>;
export type GetModelLazyQueryHookResult = ReturnType<typeof useGetModelLazyQuery>;
export type GetModelSuspenseQueryHookResult = ReturnType<typeof useGetModelSuspenseQuery>;
export type GetModelQueryResult = Apollo.QueryResult<GetModelQuery, GetModelQueryVariables>;