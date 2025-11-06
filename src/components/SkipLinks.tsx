"use client";

export function SkipLinks() {
  const skipToMain = () => {
    const main = document.querySelector('main');
    if (main) {
      main.focus();
      main.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skipToNav = () => {
    const nav = document.querySelector('nav');
    if (nav) {
      const firstLink = nav.querySelector('a, button');
      if (firstLink) {
        (firstLink as HTMLElement).focus();
      }
    }
  };

  const skipToContent = () => {
    const content = document.getElementById('email-capture');
    if (content) {
      content.focus();
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav aria-label="Skip navigation links" className="sr-only focus-within:not-sr-only">
  <div className="fixed top-0 left-0 z-50 bg-primary text-primary-foreground p-2 space-x-2">
        <button
          onClick={skipToMain}
          className="bg-background text-primary px-3 py-1 rounded focus:ring-2 focus:ring-primary/50"
        >
          Skip to main content
        </button>
        <button
          onClick={skipToNav}
          className="bg-white text-blue-600 px-3 py-1 rounded focus:ring-2 "
        >
          Skip to navigation
        </button>
        <button
          onClick={skipToContent}
          className="bg-white text-blue-600 px-3 py-1 rounded focus:ring-2 "
        >
          Skip to signup
        </button>
      </div>
    </nav>
  );
}