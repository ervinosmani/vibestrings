import type { Metadata } from "next";
import "./globals.css";
import ApolloProvider from "@/components/ApolloProvider";
import { I18nProvider } from "@/context/i18n"; // ⬅️ SHTO KËTË

export const metadata: Metadata = {
  title: "VibeStrings",
  description: "Online Guitar Shop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <ApolloProvider>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
