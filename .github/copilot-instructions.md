# Copilot Instructions for Branmo CRM Landing Pages

## Project Overview
- **Framework:** Next.js 15 (App Router)
- **Languages:** TypeScript, Tailwind CSS, Shadcn/UI
- **Purpose:** Multilingual, SEO-optimized landing page for lead capture
- **Key Features:** Email capture, internationalization, responsive design, SEO meta tags, analytics integration

## Architecture & Key Files
- `src/app/layout.tsx`: Main layout, global SEO, language detection, analytics scripts
- `src/app/api/subscribe/route.ts`: Email capture API, ready for Mailchimp/ConvertKit/Klaviyo/custom DB
- `src/components/`: UI components (Shadcn/UI in `ui/`), language switcher, email capture form
- `src/lib/i18n.ts`: Internationalization config and translations
- `public/manifest.json`, `public/robots.txt`: PWA and SEO files

## Patterns & Conventions
- **Internationalization:**
  - Language stored in cookies, detected in `layout.tsx`
  - Use `LanguageSwitcher` for UI language changes
  - All user-facing text should be sourced from `i18n.ts`
- **SEO:**
  - Meta tags, Open Graph, Twitter Cards set in `layout.tsx`
  - Sitemap auto-generated in `src/app/sitemap.ts`
- **Email Capture:**
  - Form in `EmailCapture.tsx`, API in `api/subscribe/route.ts`
  - Validate with Zod, integrate with external services via env vars
- **Styling:**
  - Tailwind CSS para estilos, sempre priorizando o uso de cores do tema (`text-foreground`, `bg-background`, `text-primary`, etc.)
  - Nunca use cores fixas (ex: `text-white`, `text-black`, `text-gray-900`) em textos ou componentes; sempre utilize as variáveis do tema para garantir consistência visual e fácil manutenção.
  - Shadcn/UI para componentes reutilizáveis
- **Analytics:**
  - Google Analytics and Meta Pixel scripts added in `layout.tsx` using Next.js `<Script />`

## Developer Workflows
- **Install:** `npm install`
- **Dev Server:** `npm run dev` (localhost:3000)
- **Build:** `npm run build`
- **Deploy:** Recommended via Vercel (`vercel` CLI)
- **Env Vars:** Set in `.env.local` for email integrations

## Integration Points
- **Email Services:** Mailchimp, ConvertKit, Klaviyo (configure API keys in `.env.local`)
- **Analytics:** Google Analytics 4, Meta Pixel (see `layout.tsx`)
- **SEO:** Robots.txt, sitemap, manifest.json in `public/`

## Customization
- **Branding:** Edit `tailwind.config.ts` for colors, typography
- **Content:** Update `i18n.ts` for translations/messages

## Security & Performance
- Input validation with Zod
- Data sanitization
- Next.js optimizations: Turbopack, image optimization, code splitting

## Example Patterns
- Language detection:
  ```tsx
  const currentLanguage = (cookieStore.get('language')?.value as Language) || "en";
  ```
- SEO meta tags:
  ```tsx
  export const metadata: Metadata = { ... };
  ```
- Email API integration:
  ```ts
  // src/app/api/subscribe/route.ts
  // Integrate with Mailchimp/ConvertKit using env vars
  ```

---
For questions or unclear conventions, check `README.md` or ask for clarification.
