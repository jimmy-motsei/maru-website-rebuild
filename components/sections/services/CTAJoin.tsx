export default function CTAJoin() {
    return (
        <section className="container py-16 text-center">
            <div className="rounded-2xl border border-brand-border p-10 bg-[linear-gradient(135deg,rgba(61,184,198,.08),transparent)]">
                <h3 className="text-2xl md:text-3xl font-semibold">Join South Africa’s automation movement</h3>
                <p className="mt-2 text-brand-muted">
                    Start small, scale fast — we’ll guide you from quick wins to measurable outcomes, safely and locally.
                </p>
                <div className="mt-6 inline-flex gap-3">
                    <a href="/request-demo" className="rounded-xl bg-brand-accent text-brand-accent-fore px-5 py-3 font-medium">Request a demo</a>
                    <a href="/contact?source=cta-join" className="rounded-xl border border-brand-border px-5 py-3">Talk to an expert</a>
                </div>
            </div>
        </section>
    );
}
