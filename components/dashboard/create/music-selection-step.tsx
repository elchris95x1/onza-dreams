"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Music, Play, Pause, Search, Headphones } from "lucide-react";

const musicOptions = [
  { id: "m1", title: "Cinematic Epic", duration: "2:45", category: "Cinematic", mood: "Inspiring" },
  { id: "m2", title: "Lo-Fi Study", duration: "3:12", category: "Lo-Fi", mood: "Relaxing" },
  { id: "m3", title: "Happy Ukulele", duration: "1:58", category: "Upbeat", mood: "Cheerful" },
  { id: "m4", title: "Deep Suspense", duration: "2:15", category: "Horror", mood: "Tense" },
  { id: "m5", title: "Modern Tech", duration: "2:30", category: "Corporate", mood: "Focused" },
  { id: "m6", title: "Acoustic Folk", duration: "2:50", category: "Folk", mood: "Organic" },
];

interface MusicSelectionStepProps {
  selectedMusic: string;
  onMusicChange: (music: string) => void;
  onContinue: () => void;
  onBack: () => void;
}

export function MusicSelectionStep({ 
  selectedMusic, 
  onMusicChange, 
  onContinue,
  onBack 
}: MusicSelectionStepProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Background Music</h2>
        <p className="text-muted-foreground">
          Select a soundtrack that matches the mood and tone of your series.
        </p>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-semibold flex items-center gap-2">
          <Headphones className="h-4 w-4 text-primary" />
          Select Soundtrack
        </label>
        
        {/* TODO: Revisit this section to implement a real music provider and audio player */}
        <ScrollArea className="h-[350px] rounded-xl border bg-muted/20 p-4">
          <div className="space-y-2">
            {musicOptions.map((music) => (
              <Card
                key={music.id}
                className={cn(
                  "p-3 cursor-pointer transition-all border-2 flex items-center gap-4 group",
                  selectedMusic === music.id 
                    ? "border-primary bg-primary/5 shadow-sm" 
                    : "border-transparent bg-white hover:border-muted-foreground/10"
                )}
                onClick={() => onMusicChange(music.id)}
              >
                <button
                  onClick={(e) => togglePlay(music.id, e)}
                  className={cn(
                    "p-2.5 rounded-full transition-colors shrink-0",
                    playingId === music.id ? "bg-primary text-white" : "bg-muted group-hover:bg-muted-foreground/10"
                  )}
                >
                  {playingId === music.id ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4 ml-0.5" />
                  )}
                </button>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-bold text-sm truncate">{music.title}</p>
                    <span className="text-[10px] text-muted-foreground font-mono">{music.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">
                      {music.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground italic">
                      • {music.mood}
                    </span>
                  </div>
                </div>
                
                {selectedMusic === music.id && (
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                )}
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex gap-4 pt-4">
        <Button variant="outline" size="lg" onClick={onBack} className="flex-1 h-12 font-bold">
          Back
        </Button>
        <Button 
          onClick={onContinue} 
          disabled={!selectedMusic} 
          size="lg"
          className="flex-[2] h-12 font-bold shadow-lg shadow-primary/20"
        >
          Continue to Style
        </Button>
      </div>
    </div>
  );
}
