"use server";

import { openai } from "@ai-sdk/openai";
import {
  Experimental_GenerateImageResult as GenerateImageResult,
  experimental_generateImage as generateImage,
} from "ai";

export async function generateSticker(userInput: string, style: string) {
  // const model = openai.image('gpt-image-1')

  if (!process.env.OPENAI_MODEL) {
    throw new Error("OPENAI_MODEL not defined");
  }
  const model = openai.image(process.env.OPENAI_MODEL);

  const systemPrompt = buildStickerPrompt(userInput, style);

  const result: GenerateImageResult = await generateImage({
    model,
    prompt: systemPrompt,
    size: "1024x1024",
    n: 4,
  });

  return result.images.map((image) => ({
    id: `sticker-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    prompt: userInput,
    style: style.charAt(0).toUpperCase() + style.slice(1),
    image: image.uint8Array,
    createdAt: new Date().toLocaleDateString(),
  }));
}

function buildStickerPrompt(userInput: string, style: string): string {
  //`A sticker of ${userInput}, in the style of ${style}, with a white border and transparent background.`;

  return `Create a high-quality digital sticker in ${style.toLowerCase()} style. The subject is: ${userInput}. 
  The sticker should be cute, eye-catching, and centered with a minimal or transparent background.`;
}
