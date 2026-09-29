"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Validate form
    if (!formData.name.trim()) {
      setError("Name is required")
      setLoading(false)
      return
    }
    if (!formData.email.trim()) {
      setError("Email is required")
      setLoading(false)
      return
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email")
      setLoading(false)
      return
    }
    if (!formData.phone.trim()) {
      setError("Phone number is required")
      setLoading(false)
      return
    }
    if (!formData.message.trim()) {
      setError("Message is required")
      setLoading(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || "Something went wrong. Please try again.")
      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="flex items-center justify-center bg-brown px-6 py-24 text-white pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl font-bold md:text-5xl text-balance">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Have a design project in mind? Let&apos;s discuss your vision
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-brown mb-2">Address</h3>
                    <p className="text-foreground/80">
                      SHASHWATTI<br />
                      1/43 Deokiwadi opp,<br />
                      Yaswantrao Chavan Natya Sankool,<br />
																																																				Mahim 400016
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-brown mb-2">Phone</h3>
                    <p className="text-foreground/80">
                      <a href="tel:+919769235783" className="hover:text-brown transition-colors">
                        +91 9769235783
                      </a>
                    </p>

																																															<p className="text-foreground/80">
                      <a href="tel:+918108811659" className="hover:text-brown transition-colors">
                        +91 8108811659
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-brown mb-2">Email</h3>
                    <p className="text-foreground/80">
                      <a href="mailto:shashwatti.interior@gmail.com" className="hover:text-brown transition-colors">
                        shashwatti.interior@gmail.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-brown mb-2">Business Hours</h3>
                    <p className="text-foreground/80">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>

                  <div className="pt-8">
                    <h3 className="font-semibold text-brown mb-4">Connect With Us</h3>
                    <div className="flex gap-4">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-brown hover:text-brown-dark transition-colors text-sm font-semibold">
                        Facebook
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brown hover:text-brown-dark transition-colors text-sm font-semibold">
                        Instagram
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brown hover:text-brown-dark transition-colors text-sm font-semibold">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-lg bg-white p-8 shadow-sm">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>

                {submitted && (
                  <div className="mb-6 rounded-lg bg-green-50 p-4 border border-green-200">
                    <p className="text-green-700 font-semibold">
                      ✓ Thank you! Your message has been sent successfully.
                    </p>
                    <p className="text-green-600 text-sm mt-1">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="mb-6 rounded-lg bg-red-50 p-4 border border-red-200">
                    <p className="text-red-700 font-semibold">
                      ✗ {error}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-foreground placeholder:text-gray-400 focus:border-brown focus:outline-none focus:ring-1 focus:ring-brown transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-foreground placeholder:text-gray-400 focus:border-brown focus:outline-none focus:ring-1 focus:ring-brown transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-foreground placeholder:text-gray-400 focus:border-brown focus:outline-none focus:ring-1 focus:ring-brown transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-foreground placeholder:text-gray-400 focus:border-brown focus:outline-none focus:ring-1 focus:ring-brown transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brown px-6 py-3 text-center font-semibold tracking-wide text-white transition-colors hover:bg-brown-dark disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>

                <p className="mt-4 text-xs text-foreground/60 text-center">
                  * Required fields. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
