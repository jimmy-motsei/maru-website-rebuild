import ServiceHero from "@/components/sections/services/ServiceHero"
import PartnerStrip from "@/components/sections/services/PartnerStrip"
import StatsStrip from "@/components/sections/services/StatsStrip"
import Feature from "@/components/sections/services/Feature"
import CTAJoin from "@/components/sections/services/CTAJoin"
import FAQ from "@/components/sections/services/FAQ"
import IconsRow from "@/components/sections/services/IconsRow"

export default function Page(){
  return (
    <>
      <ServiceHero />
      <PartnerStrip />
      <StatsStrip />
      <Feature
        title="Sales & Marketing Process Automation"
        lead="Automate lead capture, qualification, routing and follow-ups to increase pipeline velocity and conversion."
        bullets={[
          "Instant lead enrichment and scoring",
          "Auto-personalised outreach and reminders",
          "CRM hygiene and reporting that stays up-to-date"
        ]}
        cta={{ href: "/request-demo", label: "See a quick demo" }}
        align="left"
      />
      <Feature
        title="Certified Airtable Experts"
        lead="From schema to scripts, we design Airtable as a reliable source-of-truth that your teams enjoy using."
        bullets={[
          "Relational schema design for real-world ops",
          "Interfaces that teams actually adopt",
          "Automations and scripting for complex flows"
        ]}
        cta={{ href: "/solutions/ready-to-deploy", label: "Explore ready-to-deploy" }}
        align="right"
      />
      <Feature
        title="Custom AI Assistants"
        lead="Agentic workflows and chat assistants that plug into your tools and deliver measurable outcomes."
        bullets={[
          "Knowledge ingestion and safe prompts",
          "Task orchestration with observability",
          "Human-in-the-loop where it counts"
        ]}
        cta={{ href: "/solutions/custom-ai", label: "Custom solutions" }}
        align="left"
      />
      <Feature
        title="Job Tracking Automation"
        lead="Replace spreadsheets and manual updates with reliable, auditable workflows."
        bullets={[
          "Automated status updates and notifications",
          "Role-based views your team understands",
          "Analytics that show bottlenecks fast"
        ]}
        cta={{ href: "/contact", label: "Talk to an expert" }}
        align="right"
      />
      <CTAJoin />
      <FAQ />
      <IconsRow />
      <section className="container py-16 text-center">
        <div className="rounded-2xl border border-brand-border p-10 bg-[linear-gradient(135deg,rgba(61,184,198,.08),transparent)]">
          <h3 className="text-2xl md:text-3xl font-semibold">Create. Automate. Thrive.</h3>
          <p className="mt-2 text-brand-muted">Start a pilot this month and see results in weeks.</p>
          <div className="mt-6 inline-flex gap-3">
            <a href="/request-demo" className="rounded-xl bg-brand-accent text-brand-accent-fore px-5 py-3 font-medium">Get started</a>
            <a href="/contact" className="rounded-xl border border-brand-border px-5 py-3">Contact us</a>
          </div>
        </div>
      </section>
    </>
  )
}
