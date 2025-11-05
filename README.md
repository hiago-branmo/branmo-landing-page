# Branmo CRM Landing Pages

Uma landing page moderna e multilíngue para captura de leads do Branmo CRM, desenvolvida com Next.js 15, TypeScript, Tailwind CSS e Shadcn/UI.

## 🚀 Características

- **Multilíngue**: Suporte completo para Inglês, Português e Espanhol
- **Design Responsivo**: Interface otimizada para desktop, tablet e mobile
- **SEO Otimizado**: Meta tags, Open Graph, Twitter Cards e estrutura semântica
- **Captura de Email**: Sistema de captura com validação e armazenamento do idioma
- **Componentes Modernos**: UI construída com Shadcn/UI e Tailwind CSS
- **TypeScript**: Código totalmente tipado para maior segurança e produtividade

## 📋 Funcionalidades

### 🎯 Landing Page Principal
- Hero section com call-to-action impactante
- Seção de features destacando os benefícios do Branmo CRM
- Formulário de captura de email com validação
- Footer com informações da empresa

### 🌍 Internacionalização
- Seletor de idioma no header
- Tradução completa em 3 idiomas
- Armazenamento do idioma preferido do usuário
- SEO otimizado para cada idioma

### 📊 Features do Produto
1. **Integração WhatsApp API Oficial**: Conexão direta e confiável
2. **Automação com IA**: Respostas e vendas automatizadas
3. **Criação de Agente IA**: Interface simples e intuitiva
4. **Conversão de Leads**: Análise inteligente de conversas
5. **Gestão de Funil**: Acompanhamento completo do pipeline

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 15 com App Router
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS 4
- **Componentes**: Shadcn/UI
- **Ícones**: Lucide React
- **Formulários**: React Hook Form + Zod
- **Deploy**: Vercel (recomendado)

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <repository-url>
cd branmo-landing-pages

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── api/
│   │   └── subscribe/
│   │       └── route.ts          # API para captura de emails
│   ├── fonts/                    # Fontes customizadas
│   ├── globals.css               # Estilos globais
│   ├── layout.tsx                # Layout principal com SEO
│   ├── page.tsx                  # Página principal
│   └── sitemap.ts               # Gerador de sitemap
├── components/
│   ├── ui/                      # Componentes Shadcn/UI
│   ├── EmailCapture.tsx         # Formulário de captura
│   └── LanguageSwitcher.tsx     # Seletor de idioma
└── lib/
    └── i18n.ts                  # Configurações de internacionalização
```

## 🔧 Configurações

### Variáveis de Ambiente
Crie um arquivo `.env.local` com:
```bash
# Para integração com serviços de email
MAILCHIMP_API_KEY=your_api_key
CONVERTKIT_API_KEY=your_api_key
# Ou configure seu provedor preferido
```

### Integração com Email Service
O arquivo `src/app/api/subscribe/route.ts` está preparado para integração com:
- Mailchimp
- ConvertKit
- Klaviyo
- Banco de dados personalizado

### SEO Configuration
- Meta tags configuradas no `layout.tsx`
- Open Graph e Twitter Cards
- Sitemap automático
- Robots.txt otimizado

## 🌐 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurar domínio branmo.app
vercel domains add branmo.app
```

### Outras Plataformas
- **Netlify**: Configure build command como `npm run build`
- **AWS Amplify**: Configure variáveis de ambiente
- **DigitalOcean**: Use Docker com Node.js 18+

## 📈 Analytics e Tracking

### Google Analytics 4
Adicione ao `layout.tsx`:
```tsx
import Script from 'next/script'

// No componente
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

### Meta Pixel
```tsx
<Script id="meta-pixel">
  {`!function(f,b,e,v,n,t,s)...`}
</Script>
```

## 🎨 Customização

### Cores e Temas
Edite `tailwind.config.ts` para personalizar:
- Cores da marca
- Tipografia
- Espaçamentos
- Breakpoints

### Conteúdo
Modifique `src/lib/i18n.ts` para:
- Alterar textos
- Adicionar novos idiomas
- Personalizar mensagens

## 🔒 Segurança

- Validação de entrada com Zod
- Sanitização de dados
- Rate limiting (implementar conforme necessário)
- CORS configurado corretamente

## 📊 Performance

- Next.js 15 com Turbopack
- Otimização automática de imagens
- Code splitting automático
- Lazy loading de componentes

## 🐛 Debug

### Logs de Email
Os emails capturados são logados no console. Para produção, configure:
```bash
# Ver logs no Vercel
vercel logs

# Ou use um serviço como LogRocket, Sentry
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Suporte

- **Email**: support@branmo.app
- **Website**: https://branmo.app
- **Documentação**: https://docs.branmo.app

---

Desenvolvido com ❤️ pela equipe Branmo
