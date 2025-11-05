"use client";

import Script from "next/script";

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}

export function MetaPixel() {
  const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  if (!META_PIXEL_ID) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `}
    </Script>
  );
}

// Hook for tracking custom events
export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    // Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, parameters);
    }
    
    // Meta Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "CustomEvent", {
        event_name: eventName,
        ...parameters
      });
    }
  };

  const trackPageView = (url: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_path: url,
      });
    }
  };

  const trackEmailSignup = (language: string) => {
    trackEvent("email_signup", {
      event_category: "engagement",
      event_label: "waitlist_signup",
      language: language,
      value: 1,
    });
    
    // Facebook Conversion API
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "Waitlist Signup",
        language: language,
      });
    }
  };

  const trackLanguageSwitch = (from: string, to: string) => {
    trackEvent("language_switch", {
      event_category: "engagement",
      event_label: "language_preference",
      from_language: from,
      to_language: to,
    });
  };

  const trackFeatureClick = (featureName: string) => {
    trackEvent("feature_interest", {
      event_category: "engagement",
      event_label: "feature_click",
      feature_name: featureName,
    });
  };

  const trackCTAClick = (ctaLocation: string) => {
    trackEvent("cta_click", {
      event_category: "conversion",
      event_label: "cta_interaction",
      cta_location: ctaLocation,
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackEmailSignup,
    trackLanguageSwitch,
    trackFeatureClick,
    trackCTAClick,
  };
}

// Extend Window types
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    fbq: (command: string, eventName: string, parameters?: any) => void;
  }
}