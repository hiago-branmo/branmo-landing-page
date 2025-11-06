"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Language, translations } from "@/lib/i18n";
import { LanguageSwitcherServer } from "@/components/LanguageSwitcherServer";

interface NavigationServerProps {
  currentLanguage: Language;
}

export function NavigationServer({ currentLanguage }: NavigationServerProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = translations[currentLanguage];

  const navigationItems = [
    { href: "/", label: t.navigation.home },
    { href: "/about", label: t.navigation.about },
    { href: "/contact", label: t.navigation.contact },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 relative z-50" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img 
              src="/branmo-banner.svg" 
              alt="Branmo CRM" 
              className="hidden sm:block h-8 w-auto"
            />
            <img 
              src="/branmo-icon.png" 
              alt="Branmo" 
              className="sm:hidden h-8 w-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:text-primary hover:bg-background/10"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            
            <LanguageSwitcherServer currentLanguage={currentLanguage} />
            
            <Link
              href="/#email-capture"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-background hover:text-primary transition-colors"
            >
              {t.navigation.getEarlyAccess}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-white/20 relative z-50">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:text-primary hover:bg-background/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="px-3 py-2">
                <LanguageSwitcherServer currentLanguage={currentLanguage} />
              </div>
              
              <Link
                href="/#email-capture"
                className="mx-3 mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.navigation.getEarlyAccess}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}