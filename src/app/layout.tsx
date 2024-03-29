'use client'
// import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Tabs } from "@/components/tabs/tabs";
import { FormAdd } from '@/app/form/form'
import { useState } from "react";


// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [valided, setValided] = useState<string>('hidden')

  function handleFormModal(valid: boolean){
    if (valid === true){
      setValided(' ')
    }else{
      setValided('hidden')
    }

  }

  
  return (
    <html lang="en">
      <body className='h-screen bg-zinc-950 text-zinc-50'>
        <Header />
        <Tabs handleFormModal={handleFormModal}/>
        {children}
        <FormAdd showOrHidden={valided} position='absolute' handleFormModal={handleFormModal}/>
      </body>
    </html>
  );
}
