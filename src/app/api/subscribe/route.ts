import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.string().email(),
  language: z.enum(["en", "pt-br", "es"]),
  source: z.string().optional().default("landing_page"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, language, source } = subscribeSchema.parse(body);

    // Here you would integrate with your email service provider
    // For now, we'll just log the data and return success
    console.log("New email subscription:", {
      email,
      language,
      source,
      timestamp: new Date().toISOString(),
    });

    // You can integrate with services like:
    // - Mailchimp
    // - ConvertKit
    // - Klaviyo
    // - Your own database
    
    // Example with a simple database save (replace with your actual implementation):
    // await saveEmailToDatabase({ email, language, source });

    return NextResponse.json(
      { 
        success: true, 
        message: "Email successfully added to waitlist" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing subscription:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Invalid data provided",
          errors: error.issues 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: "Internal server error" 
      },
      { status: 500 }
    );
  }
}