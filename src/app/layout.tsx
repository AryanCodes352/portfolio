import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

// Load Inter for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Load Poppins for headings
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aryan | Portfolio",
  description: "B.Tech CSE Student & Future Software Engineer. Portfolio showcasing skills, projects, and learning journey.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${inter.variable} ${poppins.variable} antialiased`,
          "min-h-screen bg-background font-sans text-foreground selection:bg-primary/30"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
