import { Metadata } from 'next';
import { Users, Target, Lightbulb, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Us - Branmo CRM | WhatsApp Sales Automation',
  description: 'Learn about Branmo CRM\'s mission to revolutionize WhatsApp business communications with AI-powered automation and sales tools.',
  robots: 'index, follow',
};

export default function About() {
  const stats = [
    { label: 'Companies Helped', value: '500+' },
    { label: 'Messages Automated', value: '1M+' },
    { label: 'Countries', value: '25+' },
    { label: 'Team Members', value: '30+' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To democratize AI-powered sales automation for businesses of all sizes through WhatsApp.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with conversational AI and automation.',
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Every feature we build is designed to solve real problems for real businesses.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product development to customer support.',
    },
  ];

  return (
    <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Branmo CRM</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            We're revolutionizing how businesses communicate and sell through WhatsApp with AI-powered automation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Branmo CRM was born from a simple observation: businesses were struggling to keep up with the 
                  growing demand for instant, personalized communication through WhatsApp. While WhatsApp became 
                  the preferred communication channel for customers worldwide, businesses lacked the tools to 
                  scale their operations effectively.
                </p>
                <p className="mb-4">
                  Founded in 2024 by a team of experienced entrepreneurs and engineers, Branmo CRM bridges this 
                  gap by combining the power of artificial intelligence with the accessibility of WhatsApp's 
                  official Business API.
                </p>
                <p>
                  Today, we're proud to serve hundreds of businesses across 25+ countries, helping them automate 
                  their sales processes, convert more leads, and provide exceptional customer experiences through 
                  the world's most popular messaging platform.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Values</h2>
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

        {/* Team Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Team</h2>
              <p className="text-gray-700 mb-6">
                We're always looking for talented individuals who share our passion for innovation and 
                customer success. If you're interested in joining our growing team, we'd love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  View Open Positions
                </a>
                <a 
                  href="/contact"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  Contact Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}