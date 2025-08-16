"use client";

import Link from "next/link";
import { notFound, useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useGetModelQuery } from "@/gql";
import ModelSpecs from "@/components/ModelSpecs";
import MusiciansGrid from "@/components/MusiciansGrid";
import Card from "@/components/ui/Card";

/* ── Helpers ─────────────────────────────────────────────────────── */
type Tab = "specs" | "musicians";

const fmt = (n?: number | null) =>
  typeof n === "number"
    ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n)
    : "";

/* Skeleton i vogël për loading */
function DetailsSkeleton() {
  return (
    <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-pulse">
      <div>
        <div className="h-9 w-2/3 rounded bg-white/10" />
        <div className="mt-2 h-4 w-24 rounded bg-white/10" />
        <div className="mt-3 h-6 w-32 rounded bg-white/10" />
        <div className="mt-4 space-y-2">
          <div className="h-3 w-full rounded bg-white/10" />
          <div className="h-3 w-5/6 rounded bg-white/10" />
          <div className="h-3 w-4/6 rounded bg-white/10" />
        </div>
      </div>
      <Card padded={false} className="p-6 flex items-center justify-center h-[280px]">
        <div className="h-40 w-3/4 rounded bg-white/10" />
      </Card>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────── */
export default function ModelDetailsPage() {
  const { id: raw } = useParams<{ id: string }>();
  const brandId = useSearchParams().get("brand") || "";
  const modelId = (raw ?? "").split("-")[0]; // p.sh. "f1-stratocaster" -> "f1"

  const { data, loading, error } = useGetModelQuery({
    variables: { brandId, modelId },
    skip: !brandId || !modelId,
  });

  const m = data?.findUniqueModel ?? undefined;

  if (!loading && !error && !m) {
    // 404 i pastër
    notFound();
  }

  const [tab, setTab] = useState<Tab>("specs");
  const backHref = brandId ? `/brands/${brandId}` : "/brands";

  return (
    <section className="container mx-auto px-4 py-12">
      <Link href={backHref} className="text-sm text-blue-400 hover:underline">
        ← Back to list
      </Link>

      {loading && <DetailsSkeleton />}

      {error && <p className="mt-6 text-red-600">Error: {error.message}</p>}

      {!loading && !error && m && (
        <>
          {/* Header */}
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold">{m.name}</h1>
              <p className="mt-2 text-gray-400">{m.type}</p>
              {m.price != null && <p className="mt-2 text-lg font-semibold">{fmt(m.price)}</p>}
              {m.description && (
                <p className="mt-4 text-gray-300 leading-relaxed">{m.description}</p>
              )}
            </div>

            <Card padded={false} className="p-6 flex items-center justify-center">
              {m.image ? (
                <img
                  src={m.image}
                  alt={m.name}
                  className="max-h-80 object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="text-gray-400">No image</span>
              )}
            </Card>
          </div>

          {/* Tabs */}
          <div className="mt-10">
            <div className="flex gap-6 border-b border-white/10">
              <button
                className={`px-1 py-3 -mb-px border-b-2 transition-colors ${
                  tab === "specs"
                    ? "border-orange-500 text-white font-semibold"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
                onClick={() => setTab("specs")}
              >
                Specification
              </button>
              <button
                className={`px-1 py-3 -mb-px border-b-2 transition-colors ${
                  tab === "musicians"
                    ? "border-orange-500 text-white font-semibold"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
                onClick={() => setTab("musicians")}
              >
                Who plays it?
              </button>
            </div>

            <div className="mt-6 text-gray-300">
              {tab === "specs" && <ModelSpecs specs={(m as any).specs} />}
              {tab === "musicians" && <MusiciansGrid musicians={(m as any).musicians} />}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
