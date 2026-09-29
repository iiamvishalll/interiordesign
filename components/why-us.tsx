const features = [
  {
    icon: "\u2728",
    title: "Premium Quality",
    description:
      "We use only the finest materials and skilled craftsmanship to ensure your space stands the test of time.",
  },
  {
    icon: "\u23f3",
    title: "On-Time Delivery",
    description:
      "Punctuality is our hallmark. We value your time and stick to our project timelines rigorously.",
  },
  {
    icon: "\ud83d\udca1",
    title: "Smart Space Planning",
    description:
      "Maximum utility with zero compromise on aesthetics. We specialize in making every inch count.",
  },
]

export function WhyUs() {
  return (
    <section id="about" className="bg-brown py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-white/70">
            THE ART & CONCEPT EDGE
          </p>
          <h2 className="font-serif text-4xl font-bold lg:text-5xl">
            Why Clients Trust Our Vision
          </h2>

          <div className="mt-10 space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold">
                    {feature.title}
                  </h4>
                  <p className="mt-2 leading-relaxed text-white/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="/images/gallery-wall.png"
            alt="Process"
            className="h-[480px] w-full object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-background px-10 py-6 text-center shadow-xl">
            <p className="font-serif text-4xl font-bold text-brown">15+</p>
            <p className="mt-1 text-sm font-semibold tracking-[0.2em] text-foreground/70">
              YEARS EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
