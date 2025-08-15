"use client";
import { gql, useQuery } from "@apollo/client";

const INTROSPECT = gql`
  query Introspect {
    __schema {
      queryType { name }
      types {
        name
        fields {
          name
          type { kind name ofType { kind name } }
        }
      }
    }
  }
`;

export default function SchemaPage() {
  const { data, loading, error } = useQuery(INTROSPECT);

  if (loading) return <div className="p-6">Loading schema…</div>;
  if (error) return <pre className="p-6 text-red-600">{String(error)}</pre>;

  const queryTypeName = data.__schema.queryType.name;
  const queryType = data.__schema.types.find((t: any) => t.name === queryTypeName);
  const fields = (queryType?.fields || []).map((f: any) => f.name).sort();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top-level Queries</h1>
      <p className="mb-2 text-sm text-gray-600">Query type: <code>{queryTypeName}</code></p>
      <ul className="list-disc pl-6 space-y-1">
        {fields.map((name: string) => (
          <li key={name}><code>{name}</code></li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-gray-500">Shiko emrat si p.sh. <code>brands</code>, <code>guitars</code>, <code>models</code> etj.</p>
    </div>
  );
}
