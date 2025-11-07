import ContactForm from "@/components/forms/ContactForm"

export default function Page(){
  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Tell us about your project</h1>
      <p className="mt-2 text-slate-600 max-w-2xl">Share goals and current tools. We'll respond within one business day.</p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  )
}
