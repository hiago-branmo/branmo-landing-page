import { Metadata } from 'next';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { Language, translations } from '@/lib/i18n';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Info, Phone, Shield, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mapa do Site - Branmo CRM',
  description: 'Navegue facilmente por todas as páginas do Branmo CRM. Encontre informações sobre nosso produto, empresa e políticas.',
  robots: 'index, follow',
};

export default async function Sitemap() {
  const cookieStore = await cookies();
  const currentLanguage = (cookieStore.get('language')?.value as Language) || 'pt-br';
  const t = translations[currentLanguage];

  const sitePages = [
    {
      category: 'Principal',
      icon: Home,
      pages: [
        {
          title: t.navigation.home,
          href: '/',
          description: currentLanguage === 'pt-br' 
            ? 'Página inicial com informações sobre o Branmo CRM e formulário de cadastro'
            : currentLanguage === 'en'
            ? 'Homepage with Branmo CRM information and signup form'
            : 'Página principal con información sobre Branmo CRM y formulario de registro'
        }
      ]
    },
    {
      category: currentLanguage === 'pt-br' ? 'Empresa' : currentLanguage === 'en' ? 'Company' : 'Empresa',
      icon: Info,
      pages: [
        {
          title: t.navigation.about,
          href: '/about',
          description: currentLanguage === 'pt-br'
            ? 'Conheça nossa história, missão, valores e visão para o futuro'
            : currentLanguage === 'en'
            ? 'Learn about our story, mission, values and vision for the future'
            : 'Conoce nuestra historia, misión, valores y visión para el futuro'
        }
      ]
    },
    {
      category: currentLanguage === 'pt-br' ? 'Suporte' : currentLanguage === 'en' ? 'Support' : 'Soporte',
      icon: Phone,
      pages: [
        {
          title: t.contact.title,
          href: '/contact',
          description: currentLanguage === 'pt-br'
            ? 'Entre em contato conosco através do formulário ou informações de contato'
            : currentLanguage === 'en'
            ? 'Get in touch with us through the contact form or contact information'
            : 'Ponte en contacto con nosotros a través del formulario o información de contacto'
        }
      ]
    },
    {
      category: currentLanguage === 'pt-br' ? 'Legal' : currentLanguage === 'en' ? 'Legal' : 'Legal',
      icon: Shield,
      pages: [
        {
          title: t.privacy.title,
          href: '/privacy',
          description: currentLanguage === 'pt-br'
            ? 'Nossa política de privacidade e como protegemos seus dados'
            : currentLanguage === 'en'
            ? 'Our privacy policy and how we protect your data'
            : 'Nuestra política de privacidad y cómo protegemos tus datos'
        },
        {
          title: t.terms.title,
          href: '/terms',
          description: currentLanguage === 'pt-br'
            ? 'Termos de uso e condições para utilização dos nossos serviços'
            : currentLanguage === 'en'
            ? 'Terms of use and conditions for using our services'
            : 'Términos de uso y condiciones para utilizar nuestros servicios'
        }
      ]
    },
    {
      category: currentLanguage === 'pt-br' ? 'Navegação' : currentLanguage === 'en' ? 'Navigation' : 'Navegación',
      icon: Globe,
      pages: [
        {
          title: currentLanguage === 'pt-br' ? 'Mapa do Site' : currentLanguage === 'en' ? 'Sitemap' : 'Mapa del Sitio',
          href: '/site-map',
          description: currentLanguage === 'pt-br'
            ? 'Esta página - visão geral de todas as páginas disponíveis'
            : currentLanguage === 'en'
            ? 'This page - overview of all available pages'
            : 'Esta página - resumen de todas las páginas disponibles'
        }
      ]
    }
  ];

  const sitemapTitle = currentLanguage === 'pt-br' ? 'Mapa do Site' : currentLanguage === 'en' ? 'Sitemap' : 'Mapa del Sitio';
  const sitemapSubtitle = currentLanguage === 'pt-br' 
    ? 'Navegue facilmente por todas as páginas do Branmo CRM'
    : currentLanguage === 'en'
    ? 'Easily navigate through all Branmo CRM pages'
    : 'Navega fácilmente por todas las páginas de Branmo CRM';

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center text-foreground mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{sitemapTitle}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {sitemapSubtitle}
            </p>
          </div>

          {/* Sitemap Grid */}
          <div className="grid gap-8">
            {sitePages.map((section, sectionIndex) => {
              const IconComponent = section.icon;
              return (
                <Card key={sectionIndex} className="bg-background/80 backdrop-blur-sm border-border">
                  <CardContent className="p-6">
                    {/* Section Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <IconComponent className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-semibold text-foreground">{section.category}</h2>
                    </div>

                    {/* Pages in Section */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.pages.map((page, pageIndex) => (
                        <Link
                          key={pageIndex}
                          href={page.href}
                          className="group"
                        >
                          <div className="bg-background/60 backdrop-blur-sm border border-border rounded-lg p-4 hover:bg-background/80 hover:border-primary transition-all duration-200">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                              {page.title}
                            </h3>
                            <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                              {page.description}
                            </p>
                            <div className="mt-3 text-primary text-sm font-medium group-hover:text-primary/80">
                              {page.href === '/site-map' 
                                ? (currentLanguage === 'pt-br' ? 'Você está aqui' : currentLanguage === 'en' ? 'You are here' : 'Estás aquí')
                                : (currentLanguage === 'pt-br' ? 'Visitar página →' : currentLanguage === 'en' ? 'Visit page →' : 'Visitar página →')
                              }
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Footer Info */}
          <Card className="bg-background/80 backdrop-blur-sm border-border mt-8">
            <CardContent className="p-6 text-center text-muted-foreground">
              <h3 className="text-xl font-semibold  mb-4">
                {currentLanguage === 'pt-br' ? 'Sobre o Branmo CRM' : currentLanguage === 'en' ? 'About Branmo CRM' : 'Acerca de Branmo CRM'}
              </h3>
              <p className="/80 mb-4 max-w-2xl mx-auto">
                {currentLanguage === 'pt-br'
                  ? 'Estamos desenvolvendo uma plataforma de CRM baseada no WhatsApp com automação por IA para transformar conversas em vendas.'
                  : currentLanguage === 'en'
                  ? 'We are developing a WhatsApp-based CRM platform with AI automation to transform conversations into sales.'
                  : 'Estamos desarrollando una plataforma CRM basada en WhatsApp con automatización por IA para transformar conversaciones en ventas.'
                }
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/#email-capture"
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {t.navigation.getEarlyAccess}
                </Link>
                <Link
                  href="/about"
                  className="border border-white  px-6 py-2 rounded-lg hover:bg-white/10 transition-colors font-medium"
                >
                  {t.navigation.about}
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}