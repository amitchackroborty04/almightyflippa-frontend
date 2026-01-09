export function Testimonials() {
  const testimonials = [
    {
      name: "AlexR",
      location: "United Kingdom",
      text: "This app is awesome, and the developer listens to user feedback and implements updates quick!",
    },
    {
      name: "Mosh",
      location: "United Kingdom",
      text: "Well designed and thoughtfully built. You can tell the team really cares about usability. A joy to use every day.",
    },
    {
      name: "John",
      location: "United Kingdom",
      text: "Simple, powerful, and free. Most features are available without restrictions, and the performance is excellent.",
    },
  ]

  const features = [
    {
      icon: "🔗",
      title: "Share your channels",
      description:
        "Do it securely with time-sensitive links. Choose expiration durations of 1, 3, 24 hours or even longer if you wish to give a friend access to a link for a specific time frame.",
    },
    {
      icon: "🔐",
      title: "Parental lock",
      description:
        "Do it securely with time-sensitive links. Choose expiration durations of 1, 3, 24 hours or even longer if you wish to give a friend access to a link for a specific time frame.",
    },
    {
      icon: "📢",
      title: "EPG reminders",
      description:
        "Do it securely with time-sensitive links. Choose expiration durations of 1, 3, 24 hours or even longer if you wish to give a friend access to a link for a specific time frame.",
    },
    {
      icon: "📡",
      title: "Offline support",
      description:
        "Do it securely with time-sensitive links. Choose expiration durations of 1, 3, 24 hours or even longer if you wish to give a friend access to a link for a specific time frame.",
    },
  ]

  return (
    <section className="relative w-full bg-background px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-primary">Loved</span> by our community
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Our users inspire everything we build. See what people around the world are saying after using the app in
            real life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground mb-4 text-sm leading-relaxed">{testimonial.text}</p>
                <div>
                  <div className="font-bold text-sm">— {testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-3 h-3 rounded-full bg-muted"></div>
            <div className="w-3 h-3 rounded-full bg-muted"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="border-t border-border pt-16 md:pt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl border border-primary/20">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
