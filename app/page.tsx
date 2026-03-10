import { Globe, Server, Bot } from "lucide-react";
const services = [
  {
    title: "Website Development",
    description:
      "Fast, modern websites built to look professional and convert visitors into customers.",
    icon: Globe,
  },
  {
    title: "Network & Server Setup",
    description:
      "Reliable infrastructure, clean deployments, and secure environments for homes and businesses.",
    icon: Server,
  },
  {
    title: "Automation",
    description:
      "Custom workflows and tooling that reduce repetitive work and keep systems running smoothly.",
    icon: Bot,
  },
];
const projects = [
  "Business websites with modern responsive design",
  "Home lab and self-hosted infrastructure deployments",
  "Cloudflare-connected production hosting and DNS management",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-slate-900 text-white">
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
  


      
  className="relative mx-auto flex max-w-6xl flex-col px-6 pb-20 pt-20 md:pt-28 overflow-hidden"
><div className="hero-highlight"></div>
<div className="hero-glow"></div>
       <div className="hero-glow"></div> 
      
        <div className="relative z-10 max-w-3xl">
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
      ...
      </section>

     <section id="services" className="mx-auto max-w-6xl px-6 py-24">
  <h2 className="mb-12 text-3xl font-semibold">Services</h2>

  <div className="grid gap-8 md:grid-cols-3">
    {services.map((service) => {
      const Icon = service.icon;

      return (
        <div
      
  key={service.title}
  className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur transition hover:border-sky-400/40 hover:-translate-y-1"
><div className="absolute inset-0 rounded-2xl bg-sky-400/0 blur-xl transition group-hover:bg-sky-400/10"></div>
        
      
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 ring-1 ring-sky-400/20">
            <Icon className="h-6 w-6 text-sky-400" strokeWidth={1.5} />
          </div>

          <h3 className="text-xl font-semibold">{service.title}</h3>
          <p className="mt-3 text-slate-400">{service.description}</p>
        </div>
      );
    })}
  </div>
</section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-3xl font-semibold">Projects</h2>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project}
              className="rounded-xl border border-white/10 bg-slate-900/40 px-6 py-4"
            >
              {project}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-6 text-3xl font-semibold">About</h2>

        <p className="max-w-3xl leading-7 text-slate-300">
          HW Tech focuses on practical technology solutions that help businesses
          and individuals operate more efficiently. From modern websites to
          reliable infrastructure and automation, the goal is to build systems
          that are fast, secure, and easy to maintain.
        </p>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
  <h2 className="mb-8 text-3xl font-semibold">Contact</h2>

  <div className="max-w-xl rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur">
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3"
        required
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3"
        required
      />

      <textarea
        placeholder="Your Message"
        rows={5}
        className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3"
        required
      />

      <button
        type="submit"
        className="rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
      >
        Send Message
      </button>
    </form>
  </div>
      </section>
    </main>
  );
}
