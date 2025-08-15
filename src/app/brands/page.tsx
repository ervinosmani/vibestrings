"use client";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useI18n } from "@/context/i18n";

const GET_BRANDS = gql`
  query GetBrands {
    findAllBrands {
      id
      name
      image
      origin
    }
  }
`;

export default function BrandsPage() {
  const { t } = useI18n();
  const { data, loading, error } = useQuery(GET_BRANDS);

  if (loading) return <div className="p-8">Loading brands…</div>;
  if (error) return <div className="p-8 text-red-600">Error: {error.message}</div>;

  const brands = data?.findAllBrands ?? [];

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{t("home.bestBrands")}</h1>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {brands.map((b: any) => (
          <li key={b.id}>
            <Link
              href={`/brands/${b.id}`} // Page 2 do ta bëjmë në hapin tjetër
              className="group block rounded-xl border p-4 hover:shadow"
            >
              <div className="aspect-[4/3] overflow-hidden rounded bg-gray-50 flex items-center justify-center">
                {b.image ? (
                  <img
                    src={b.image}
                    alt={b.name}
                    className="max-h-24 object-contain transition-transform group-hover:scale-105"
                  />
                ) : (
                  <span className="text-gray-500">{b.name}</span>
                )}
              </div>
              <div className="mt-3">
                <p className="font-medium">{b.name}</p>
                {b.origin && <p className="text-sm text-gray-500">{b.origin}</p>}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
