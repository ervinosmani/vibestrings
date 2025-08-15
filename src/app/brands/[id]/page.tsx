"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { useI18n } from "@/context/i18n";

// ⬇️ Hook i gjeneruar nga Codegen
import { useGetBrandWithModelsQuery } from "@/gql/hooks";

const fmt = (n?: number | null) =>
  typeof n === "number"
    ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n)
    : "";

const PAGE_SIZE = 6;

export default function BrandModelsPage() {
  const { t } = useI18n();
  const params = useParams<{ id: string }>();
  const brandId = (params?.id as string) || "";

  const { data, loading, error } = useGetBrandWithModelsQuery({
    variables: { id: brandId },
    skip: !brandId,
  });

  const brand = data?.findUniqueBrand;
  const models = brand?.models ?? [];

  // --- Search + Filter state
  const [q, setQ] = useState("");
  const [type, setType] = useState<"ALL" | string>("ALL");

  const typeOptions = useMemo(
    () => Array.from(new Set(models.map((m: any) => m?.type).filter(Boolean))),
    [models]
  );

  const filtered = useMemo(() => {
    const qn = q.trim().toLowerCase();
    return models.filter((m: any) => {
      const okQ = qn ? m?.name?.toLowerCase().includes(qn) : true;
      const okT = type === "ALL" ? true : m?.type === type;
      return okQ && okT;
    });
  }, [models, q, type]);

  // --- Pagination state (client-side)
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
  }, [q, type]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  const toSlug = (s: string) => s.toLowerCase().trim().replace(/\s+/g, "-");

  return (
    <section className="container mx-auto px-4 py-12">
      <Link href="/brands" className="text-sm text-blue-500 hover:underline">
        ← {t("nav.backToList")}
      </Link>

      <h1 className="text-3xl font-bold mt-4">
        {brand?.name ? `${brand.name} — Models` : `Models for brand: ${brandId}`}
      </h1>

      {/* Controls */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <div className="relative">
          <select
            className="h-10 rounded border px-3"
            value={type}
            onChange={(e) => setType(e.target.value)}
            aria-label={t("brand.filterByType")}
          >
            <option value="ALL">{t("brand.filterByType")}</option>
            {typeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("brand.searchByName")}
          className="h-10 flex-1 rounded border px-3"
          aria-label={t("brand.searchByName")}
        />
      </div>

      {/* Result count / states */}
      {loading && <p className="mt-6">Loading models…</p>}
      {error && <p className="mt-6 text-red-600">Error: {error.message}</p>}

      {!loading && !error && (
        <p className="mt-4 text-sm text-gray-500">
          {t("brand.showingResults")
            .replace("{{count}}", String(pageItems.length))
            .replace("{{total}}", String(total))}
        </p>
      )}

      {!loading && !error && (
        <>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageItems.map((m: any) => (
              <Link
                key={m.id}
                href={`/models/${m.id}-${toSlug(m.name)}?brand=${brandId}`}
                className="group rounded-2xl border p-4 hover:shadow transition"
              >
                <div className="aspect-[4/3] rounded-xl bg-gray-50 overflow-hidden flex items-center justify-center">
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="max-h-40 object-contain transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-gray-400">No image</span>
                  )}
                </div>
                <div className="mt-3">
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-sm text-gray-500">{m.type}</p>
                  {m.price != null && <p className="mt-1 font-medium">{fmt(m.price)}</p>}
                </div>
              </Link>
            ))}
            {pageItems.length === 0 && (
              <p className="text-gray-500 col-span-full">No models match your filters.</p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className={`h-9 px-3 rounded border ${
                  page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
                }`}
              >
                {t("pagination.prev")}
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  aria-current={n === page ? "page" : undefined}
                  className={`h-9 w-9 rounded border text-sm ${
                    n === page ? "bg-black text-white" : "hover:bg-gray-50"
                  }`}
                >
                  {n}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className={`h-9 px-3 rounded border ${
                  page === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
                }`}
              >
                {t("pagination.next")}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
