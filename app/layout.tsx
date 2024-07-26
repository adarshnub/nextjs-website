import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Layouts/Navbar";
import { poppins } from "./fonts";



export const metadata: Metadata = {
  title: "ARC | Home",
  description: "ARC ecommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
