import { Poppins, Open_Sans } from "next/font/google";

import ThemeProvider from "@/context";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const fontFamily = ` ${poppins.variable} ${openSans.variable}`;

export const metadata = {
  title: "Portfolio - Hamlet Petrosyan",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fontFamily} leading-8 overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-gray)]`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
