import { ThemeProvider } from "@/app/providers/ThemeProviders";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Join us on our coding journey! Discover tips, real-world experiences, and more. Learn, grow, and code with us at blog@2xdevs.com",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
