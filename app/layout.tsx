import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Save Subhajit & Sudarshan | Donation Campaign",
  description: "Support our urgent fundraising campaign for Subhajit and Sudarshan to provide life-saving treatment for Lesch-Nyhan Syndrome.",
  icons: {
    icon: "/donation_logo.png",
  },
  verification: {
    google: 'qLD7NzXsW8dFXqCHy8WeQE_pO9ECwOEHxjVLbp_OOaU',
  },
  openGraph: {
    title: "Save Subhajit & Sudarshan | Donation Campaign",
    description: "Support our urgent fundraising campaign to provide life-saving treatment for Lesch-Nyhan Syndrome.",
    type: "website",
    locale: "en_IN",
    siteName: "Care Guru Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Save Subhajit & Sudarshan | Donation Campaign",
    description: "Support our urgent fundraising campaign for Subhajit and Sudarshan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="font-inter min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
