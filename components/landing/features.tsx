import { MonitorPlay, Sparkles, CalendarClock, Mail } from 'lucide-react';

export function Features() {
  const features = [
    {
      name: 'AI Video Generation',
      description: 'Turn your text or concepts into stunning, engaging short videos automatically using our advanced AI engine.',
      icon: Sparkles,
      color: 'text-pink-500'
    },
    {
      name: 'Multi-Platform Publishing',
      description: 'Format outputs perfectly for YouTube Shorts, Instagram Reels, and TikTok without manual editing.',
      icon: MonitorPlay,
      color: 'text-purple-500'
    },
    {
      name: 'Auto-Scheduling',
      description: 'Set it and forget it. Our intelligent scheduler trickles content across your connected platforms.',
      icon: CalendarClock,
      color: 'text-blue-500'
    },
    {
      name: 'Email Campaigns',
      description: 'Incorporate your freshly generated videos directly into high-converting email sequences.',
      icon: Mail,
      color: 'text-orange-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to <span className="text-purple-500">go viral</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Say goodbye to complex editing tools and manual uploads. Our platform handles the entire lifecycle of your short-form videos.
          </p>
        </div>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.name}</h3>
              </div>
              <p className="mt-4 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
