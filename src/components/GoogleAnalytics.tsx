"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
  measurementId: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}

// Hook para tracking de eventos
export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, parameters);
    }
  };

  const trackEmailSignup = (language: string) => {
    trackEvent("email_signup", {
      event_category: "engagement",
      event_label: "email_capture",
      language: language,
    });
  };

  const trackLanguageSwitch = (from: string, to: string) => {
    trackEvent("language_switch", {
      event_category: "engagement",
      event_label: "language_change",
      from_language: from,
      to_language: to,
    });
  };

  return {
    trackEvent,
    trackEmailSignup,
    trackLanguageSwitch,
  };
}

// Extend Window type for gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}