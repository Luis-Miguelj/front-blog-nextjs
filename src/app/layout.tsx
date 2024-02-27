import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Tabs } from "@/components/tabs/tabs";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className='h-screen bg-zinc-950 text-zinc-50'>
        <Header />
        <Tabs />
        {children}
      </body>
    </html>
  );
}
