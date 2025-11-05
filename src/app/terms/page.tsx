import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Language, translations } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Termos de Uso - Branmo CRM',
  description: 'Termos e condições para uso dos serviços da Branmo CRM.',
  robots: 'index, follow',
};

export default async function TermsOfService() {
  const cookieStore = await cookies();
  const currentLanguage = (cookieStore.get('language')?.value as Language) || 'pt-br';
  const t = translations[currentLanguage];
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{t.terms.title}</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>{t.terms.lastUpdated}:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t.terms.sections.acceptance.title}</h2>
            <p className="text-gray-700 mb-6">
              {t.terms.sections.acceptance.description}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t.terms.sections.serviceDescription.title}</h2>
            <p className="text-gray-700 mb-6">
              {t.terms.sections.serviceDescription.description}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t.terms.sections.emailCollection.title}</h2>
            <p className="text-gray-700 mb-6">
              {t.terms.sections.emailCollection.description}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t.terms.sections.dataUsage.title}</h2>
            <p className="text-gray-700 mb-4">
              {t.terms.sections.dataUsage.description}
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              {t.terms.sections.dataUsage.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t.terms.sections.limitation.title}</h2>
            <p className="text-gray-700 mb-6">
              {t.terms.sections.limitation.description}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t.terms.sections.contact.title}</h2>
            <p className="text-gray-700">
              {t.terms.sections.contact.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}