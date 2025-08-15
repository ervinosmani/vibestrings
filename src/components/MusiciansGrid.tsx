type Musician = {
  name?: string | null;
  bands?: string[] | null;
  musicianImage?: string | null;
} | null;

export default function MusiciansGrid({ musicians }: { musicians?: Musician[] | null }) {
  const items =
    (musicians ?? [])
      .filter(Boolean)
      .map((m) => ({
        name: m?.name ?? "",
        bands: (m?.bands ?? []).filter(Boolean) as string[],
        image: m?.musicianImage ?? undefined,
      }))
      .filter((x) => x.name.trim().length > 0) || [];

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
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
              {m.name.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <p className="font-semibold text-white">{m.name}</p>
            {m.bands.length > 0 && (
              <p className="text-sm text-gray-400">{m.bands.join(", ")}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
