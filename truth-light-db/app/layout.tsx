import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ファクトシート",
  description: "向精神薬の規制情報から薬理学的知見まで",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}