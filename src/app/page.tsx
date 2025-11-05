import { MessageSquare, Bot, Zap, TrendingUp, Users, BarChart3, Mail } from "lucide-react";
import { EmailCapture } from "@/components/EmailCapture";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { HeroButton } from "@/components/HeroButton";
import { Language, translations } from "@/lib/i18n";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const currentLanguage = (cookieStore.get('language')?.value as Language) || "en";
  const t = translations[currentLanguage];

  const features = [
    {
      icon: MessageSquare,
      title: t.features.items.whatsapp.title,
      description: t.features.items.whatsapp.description,
    },
    {
      icon: Bot,
      title: t.features.items.automation.title,
      description: t.features.items.automation.description,
    },
    {
      icon: Zap,
      title: t.features.items.aiAgent.title,
      description: t.features.items.aiAgent.description,
    },
    {
      icon: TrendingUp,
      title: t.features.items.leadConversion.title,
      description: t.features.items.leadConversion.description,
    },
    {
      icon: Users,
      title: t.features.items.salesFunnel.title,
      description: t.features.items.salesFunnel.description,
    },
    {
      icon: BarChart3,
      title: t.features.items.analytics.title,
      description: t.features.items.analytics.description,
    },
  ];

  return (
    <>
      <SEOHead language={currentLanguage} />
      <div className="min-h-screen">

        {/* Hero Section */}
        <main role="main">
          <section className="container mx-auto px-4 py-20 text-center text-white" aria-labelledby="hero-title">
            <div className="max-w-4xl mx-auto">
              {/* Logo destacado */}
              <div className="mb-12 flex justify-center">
                <img 
                  src="/branmo-banner-dark.svg" 
                  alt="Branmo CRM" 
                  className="h-24 md:h-32 lg:h-40 w-auto hover:scale-105 transition-transform duration-300 filter drop-shadow-2xl"
                />
              </div>
              
              <h1 id="hero-title" className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t.hero.title}
              </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <HeroButton className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg">
            {t.hero.cta}
          </HeroButton>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-white/5 backdrop-blur-sm" aria-labelledby="features-title">
            <div className="container mx-auto px-4">
              <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                {t.features.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <IconComponent className="h-12 w-12 mb-4 text-blue-200" aria-hidden="true" />
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
              </div>
            </div>
          </section>

          {/* Email Capture Section */}
          <section id="email-capture" className="py-20" aria-labelledby="email-title">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center text-white mb-12">
                <Mail className="h-16 w-16 mx-auto mb-6 text-blue-200" aria-hidden="true" />
                <h2 id="email-title" className="text-3xl md:text-4xl font-bold mb-4">
                  {t.emailCapture.title}
                </h2>
            <p className="text-xl opacity-90">
              {t.emailCapture.subtitle}
            </p>
              </div>
              <div className="max-w-md mx-auto">
                <EmailCapture translations={t} language={currentLanguage} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}