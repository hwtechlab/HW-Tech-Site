const services = [
  {
    title: "Website Development",
    description:
      "Fast, modern websites built to look professional and convert visitors into customers.",
  },
  {
    title: "Network & Server Setup",
    description:
      "Reliable infrastructure, clean deployments, and secure environments for homes and businesses.",
  },
  {
    title: "Automation",
    description:
      "Custom workflows and tooling that reduce repetitive work and keep systems running smoothly.",
  },
];

const projects = [
  "Business websites with modern responsive design",
  "Home lab and self-hosted infrastructure deployments",
  "Cloudflare-connected production hosting and DNS management",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center">
            <img
              src="/logo.png"
              alt="HW Tech logo"
              className="h-auto w-[140px] md:w-[170px]"
            />
          </a>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto flex max-w-6xl flex-col px-6 pb-20 pt-20 md:pt-28"
      >
        <div className="max-w-3xl">
         <div className="mb-8 relative inline-block">
  <div className="absolute -inset-6 blur-3xl bg-sky-500/30 rounded-full"></div>

  <img
    src="/logo.png"
    alt="HW Tech logo"
    className="relative h-auto w-[220px] md:w-[320px]"
  />
</div> 

          <span className="mb-4 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-sm text-sky-300">
     Tech Resources
          </span>

          <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
            Clean websites, reliable infrastructure, and smart automation.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            HW Tech helps businesses and individuals build a stronger digital
            presence with modern web design, dependable systems, and practical
            technical solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}