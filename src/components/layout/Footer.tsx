export default function Footer(){
  return (
    <footer className="border-t">
      <div className="container py-10 text-sm text-slate-600 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Maru</span>
        <span>AI Automation & Consulting</span>
      </div>
    </footer>
  )
}
