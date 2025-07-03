"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Palette, Sparkles, Download, Wand2 } from "lucide-react";
// import sampleSticker from "@/assets/sample-sticker.png";

const STICKER_STYLES = [
  {
    id: "cartoon",
    name: "Cartoon",
    description: "Fun, colorful cartoon style",
    prompt: "cute cartoon style, bold colors, simple shapes, Disney-like",
  },
  {
    id: "anime",
    name: "Anime",
    description: "Japanese anime aesthetic",
    prompt: "anime manga style, expressive eyes, vibrant colors",
  },
  {
    id: "pixel",
    name: "Pixel Art",
    description: "Retro 8-bit pixel style",
    prompt: "pixel art style, 8-bit retro, blocky pixels, game art",
  },
  {
    id: "doodle",
    name: "Doodle",
    description: "Hand-drawn sketch style",
    prompt: "hand-drawn doodle style, sketchy lines, casual illustration",
  },
  {
    id: "chibi",
    name: "Chibi",
    description: "Super cute miniature style",
    prompt: "chibi style, extremely cute, oversized head, kawaii",
  },
  {
    id: "vintage",
    name: "Vintage",
    description: "Retro poster aesthetic",
    prompt: "vintage poster style, retro colors, classic illustration",
  },
];
import { toast } from "sonner";
import { Footer } from "./footer";
import { Navigation } from "./navigation";

export function StickerGenerator() {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(STICKER_STYLES[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  // const { toast } = useToast();

  const generateSticker = async () => {
    if (!prompt.trim()) {
      toast.error("Oops! 🎨", {
        description: "Please describe what you want your sticker to look like!",
      });
      return;
    }

    setIsGenerating(true);

    try {
      // Create a detailed prompt combining user input with style
      const fullPrompt = `${prompt}, ${selectedStyle.prompt}, sticker design, white background, high quality, vibrant colors, clean edges, perfect for a sticker`;

      console.log("Generating sticker with prompt:", fullPrompt);

      // Note: In a real app, you'd use an AI image generation API
      // For now, we'll simulate the generation process
      await new Promise((resolve) => setTimeout(resolve, 3000));

      toast("Sticker Generated! ✨", {
        description: "Your awesome sticker is ready!",
      });

      // For demo purposes, we'll use our sample sticker
      setGeneratedImage(null);
    } catch {
      toast.error("Generation Failed 😞", {
        description: "Something went wrong. Please try again!",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadSticker = () => {
    if (!generatedImage) return;

    toast("Download Started! 📥", {
      description: "Your sticker is being downloaded!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-bg p-4">
      <Navigation />
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 animate-float">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-500 mb-4">
            AI Sticker Studio
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Create hilarious and adorable stickers with the power of AI! ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Generator Panel */}
          <Card className="shadow-xl border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Palette className="h-6 w-6 text-primary" />
                Create Your Sticker
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Prompt Input */}
              <div className="space-y-2">
                <Label htmlFor="prompt" className="text-sm font-medium">
                  Describe your sticker idea
                </Label>
                <Textarea
                  id="prompt"
                  placeholder="A laughing cat wearing sunglasses and a tiny hat..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px] resize-none border-2 focus:border-primary transition-colors"
                />
              </div>

              {/* Style Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Choose a style</Label>
                <div className="grid grid-cols-2 gap-3">
                  {STICKER_STYLES.map((style) => (
                    <Card
                      key={style.id}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedStyle.id === style.id
                          ? "ring-2 ring-primary shadow-lg bg-primary/5"
                          : "hover:shadow-md"
                      }`}
                      onClick={() => setSelectedStyle(style)}
                    >
                      <CardContent className="p-3">
                        <h3 className="font-semibold text-sm mb-1">
                          {style.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {style.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <Button
                onClick={generateSticker}
                disabled={isGenerating}
                variant="magic"
                size="xl"
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="h-5 w-5 animate-spin" />
                    Creating Magic...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-5 w-5" />
                    Generate Sticker
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Preview Panel */}
          <Card className="shadow-xl border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="h-6 w-6 text-accent" />
                Your Sticker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-gradient-to-br from-secondary/50 to-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                {isGenerating ? (
                  <div className="text-center space-y-4">
                    <div className="animate-bounce-gentle">
                      <Sparkles className="h-16 w-16 text-primary mx-auto" />
                    </div>
                    <p className="text-muted-foreground">
                      Generating your sticker...
                    </p>
                  </div>
                ) : generatedImage ? (
                  <div className="text-center space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                      <img
                        src={generatedImage}
                        alt="Generated sticker"
                        className="w-full h-40 object-contain"
                      />
                    </div>
                    <Button
                      onClick={downloadSticker}
                      variant="fun"
                      size="lg"
                      className="w-full"
                    >
                      <Download className="h-4 w-4" />
                      Download Sticker
                    </Button>
                  </div>
                ) : (
                  <div className="text-center space-y-2">
                    <Palette className="h-16 w-16 text-muted-foreground/50 mx-auto" />
                    <p className="text-muted-foreground">
                      Your sticker will appear here
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    </div>
  );
}
