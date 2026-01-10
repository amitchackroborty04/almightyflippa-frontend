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
    <section className="relative w-full  px-4 py-16 md:py-[96px]"
     style={{
    background: "linear-gradient(346.79deg, #E4A41C 8.19%, #74530E 89.72%)",
  }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-[104px]">
          <h2 className="text-4xl md:text-[40px] font-bold text-[#FFFFFF] mb-4">Simple, transparent pricing</h2>
          <p className="text-base font-normal text-[#E7E7E7]">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative  rounded-2xl p-8 md:p-6 lg:p-8 border-2 transition-transform  ${
                plan.popular ? "bg-[#131313] border-[#B6B6B6] md:scale-110 ease-in-out" : "bg-[#131313] border-[#B6B6B6]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2  text-[#FFFFFF] px-3 py-1 rounded-full text-xs font-bold"
                  style={{
    background: "linear-gradient(346.79deg, #E4A41C 8.19%, #74530E 89.72%)",
  }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#FFFFFF] mb-2 text-center">{plan.name}</h3>
                <p className="text-base font-normal text-[#E7E7E7] max-w-[250px] text-center">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1 mb-3 mt-6">
                  <span className="text-4xl font-bold text-[#FFFFFF] ">{plan.price}</span>
                  {plan.period && <span className="text-[#E7E7E7]">{plan.period}</span>}
                </div>
              </div>

            
              <ul className="space-y-3">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3 text-sm text-[#FFFFFF]">
                    <span className="text-[#26AF0B] text-lg flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
               <Button
                className={`w-full mb-8 rounded-lg font-bold  ${
                  plan.popular
                    ? "bg-[#FBB41D] text-[#131313] hover:bg-[#FBB41D]/90"
                    : "bg-[#FBB41D] text-[#131313] hover:bg-[#FBB41D]/90"
                }`}
                size="lg"
              >
                Get Started
                <span className="ml-2">→</span>
              </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
