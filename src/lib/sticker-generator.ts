"use server";

import { openai } from "@ai-sdk/openai";
import { experimental_generateImage as generateImage } from "ai";

// Mock sticker generation function
export async function generateSticker(prompt: string, style: string) {
  const stickerImages = [
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1560424/pexels-photo-1560424.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];

  const randomImage =
    stickerImages[Math.floor(Math.random() * stickerImages.length)];

  // const model = openai.image('gpt-image-1')
  const model = openai.image("dall-e-2"); // dall-e-3

  const systemPrompt = `generate the indicated number of stickers with the prompt indicated after the colon in the Style of ${style}: ${prompt}. `;

  console.log(systemPrompt);

  const { images } = await generateImage({
    model,
    prompt: systemPrompt,

    // providerOptions: {
    //   openai: { quality: "high" },
    // },
    size: "1024x1024",
    n: 1, // 4
    // abortSignal: AbortSignal.timeout(15000), // Abort after 1 second
  });

  console.log(images);

  return {
    id: `sticker-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    prompt,
    style: style.charAt(0).toUpperCase() + style.slice(1),
    imageUrl: randomImage,
    createdAt: new Date().toLocaleDateString(),
  };
}
