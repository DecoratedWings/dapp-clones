import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import { Box   } from "@chakra-ui/react";
import SafeHydrate from "./components/SafeHydrate";
import Footer from "./components/Footer/Footer";
import React from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accessible Marketplace App",
  description: "Dapp Clone a11y example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Box zIndex={3}>
            <SkipNavLink >Skip to content</SkipNavLink>
          </Box>

          <SafeHydrate>
            <Navbar />
          </SafeHydrate>

          <SkipNavContent>
          {children}
          </SkipNavContent>

          <SafeHydrate>
            <Footer />
          </SafeHydrate>
          
        </Providers>
      </body>
    </html>
  );
}
