"use client";

import { FALLBACK_SPECS, FallbackSpec } from "@/lib/model-fallback";

type Props = {
  brandId: string;
  modelId: string;
  specsGql: any; // nga serveri (s’ka fusha tani; vetëm __typename)
};

export default function ModelSpecs({ brandId, modelId, specsGql }: Props) {
  // Shkalla 1: nëse nesër backend-i ekspozon diçka si listë, mund ta lexojmë këtu.
  // Aktualisht s’ka — prandaj përdorim fallback-in lokal.
  const key = `${brandId}:${modelId}` as const;
  const items: FallbackSpec[] = FALLBACK_SPECS[key] ?? [];

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
