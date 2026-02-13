import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/plus-jakarta-sans";

export const metadata: Metadata = {
  title: "The Encounter: Pediatrics Home Visit",
  description: "A story about a home visit that changed everything.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
