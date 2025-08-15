"use client";

import { FALLBACK_MUSICIANS, FallbackMusician } from "@/lib/model-fallback";

type Props = {
  brandId: string;
  modelId: string;
  musiciansGql: Array<{ name?: string }> | null | undefined;
};

function mergeMusicians(
  gqlList: Array<{ name?: string }> | null | undefined,
  fallbackList: FallbackMusician[]
): FallbackMusician[] {
  // nëse serveri sjell emra, mergojmë me fallback duke i pasuruar
  const base = Array.isArray(gqlList)
    ? gqlList
        .map((m) => (m?.name ? { name: m.name } : null))
        .filter(Boolean) as { name: string }[]
    : [];

  if (base.length === 0) return fallbackList;

  return base.map((b) => {
    const extra = fallbackList.find((f) => f.name.toLowerCase() === b.name.toLowerCase());
    return extra ? { ...b, ...extra } : b;
  });
}

export default function MusiciansGrid({ brandId, modelId, musiciansGql }: Props) {
  const key = `${brandId}:${modelId}` as const;
  const fb = FALLBACK_MUSICIANS[key] ?? [];
  const items = mergeMusicians(musiciansGql, fb);

  if (items.length === 0) {
    return <p className="text-gray-400">Musicians (2 by 2) will appear here…</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((m, i) => {
        const initial = (m.name || "?").trim().charAt(0).toUpperCase();
        const Card = (
          <div className="rounded-2xl border p-4 flex items-center gap-4 hover:shadow">
            {m.image ? (
              <img src={m.image} alt={m.name} className="h-16 w-16 rounded-full object-cover" />
            ) : (
              <div className="h-16 w-16 rounded-full bg-gray-200 text-black grid place-items-center text-xl font-semibold">
                {initial}
              </div>
            )}
            <div>
              <p className="font-semibold">{m.name}</p>
              {m.instrument && <p className="text-sm text-gray-500">{m.instrument}</p>}
            </div>
          </div>
        );

        return m.url ? (
          <a key={i} href={m.url} target="_blank" rel="noreferrer" className="group">
            {Card}
          </a>
        ) : (
          <div key={i}>{Card}</div>
        );
      })}
    </div>
  );
}
