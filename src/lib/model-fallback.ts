// src/lib/model-fallback.ts

export type FallbackSpec = { label: string; value: string };
export type FallbackMusician = {
  name: string;
  instrument?: string;
  image?: string;
  url?: string;
};

type Key = `${string}:${string}`; // "brandId:modelId"

// Shembuj. Shto sa të duash sipas Figma-s.
// brandId dhe modelId janë vargjet që përdor në URL (?brand=1 dhe id-ja para slug-ut p.sh. "f1").
export const FALLBACK_SPECS: Record<Key, FallbackSpec[]> = {
  "1:f1": [
    { label: "Body", value: "Alder" },
    { label: "Neck", value: "Maple" },
    { label: "Fingerboard", value: "Maple" },
    { label: "Pickups", value: "SSS" },
  ],
  "7:gretsch2": [
    { label: "Body", value: "Laminated Maple, Hollow" },
    { label: "Pickups", value: "FT-5E Filter’Tron" },
  ],
};

export const FALLBACK_MUSICIANS: Record<Key, FallbackMusician[]> = {
  "1:f1": [
    {
      name: "Jimi Hendrix",
      instrument: "Guitar",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Jimi_Hendrix_1967.png",
      url: "https://en.wikipedia.org/wiki/Jimi_Hendrix",
    },
    {
      name: "John Mayer",
      instrument: "Guitar",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/John_Mayer_in_2023.jpg",
      url: "https://en.wikipedia.org/wiki/John_Mayer",
    },
  ],
  "4:prs3": [
    {
      name: "Dave Navarro",
      instrument: "Guitar",
      // image: "...", 
    },
  ],
};
