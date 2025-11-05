"use client";

import { Button } from "@/components/ui/button";

interface HeroButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroButton({ children, className }: HeroButtonProps) {
  const handleClick = () => {
    document.getElementById("email-capture")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Button
      size="lg"
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}