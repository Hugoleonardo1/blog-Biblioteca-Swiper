import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre carreiras, educação e desenvolvimento profissional.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <span className="header-accent" aria-hidden="true" />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
