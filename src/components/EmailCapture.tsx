"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Language, Translations } from "@/lib/i18n";

const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type EmailFormData = z.infer<typeof emailSchema>;

interface EmailCaptureProps {
  translations: Translations;
  language: Language;
}

export function EmailCapture({ translations, language }: EmailCaptureProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: EmailFormData) => {
    setStatus("loading");
    
    try {
      // Chama a nova API para salvar no model SiteLead
      const response = await fetch("/api/sitelead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
        }),
      });

      if (response.ok) {
        setStatus("success");
        reset();
        // Track successful email signup
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "email_signup", {
            event_category: "conversion",
            event_label: "waitlist_signup",
            language: language,
            value: 1,
          });
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Card className="w-full max-w-md mx-auto bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 text-green-700">
            <CheckCircle className="h-6 w-6" />
            <p className="font-medium">{translations.emailCapture.success}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              {translations.emailCapture.placeholder}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder={translations.emailCapture.placeholder}
              {...register("email")}
              className="w-full"
              disabled={status === "loading"}
            />
            {errors.email && (
              <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertCircle className="h-4 w-4" />
                {translations.emailCapture.error}
              </div>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={status === "loading"}
          >
            {status === "loading" ? "..." : translations.emailCapture.button}
          </Button>
          
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              {translations.emailCapture.error}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}