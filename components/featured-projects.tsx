const projects = [
  {
    title: "SUGARUE Cakes & Pastries",
    category: "COMMERCIAL",
    location: "Bandra East",
    image: "/images/sugar-bite-cafe.jpg",
  },
  {
    title: "GJ Pharma Office",
    category: "COMMERCIAL",
    location: "Ghatkopar East",
    image: "/images/pharmaceuticals-lobby.jpg",
  },
  {
    title: "Cafeteria",
    category: "COMMERCIAL",
    location: "SCB 90 M.G. Road Fort Mumbai",
    image: "/images/children-play-cafe.jpg",
  },
  {
    title: "Lounge Area",
    category: "COMMERCIAL",
    location: "SCB 90 M.G. Road Fort Mumbai",
    image: "/images/courtyard-lounge.jpg",
  },
  {
    title: "Minimalist Family Living Room",
    category: "RESIDENTIAL",
    location: "Malad East",
    image: "/images/malad-east-residence.jpg",
  },
  {
    title: "Colourful Contemporary Living Room",
    category: "RESIDENTIAL",
    location: "Grant Road East",
    image: "/images/grant-road-east-residence.jpg",
  },
]

export function FeaturedProjects() {
  return (
    <section id="portfolio" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-brown">
            WORK HIGHLIGHTS
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground lg:text-5xl">
            Featured Projects
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative h-80 overflow-hidden md:h-96"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-xs font-semibold tracking-[0.25em] text-gold">
                  {project.category}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-white/80">{project.location}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://drive.google.com/drive/folders/1XU36DOis6Xk_WES8nmfSGjRJUE9qxZwG?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-foreground px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brown"
          >
            VIEW PORTFOLIO
          </a>
        </div>
      </div>
    </section>
  )
}
