import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import LandingLayout from "@/components/landingPage/landingLayout";
import Script from "next/script";
import SEO from "@/components/additional/seo";
import { ThemeProvider } from "next-themes";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const googleTrackingCode = "YOUR_GOOGLE _TRACKING_ID";

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingCode}`}
      />

      <Script strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${googleTrackingCode}', {
      page_path: window.location.pathname,
      });
  `}
      </Script>
      <SEO />
      <SessionProvider session={session}>
        <ThemeProvider attribute="class">
          <LandingLayout>
            <Component {...pageProps} />
          </LandingLayout>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
