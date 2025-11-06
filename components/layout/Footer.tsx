export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm opacity-70">
        © {new Date().getFullYear()} Maru
      </div>
    </footer>
  );
}
