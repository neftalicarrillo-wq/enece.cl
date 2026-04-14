import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { z } from "zod";

// ── Validación de inputs (A-002) ──────────────────────────────────
const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(4000),
});
const BodySchema = z.object({
  messages: z.array(MessageSchema).min(1).max(20),
});

// ── Rate limiting en memoria (A-001) ─────────────────────────────
const rateLimit = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 20;       // requests por ventana
const WINDOW_MS = 60_000;    // ventana de 60 segundos

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (entry && now < entry.reset) {
    if (entry.count >= RATE_LIMIT) return false;
    entry.count++;
  } else {
    rateLimit.set(ip, { count: 1, reset: now + WINDOW_MS });
  }
  return true;
}

// ── Cliente Anthropic ─────────────────────────────────────────────
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  baseURL: process.env.ANTHROPIC_BASE_URL,
});

const SYSTEM_PROMPT = `Eres el asistente virtual de ENECE, la marca personal de Neftalí.
Ayudas a los visitantes con información sobre servicios, proyectos y consultas generales.
Responde siempre en español, de forma profesional pero cercana.
Si no sabes algo específico sobre ENECE, ofrece que el usuario deje sus datos de contacto.`;

export async function POST(req: NextRequest) {
  // Rate limiting (A-001)
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return new Response("Too Many Requests", { status: 429 });
  }

  // Validación de inputs (A-002)
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response("Bad Request", { status: 400 });
  }

  const parsed = BodySchema.safeParse(body);
  if (!parsed.success) {
    return new Response("Invalid payload", { status: 422 });
  }

  const { messages } = parsed.data;

  // Streaming con error handling (A-003)
  try {
    const stream = client.messages.stream({
      model: process.env.ANTHROPIC_MODEL ?? "claude-3-5-haiku-20241022",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    });

    return new Response(stream.toReadableStream(), {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    console.error("[chat/route] Anthropic error:", error);
    return new Response("Error interno del servidor", { status: 500 });
  }
}
