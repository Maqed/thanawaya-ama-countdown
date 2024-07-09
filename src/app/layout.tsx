import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { APP_NAME } from "@/consts/siteData";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_NAME,
  description: `${APP_NAME} is a website that shows you when will thanawaya ama end`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
