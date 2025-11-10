import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const source = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Food Wagen",
  description: "A food search, create, edit, and delete app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./logo-icon.png" type="image/x-icon" />
      </head>
      <body
        className={`${source.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
