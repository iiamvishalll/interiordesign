const testimonials = [
  {
    quote:
      "Art & Concept transformed our 3BHK flat into a dream home. Their attention to detail and choice of colors is impeccable.",
    name: "Amit Sharma",
    location: "Vasai",
  },
  {
    quote:
      "Very professional team. They delivered our modular kitchen exactly on the promised date. Highly recommended!",
    name: "Gaurav Tendolkar",
    location: "Thane",
  },
]

export function Testimonials() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-brown">
            TESTIMONIALS
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground lg:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="bg-background p-10 shadow-sm"
            >
              <span className="font-serif text-5xl leading-none text-brown">
                &ldquo;
              </span>
              <p className="mt-4 text-lg italic leading-relaxed text-foreground/80">
                {t.quote}
              </p>
              <footer className="mt-6">
                <p className="font-serif text-lg font-bold text-foreground">
                  {t.name}
                </p>
                <p className="text-sm text-foreground/60">{t.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
