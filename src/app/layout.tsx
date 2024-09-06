import { ThemeProvider } from "@/providers/ThemeProviders";
import "@/styles/globals.css";
import "@/styles/prosemirror.css";

import { Inter as FontSans } from "next/font/google";
import { type Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { SessionProviders } from "@/providers/SessionProviders";

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
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <SessionProviders>
            <Navbar />
            {children}
            <Toaster
              toastOptions={{
                unstyled: false,
                classNames: {
                  error: "bg-destructive",
                  success: "bg-green-400",
                  warning: "text-yellow-400",
                  info: "bg-blue-400",
                },
              }}
            />
          </SessionProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
