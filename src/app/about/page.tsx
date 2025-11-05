import { Metadata } from 'next';
import Link from 'next/link';
import { Users, Target, Lightbulb, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Sobre a Branmo - CRM WhatsApp com Automação IA',
  description: 'Conheça a história da Branmo CRM, empresa de Belo Horizonte focada em revolucionar a gestão de conversas comerciais através da automação inteligente com IA.',
  robots: 'index, follow',
};

export default function About() {

  const values = [
    {
      icon: Target,
      title: 'Nossa Missão',
      description: 'Levar tecnologia acessível para empresas de todos os tamanhos, ajudando-as a evoluir e crescer através de soluções inovadoras.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação Constante',
      description: 'Utilizamos as mais novas tecnologias, especialmente IA, para criar soluções que realmente fazem a diferença no dia a dia das empresas.',
    },
    {
      icon: Users,
      title: 'Pessoas em Primeiro Lugar',
      description: 'Acreditamos que software e empresas são feitos de pessoas. Por isso, prezamos pelos nossos colaboradores e clientes acima de tudo.',
    },
    {
      icon: Award,
      title: 'Qualidade Máxima',
      description: 'Fornecemos produtos nos quais nossos clientes podem confiar, sempre com os mais altos padrões de segurança e privacidade.',
    },
  ];

  return (
    <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sobre a Branmo</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            A Branmo nasceu do sonho de criar uma empresa que resolve problemas reais usando tecnologia. 
            Estamos revolucionando a gestão de conversas comerciais através da automação inteligente com IA.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Nossa História</h2>
              <div className="prose prose-lg max-w-none text-white/90">
                <p className="mb-4">
                  A Branmo nasceu de uma paixão genuína por empreender e resolver problemas reais das empresas através da tecnologia. 
                  Localizada em Belo Horizonte, MG, nossa empresa foi criada com o propósito de democratizar o acesso a soluções tecnológicas 
                  avançadas, especialmente para negócios que precisam manter contato próximo com seus clientes.
                </p>
                <p className="mb-4">
                  Identificamos que muitas empresas enfrentam dificuldades na gestão de conversas sobre vendas - desde as dúvidas iniciais 
                  até o fechamento de negócios. Nossa solução automatiza e organiza essas interações, garantindo que os vendedores recebam 
                  leads muito bem qualificados e tratados pela nossa inteligência artificial.
                </p>
                <p>
                  Atualmente estamos em fase de desenvolvimento do MVP, focando na validação do interesse do mercado. Nosso diferencial 
                  está na evolução rápida, flexibilidade, preço acessível e no uso das mais novas tecnologias, especialmente IA, 
                  para transformar simples conversas em oportunidades valiosas de negócio.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6">
                    <IconComponent className="h-12 w-12 text-blue-200 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-white/80">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Vision Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Nossa Visão para o Futuro</h2>
              <p className="text-white/90 mb-6">
                Em 5 anos, vemos a Branmo como uma marca forte e reconhecida no mercado, oferecendo produtos de software 
                excepcionais que proporcionam escala real para nossos clientes. Queremos ser referência em transformação 
                digital, sempre mantendo nosso compromisso com a qualidade máxima, segurança e privacidade dos dados.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Entre em Contato
                </Link>
                <Link 
                  href="/#email-capture"
                  className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium"
                >
                  Junte-se à Lista de Espera
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}