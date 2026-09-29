export function Cta() {
  return (
    <section id="contact" className="bg-charcoal py-24 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <h2 className="font-serif text-4xl font-bold lg:text-5xl text-balance">
          Ready to Transform Your Space?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/70">
          Get a free consultation and personalized quote from our expert design
          team today.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-charcoal transition-colors hover:brightness-110"
          >
            ENQUIRE NOW
          </a>
          <a
            href="https://wa.me/919819449084"
            className="bg-[#25D366] px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:brightness-110"
          >
            WHATSAPP CHAT
          </a>
        </div>
      </div>
    </section>
  )
}
