"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StyleSelectorProps {
  selectedStyle: string;
  onStyleChange: (style: string) => void;
}

const styles = [
  {
    id: "cartoon",
    name: "Cartoon",
    description: "Fun and colorful",
    gradient: "from-pink-400 to-purple-600",
    emoji: "🎨",
  },
  {
    id: "realistic",
    name: "Realistic",
    description: "Photorealistic",
    gradient: "from-blue-400 to-cyan-600",
    emoji: "📸",
  },
  {
    id: "minimalist",
    name: "Minimalist",
    description: "Clean and simple",
    gradient: "from-gray-400 to-gray-600",
    emoji: "⚪",
  },
  {
    id: "pixel",
    name: "Pixel Art",
    description: "Retro gaming",
    gradient: "from-green-400 to-blue-600",
    emoji: "🎮",
  },
  {
    id: "watercolor",
    name: "Watercolor",
    description: "Soft and artistic",
    gradient: "from-purple-400 to-pink-600",
    emoji: "🎭",
  },
  {
    id: "sketch",
    name: "Sketch",
    description: "Hand-drawn look",
    gradient: "from-orange-400 to-red-600",
    emoji: "✏️",
  },
];

export function StyleSelector({
  selectedStyle,
  onStyleChange,
}: StyleSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {styles.map((style) => (
        <Card
          key={style.id}
          className={cn(
            "cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg",
            selectedStyle === style.id
              ? "ring-2 ring-purple-500 ring-offset-2"
              : "hover:shadow-md"
          )}
          onClick={() => onStyleChange(style.id)}
        >
          <CardContent className="p-4 text-center">
            <div
              className={cn(
                "w-12 h-12 rounded-full bg-gradient-to-br mx-auto mb-2 flex items-center justify-center text-2xl",
                style.gradient
              )}
            >
              {style.emoji}
            </div>
            <h3 className="font-semibold text-sm">{style.name}</h3>
            <p className="text-xs text-gray-600">{style.description}</p>
            {selectedStyle === style.id && (
              <Badge className="mt-2 bg-purple-500 text-white">Selected</Badge>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
