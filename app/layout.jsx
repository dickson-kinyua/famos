import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Famos Engineering",
  description:
    "We specialize in all kinds of construction and renovation work, including residential, commercial, and industrial projects. Our team of experienced professionals is dedicated to delivering high-quality results that exceed our clients' expectations.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
