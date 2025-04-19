import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thanh Nhã",
  description: "A personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo.className} antialiased`}>{children}</body>
    </html>
  );
}
