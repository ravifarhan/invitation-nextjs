import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Online Invitation",
  description: "Online Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
