import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starter Pack Print - Créez vos Starter Packs uniques",
  description: "Personnalisez et commandez des posters, stickers, mugs et plus encore avec vos Starter Packs uniques. Inspiré par la culture pop et les mèmes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

