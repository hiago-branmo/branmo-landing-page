import { Metadata } from 'next';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cookies } from 'next/headers';
import { Language, translations } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Entre em Contato - Branmo CRM',
  description: 'Entre em contato com a equipe da Branmo CRM para suporte, parcerias ou consultas.',
  robots: 'index, follow',
};

export default async function Contact() {
  const cookieStore = await cookies();
  const currentLanguage = (cookieStore.get('language')?.value as Language) || 'pt-br';
  const t = translations[currentLanguage];
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h1>
            <p className="text-xl opacity-90">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <MapPin className="h-8 w-8 text-blue-200" />
                    <div>
                      <h3 className="text-xl font-semibold">{t.contact.info.office.title}</h3>
                      <p className="text-white/80">{t.contact.info.office.subtitle}</p>
                    </div>
                  </div>
                  <div>
                    <p>{t.contact.info.office.location}</p>
                    <p className="text-white/80 text-sm mt-1">
                      {t.contact.info.office.description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <MessageSquare className="h-8 w-8 text-blue-200" />
                    <div>
                      <h3 className="text-xl font-semibold">{t.contact.info.development.title}</h3>
                      <p className="text-white/80">{t.contact.info.development.subtitle}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white/90">
                      {t.contact.info.development.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.form.title}</h2>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.contact.form.firstName}
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.contact.form.lastName}
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.contact.form.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.contact.form.subject}
                    </label>
                    <select
                      id="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">{t.contact.form.selectSubject}</option>
                      <option value="general">{t.contact.form.subjects.general}</option>
                      <option value="support">{t.contact.form.subjects.support}</option>
                      <option value="partnership">{t.contact.form.subjects.partnership}</option>
                      <option value="press">{t.contact.form.subjects.press}</option>
                      <option value="demo">{t.contact.form.subjects.demo}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    {t.contact.form.submitButton}
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}