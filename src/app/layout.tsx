import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { cn } from "@/lib/utils";

const roboto = Roboto_Mono({ subsets: ["latin"] });

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
    <html
      lang="en"
      className="overflow-y-scroll"
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={cn(
          "min-h-screen w-full overflow-x-hidden text-white bg-[#EEEEEE]",
          roboto.className
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
