import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider" 
const inter = Inter({ subsets: ["latin"] });
import  "@/public/icon.png"
export const metadata: Metadata = {
  title: "Tomson portfolio",
  icons:"/icon2.png" ,
  description: "Minimastic and animated portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>    <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
