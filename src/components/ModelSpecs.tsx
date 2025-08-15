type Specs = {
  bodyWood?: string | null;
  neckWood?: string | null;
  fingerboardWood?: string | null;
  bridge?: string | null;
  pickups?: string | null;
  scaleLength?: string | null;
  tuners?: string | null;
} | null | undefined;

const LABELS: Record<string, string> = {
  bodyWood: "Body wood",
  neckWood: "Neck wood",
  fingerboardWood: "Fingerboard",
  bridge: "Bridge",
  pickups: "Pickups",
  scaleLength: "Scale length",
  tuners: "Tuners",
};

export default function ModelSpecs({ specs }: { specs: Specs }) {
  if (!specs) return <p className="text-gray-400">Specs will appear here…</p>;

  const items = Object.entries(specs)
    .filter(([, v]) => v != null && String(v).trim() !== "")
    .map(([k, v]) => ({
      label: LABELS[k] ?? k,
      value: String(v),
    }));

  if (items.length === 0) {
    return <p className="text-gray-400">Specs will appear here…</p>;
  }

  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((s, i) => (
        <div key={i} className="rounded-xl border p-4">
          <dt className="text-xs uppercase tracking-wide text-gray-400">{s.label}</dt>
          <dd className="mt-1 font-medium">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
