import { Nunito_Sans, Mea_Culpa } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const meaCulpa = Mea_Culpa({
  variable: "--font-mea-culpa",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio | Michał Grocholski",
  description: "Portfolio of Michał Grocholski, a full stack developer specializing in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${meaCulpa.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
