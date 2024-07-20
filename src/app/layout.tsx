import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SessionProvider  from '@/components/Auth/SessionProvider'

const poppins = Poppins({weight:'500', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Template",
  description: "Template by Nadavs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={poppins.className}>{children}</body>
      </SessionProvider>
      
    </html>
  );
}
