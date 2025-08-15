"use client";
import { gql, useQuery } from "@apollo/client";

const MODEL_TYPE = gql`
  query ModelType {
    __type(name: "Model") {
      name
      fields {
        name
        type { kind name ofType { kind name } }
      }
    }
  }
`;

export default function ModelTypePage() {
  const { data, loading, error } = useQuery(MODEL_TYPE);
  if (loading) return <div className="p-6">Loading Model fields…</div>;
  if (error) return <pre className="p-6 text-red-600">{String(error)}</pre>;

  const fields = data.__type?.fields ?? [];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Model fields</h1>
      <ul className="list-disc pl-6 space-y-1">
        {fields.map((f: any) => (
          <li key={f.name}><code>{f.name}</code></li>
        ))}
      </ul>
    </div>
  );
}
