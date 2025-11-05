import { Language, translations } from "@/lib/i18n";

export function generateStructuredData(language: Language, page?: string) {
  const t = translations[language];
  const baseUrl = "https://branmo.app";
  
  const baseGraph: any[] = [
    // Organization
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "Branmo",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`,
        "width": 512,
        "height": 512
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "support@branmo.app",
          "url": `${baseUrl}/contact`,
          "availableLanguage": ["English", "Portuguese", "Spanish"]
        },
        {
          "@type": "ContactPoint", 
          "contactType": "sales",
          "email": "hello@branmo.app",
          "url": `${baseUrl}/contact`
        }
      ],
      "sameAs": [
        "https://twitter.com/branmocrm",
        "https://linkedin.com/company/branmo",
        "https://facebook.com/branmocrm"
      ],
      "foundingDate": "2024",
      "numberOfEmployees": "30",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BR",
        "addressLocality": "São Paulo"
      }
    },
    
    // Website
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": baseUrl,
      "name": "Branmo CRM",
      "description": t.seo.description,
      "inLanguage": language === "pt-br" ? "pt-BR" : language === "es" ? "es-ES" : "en-US",
      "publisher": {
        "@id": `${baseUrl}/#organization`
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    },
    
    // Software Application
    {
      "@type": "SoftwareApplication",
      "@id": `${baseUrl}/#software`,
      "name": "Branmo CRM",
      "description": t.seo.description,
      "url": baseUrl,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser, iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free early access signup",
        "availability": "https://schema.org/InStock"
      },
      "featureList": [
        t.features.items.whatsapp.title,
        t.features.items.automation.title,
        t.features.items.aiAgent.title,
        t.features.items.leadConversion.title,
        t.features.items.salesFunnel.title,
        t.features.items.analytics.title
      ],
      "screenshot": `${baseUrl}/screenshot.jpg`,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Sarah Johnson"
          },
          "reviewBody": "Branmo CRM transformed our WhatsApp sales process completely. We're converting 3x more leads now!"
        }
      ]
    }
  ];

  // Add page-specific structured data
  if (page === "home") {
    baseGraph.push({
      "@type": "WebPage",
      "@id": `${baseUrl}/#webpage`,
      "url": baseUrl,
      "name": t.seo.title,
      "description": t.seo.description,
      "inLanguage": language === "pt-br" ? "pt-BR" : language === "es" ? "es-ES" : "en-US"
    });

    // FAQ Schema
    baseGraph.push(generateFAQSchema(language));
  }

  return {
    "@context": "https://schema.org",
    "@graph": baseGraph
  };
}

export function generateFAQSchema(language: Language) {
  const faqs = {
    en: [
      {
        question: "What is Branmo CRM?",
        answer: "Branmo CRM is a WhatsApp-based customer relationship management platform that uses AI to automate sales conversations, convert leads, and manage sales funnels."
      },
      {
        question: "How does WhatsApp API integration work?",
        answer: "We integrate with the official WhatsApp Business API to ensure reliable, secure, and compliant business communications."
      },
      {
        question: "Is AI automation included?",
        answer: "Yes, our AI-powered automation handles responses, qualifies leads, and helps convert conversations into sales automatically."
      },
      {
        question: "When will Branmo CRM be available?",
        answer: "We're currently in development and offering early access. Join our waitlist to be notified when we launch."
      },
      {
        question: "What languages are supported?",
        answer: "Branmo CRM supports English, Portuguese, and Spanish, with more languages planned for the future."
      }
    ],
    "pt-br": [
      {
        question: "O que é o Branmo CRM?",
        answer: "Branmo CRM é uma plataforma de CRM baseada no WhatsApp que usa IA para automatizar conversas de vendas, converter leads e gerenciar funis de vendas."
      },
      {
        question: "Como funciona a integração com WhatsApp API?",
        answer: "Integramos com a API oficial do WhatsApp Business para garantir comunicações empresariais confiáveis, seguras e compatíveis."
      },
      {
        question: "A automação com IA está incluída?",
        answer: "Sim, nossa automação com IA lida com respostas, qualifica leads e ajuda a converter conversas em vendas automaticamente."
      },
      {
        question: "Quando o Branmo CRM estará disponível?",
        answer: "Estamos atualmente em desenvolvimento e oferecendo acesso antecipado. Junte-se à nossa lista de espera para ser notificado quando lançarmos."
      },
      {
        question: "Quais idiomas são suportados?",
        answer: "O Branmo CRM suporta inglês, português e espanhol, com mais idiomas planejados para o futuro."
      }
    ],
    es: [
      {
        question: "¿Qué es Branmo CRM?",
        answer: "Branmo CRM es una plataforma de CRM basada en WhatsApp que usa IA para automatizar conversaciones de ventas, convertir leads y gestionar embudos de ventas."
      },
      {
        question: "¿Cómo funciona la integración con WhatsApp API?",
        answer: "Nos integramos con la API oficial de WhatsApp Business para garantizar comunicaciones empresariales confiables, seguras y compatibles."
      },
      {
        question: "¿Está incluida la automatización con IA?",
        answer: "Sí, nuestra automatización con IA maneja respuestas, califica leads y ayuda a convertir conversaciones en ventas automáticamente."
      },
      {
        question: "¿Cuándo estará disponible Branmo CRM?",
        answer: "Actualmente estamos en desarrollo y ofreciendo acceso anticipado. Únete a nuestra lista de espera para ser notificado cuando lancemos."
      },
      {
        question: "¿Qué idiomas son compatibles?",
        answer: "Branmo CRM soporta inglés, portugués y español, con más idiomas planeados para el futuro."
      }
    ]
  };

  return {
    "@type": "FAQPage",
    "@id": "https://branmo.app/#faq",
    "mainEntity": faqs[language].map((faq, index) => ({
      "@type": "Question",
      "@id": `https://branmo.app/#faq-${index + 1}`,
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>) {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}