"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { gql, useQuery } from "@apollo/client";
import { useI18n } from "@/context/i18n";

const GET_BRAND_WITH_MODELS = gql`
  query GetBrandWithModels($id: ID!) {
    findUniqueBrand(id: $id) {
      id
      name
      models {
        id
        name
      }
    }
  }
`;

export default function BrandModelsPage() {
  const { t } = useI18n();
  const params = useParams<{ id: string }>();
  const brandId = (params?.id as string) || "";

  const { data, loading, error } = useQuery(GET_BRAND_WITH_MODELS, {
    variables: { id: brandId },
    skip: !brandId,
  });

  const brand = data?.findUniqueBrand;
  const models = brand?.models ?? [];

  return (
    <section className="container mx-auto px-4 py-12">
      <Link href="/brands" className="text-sm text-blue-500 hover:underline">
        ← {t("nav.backToList")}
      </Link>

      <h1 className="text-3xl font-bold mt-4">
        {brand?.name ? `${brand.name} — Models` : `Models for brand: ${brandId}`}
      </h1>

      {loading && <p className="mt-6">Loading models…</p>}
      {error && <p className="mt-6 text-red-600">Error: {error.message}</p>}

      {!loading && !error && (
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {models.map((m: any) => (
            <li key={m.id} className="rounded border p-4">
              <p className="font-medium">{m.name}</p>
            </li>
          ))}
          {models.length === 0 && <p className="text-gray-500">No models found.</p>}
        </ul>
      )}
    </section>
  );
}
