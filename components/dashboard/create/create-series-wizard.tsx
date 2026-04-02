"use client";

import { useState } from "react";
import { Stepper } from "./stepper";
import { NicheSelectionStep } from "./niche-selection-step";
import { LanguageVoiceStep } from "./language-voice-step";
import { MusicSelectionStep } from "./music-selection-step";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const steps = [
  "Niche",
  "Language & Voice",
  "Background Music",
  "Style & Assets",
  "Topics",
  "Scheduling",
];

export function CreateSeriesWizard() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  
  const [formData, setFormData] = useState({
    niche: "",
    isCustomNiche: false,
    language: "en",
    voiceId: "",
    musicId: ""
  });

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-4">
      <div className="mb-10">
        <Stepper steps={steps} currentStepIndex={currentStepIndex} />
      </div>
      
      <div className="bg-white border rounded-2xl p-8 shadow-sm relative transition-all duration-300">
        {currentStepIndex > 0 && (
          <button 
            onClick={prevStep}
            className="absolute left-4 top-4 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        {currentStepIndex === 0 && (
          <NicheSelectionStep 
            selectedNiche={formData.niche} 
            onChange={(niche, isCustom) => setFormData(p => ({ ...p, niche, isCustomNiche: isCustom }))} 
            onContinue={nextStep}
          />
        )}

        {currentStepIndex === 1 && (
          <LanguageVoiceStep
            selectedLanguage={formData.language}
            selectedVoice={formData.voiceId}
            onLanguageChange={(lang) => setFormData(p => ({ ...p, language: lang }))}
            onVoiceChange={(voice) => setFormData(p => ({ ...p, voiceId: voice }))}
            onContinue={nextStep}
            onBack={prevStep}
          />
        )}

        {currentStepIndex === 2 && (
          <MusicSelectionStep
            selectedMusic={formData.musicId}
            onMusicChange={(music) => setFormData(p => ({ ...p, musicId: music }))}
            onContinue={nextStep}
            onBack={prevStep}
          />
        )}

        {currentStepIndex > 2 && (
          <div className="py-20 text-center animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-2xl font-bold mb-4">Step: {steps[currentStepIndex]}</h2>
            <p className="text-muted-foreground mb-8">This module is coming soon in the next release.</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" onClick={prevStep}>Go Back</Button>
              <Button size="lg" onClick={nextStep} disabled={currentStepIndex === steps.length - 1}>
                Next Step
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
