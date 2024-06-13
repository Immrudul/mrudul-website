import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";
import Hero from "@/components/hero/page";
import Experiences from "@/components/experience/page";
import Projects from "@/components/projects/page";
import Footer from "@/components/footer/page";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mrudul Suresh",
  description: "Mrudul's Personal Website!",
  icons: {
    icon: "/favicon.ico", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://mrudulsuresh.com" />
      </Head>
      <body className={inter.className}>
        <div className="bg-mgray">
          <Header />
          <Hero />
          <Experiences />
          <Projects />
          <Footer />
          {children}
        </div>
      </body>
    </html>
  );
}
