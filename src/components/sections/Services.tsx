import Link from "next/link"

const items = [
  {
    title: "Ready-to-deploy Solutions",
    desc: "Prebuilt, proven automations you can launch in days — sized for B2B teams.",
    href: "/services#ready-to-deploy"
  },
  {
    title: "Custom Solutions",
    desc: "Tailored workflows, assistants and integrations designed around your process.",
    href: "/services#custom"
  },
  {
    title: "AI Academy",
    desc: "Hands-on training and playbooks so your team can operate and improve automations.",
    href: "/services#academy"
  }
]

export default function Services(){
  return (
    <section className="container py-12">
      <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((i) => (
          <Link
            key={i.title}
            href={i.href}
            className="rounded-2xl border border-brand-border p-5 hover:border-brand-accent/40 transition-colors bg-[linear-gradient(135deg,rgba(61,184,198,.06),transparent)]"
          >
            <h3 className="font-medium">{i.title}</h3>
            <p className="mt-2 text-sm text-brand-muted">{i.desc}</p>
            <span className="mt-4 inline-block text-sm text-brand-accent">Explore →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
