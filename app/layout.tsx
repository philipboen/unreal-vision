import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

export const metadata: Metadata = {
  title: "Unreal Vision",
  description:
    "Unreal Vision - Art beyond Reality is an innovative web application that leverages advanced AI technology to transform user prompts into unique, captivating images. This platform empowers users to explore the boundaries of creativity and visual art, making the process of art creation accessible and engaging for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} max-container dark font-sans`}>
        {children}
      </body>
    </html>
  );
}
