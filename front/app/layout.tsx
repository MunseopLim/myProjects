import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "myProject",
  description: "a playground for showing off my projects",
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
