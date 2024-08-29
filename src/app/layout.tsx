import { ThemeProvider } from "@/app/providers/ThemeProviders";
import "@/styles/globals.css";
import "./prosemirror.css";

import { Inter as FontSans } from "next/font/google";
import { type Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
