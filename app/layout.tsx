import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "فرص منتجات مربحة",
  description: "اقتراحات منتجات ذات طلب عالي ومنافسة منخفضة في أمازون الإمارات"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
