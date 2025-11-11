import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";
import { PreferencesProvider } from "@/contexts/preferences-context";
import { Navbar } from "@/components/navbar";
import GoogleAnalytics from "@/components/google-analytics";
import SocialFloating from "@/components/social-floating";

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
  const CHATBOT_HTML = `<chat-bot platform_id="e8ea568f-1eb5-4a8f-89da-abd5be8f9b9a" user_id="bddf8e08-d346-4f59-a502-e25a358a7314" chatbot_id="efb49168-9e91-45ef-aed5-8fb81f3b966c"><a href="https://www.expertise.ai/?utm_source=widget&utm_medium=referral">expertise.ai - AI SDR Agent</a></chat-bot>`
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.expertise.ai/chat-bot-loader.js" defer />
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
            <div dangerouslySetInnerHTML={{ __html: CHATBOT_HTML }} />
            <SocialFloating />
              <main className="min-h-screen bg-background">{children}</main>
          </PreferencesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
