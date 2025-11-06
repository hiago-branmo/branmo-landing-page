"use client";

import Head from "next/head";
import { Language } from "@/lib/i18n";
import { generateStructuredData } from "@/lib/structured-data";

interface SEOHeadProps {
  language: Language;
}

export function SEOHead({ language }: SEOHeadProps) {
  const structuredData = generateStructuredData(language);
  
  const hreflangMap = {
    "en": "en-US",
    "pt-br": "pt-BR", 
    "es": "es-ES"
  };

  return (
    <Head>
      {/* Hreflang for multilingual SEO */}
      <link rel="alternate" hrefLang="en" href="https://branmo.app" />
      <link rel="alternate" hrefLang="pt-BR" href="https://branmo.app" />
      <link rel="alternate" hrefLang="es" href="https://branmo.app" />
      <link rel="alternate" hrefLang="x-default" href="https://branmo.app" />
      
      {/* Language-specific canonical */}
      <link rel="canonical" href="https://branmo.app" />
      
      {/* Language meta */}
      <meta httpEquiv="content-language" content={hreflangMap[language]} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
}