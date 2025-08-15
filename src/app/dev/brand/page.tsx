"use client";
import { gql, useQuery } from "@apollo/client";

const BRAND_TYPE = gql`
  query BrandType {
    __type(name: "Brand") {
      name
      fields {
        name
        type { kind name ofType { kind name } }
      }
    }
  }
`;

export default function BrandTypePage() {
  const { data, loading, error } = useQuery(BRAND_TYPE);

  if (loading) return <div className="p-6">Loading Brand fields…</div>;
  if (error) return <pre className="p-6 text-red-600">{String(error)}</pre>;

  const fields = data.__type?.fields ?? [];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Brand fields</h1>
      <ul className="list-disc pl-6 space-y-1">
        {fields.map((f: any) => (
          <li key={f.name}>
            <code>{f.name}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}
