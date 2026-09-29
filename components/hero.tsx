export function Hero() {
  return (
    <section id="home" className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/images/home-hero-living-room.jpeg"
          alt="Bright contemporary living room interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 lg:px-10">
        <p className="mb-5 text-sm font-semibold tracking-[0.35em] text-gold">
          ELEGANCE IN EVERY DETAIL
        </p>
        <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[1.05] text-white text-balance sm:text-6xl lg:text-7xl xl:text-8xl">
          Exquisite Interiors
          <br />
          Crafted For You
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
          Premium interior design solutions in Mumbai & Thane. We turn your vision
          of a perfect home or office into a stunning reality.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://portfolio.shaswatti.in"
            target="_blank"
            rel="noreferrer"
            className="bg-brown px-8 py-4 text-center text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brown-dark"
          >
            VIEW PORTFOLIO
          </a>
          <a
            href="https://wa.me/919819449084"
            className="border border-white/70 px-8 py-4 text-center text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white hover:text-foreground"
          >
            WHATSAPP US
          </a>
        </div>
      </div>
    </section>
  )
}
