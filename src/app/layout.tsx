import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manga Sommelier",
  description: "Découvrez votre prochaine lecture !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-200`}
      >
        <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-indigo-500/10">
          <div className="container mx-auto px-6 py-4">
            <h1 className="text-3xl font-bold text-white">
              <Link href="/">
                <span className="text-indigo-400">Manga</span> Sommelier 🍷
              </Link>
            </h1>
            <p className="text-sm text-gray-400">
              Vos prochaines lectures, choisies par une IA passionnée.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
