import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/custom/navbar";
import type { Metadata } from "next";
import "./globals.css";

const geist_mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: "500",
});

export const metadata: Metadata = {
  title: "NPM Package Checker",
  description: "A utility to check if a npm package name is available",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist_mono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
