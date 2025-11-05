"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import { Language } from "@/lib/i18n";

interface LanguageSwitcherServerProps {
  currentLanguage: Language;
}

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt-br", name: "Português", flag: "🇧🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

export function LanguageSwitcherServer({ currentLanguage }: LanguageSwitcherServerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = async (newLanguage: Language) => {
    // Set cookie and reload page
    document.cookie = `language=${newLanguage}; path=/; max-age=${60 * 60 * 24 * 365}`; // 1 year
    setIsOpen(false);
    window.location.reload();
  };

  const currentLangData = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors p-2 rounded-md hover:bg-white/10"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">
          {currentLangData.flag} {currentLangData.code.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-[60] min-w-[150px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${
                lang.code === currentLanguage ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}