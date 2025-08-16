import Card from "@/components/ui/Card";

type Musician =
  | { id?: string; name?: string; musicianImage?: string; bands?: string[]; role?: string }
  | string;

function normalizeMusicians(musicians: any): Array<{
  name: string;
  image?: string;
  subtitle?: string;
}> {
  if (!musicians) return [];
  if (!Array.isArray(musicians)) return [];

  return musicians.map((m: Musician) => {
    if (typeof m === "string") return { name: m };
    const bands = Array.isArray(m.bands) ? m.bands.filter(Boolean).join(", ") : "";
    const subtitle = m.role ? m.role : bands;
    return {
      name: m.name ?? "",
      image: (m as any).image ?? (m as any).musicianImage,
      subtitle,
    };
  });
}

export default function MusiciansGrid({ musicians }: { musicians: any }) {
  const items = normalizeMusicians(musicians);

  if (items.length === 0) {
    return <p className="text-gray-400">Musicians (2 by 2) will appear here…</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((m, i) => (
        <Card key={i} className="flex items-center gap-4">
          {m.image ? (
            <img
              src={m.image}
              alt={m.name}
              className="h-14 w-14 rounded-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center text-sm">
              {m.name?.charAt(0) ?? "?"}
            </div>
          )}
          <div>
            <p className="font-semibold">{m.name}</p>
            {m.subtitle && <p className="text-sm text-gray-400">{m.subtitle}</p>}
          </div>
        </Card>
      ))}
    </div>
  );
}
