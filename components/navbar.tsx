"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }

    onScroll()
    window.addEventListener("scroll", onScroll)
    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-background/95 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="/" className="flex items-center gap-3 leading-none">
          <img
            src="/images/shashwatti-logo-nav.jpg"
            alt="Shashwatti Interior logo"
            className="size-10 object-cover"
          />
          <span
            className={`font-serif text-base font-bold tracking-wide sm:text-xl lg:text-2xl ${
              scrolled || menuOpen ? "text-foreground" : "text-white"
            }`}
          >
            SHASHWATTI
          </span>
          <span
            className={`mt-1 text-[11px] tracking-[0.35em] ${
              scrolled || menuOpen ? "text-brown" : "text-white/80"
            }`}
          >
            INTERIOR
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brown ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brown px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brown-dark"
          >
            GET QUOTE
          </a>
        </div>

        <button
          type="button"
          className={`flex size-11 items-center justify-center lg:hidden ${
            scrolled || menuOpen ? "text-foreground" : "text-white"
          }`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-foreground/10 bg-background px-6 pb-6 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="border-b border-foreground/10 py-4 text-sm font-semibold text-foreground transition-colors hover:text-brown"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-5 bg-brown px-6 py-3 text-center text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brown-dark"
              onClick={() => setMenuOpen(false)}
            >
              GET QUOTE
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
