"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, Palette } from "lucide-react";

interface Sticker {
  id: string;
  prompt: string;
  style: string;
  image: Uint8Array;
  createdAt: string;
}

interface StickerGalleryProps {
  stickers: Sticker[];
}

export function StickerGallery({ stickers }: StickerGalleryProps) {
  const handleDownload = (sticker: Sticker) => {
    // Simulate download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([sticker.image]));
    link.download = `sticker-${sticker.id}.png`;
    link.click();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {stickers.map((sticker) => (
        <Card
          key={sticker.id}
          className="overflow-hidden backdrop-blur-sm bg-white/80 border-0 shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 relative overflow-hidden">
            <Image
              src={URL.createObjectURL(
                new Blob([sticker.image], { type: "image/png" })
              )}
              alt={sticker.prompt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-800 line-clamp-2">
                  {sticker.prompt}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">
                    <Palette className="w-3 h-3 mr-1" />
                    {sticker.style}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {sticker.createdAt}
                  </Badge>
                </div>
              </div>

              <Button
                onClick={() => handleDownload(sticker)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                size="sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
