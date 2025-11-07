export function Placeholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-brand-border ${className}`}
      style={{
        background:
          "radial-gradient(600px 300px at 20% 20%, rgba(61,184,198,.20), transparent 60%), linear-gradient(135deg, rgba(255,255,255,.06), rgba(0,0,0,.08))",
      }}
    >
      <div className="absolute inset-0 grid place-items-center text-sm text-brand-muted/70">
        Drop image here (1200×800)
      </div>
    </div>
  )
}
