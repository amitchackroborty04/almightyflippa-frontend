export function AppStorePreview() {
  return (
    <section className="relative w-full bg-primary px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-6 text-primary-foreground">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight flex items-center gap-3">
              <span className="text-3xl">🍎</span>
              Get the app now
            </h2>

            <p className="text-lg">
              Install in seconds and start enjoying right away. No trials, no hidden catches—just smooth, hassle-free
              entertainment.
            </p>

            <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg w-fit font-medium hover:bg-gray-900 transition">
              <span>🍎</span>
              Download on the App Store
            </button>
          </div>

          {/* Right - App Store Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-4 md:p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <span className="text-lg">App Store</span>
                <span className="text-sm text-gray-400">Preview</span>
              </div>

              {/* App Card */}
              <div className="flex gap-4 mb-6">
                <div className="w-20 h-20 bg-primary rounded-lg flex-shrink-0 flex items-center justify-center text-white text-3xl font-bold">
                  L
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">LABBY TV</h3>
                  <p className="text-sm text-gray-600">Manage your TV</p>
                  <p className="text-xs text-primary font-medium">XXX Application Ltd.</p>
                  <p className="text-xs text-gray-600 mt-1">Free • Offers in app purchases</p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-sm">
                        ★
                      </span>
                    ))}
                    <span className="text-sm text-gray-600">5</span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-4 border-b border-gray-200 mb-4 pb-4">
                <button className="text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-2">
                  Screenshots
                </button>
                <button className="text-sm text-gray-400">Ipad</button>
                <button className="text-sm text-primary">Iphone</button>
              </div>

              {/* Screenshots Grid */}
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg aspect-[3/5]"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
