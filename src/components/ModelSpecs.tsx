type Specs = {
  bodyWood?: string | null;
  neckWood?: string | null;
  fingerboardWood?: string | null;
  bridge?: string | null;
  pickups?: string | null;
  scaleLength?: string | null;
  tuners?: string | null;
} | null | undefined;

const LABELS: Record<keyof NonNullable<Specs>, string> = {
  bodyWood: "BODY WOOD",
  neckWood: "NECK WOOD",
  fingerboardWood: "FINGERBOARD",
  bridge: "BRIDGE",
  pickups: "PICKUPS",
  scaleLength: "SCALE LENGTH",
  tuners: "TUNERS",
};

const ORDER: (keyof NonNullable<Specs>)[] = [
  "bodyWood",
  "neckWood",
  "fingerboardWood",
  "bridge",
  "pickups",
  "scaleLength",
  "tuners",
];

export default function ModelSpecs({ specs }: { specs: Specs }) {
  if (!specs) return <p className="text-gray-400">Specs will appear here…</p>;

  const items = ORDER
    .map((k) => ({ key: k, label: LABELS[k], value: (specs as any)[k] as string | null }))
    .filter((it) => it.value && String(it.value).trim().length > 0);

  if (items.length === 0) return <p className="text-gray-400">Specs will appear here…</p>;

  return (
    <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((s) => (
        <div key={s.key} className="rounded-xl border p-4">
          <dt className="text-xs uppercase tracking-wide text-gray-400">{s.label}</dt>
          <dd className="mt-1 font-medium text-white">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
