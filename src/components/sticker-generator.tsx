"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sparkles,
  Palette,
  Wand2,
  Stars,
  Heart,
  Zap,
  Smile,
} from "lucide-react";
import { StyleSelector } from "@/components/style-selector";
import { StickerGallery } from "@/components/sticker-gallery";
import { generateSticker } from "@/lib/sticker-generator";
import { Footer } from "./footer";
import { Navigation } from "./navigation";
import { Textarea } from "./ui/textarea";
import { Toaster, toast } from "sonner";

export function StickerGenerator() {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("cartoon");
  const [isGenerating, setIsGenerating] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [stickers, setStickers] = useState<any[]>([]);
  const [showGallery, setShowGallery] = useState(false);

  const maxPromptLength = 100;

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    try {
      const newStickers = await generateSticker(prompt, selectedStyle);
      setStickers((prev) => [...newStickers, ...prev]);
      setShowGallery(true);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxPromptLength) {
      setPrompt(value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
      <Toaster />
      <div className="container mx-auto px-4 py-8">
        <Navigation />
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Sticker Generator
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your ideas into amazing stickers with AI magic! Choose
            your style, describe your vision, and watch creativity come to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Generator Panel */}
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-purple-600" />
                  Create Your Sticker
                </CardTitle>
                <CardDescription>
                  Describe what you want to see and choose your preferred style
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Prompt Input */}
                <div className="space-y-4">
                  <label className="text-sm font-medium mb-4">
                    Your Prompt
                  </label>
                  <div className="relative">
                    <Textarea
                      rows={3}
                      maxLength={maxPromptLength}
                      autoFocus
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck="false"
                      placeholder="A cute cat wearing sunglasses and a hat..."
                      value={prompt}
                      onChange={handlePromptChange}
                      className="pr-16 text-base"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Badge
                        variant={
                          prompt.length > 80 ? "destructive" : "secondary"
                        }
                      >
                        {prompt.length}/{maxPromptLength}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Style Selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Art Style</label>
                  <StyleSelector
                    selectedStyle={selectedStyle}
                    onStyleChange={setSelectedStyle}
                  />
                </div>

                <Separator />

                {/* Generate Button */}
                <Button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 transition-all duration-200 transform hover:scale-105"
                >
                  {isGenerating ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Generating Magic...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Stars className="w-4 h-4" />
                      Generate Sticker
                    </div>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-orange-600" />
                  Tips for Great Stickers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Be Specific</p>
                      <p className="text-xs text-gray-600">
                        Include colors, emotions, and details
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Keep it Simple</p>
                      <p className="text-xs text-gray-600">
                        Single subjects work best for stickers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Smile className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Have Fun</p>
                      <p className="text-xs text-gray-600">
                        Experiment with different styles
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-sm">Popular Styles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Cartoon",
                    "Realistic",
                    "Minimalist",
                    "Pixel Art",
                    "Watercolor",
                    "Sketch",
                  ].map((style) => (
                    <Badge key={style} variant="outline" className="text-xs">
                      {style}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sticker Gallery */}
        {showGallery && (
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Your Stickers
              </h2>
              <Badge variant="secondary">{stickers.length}</Badge>
            </div>
            <StickerGallery stickers={stickers} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
