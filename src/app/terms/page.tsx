import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Branmo CRM',
  description: 'Terms and conditions for using Branmo CRM services.',
  robots: 'index, follow',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using Branmo CRM's website and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Description</h2>
            <p className="text-gray-700 mb-6">
              Branmo CRM is a WhatsApp-based customer relationship management platform that provides:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>WhatsApp API integration for business communications</li>
              <li>AI-powered automation for sales and customer service</li>
              <li>Lead conversion and management tools</li>
              <li>Sales funnel optimization features</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Obligations</h2>
            <p className="text-gray-700 mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Provide accurate and complete information</li>
              <li>Comply with WhatsApp's terms of service and policies</li>
              <li>Use the service for lawful purposes only</li>
              <li>Respect the privacy and rights of others</li>
              <li>Not attempt to reverse engineer or compromise our systems</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content, features, and functionality of Branmo CRM are owned by Branmo and protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              Branmo CRM is provided "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Termination</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to terminate or suspend access to our service immediately, without prior notice, for conduct that we believe violates these terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700">
              For questions about these Terms of Service, contact us at:<br />
              Email: legal@branmo.app<br />
              Website: https://branmo.app
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}