import type { Metadata } from "next";
import { geistSans, geistMono, orbitron, formulaFonts ,khFonts} from "@/lib/fonts";
import "./globals.css";

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
        <html lang="en" className={`
        `}>
        <body
            className={`
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
  
            
         antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
