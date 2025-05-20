import localFont from "next/font/local";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";

// Google Fonts
export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const orbitron = Orbitron({
    variable: "--font-orbitron",
    subsets: ["latin"],
    display: "swap",
});

// Local Fonts
export const formulaRegular = localFont({
    src: "../../public/fonts/Formula1-Regular.woff2",
    variable: "--font-formula-regular",
    weight: "400",
    style: "normal",
});

export const formulaMedium = localFont({
    src: "../../public/fonts/Formula1-Bold.woff2",
    variable: "--font-formula-bold",
    weight: "900",
    style: "normal",
});

export const formulaBold = localFont({
    src: "../../public/fonts/Formula1-Black.woff2",
    variable: "--font-formula-black",
    weight: "500",
    style: "normal",
});

export const formulaItalic = localFont({
    src: "../../public/fonts/Formula1-Italic.woff2",
    variable: "--font-formula-italic",
    weight: "400",
    style: "italic",
});
