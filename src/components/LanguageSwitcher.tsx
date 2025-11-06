"use client";

import { Language, languages } from "@/lib/i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageSwitcher({
  currentLanguage,
  onLanguageChange,
}: LanguageSwitcherProps) {
  const handleLanguageChange = (newLanguage: Language) => {
    // Track language change for analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "language_change", {
        event_category: "engagement",
        event_label: "language_switch",
        from_language: currentLanguage,
        to_language: newLanguage,
      });
    }
    
    onLanguageChange(newLanguage);
  };

  return (
    <Select value={currentLanguage} onValueChange={handleLanguageChange}>
  <SelectTrigger className="w-[140px] bg-background/10 border-border/20 text-foreground">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <span className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

// Extend Window type for gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}