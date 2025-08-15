"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import ModelSpecs from "@/components/ModelSpecs";
import MusiciansGrid from "@/components/MusiciansGrid";

const GET_MODEL = gql`
  query GetModel($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      type
      image
      price
      description
      specs {
        bodyWood
        neckWood
        fingerboardWood
        bridge
        pickups
        scaleLength
        tuners
      }
      musicians {
        name
        musicianImage
        bands
      }
    }
  }
`;

/* ── Helpers ─────────────────────────────────────────────────────── */
type Tab = "specs" | "musicians";

const fmt = (n?: number | null) =>
  typeof n === "number"
    ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n)
    : "";

/* ── Page ────────────────────────────────────────────────────────── */
export default function ModelDetailsPage() {
  const { id: raw } = useParams<{ id: string }>();
  const brandId = useSearchParams().get("brand") || "";
  const modelId = (raw ?? "").split("-")[0]; // p.sh. "f1-stratocaster" -> "f1"

  const { data, loading, error } = useQuery(GET_MODEL, {
    variables: { brandId, modelId },
    skip: !brandId || !modelId,
    fetchPolicy: "cache-first",
  });

  const m = data?.findUniqueModel;
  const [tab, setTab] = useState<Tab>("specs");
  const backHref = brandId ? `/brands/${brandId}` : "/brands";

  return (
    <section className="container mx-auto px-4 py-12">
      <Link href={backHref} className="text-sm text-blue-500 hover:underline">
        ← Back to list
      </Link>

      {loading && <p className="mt-6">Loading model…</p>}
      {error && <p className="mt-6 text-red-600">Error: {error.message}</p>}
      {!loading && !error && !m && <p className="mt-6">Model not found.</p>}

      {!loading && !error && m && (
        <>
          {/* Header */}
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold">{m.name}</h1>
              <p className="mt-2 text-gray-500">{m.type}</p>
              {m.price != null && <p className="mt-2 text-lg font-semibold">{fmt(m.price)}</p>}
              {m.description && (
                <p className="mt-4 text-gray-300 leading-relaxed">{m.description}</p>
              )}
            </div>

            <div className="rounded-2xl bg-gray-50 p-6 flex items-center justify-center">
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
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-10">
            <div className="flex gap-2 border-b">
              <button
                className={`px-4 py-2 -mb-px border-b-2 ${
                  tab === "specs" ? "border-orange-500 font-semibold" : "border-transparent"
                }`}
                onClick={() => setTab("specs")}
              >
                Specification
              </button>
              <button
                className={`px-4 py-2 -mb-px border-b-2 ${
                  tab === "musicians" ? "border-orange-500 font-semibold" : "border-transparent"
                }`}
                onClick={() => setTab("musicians")}
              >
                Who plays it?
              </button>
            </div>

            <div className="mt-6 text-gray-300">
              {/* Specs si objekt -> ModelSpecs e normalizon në listë */}
              {tab === "specs" && <ModelSpecs specs={m.specs} />}
              {/* Musicians me emra (imazhet i shtojmë në hapin tjetër) */}
              {tab === "musicians" && <MusiciansGrid musicians={m.musicians} />}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
