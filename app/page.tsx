import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { FeaturedProjects } from "@/components/featured-projects"
import { WhyUs } from "@/components/why-us"
import { Testimonials } from "@/components/testimonials"
import { Cta } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsappButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedProjects />
        <WhyUs />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}
