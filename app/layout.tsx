import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";
import { PreferencesProvider } from "@/contexts/preferences-context";
import { Navbar } from "@/components/navbar";
import GoogleAnalytics from "@/components/google-analytics";

export const metadata: Metadata = {
  title: "NewsHub - Personalized News Dashboard",
  description: "Your personalized news dashboard with AI-powered insights",
  generator: "news-dash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  return (
    <html lang="en">
      <head>
        {GA_ID ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());
  gtag('config', '${GA_ID}', { page_path: window.location.pathname });
  `,
              }}
            />
          </>
        ) : null}
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <AuthProvider>
          <PreferencesProvider>
            <Navbar />
            <GoogleAnalytics />
            <main className="min-h-screen bg-background">{children}</main>
          </PreferencesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
