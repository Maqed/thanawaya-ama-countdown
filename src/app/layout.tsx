import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Inter } from "next/font/google";
import {
  APP_LOGO,
  APP_NAME,
  CREATOR,
  CREATOR_LINK,
  CREATOR_TWITTER_ID,
  CREATOR_TWITTER_NAME,
} from "@/consts/siteData";
import Navbar from "@/components/Navbar";
import Footer from "../sections/Footer";

const inter = Inter({ subsets: ["latin"] });

const title = APP_NAME;
const description = `Welcome to ${APP_NAME}, here you will know when will thanawya ama end`;
export const metadata: Metadata = {
  title,
  description,
  keywords: ["Thanawaya Ama", "Countdown"],
  authors: [{ name: CREATOR, url: CREATOR_LINK }],
  creator: CREATOR,
  publisher: CREATOR,
  icons: {
    icon: APP_LOGO,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    siteId: CREATOR_TWITTER_ID,
    creator: CREATOR_TWITTER_NAME,
    creatorId: CREATOR_TWITTER_ID,
    images: [APP_LOGO],
  },
  openGraph: {
    title,
    description,
    siteName: APP_NAME,
    locale: "en_US",
    type: "website",
    images: [APP_LOGO],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
