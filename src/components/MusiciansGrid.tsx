type Musician = {
  name?: string | null;
  musicianImage?: string | null;
  bands?: string[] | null;
} | null;

function normalize(musicians?: Musician[] | null) {
  if (!musicians) return [];
  return musicians
    .filter(Boolean)
    .map(m => ({
      name: m?.name ?? "",
      image: m?.musicianImage ?? "",
      bands: (m?.bands ?? []).filter(Boolean).join(", "),
    }))
    .filter(m => m.name.trim() !== "");
}

export default function MusiciansGrid({ musicians }: { musicians?: Musician[] | null }) {
  const items = normalize(musicians);
  if (items.length === 0) {
    return <p className="text-gray-400">Musicians (2 by 2) will appear here…</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((m, i) => (
        <div key={i} className="rounded-2xl border p-4 flex items-center gap-4 hover:shadow">
          {m.image ? (
            <img src={m.image} alt={m.name} className="h-16 w-16 rounded-full object-cover" />
          ) : (
            <div className="h-16 w-16 rounded-full bg-gray-200" />
          )}
          <div>
            <p className="font-semibold">{m.name}</p>
            {m.bands && <p className="text-sm text-gray-500">{m.bands}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
