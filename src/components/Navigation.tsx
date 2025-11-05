"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Language, translations } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

interface NavigationProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export function Navigation({ currentLanguage, onLanguageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = translations[currentLanguage];

  const navigationItems = [
    { label: t.navigation.home, href: '/' },
    { label: t.navigation.about, href: '/about' },
    { label: t.navigation.contact, href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="relative z-50" role="banner">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/"
            className="text-2xl font-bold text-white hover:text-blue-200 transition-colors"
          >
            Branmo CRM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-200 font-medium'
                    : 'hover:text-blue-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/#email-capture"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              {t.navigation.getEarlyAccess}
            </Link>
            
            {/* Language Switcher */}
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-white/20">
            <div className="flex flex-col space-y-4 pt-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-white py-2 transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-200 font-medium'
                      : 'hover:text-blue-200'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#email-capture"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.navigation.getEarlyAccess}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}