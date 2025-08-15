"use client";
import { useI18n } from "@/context/i18n";

export default function HomePage() {
  const { t, locale, setLocale } = useI18n();

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Language switcher */}
      <div className="mb-6 flex items-center gap-2">
        <button
          className={`px-3 py-1 rounded ${locale === "en" ? "bg-black text-white" : "border"}`}
          onClick={() => setLocale("en")}
          aria-pressed={locale === "en"}
        >
          EN
        </button>
        <button
          className={`px-3 py-1 rounded ${locale === "sq" ? "bg-black text-white" : "border"}`}
          onClick={() => setLocale("sq")}
          aria-pressed={locale === "sq"}
        >
          SQ
        </button>
      </div>

      {/* Translated text */}
      <h1 className="text-4xl font-bold mb-3">{t("home.heroTitle")}</h1>
      <p className="text-gray-600">{t("home.heroSubtitle")}</p>
    </section>
  );
}
