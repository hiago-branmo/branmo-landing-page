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
  // Contact page
  contact: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      firstName: string;
      lastName: string;
      email: string;
      company: string;
      subject: string;
      message: string;
      selectSubject: string;
      subjects: {
        general: string;
        support: string;
        partnership: string;
        press: string;
        demo: string;
      };
      submitButton: string;
    };
    info: {
      office: {
        title: string;
        subtitle: string;
        location: string;
        description: string;
      };
      development: {
        title: string;
        subtitle: string;
        description: string;
      };
    };
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
  // Privacy Policy
  privacy: {
    title: string;
    description: string;
    lastUpdated: string;
    sections: {
      informationWeCollect: {
        title: string;
        description: string;
        items: string[];
      };
      howWeUse: {
        title: string;
        description: string;
        items: string[];
      };
      dataSharing: {
        title: string;
        description: string;
      };
      yourRights: {
        title: string;
        description: string;
        items: string[];
      };
      contact: {
        title: string;
        description: string;
      };
    };
  };
  // Terms of Service
  terms: {
    title: string;
    description: string;
    lastUpdated: string;
    sections: {
      acceptance: {
        title: string;
        description: string;
      };
      serviceDescription: {
        title: string;
        description: string;
      };
      emailCollection: {
        title: string;
        description: string;
      };
      dataUsage: {
        title: string;
        description: string;
        items: string[];
      };
      limitation: {
        title: string;
        description: string;
      };
      contact: {
        title: string;
        description: string;
      };
    };
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
    contact: {
      title: "Contact Us",
      subtitle: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      form: {
        title: "Send us a message",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        company: "Company (Optional)",
        subject: "Subject",
        message: "Message",
        selectSubject: "Select a subject",
        subjects: {
          general: "General Inquiry",
          support: "Support",
          partnership: "Partnership",
          press: "Press/Media",
          demo: "Request Demo"
        },
        submitButton: "Send Message"
      },
      info: {
        office: {
          title: "Office",
          subtitle: "Visit us in person",
          location: "Belo Horizonte, Brazil",
          description: "Remote-first company with global presence"
        },
        development: {
          title: "In Development",
          subtitle: "We're building something amazing",
          description: "Branmo CRM is currently in development. Use the form to get in touch and be notified when we launch!"
        }
      }
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
    privacy: {
      title: "Privacy Policy",
      description: "Learn how Branmo CRM protects and handles your personal information.",
      lastUpdated: "Last updated",
      sections: {
        informationWeCollect: {
          title: "Information We Collect",
          description: "We only collect your email address when you sign up for updates about Branmo CRM.",
          items: ["Your email address", "Your preferred language (Portuguese, English, or Spanish)"]
        },
        howWeUse: {
          title: "How We Use Your Information",
          description: "We use your email address exclusively for:",
          items: [
            "Sending marketing emails about our product development",
            "Notifying you about product launches and updates",
            "Sharing promotions and special offers related to Branmo CRM"
          ]
        },
        dataSharing: {
          title: "Data Sharing and Protection",
          description: "We do NOT sell, trade, rent, or share your email address with any third parties. Your email will only be used by Branmo to communicate directly with you about our product."
        },
        yourRights: {
          title: "Your Rights",
          description: "You have the right to:",
          items: [
            "Unsubscribe from our emails at any time",
            "Request deletion of your email from our database",
            "Access the information we have about you"
          ]
        },
        contact: {
          title: "Contact Us",
          description: "If you have questions about this Privacy Policy, use our contact form."
        }
      }
    },
    terms: {
      title: "Terms of Service",
      description: "Terms and conditions for using Branmo CRM services.",
      lastUpdated: "Last updated",
      sections: {
        acceptance: {
          title: "Acceptance of Terms",
          description: "By providing your email address on our website, you accept and agree to receive marketing communications from Branmo CRM."
        },
        serviceDescription: {
          title: "Service Description",
          description: "Branmo CRM is currently in development. We are building a WhatsApp-based customer relationship management platform with AI-powered automation for sales and customer service."
        },
        emailCollection: {
          title: "Email Collection",
          description: "When you join our waitlist, we collect your email address solely for the purpose of keeping you informed about our product development, launch, and related promotions."
        },
        dataUsage: {
          title: "How We Use Your Email",
          description: "Your email will be used exclusively for:",
          items: [
            "Product development updates",
            "Launch notifications",
            "Marketing communications about Branmo CRM",
            "Special offers and promotions"
          ]
        },
        limitation: {
          title: "Limitation of Liability",
          description: "Branmo CRM is currently in development and provided 'as is' for information purposes. We make no warranties about the future availability or functionality of our service."
        },
        contact: {
          title: "Contact Information",
          description: "For questions about these Terms of Service, use our contact form on the website."
        }
      }
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
    contact: {
      title: "Entre em Contato",
      subtitle: "Adoraríamos ouvir de você. Envie-nos uma mensagem e responderemos o mais rápido possível.",
      form: {
        title: "Envie-nos uma mensagem",
        firstName: "Nome",
        lastName: "Sobrenome",
        email: "E-mail",
        company: "Empresa (Opcional)",
        subject: "Assunto",
        message: "Mensagem",
        selectSubject: "Selecione um assunto",
        subjects: {
          general: "Consulta Geral",
          support: "Suporte",
          partnership: "Parceria",
          press: "Imprensa/Mídia",
          demo: "Solicitar Demo"
        },
        submitButton: "Enviar Mensagem"
      },
      info: {
        office: {
          title: "Escritório",
          subtitle: "Nos visite pessoalmente",
          location: "Belo Horizonte, Brasil",
          description: "Empresa com trabalho remoto e presença global"
        },
        development: {
          title: "Em Desenvolvimento",
          subtitle: "Estamos construindo algo incrível",
          description: "O Branmo CRM está atualmente em desenvolvimento. Use o formulário para entrar em contato e ser notificado quando lançarmos!"
        }
      }
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
    privacy: {
      title: "Política de Privacidade",
      description: "Saiba como a Branmo CRM protege e gerencia suas informações pessoais.",
      lastUpdated: "Última atualização",
      sections: {
        informationWeCollect: {
          title: "Informações que Coletamos",
          description: "Coletamos apenas seu endereço de e-mail quando você se inscreve para receber atualizações sobre o Branmo CRM.",
          items: ["Seu endereço de e-mail", "Seu idioma preferido (Português, Inglês ou Espanhol)"]
        },
        howWeUse: {
          title: "Como Usamos Suas Informações",
          description: "Usamos seu endereço de e-mail exclusivamente para:",
          items: [
            "Enviar e-mails de marketing sobre o desenvolvimento do nosso produto",
            "Notificar sobre lançamentos e atualizações do produto",
            "Compartilhar promoções e ofertas especiais relacionadas ao Branmo CRM"
          ]
        },
        dataSharing: {
          title: "Compartilhamento e Proteção de Dados",
          description: "NÃO vendemos, trocamos, alugamos ou compartilhamos seu endereço de e-mail com terceiros. Seu e-mail será usado apenas pela Branmo para comunicação direta sobre nosso produto."
        },
        yourRights: {
          title: "Seus Direitos",
          description: "Você tem o direito de:",
          items: [
            "Cancelar a inscrição de nossos e-mails a qualquer momento",
            "Solicitar a exclusão do seu e-mail de nossa base de dados",
            "Acessar as informações que temos sobre você"
          ]
        },
        contact: {
          title: "Entre em Contato",
          description: "Se tiver dúvidas sobre esta Política de Privacidade, use nosso formulário de contato."
        }
      }
    },
    terms: {
      title: "Termos de Uso",
      description: "Termos e condições para uso dos serviços da Branmo CRM.",
      lastUpdated: "Última atualização",
      sections: {
        acceptance: {
          title: "Aceitação dos Termos",
          description: "Ao fornecer seu endereço de e-mail em nosso site, você aceita e concorda em receber comunicações de marketing da Branmo CRM."
        },
        serviceDescription: {
          title: "Descrição do Serviço",
          description: "O Branmo CRM está atualmente em desenvolvimento. Estamos construindo uma plataforma de gestão de relacionamento com clientes baseada no WhatsApp, com automação alimentada por IA para vendas e atendimento ao cliente."
        },
        emailCollection: {
          title: "Coleta de E-mail",
          description: "Quando você se junta à nossa lista de espera, coletamos seu endereço de e-mail exclusivamente para mantê-lo informado sobre o desenvolvimento, lançamento e promoções relacionadas ao nosso produto."
        },
        dataUsage: {
          title: "Como Usamos Seu E-mail",
          description: "Seu e-mail será usado exclusivamente para:",
          items: [
            "Atualizações sobre o desenvolvimento do produto",
            "Notificações de lançamento",
            "Comunicações de marketing sobre o Branmo CRM",
            "Ofertas especiais e promoções"
          ]
        },
        limitation: {
          title: "Limitação de Responsabilidade",
          description: "O Branmo CRM está atualmente em desenvolvimento e é fornecido 'como está' para fins informativos. Não oferecemos garantias sobre a disponibilidade futura ou funcionalidade do nosso serviço."
        },
        contact: {
          title: "Informações de Contato",
          description: "Para dúvidas sobre estes Termos de Uso, use nosso formulário de contato no site."
        }
      }
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
    contact: {
      title: "Contáctanos",
      subtitle: "Nos encantaría saber de ti. Envíanos un mensaje y responderemos tan pronto como sea posible.",
      form: {
        title: "Envíanos un mensaje",
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Correo Electrónico",
        company: "Empresa (Opcional)",
        subject: "Asunto",
        message: "Mensaje",
        selectSubject: "Selecciona un asunto",
        subjects: {
          general: "Consulta General",
          support: "Soporte",
          partnership: "Asociación",
          press: "Prensa/Medios",
          demo: "Solicitar Demo"
        },
        submitButton: "Enviar Mensaje"
      },
      info: {
        office: {
          title: "Oficina",
          subtitle: "Visítanos en persona",
          location: "Belo Horizonte, Brasil",
          description: "Empresa con trabajo remoto y presencia global"
        },
        development: {
          title: "En Desarrollo",
          subtitle: "Estamos construyendo algo increíble",
          description: "Branmo CRM está actualmente en desarrollo. ¡Usa el formulario para contactarnos y ser notificado cuando lancemos!"
        }
      }
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
    privacy: {
      title: "Política de Privacidad",
      description: "Conoce cómo Branmo CRM protege y maneja tu información personal.",
      lastUpdated: "Última actualización",
      sections: {
        informationWeCollect: {
          title: "Información que Recopilamos",
          description: "Solo recopilamos tu dirección de correo electrónico cuando te registras para recibir actualizaciones sobre Branmo CRM.",
          items: ["Tu dirección de correo electrónico", "Tu idioma preferido (Portugués, Inglés o Español)"]
        },
        howWeUse: {
          title: "Cómo Usamos tu Información",
          description: "Usamos tu dirección de correo electrónico exclusivamente para:",
          items: [
            "Enviar correos de marketing sobre el desarrollo de nuestro producto",
            "Notificar sobre lanzamientos y actualizaciones del producto",
            "Compartir promociones y ofertas especiales relacionadas con Branmo CRM"
          ]
        },
        dataSharing: {
          title: "Compartición y Protección de Datos",
          description: "NO vendemos, intercambiamos, alquilamos o compartimos tu dirección de correo electrónico con terceros. Tu correo solo será usado por Branmo para comunicación directa sobre nuestro producto."
        },
        yourRights: {
          title: "Tus Derechos",
          description: "Tienes derecho a:",
          items: [
            "Darte de baja de nuestros correos en cualquier momento",
            "Solicitar la eliminación de tu correo de nuestra base de datos",
            "Acceder a la información que tenemos sobre ti"
          ]
        },
        contact: {
          title: "Contáctanos",
          description: "Si tienes preguntas sobre esta Política de Privacidad, usa nuestro formulario de contacto."
        }
      }
    },
    terms: {
      title: "Términos de Servicio",
      description: "Términos y condiciones para usar los servicios de Branmo CRM.",
      lastUpdated: "Última actualización",
      sections: {
        acceptance: {
          title: "Aceptación de Términos",
          description: "Al proporcionar tu dirección de correo electrónico en nuestro sitio web, aceptas y acuerdas recibir comunicaciones de marketing de Branmo CRM."
        },
        serviceDescription: {
          title: "Descripción del Servicio",
          description: "Branmo CRM está actualmente en desarrollo. Estamos construyendo una plataforma de gestión de relaciones con clientes basada en WhatsApp, con automatización alimentada por IA para ventas y servicio al cliente."
        },
        emailCollection: {
          title: "Recolección de Correo",
          description: "Cuando te unes a nuestra lista de espera, recopilamos tu dirección de correo electrónico exclusivamente para mantenerte informado sobre el desarrollo, lanzamiento y promociones relacionadas con nuestro producto."
        },
        dataUsage: {
          title: "Cómo Usamos tu Correo",
          description: "Tu correo será usado exclusivamente para:",
          items: [
            "Actualizaciones sobre el desarrollo del producto",
            "Notificaciones de lanzamiento",
            "Comunicaciones de marketing sobre Branmo CRM",
            "Ofertas especiales y promociones"
          ]
        },
        limitation: {
          title: "Limitación de Responsabilidad",
          description: "Branmo CRM está actualmente en desarrollo y se proporciona 'tal como está' para fines informativos. No ofrecemos garantías sobre la disponibilidad futura o funcionalidad de nuestro servicio."
        },
        contact: {
          title: "Información de Contacto",
          description: "Para preguntas sobre estos Términos de Servicio, usa nuestro formulario de contacto en el sitio web."
        }
      }
    },
    seo: {
      title: "Branmo CRM - Automatización WhatsApp con IA",
      titleTemplate: "%s | Branmo CRM", 
      description: "Transforma WhatsApp en máquina de ventas con IA. Convierte conversaciones en leads calificados y gestiona embudos de ventas eficientemente.",
      keywords: ["CRM WhatsApp", "automatización IA", "embudo ventas", "generación leads", "IA conversacional", "mensajería negocios"]
    }
  }
};