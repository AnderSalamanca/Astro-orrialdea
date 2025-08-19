// src/pages/api/chat.js

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.GEMINI_API_KEY);

// Usaremos el método POST
export async function POST({ request }) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    // Si el cuerpo no es un JSON válido o está vacío
    return new Response(JSON.stringify({ error: "Cuerpo de la petición inválido o vacío." }), {
      status: 400, // Bad Request
      headers: { "Content-Type": "application/json" },
    });
  }
  
  const userMessage = body.message;

  if (!userMessage) {
    return new Response(JSON.stringify({ error: "La propiedad 'message' es requerida." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Usamos un modelo válido y recomendado
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const botMessage = response.text();

    return new Response(JSON.stringify({ reply: botMessage }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error al llamar a la API de Gemini:", error);
    return new Response(JSON.stringify({ error: "Error interno al procesar la respuesta." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}