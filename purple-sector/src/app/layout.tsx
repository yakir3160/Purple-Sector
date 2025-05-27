import type { Metadata } from "next";
import { geistSans, geistMono, orbitron, formulaFonts ,khFonts} from "@/lib/fonts";
import "./globals.css";
import MainNavBar from "@/components/ui/MainNavBar";
import MobileNavBar from "@/components/ui/MobileNavBar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
    title: "Purple Sector",
    description: "Formula 1 Prediction Platform",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="overflow-x-hidden">
        <body
            className={twMerge(`font-formula-regular m-0 p-0 overflow-x-hidden
           ${formulaFonts.regular.variable}
          ${formulaFonts.italic.variable}
          ${formulaFonts.bold.variable}
          ${formulaFonts.medium.variable}
           ${khFonts.light.variable} 
          ${khFonts.regular.variable} 
        ${khFonts.bold.variable}
         ${geistSans.variable} 
         ${geistMono.variable} 
         ${orbitron.variable} 
         antialiased`)}
        >
        <div className="hidden md:block">
          <MainNavBar />
        </div>
        <div className="md:hidden">
          <MobileNavBar />
        </div>
        <div className="w-full m-0 p-0">
          {children}
        </div>
        {/* Scroll to Top Button - Available on all pages */}
        <ScrollToTopButton />
        </body>
        </html>
    );
}
