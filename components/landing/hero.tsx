import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-32 lg:pt-36 lg:pb-48">
      {/* Background radial gradient */}
      <div className="absolute inset-x-0 top-0 h-96 -z-10 transform-gpu overflow-hidden blur-3xl opacity-50 dark:opacity-30" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-foreground">
            <Sparkles className="mr-2 h-4 w-4 text-purple-500" />
            <span>Introducing Auto-Scheduling AI</span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
            Dream it, Generate it, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Schedule it.</span>
          </h1>
          
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Onza Dreams is your all-in-one AI short video generator and auto-scheduler. Dominate YouTube, Instagram, TikTok, and Email with effortless content creation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/signup" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background shadow transition-colors hover:bg-foreground/90"
            >
              Start Creating for Free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              See How it Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
