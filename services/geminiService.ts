import { GoogleGenAI, Type } from "@google/genai";
import { DesignConcept } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDesignConcept = async (topic: string): Promise<DesignConcept> => {
  const modelId = "gemini-3-flash-preview";
  
  const response = await ai.models.generateContent({
    model: modelId,
    contents: `Generate a creative visual design concept for a project about: "${topic}". 
    Provide a catchy project name, a short evocative description, a color palette of 4-5 colors with hex codes, typography suggestions, and a 1-2 word 'vibe' (e.g., 'Cyberpunk Neon', 'Minimalist Zen').`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          projectName: { type: Type.STRING },
          description: { type: Type.STRING },
          colorPalette: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                hex: { type: Type.STRING },
                name: { type: Type.STRING }
              }
            }
          },
          typography: {
            type: Type.OBJECT,
            properties: {
              primary: { type: Type.STRING },
              secondary: { type: Type.STRING }
            }
          },
          vibe: { type: Type.STRING }
        }
      }
    }
  });

  const text = response.text;
  if (!text) {
    throw new Error("No response from AI");
  }

  return JSON.parse(text) as DesignConcept;
};