export default function PartnerStrip(){
  const items = [
    { name: "Airtable", logo: "/images/partners/airtable_logo.png" },
    { name: "Zapier", logo: "/images/partners/zapier_bw_logo.png" },
    { name: "Make", logo: "/images/partners/make_bw_logo.png" },
    { name: "OpenAI", logo: "/images/partners/openai_bw_logo.png" }
  ]
  return (
    <section className="border-y border-brand-border bg-black/20">
      <div className="container py-8 grid grid-cols-2 sm:grid-cols-4 items-center gap-6 opacity-80">
        {items.map(i=>(
          <div key={i.name} className="flex items-center justify-center">
            <img src={i.logo} alt={i.name} className="h-6 opacity-70" />
          </div>
        ))}
      </div>
    </section>
  )
}
