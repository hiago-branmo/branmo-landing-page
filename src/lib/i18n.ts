export type Language = 'en' | 'pt-br' | 'es';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt-br', name: 'Português', flag: '🇧🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export interface Translations {
  // Header
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  // Features
  features: {
    title: string;
    items: {
      whatsapp: {
        title: string;
        description: string;
      };
      automation: {
        title: string;
        description: string;
      };
      aiAgent: {
        title: string;
        description: string;
      };
      leadConversion: {
        title: string;
        description: string;
      };
      salesFunnel: {
        title: string;
        description: string;
      };
      analytics: {
        title: string;
        description: string;
      };
    };
  };
  // Email capture
  emailCapture: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    success: string;
    error: string;
  };
  // Navigation
  navigation: {
    home: string;
    about: string;
    contact: string;
    getEarlyAccess: string;
  };
  // Footer - Simplified for pre-launch
  footer: {
    copyright: string;
    description: string;
    product: {
      title: string;
      features: string;
      demo: string;
    };
    company: {
      title: string;
      about: string;
    };
    legal: {
      title: string;
      privacy: string;
      terms: string;
    };
    contact: string;
    sitemap: string;
  };
  // SEO
  seo: {
    title: string;
    titleTemplate: string; // For dynamic pages
    description: string;
    keywords: string[];
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      title: "Transform Your WhatsApp into a Powerful Sales Machine",
      subtitle: "Automate responses, convert conversations into qualified leads with AI, and manage your sales funnel efficiently with Branmo CRM.",
      cta: "Get Early Access"
    },
    navigation: {
      home: "Home",
      about: "About",
      contact: "Contact", 
      getEarlyAccess: "Get Early Access"
    },
    features: {
      title: "Why Choose Branmo CRM?",
      items: {
        whatsapp: {
          title: "Official WhatsApp API Integration",
          description: "Connect directly with the official WhatsApp Business API for reliable and professional communication."
        },
        automation: {
          title: "AI-Powered Sales Automation",
          description: "Automate responses and sales processes with advanced artificial intelligence."
        },
        aiAgent: {
          title: "Create Your AI Agent Easily",
          description: "Build and customize your AI sales agent with no technical knowledge required."
        },
        leadConversion: {
          title: "AI Conversation Analysis",
          description: "Transform every conversation into segmented leads with intelligent analysis."
        },
        salesFunnel: {
          title: "Sales Funnel Management",
          description: "Manage and track your leads through customizable sales funnels."
        },
        analytics: {
          title: "Advanced Reports & Analytics",
          description: "Gain deep insights with detailed reports on conversations, conversions, and team performance."
        }
      }
    },
    emailCapture: {
      title: "Be the First to Know",
      subtitle: "Join our waitlist and get exclusive early access to Branmo CRM",
      placeholder: "Enter your email address",
      button: "Join Waitlist",
      success: "Thank you! We'll notify you when Branmo CRM launches.",
      error: "Please enter a valid email address."
    },
    footer: {
      copyright: "© 2024 Branmo. All rights reserved.",
      description: "Transform your WhatsApp into a powerful sales machine with AI-powered automation, lead conversion, and sales funnel management.",
      product: {
        title: "Product",
        features: "Features",
        demo: "Demo"
      },
      company: {
        title: "Company",
        about: "About Us"
      },
      legal: {
        title: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      },
      contact: "Contact Us",
      sitemap: "Sitemap"
    },
    seo: {
      title: "Branmo CRM - WhatsApp AI Sales Automation",
      titleTemplate: "%s | Branmo CRM",
      description: "Transform WhatsApp into a sales machine with AI automation. Convert conversations to qualified leads and manage sales funnels efficiently.",
      keywords: ["WhatsApp CRM", "AI automation", "sales funnel", "lead generation", "conversational AI", "business messaging"]
    }
  },
  "pt-br": {
    hero: {
      title: "Transforme seu WhatsApp em uma Máquina de Vendas Poderosa",
      subtitle: "Automatize respostas, converta conversas em leads qualificados com IA e gerencie seu funil de vendas eficientemente com Branmo CRM.",
      cta: "Obter Acesso Antecipado"
    },
    navigation: {
      home: "Início", 
      about: "Sobre",
      contact: "Contato",
      getEarlyAccess: "Obter Acesso Antecipado"
    },
    features: {
      title: "Por que Escolher o Branmo CRM?",
      items: {
        whatsapp: {
          title: "Integração com WhatsApp API Oficial",
          description: "Conecte-se diretamente com a API oficial do WhatsApp Business para comunicação confiável e profissional."
        },
        automation: {
          title: "Automação de Vendas com IA",
          description: "Automatize respostas e processos de vendas com inteligência artificial avançada."
        },
        aiAgent: {
          title: "Crie seu Agente de IA Facilmente",
          description: "Construa e personalize seu agente de vendas com IA sem conhecimento técnico necessário."
        },
        leadConversion: {
          title: "Análise de Conversas com IA",
          description: "Transforme cada conversa em leads segmentados com análise inteligente."
        },
        salesFunnel: {
          title: "Gerenciamento de Funil de Vendas",
          description: "Gerencie e acompanhe seus leads através de funis de vendas personalizáveis."
        },
        analytics: {
          title: "Relatórios e Analytics Avançados",
          description: "Obtenha insights profundos com relatórios detalhados sobre conversas, conversões e desempenho da equipe."
        }
      }
    },
    emailCapture: {
      title: "Seja o Primeiro a Saber",
      subtitle: "Junte-se à nossa lista de espera e obtenha acesso antecipado exclusivo ao Branmo CRM",
      placeholder: "Digite seu endereço de e-mail",
      button: "Entrar na Lista",
      success: "Obrigado! Avisaremos quando o Branmo CRM for lançado.",
      error: "Por favor, digite um endereço de e-mail válido."
    },
    footer: {
      copyright: "© 2024 Branmo. Todos os direitos reservados.",
      description: "Transforme seu WhatsApp em uma máquina de vendas poderosa com automação com IA, conversão de leads e gerenciamento de funil de vendas.",
      product: {
        title: "Produto",
        features: "Recursos",
        demo: "Demo"
      },
      company: {
        title: "Empresa",
        about: "Sobre Nós"
      },
      legal: {
        title: "Legal",
        privacy: "Política de Privacidade",
        terms: "Termos de Serviço"
      },
      contact: "Fale Conosco",
      sitemap: "Mapa do Site"
    },
    seo: {
      title: "Branmo CRM - Automação WhatsApp com IA",
      titleTemplate: "%s | Branmo CRM",
      description: "Transforme seu WhatsApp em máquina de vendas com IA. Converta conversas em leads qualificados e gerencie funis de vendas eficientemente.",
      keywords: ["CRM WhatsApp", "automação IA", "funil vendas", "geração leads", "IA conversacional", "mensagens negócios"]
    }
  },
  es: {
    hero: {
      title: "Transforma tu WhatsApp en una Máquina de Ventas Poderosa",
      subtitle: "Automatiza respuestas, convierte conversaciones en leads calificados con IA y gestiona tu embudo de ventas eficientemente con Branmo CRM.",
      cta: "Obtener Acceso Anticipado"
    },
    navigation: {
      home: "Inicio",
      about: "Acerca de", 
      contact: "Contacto",
      getEarlyAccess: "Obtener Acceso Anticipado"
    },
    features: {
      title: "¿Por qué Elegir Branmo CRM?",
      items: {
        whatsapp: {
          title: "Integración con API Oficial de WhatsApp",
          description: "Conéctate directamente con la API oficial de WhatsApp Business para comunicación confiable y profesional."
        },
        automation: {
          title: "Automatización de Ventas con IA",
          description: "Automatiza respuestas y procesos de ventas con inteligencia artificial avanzada."
        },
        aiAgent: {
          title: "Crea tu Agente de IA Fácilmente",
          description: "Construye y personaliza tu agente de ventas con IA sin conocimiento técnico requerido."
        },
        leadConversion: {
          title: "Análisis de Conversaciones con IA",
          description: "Transforma cada conversación en leads segmentados con análisis inteligente."
        },
        salesFunnel: {
          title: "Gestión de Embudo de Ventas",
          description: "Gestiona y rastrea tus leads a través de embudos de ventas personalizables."
        },
        analytics: {
          title: "Reportes y Analytics Avanzados",
          description: "Obtén insights profundos con reportes detallados sobre conversaciones, conversiones y rendimiento del equipo."
        }
      }
    },
    emailCapture: {
      title: "Sé el Primero en Saber",
      subtitle: "Únete a nuestra lista de espera y obtén acceso anticipado exclusivo a Branmo CRM",
      placeholder: "Ingresa tu dirección de correo electrónico",
      button: "Unirse a la Lista",
      success: "¡Gracias! Te avisaremos cuando Branmo CRM se lance.",
      error: "Por favor, ingresa una dirección de correo electrónico válida."
    },
    footer: {
      copyright: "© 2024 Branmo. Todos los derechos reservados.",
      description: "Transforma tu WhatsApp en una máquina de ventas poderosa con automatización con IA, conversión de leads y gestión de embudo de ventas.",
      product: {
        title: "Producto",
        features: "Características",
        demo: "Demo"
      },
      company: {
        title: "Empresa",
        about: "Acerca de Nosotros"
      },
      legal: {
        title: "Legal",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio"
      },
      contact: "Contáctanos",
      sitemap: "Mapa del Sitio"
    },
    seo: {
      title: "Branmo CRM - Automatización WhatsApp con IA",
      titleTemplate: "%s | Branmo CRM", 
      description: "Transforma WhatsApp en máquina de ventas con IA. Convierte conversaciones en leads calificados y gestiona embudos de ventas eficientemente.",
      keywords: ["CRM WhatsApp", "automatización IA", "embudo ventas", "generación leads", "IA conversacional", "mensajería negocios"]
    }
  }
};