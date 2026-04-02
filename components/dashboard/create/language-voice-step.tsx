"use client";

import { useState } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PlayCircle, Volume2, Globe2 } from "lucide-react";

const languages = [
  { id: "en", label: "English", flag: "🇺🇸" },
  { id: "es", label: "Spanish", flag: "🇪🇸" },
  { id: "zh", label: "Mandarin", flag: "🇨🇳" },
  { id: "hi", label: "Hindi", flag: "🇮🇳" },
];

const placeholderVoices = [
  { id: "v1", name: "Adam", gender: "Male", style: "Narrative", preview: "Professional and calm narration." },
  { id: "v2", name: "Bella", gender: "Female", style: "Energetic", preview: "Fast-paced and exciting for viral clips." },
  { id: "v3", name: "Charlie", gender: "Male", style: "Dramatic", preview: "Deep voice for scary or intense stories." },
  { id: "v4", name: "Daisy", gender: "Female", style: "Soft", preview: "Soothing voice for bedtime or guided stories." },
];

interface LanguageVoiceStepProps {
  selectedLanguage: string;
  selectedVoice: string;
  onLanguageChange: (lang: string) => void;
  onVoiceChange: (voice: string) => void;
  onContinue: () => void;
  onBack: () => void;
}

export function LanguageVoiceStep({ 
  selectedLanguage, 
  selectedVoice, 
  onLanguageChange, 
  onVoiceChange, 
  onContinue,
  onBack 
}: LanguageVoiceStepProps) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Language & Voice</h2>
        <p className="text-muted-foreground">
          Choose the primary language for your series and the AI voice that will narrate it.
        </p>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-semibold flex items-center gap-2">
          <Globe2 className="h-4 w-4 text-primary" />
          Select Language
        </label>
        <Select value={selectedLanguage} onValueChange={onLanguageChange}>
          <SelectTrigger className="w-full h-12 text-base">
            <SelectValue placeholder="Choose a language..." />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.id} value={lang.id} className="text-base">
                <span className="mr-2">{lang.flag}</span>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-semibold flex items-center gap-2">
          <Volume2 className="h-4 w-4 text-primary" />
          Available Voices
        </label>
        
        {/* TODO: Revisit this section to implement dynamic voice fetching based on selected language */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 border rounded-xl bg-muted/30 max-h-[300px] overflow-y-auto">
          {placeholderVoices.map((voice) => (
            <Card
              key={voice.id}
              className={cn(
                "p-4 cursor-pointer transition-all border-2 flex items-start gap-3 group relative",
                selectedVoice === voice.id 
                  ? "border-primary bg-primary/5 shadow-sm" 
                  : "border-transparent bg-white hover:border-muted-foreground/20"
              )}
              onClick={() => onVoiceChange(voice.id)}
            >
              <div className={cn(
                "p-2 rounded-lg shrink-0",
                selectedVoice === voice.id ? "bg-primary text-white" : "bg-muted group-hover:bg-muted-foreground/10"
              )}>
                <PlayCircle className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="font-bold text-sm truncate">{voice.name}</p>
                  <Badge variant="secondary" className="text-[10px] px-1 h-4 uppercase">{voice.gender}</Badge>
                </div>
                <p className="text-[11px] text-muted-foreground mb-1 font-medium bg-muted/50 rounded w-fit px-1">{voice.style}</p>
                <p className="text-[10px] text-muted-foreground leading-tight italic line-clamp-2">
                   "{voice.preview}"
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <Button variant="outline" size="lg" onClick={onBack} className="flex-1 h-12 font-bold">
          Back
        </Button>
        <Button 
          onClick={onContinue} 
          disabled={!selectedLanguage || !selectedVoice} 
          size="lg"
          className="flex-[2] h-12 font-bold shadow-lg shadow-primary/20"
        >
          Continue to Assets
        </Button>
      </div>
    </div>
  );
}
