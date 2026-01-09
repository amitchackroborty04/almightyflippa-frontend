export function Footer() {
  return (
    <footer className="relative w-full bg-primary px-4 py-6 md:py-8 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-foreground rounded flex items-center justify-center text-primary text-sm font-bold">
              L
            </div>
            <span className="font-bold text-primary-foreground">LABBY TV</span>
          </div>

          <div className="text-center text-sm text-primary-foreground/80">© LABBY TV. All rights reserved</div>

          <div className="flex items-center gap-6 text-primary-foreground">
            <button className="hover:opacity-80 transition">
              <span>👤</span>
            </button>
            <button className="hover:opacity-80 transition">
              <span>▶</span>
            </button>
            <button className="hover:opacity-80 transition">
              <span>🌐</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
