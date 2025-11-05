"use client";

import { useEffect } from "react";

// Hook para melhorar acessibilidade com teclado
export function useKeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content with Alt+M
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.focus();
          main.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Skip to navigation with Alt+N
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          const firstLink = nav.querySelector('a, button');
          if (firstLink) {
            (firstLink as HTMLElement).focus();
          }
        }
      }

      // Enhanced tab navigation
      if (e.key === 'Tab') {
        const focusableElements = Array.from(
          document.querySelectorAll(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ) as HTMLElement[];

        const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
        
        if (e.shiftKey && currentIndex === 0) {
          // Wrap to last element
          e.preventDefault();
          focusableElements[focusableElements.length - 1].focus();
        } else if (!e.shiftKey && currentIndex === focusableElements.length - 1) {
          // Wrap to first element
          e.preventDefault();
          focusableElements[0].focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
}

// Hook para detecção de preferências de acessibilidade
export function useAccessibilityPreferences() {
  useEffect(() => {
    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }

    // Detect high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    if (prefersHighContrast.matches) {
      document.documentElement.classList.add('high-contrast');
    }

    // Detect color scheme preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkMode.matches) {
      document.documentElement.classList.add('dark-mode');
    }

    // Listen for preference changes
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      document.documentElement.style.setProperty(
        '--animation-duration', 
        e.matches ? '0.01ms' : '200ms'
      );
    };

    prefersReducedMotion.addEventListener('change', handleReducedMotionChange);
    
    return () => {
      prefersReducedMotion.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);
}

// Hook para anúncios de screen reader
export function useScreenReaderAnnouncements() {
  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return { announce };
}

// Hook para validação de contraste
export function useContrastValidation() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const checkContrast = () => {
      const elements = document.querySelectorAll('*');
      elements.forEach((element) => {
        const styles = window.getComputedStyle(element);
        const bgColor = styles.backgroundColor;
        const textColor = styles.color;
        
        // Skip elements without visible text
        if (!element.textContent?.trim()) return;
        
        // Basic contrast checking (would need more sophisticated implementation)
        if (bgColor !== 'rgba(0, 0, 0, 0)' && textColor) {
          console.log(`Element: ${element.tagName}, BG: ${bgColor}, Text: ${textColor}`);
        }
      });
    };

    // Run check after page load
    setTimeout(checkContrast, 2000);
  }, []);
}