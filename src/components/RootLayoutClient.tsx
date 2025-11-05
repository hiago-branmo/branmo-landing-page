"use client";

import { useState, ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Language } from "@/lib/i18n";

interface RootLayoutClientProps {
  children: ReactNode;
}

export function RootLayoutClient({ children }: RootLayoutClientProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  return (
    <>
      <Navigation 
        currentLanguage={currentLanguage} 
        onLanguageChange={setCurrentLanguage} 
      />
      {children}
      <Footer language={currentLanguage} />
    </>
  );
}