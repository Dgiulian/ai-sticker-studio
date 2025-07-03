// Mock sticker generation function
export function generateSticker(prompt: string, style: string) {
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

  return {
    id: `sticker-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    prompt,
    style: style.charAt(0).toUpperCase() + style.slice(1),
    imageUrl: randomImage,
    createdAt: new Date().toLocaleDateString(),
  };
}
