import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doms about page",
  description: "Tears, mostly made with frustrated tears",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} flex min-h-screen flex-col items-center justify-between p-24 bg-gray-700`}
      >
        <Image
          src="/taco-unsplash.jpg"
          width={400}
          height={600}
          alt="An image of 3 tacos"
        />
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
