import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Language, translations } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Política de Privacidade - Branmo CRM',
  description: 'Saiba como a Branmo CRM protege e gerencia suas informações pessoais.',
  robots: 'index, follow',
};

export default async function PrivacyPolicy() {
  const cookieStore = await cookies();
  const currentLanguage = (cookieStore.get('language')?.value as Language) || 'pt-br';
  const t = translations[currentLanguage];
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{t.privacy.title}</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>{t.privacy.lastUpdated}:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t.privacy.sections.informationWeCollect.title}</h2>
            <p className="text-gray-700 mb-4">
              {t.privacy.sections.informationWeCollect.description}
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              {t.privacy.sections.informationWeCollect.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t.privacy.sections.howWeUse.title}</h2>
            <p className="text-gray-700 mb-4">
              {t.privacy.sections.howWeUse.description}
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              {t.privacy.sections.howWeUse.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t.privacy.sections.dataSharing.title}</h2>
            <p className="text-gray-700 mb-6">
              {t.privacy.sections.dataSharing.description}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t.privacy.sections.yourRights.title}</h2>
            <p className="text-gray-700 mb-4">
              {t.privacy.sections.yourRights.description}
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              {t.privacy.sections.yourRights.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t.privacy.sections.contact.title}</h2>
            <p className="text-gray-700 mb-4">
              {t.privacy.sections.contact.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}