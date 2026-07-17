// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // 👈 TAMBAHKAN IMPORT FOOTER

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HYUNDAI Puri - Dealer Resmi Hyundai", // 👈 Ganti title
  description: "Temukan berbagai pilihan mobil Hyundai terbaru dengan teknologi canggih dan desain futuristik.", // 👈 Ganti deskripsi
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id" // 👈 Ganti ke bahasa Indonesia
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer /> {/* 👈 PASANG FOOTER DI SINI */}
      </body>
    </html>
  );
}