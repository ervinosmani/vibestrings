"use client";
import { gql, useQuery } from "@apollo/client";

const SORT_BY = gql`
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

export default function SortByPage() {
  const { data, loading, error } = useQuery(SORT_BY);
  if (loading) return <div className="p-6">Loading sort options…</div>;
  if (error) return <pre className="p-6 text-red-600">{String(error)}</pre>;

  const values = data?.__type?.enumValues ?? [];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-3">sortBy enum values</h1>
      <ul className="list-disc pl-6 space-y-1">
        {values.map((v: any) => (
          <li key={v.name}>
            <code>{v.name}</code> {v.description ? <span className="text-gray-500">— {v.description}</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
