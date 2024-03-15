import { GridProvider } from "@faceless-ui/css-grid";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";
import { base } from "./css/base";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixel Persona - Design Agency",
  description: "Pixel Persona - Design Agency",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <GridProvider
          rowGap={{
            s: base(2),
            m: base(2),
            l: base(2),
            xl: base(2),
          }}
          colGap={{
            s: base(2),
            m: base(2),
            l: base(2),
            xl: base(2),
          }}
          cols={{
            s: 8,
            m: 8,
            l: 12,
            xl: 12,
          }}
        >
          <Toaster position="bottom-center" />
          {children}
        </GridProvider>
      </body>
      <GoogleAnalytics gaId="G-2RHS1EKZ2M" />
    </html>
  );
}
