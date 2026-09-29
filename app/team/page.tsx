import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

const team = [
  {
    name: "Niilesh Chavvan",
    role: "Founder & Creative Director",
    bio: "With 15+ years of experience in interior design, Niilesh leads our creative vision and ensures every project exceeds expectations.",
    image: "/team-image/niilesh.png",
  },
  {
    name: "Smita Kamble",
    role: "Senior Interior Designer",
    bio: "Smita specializes in residential spaces and brings innovative design solutions with a keen eye for detail and aesthetics.",
    image: "/team-image/smita.png",
  },
  {
    name: "Manish Kamble",
    role: "Senior Interior Designer & Execution",
    bio: "Manish ensures smooth project execution by overseeing designs, timelines, budgets, and on-site coordination while maintaining high standards of quality and client satisfaction.",
    image: "/team-image/manish.png",
  },
  {
    name: "Santosh Vali",
    role: "Interior Designer & Project Co-ordinator",
    bio: "Santosh combines creative interior design with efficient project coordination to bring ideas to life, ensuring every project is well-planned, smoothly executed, and tailored to the client’s needs.",
    image: "/team-image/santosh.png",
  },
]

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="flex items-center justify-center bg-brown px-6 py-24 text-white pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl font-bold md:text-5xl text-balance">
              Meet Our Expert Team
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Talented professionals dedicated to transforming your vision into extraordinary spaces
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
              {team.map((member) => (
                <div key={member.name} className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
                  <div className="relative h-80 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-background px-6 py-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-brown font-semibold mt-2">
                      {member.role}
                    </p>
                    <p className="mt-3 text-foreground/80 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-brown/5 px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
              Our Core Values
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-brown p-4 text-white text-2xl font-bold">✓</div>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Excellence
                </h3>
                <p className="text-foreground/70">
                  We pursue perfection in every design detail and project outcome
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-brown p-4 text-white text-2xl font-bold">✓</div>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Creativity
                </h3>
                <p className="text-foreground/70">
                  We bring innovative solutions tailored to each client&apos;s unique needs
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-brown p-4 text-white text-2xl font-bold">✓</div>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Integrity
                </h3>
                <p className="text-foreground/70">
                  We maintain transparency and honesty in all client relationships
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
