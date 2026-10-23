import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SalesLeads — Website Sales Mobil & Motor",
  description:
    "Website katalog kendaraan dan solusi digital marketing untuk sales mobil dan motor. Mulai Rp699.000.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
