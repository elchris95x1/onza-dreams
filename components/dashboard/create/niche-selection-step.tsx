"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Ghost, Zap, Mic2, History, Lightbulb, CheckCircle2 } from "lucide-react";

const popularNiches = [
  { id: "scary", label: "Scary Stories", icon: Ghost, description: "Horror, urban legends, and creepy pasta." },
  { id: "motivational", label: "Motivational", icon: Zap, description: "Inspiration, success, and mindset." },
  { id: "narration", label: "Narration", icon: Mic2, description: "Storytelling, bed-time stories, and audiobooks." },
  { id: "history", label: "History", icon: History, description: "Educational facts about the past." },
  { id: "facts", label: "Interesting Facts", icon: Lightbulb, description: "Trivia, science, and 'did you know'." },
];

interface NicheSelectionStepProps {
  selectedNiche: string;
  onChange: (niche: string, isCustom: boolean) => void;
  onContinue: () => void;
}

export function NicheSelectionStep({ selectedNiche, onChange, onContinue }: NicheSelectionStepProps) {
  const [customNiche, setCustomNiche] = useState("");

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Select your niche</h2>
        <p className="text-muted-foreground">
          Choose a popular niche or create your own custom one to target a specific audience.
        </p>
      </div>

      <Tabs defaultValue="available" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="available">Available Niche</TabsTrigger>
          <TabsTrigger value="custom">Custom Niche</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-4">
          <ScrollArea className="h-[320px] rounded-md border p-4 bg-muted/30">
            <div className="space-y-3">
              {popularNiches.map((niche) => (
                <button
                  key={niche.id}
                  onClick={() => onChange(niche.label, false)}
                  className={cn(
                    "flex items-center gap-4 w-full p-4 rounded-xl border-2 transition-all text-left group",
                    selectedNiche === niche.label
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-transparent bg-white hover:border-muted hover:bg-muted/50"
                  )}
                >
                  <div className={cn(
                    "p-2.5 rounded-lg transition-colors",
                    selectedNiche === niche.label ? "bg-primary text-white" : "bg-muted text-muted-foreground group-hover:bg-muted-foreground group-hover:text-white"
                  )}>
                    <niche.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-base leading-none mb-1">{niche.label}</p>
                    <p className="text-sm text-muted-foreground truncate">{niche.description}</p>
                  </div>
                  {selectedNiche === niche.label && (
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="custom" className="space-y-4">
          <div className="p-8 border-2 border-dashed rounded-xl flex flex-col items-center justify-center space-y-4 bg-muted/10">
            <div className="w-full space-y-2">
              <label className="text-sm font-semibold">Describe your niche</label>
              <Input 
                placeholder="e.g. Rare collectible card games, Ancient space civilizations..." 
                value={customNiche}
                onChange={(e) => {
                  setCustomNiche(e.target.value);
                  onChange(e.target.value, true);
                }}
                className="h-12 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Our AI will adapt the content generation to your specific requirements.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="pt-4">
        <Button 
          onClick={onContinue} 
          disabled={!selectedNiche} 
          className="w-full h-12 text-base font-bold shadow-lg shadow-primary/20"
        >
          Continue to next step
        </Button>
      </div>
    </div>
  );
}
