const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact Us", href: "#contact" },
]

const services = [
  "Residential Interiors",
  "Commercial Design",
  "Modular Kitchens",
  "Home Renovation",
  "Living Room Concepts",
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/images/shaswatti-logo.jpeg"
              alt="Shashwatti Interior logo"
              className="mb-5 h-20 w-32 object-cover"
            />
            <h3 className="font-serif text-2xl font-bold text-white">
              SHASHWATTI
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Designing exceptional spaces that inspire. Premium interior
              solutions for residential and commercial projects in Mumbai & Thane.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] text-white">
              QUICK LINKS
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] text-white">
              SERVICES
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] text-white">
              CONTACT US
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <span aria-hidden>{"\ud83d\udccd"}</span>
                <span>1/43 Deokiwadi opp, Yaswantrao Chavan Natya Sankool, Mahim 400016</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden>{"\ud83d\udcde"}</span>
                <a href="tel:+919769235783" className="transition-colors hover:text-gold">
                  +91 9769235783 / +91 8108811659
                </a>
              </li>
              <li className="flex gap-3">
                <span aria-hidden>{"\u2709\ufe0f"}</span>
                <a
                  href="mailto:shashwatti.interior@gmail.com"
                  className="transition-colors hover:text-gold"
                >
                  shashwatti.interior@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs tracking-wide sm:flex-row">
          <p>© 2026 SHASHWATTI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-gold">
              INSTAGRAM
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              FACEBOOK
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
