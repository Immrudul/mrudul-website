import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";
import Hero from "@/components/hero/page";
import Experiences from "@/components/experience/page";
import Projects from "@/components/projects/page";
import Footer from "@/components/footer/page";

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
