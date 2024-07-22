import React from "react";
import { SideBar } from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <SideBar />
      <div className="mx-auto w-full">{children}</div>
    </div>
  );
}
