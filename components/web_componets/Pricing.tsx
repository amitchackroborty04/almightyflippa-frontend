import { Button } from "@/components/ui/button"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for small teams and side projects",
      features: [
        "Unlimited playlists",
        "Global search",
        "Playlist and item customization",
        "Airing Now EPG",
        "Google Chromecast",
        "Apple AirPlay",
      ],
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "For growing teams that need more power",
      popular: true,
      features: [
        "Instant sync across devices",
        "Unlimited EPG navigation",
        "EPG reminders",
        "No watermarks",
        "No PRO subscription ads",
        "No device limit",
        "Supports ongoing app development",
        "Offline playback",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with custom needs",
      features: [
        "Instant sync across devices",
        "Unlimited EPG navigation",
        "EPG reminders",
        "No watermarks",
        "No PRO subscription ads",
        "No device limit",
        "Offline playback",
      ],
    },
  ]

  return (
    <section className="relative w-full bg-primary px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-primary-foreground/80">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 md:p-6 lg:p-8 border-2 transition-transform hover:scale-105 ${
                plan.popular ? "bg-secondary border-primary scale-105 md:scale-110" : "bg-secondary/50 border-secondary"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-foreground/60">{plan.period}</span>}
                </div>
                <p className="text-sm text-foreground/70">{plan.description}</p>
              </div>

              <Button
                className={`w-full mb-8 rounded-lg font-bold ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
                size="lg"
              >
                Get Started
                <span className="ml-2">→</span>
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="text-primary text-lg flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
