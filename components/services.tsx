const services = [
  {
    title: "Residential Design",
    image: "/images/residential.png",
    description:
      "Bespoke living spaces designed for comfort and luxury. From modern apartments to grand bungalows.",
  },
  {
    title: "Commercial Spaces",
    image: "/images/commercial.png",
    description:
      "Transforming offices and retail spaces into productive, aesthetic environments that reflect your brand.",
  },
  {
    title: "Modular Kitchens",
    image: "/images/kitchen.png",
    description:
      "High-functionality, ergonomic kitchens with premium finishes and smart storage solutions.",
  },
  {
    title: "Complete Renovation",
    image: "/images/renovation.png",
    description:
      "Giving old spaces a fresh, modern lease on life through strategic structural and aesthetic changes.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-brown">
              OUR EXPERTISE
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              Comprehensive Design
              <br />
              Solutions
            </h2>
          </div>
          <a
            href="#services"
            className="text-sm font-semibold tracking-[0.2em] text-brown transition-colors hover:text-brown-dark"
          >
            EXPLORE ALL SERVICES
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group bg-background shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
