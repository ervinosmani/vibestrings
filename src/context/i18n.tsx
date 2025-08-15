"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "@/locales/en.json";
import sq from "@/locales/sq.json";

type Locale = "en" | "sq";
type Dict = typeof en;

type I18nCtx = {
  locale: Locale;
  t: (path: string, vars?: Record<string, string | number>) => string;
  setLocale: (l: Locale) => void;
};

const I18nContext = createContext<I18nCtx | null>(null);
const DICTS: Record<Locale, Dict> = { en, sq };
const get = (obj: any, path: string) => path.split(".").reduce((a, k) => (a ? a[k] : undefined), obj);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved) setLocale(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useMemo(() => {
    return (path: string, vars: Record<string, string | number> = {}) => {
      let str = get(DICTS[locale], path) ?? path;
      if (typeof str === "string") {
        Object.keys(vars).forEach(k => { str = str.replace(`{{${k}}}`, String(vars[k])); });
      }
      return String(str);
    };
  }, [locale]);

  const value: I18nCtx = { locale, t, setLocale };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
