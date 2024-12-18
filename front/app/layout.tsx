import type { Metadata } from "next";

export const metadata: Metadata = {
  title: process.env.METADATA_TITLE,
  description: process.env.METADATA_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
