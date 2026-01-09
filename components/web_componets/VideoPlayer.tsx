export function VideoPlayer() {
  const features = [
    {
      icon: "📱",
      title: "Picture-In-Picture Mode",
      description:
        "Keep watching while you multitask. Play videos in a small, movable window while using other apps or browsing content.",
    },
    {
      icon: "📺",
      title: "Cast to Any Screen",
      description:
        "Watch on the big screen any time. Easily stream videos from your phone or tablet to your TV using popular casting options.",
    },
    {
      icon: "🌐",
      title: "Multi-Language & Subtitles",
      description:
        "Enjoy content your way. Choose from multiple audio tracks and subtitles to match your language and preference.",
    },
    {
      icon: "⚡",
      title: "Smart Playback Recovery",
      description:
        "No interruptions, no frustration. If your connection drops, player automatically resumes playback right where you left off.",
    },
  ]

  return (
    <section className="relative w-full bg-background px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-b from-primary/30 to-primary/10 rounded-3xl overflow-hidden border border-primary/30 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
            {/* Left Content */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                A video player made
                <br />
                to feel effortless
              </h2>

              <p className="text-base text-foreground/80">
                No complex setup, no technical confusion. Just press play and enjoy a smooth, reliable video experience
                that works instantly.
              </p>
            </div>

            {/* Right - Video Mockup */}
            <div className="relative">
              <div className="relative bg-black rounded-2xl overflow-hidden border-4 border-gray-700 shadow-xl aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center">
                    <span className="text-3xl">▶</span>
                  </div>
                </div>
                {/* Time indicators */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                  <span className="text-white text-xs">08:45 / 01:15</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl border border-white/20">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-sm">{feature.title}</h3>
                <p className="text-xs text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
