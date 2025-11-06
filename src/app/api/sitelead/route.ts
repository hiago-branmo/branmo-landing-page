import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const siteLeadSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = siteLeadSchema.parse(body);

    const siteLead = await prisma.siteLead.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contato salvo com sucesso",
        data: siteLead,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao salvar contato:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Dados inválidos",
          errors: error.issues,
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "Erro interno do servidor",
      },
      { status: 500 }
    );
  }
}