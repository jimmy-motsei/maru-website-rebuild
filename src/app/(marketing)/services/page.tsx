import ServiceHero from "@/components/sections/services/ServiceHero"
import PartnerStrip from "@/components/sections/services/PartnerStrip"
import StatsStrip from "@/components/sections/services/StatsStrip"
import Feature from "@/components/sections/services/Feature"
import CTAJoin from "@/components/sections/services/CTAJoin"
import FAQ from "@/components/sections/services/FAQ"
import IconsRow from "@/components/sections/services/IconsRow"

export const metadata = {
  title: "Services — Maru AI Automation",
  description: "We design, build and ship AI automations that cut costs and unlock growth."
}

export default function Page(){
  return (
    <>
      <ServiceHero />
      <PartnerStrip />
      <StatsStrip />

      <Feature
        title="Sales & Marketing Process Automation"
        lead="Capture, qualify and follow up automatically to grow pipeline velocity and conversion."
        bullets={[
          "Instant lead enrichment and scoring",
          "Personalised outreach and reminders",
          "Clean CRM data and reliable reporting"
        ]}
        image={{ src: "/images/services/ai-marketing-sales.png", alt: "Sales and marketing automation strategy on a whiteboard" }}
        cta={{ href: "/request-demo", label: "See a quick demo" }}
        align="left"
      />

      <Feature
        title="Workflow Optimisation"
        lead="Map bottlenecks, standardise handoffs and automate routine steps across teams."
        bullets={[
          "Process discovery and redesign",
          "Human-in-the-loop approvals",
          "Audit trails and observability"
        ]}
        image={{ src: "/images/services/ai-workflow-optimisation.png", alt: "Team reviewing workflow optimisation on whiteboard" }}
        cta={{ href: "/contact", label: "Request a process health check" }}
        align="right"
      />

      <Feature
        title="Operational Dashboards & Reporting"
        lead="Live visibility on throughput, SLAs and exceptions so you can act quickly."
        bullets={[
          "Role-based dashboards your team understands",
          "Auto-updated KPIs and alerts",
          "Data pipeline and governance baked in"
        ]}
        image={{ src: "/images/services/ai-dashboard-analytics.png", alt: "Ops team reviewing analytics dashboards" }}
        cta={{ href: "/contact", label: "Talk to an expert" }}
        align="left"
      />

      <Feature
        title="Custom AI Assistants"
        lead="Agentic workflows and chat assistants that plug into your tools and deliver measurable outcomes."
        bullets={[
          "Knowledge ingestion and safe prompting",
          "Task orchestration across apps",
          "Measurable outcomes, not demos"
        ]}
        image={{ src: "/images/services/ai-chatbot-assistant.png", alt: "Custom AI assistant running on a mobile device" }}
        cta={{ href: "/solutions/custom-ai", label: "Explore custom solutions" }}
        align="right"
      />

      <CTAJoin />
      <FAQ />
      <IconsRow />
    </>
  )
}
