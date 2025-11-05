import { useEffect, useState } from "react";

interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  fcp: number; // First Contentful Paint
  ttfb: number; // Time to First Byte
}

export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});

  useEffect(() => {
    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // LCP - Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime),
          });
        }
      }).observe({ type: 'largest-contentful-paint', buffered: true });

      // FID - First Input Delay
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const fid = (entry as any).processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'performance',
              event_label: 'FID',
              value: Math.round(fid),
            });
          }
        }
      }).observe({ type: 'first-input', buffered: true });

      // CLS - Cumulative Layout Shift
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000),
          });
        }
      }).observe({ type: 'layout-shift', buffered: true });

      // FCP - First Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fcp = entries[0]?.startTime;
        if (fcp) {
          setMetrics(prev => ({ ...prev, fcp }));
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'performance',
              event_label: 'FCP',
              value: Math.round(fcp),
            });
          }
        }
      }).observe({ type: 'paint', buffered: true });

      // TTFB - Time to First Byte
      const navEntry = performance.getEntriesByType('navigation')[0] as any;
      if (navEntry) {
        const ttfb = navEntry.responseStart - navEntry.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'TTFB',
            value: Math.round(ttfb),
          });
        }
      }
    };

    // Measure when page is fully loaded
    if (document.readyState === 'complete') {
      measureWebVitals();
    } else {
      window.addEventListener('load', measureWebVitals);
      return () => window.removeEventListener('load', measureWebVitals);
    }
  }, []);

  return metrics;
}

// Error tracking
export function trackError(error: Error, context?: string) {
  console.error('Application Error:', error);
  
  if (window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      context: context || 'unknown'
    });
  }

  if (window.fbq) {
    window.fbq('track', 'Error', {
      error_message: error.message,
      context: context || 'unknown'
    });
  }
}

// SEO monitoring
export function trackSEOMetrics() {
  const metrics = {
    title_length: document.title.length,
    meta_description_length: (document.querySelector('meta[name="description"]') as HTMLMetaElement)?.content?.length || 0,
    h1_count: document.querySelectorAll('h1').length,
    h2_count: document.querySelectorAll('h2').length,
    images_without_alt: document.querySelectorAll('img:not([alt])').length,
    internal_links: document.querySelectorAll('a[href^="/"], a[href^="#"]').length,
    external_links: document.querySelectorAll('a[href^="http"]:not([href*="branmo.app"])').length,
  };

  if (window.gtag) {
    window.gtag('event', 'seo_audit', {
      event_category: 'seo',
      event_label: 'page_metrics',
      custom_parameters: metrics
    });
  }

  return metrics;
}

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    fbq: (command: string, eventName: string, parameters?: any) => void;
  }
}