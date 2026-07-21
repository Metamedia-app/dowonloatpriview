import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metau — Sosial Media Kampus Universitas Metamedia",
  description:
    "Download Metau, aplikasi sosial media eksklusif civitas akademika Universitas Metamedia. Upload feed, story, chatting, dan lebih banyak lagi — khusus untuk kamu!",
  keywords: ["Metau", "Universitas Metamedia", "sosial media kampus", "aplikasi mahasiswa", "download apk"],
  openGraph: {
    title: "Metau — Sosial Media Kampus",
    description: "Platform sosial media eksklusif civitas Universitas Metamedia",
    type: "website",
  },
  icons: {
    icon: "/asset/logososmed.png",
  },
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
