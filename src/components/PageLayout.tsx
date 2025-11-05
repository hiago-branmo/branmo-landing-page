"use client";

import { useState, ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Language } from "@/lib/i18n";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  return (
    <div className={className}>
      <Navigation 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage} 
      />
      {children}
      <Footer language={currentLanguage} />
    </div>
  );
}