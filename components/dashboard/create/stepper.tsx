"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface StepperProps {
  steps: string[];
  currentStepIndex: number;
}

export function Stepper({ steps, currentStepIndex }: StepperProps) {
  return (
    <div className="w-full space-y-4">
      <div className="flex gap-2 w-full">
        {steps.map((step, index) => {
          let value = 0;
          if (index < currentStepIndex) value = 100;
          else if (index === currentStepIndex) value = 0; // Or partial if we want to show "working on it"

          return (
            <div key={index} className="flex-1 space-y-2">
              <Progress 
                value={value} 
                className={cn(
                  "h-1.5 transition-all duration-500",
                  index <= currentStepIndex ? "bg-muted" : "bg-muted/30"
                )} 
              />
              <span className={cn(
                "text-[10px] uppercase tracking-wider font-bold block text-center truncate px-1",
                index === currentStepIndex ? "text-primary" : "text-muted-foreground/60"
              )}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
