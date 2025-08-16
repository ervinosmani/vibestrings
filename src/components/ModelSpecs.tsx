import Card from "@/components/ui/Card";

type SpecItem = { label?: string; key?: string; name?: string; value?: string } | string;
type Props = { specs: any };

function normalize(specs: any): Array<{ label: string; value: string }> {
  if (!specs) return [];

  // 1) Array objektesh / string-ësh
  if (Array.isArray(specs)) {
    return specs
      .map((it: SpecItem) => {
        if (typeof it === "string") {
          const [label = "", ...rest] = it.split(":");
          return { label: label.trim(), value: rest.join(":").trim() };
        }
        const label = (it as any).label ?? (it as any).key ?? (it as any).name ?? "";
        const value = (it as any).value ?? "";
        return { label: String(label), value: String(value) };
      })
      .filter((x) => x.label && !x.label.startsWith("__")); // hiq __typename nëse bie nga API
  }

  // 2) Objekt { Body: "...", Neck: "..." }
  if (typeof specs === "object") {
    return Object.entries(specs)
      .map(([label, value]) => ({ label, value: String(value ?? "") }))
      .filter((x) => x.label && !x.label.startsWith("__"));
  }

  return [];
}

export default function ModelSpecs({ specs }: Props) {
  const items = normalize(specs);

  if (items.length === 0) {
    return <p className="text-gray-400">Specs will appear here…</p>;
  }

  return (
    <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((s, i) => (
        <Card key={i} className="bg-white/[0.03]">
          <dt className="text-[10px] uppercase tracking-[0.12em] text-gray-400">{s.label}</dt>
          <dd className="mt-1 font-medium leading-relaxed">{s.value}</dd>
        </Card>
      ))}
    </dl>
  );
}
