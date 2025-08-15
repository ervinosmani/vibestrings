"use client";
import { gql, useQuery } from "@apollo/client";

const QUERY_FIELD = gql`
  query FindBrandModelsArgs {
    __type(name: "Query") {
      fields {
        name
        args {
          name
          type {
            kind
            name
            ofType { kind name }
          }
        }
      }
    }
  }
`;

export default function ModelsArgsPage() {
  const { data, loading, error } = useQuery(QUERY_FIELD);

  if (loading) return <div className="p-6">Loading…</div>;
  if (error) return <pre className="p-6 text-red-600">{String(error)}</pre>;

  const field = data.__type.fields.find((f: any) => f.name === "findBrandModels");
  const args = field?.args ?? [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-3">findBrandModels — args</h1>
      {args.length === 0 ? (
        <p>No args found.</p>
      ) : (
        <ul className="list-disc pl-6 space-y-1">
          {args.map((a: any) => {
            const t = a.type.name ?? a.type.ofType?.name ?? a.type.kind;
            return (
              <li key={a.name}>
                <code>{a.name}</code>: <code>{t}</code>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
