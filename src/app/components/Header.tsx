'use client';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-charcoal text-white">
      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0800] via-charcoal to-[#0D0D0D]" />
      <div className="absolute inset-0 hero-pattern" />

      {/* Decorative border top */}
      <div className="relative h-1 bg-gradient-to-r from-saffron via-gold to-crimson" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10 text-center">
        {/* Logo emoji row */}
        <div className="flex justify-center gap-3 mb-4 text-2xl animate-in">
          <span>🍛</span><span>🔥</span><span>🍗</span>
        </div>

        {/* Restaurant name */}
        <h1
          className="font-display text-5xl md:text-7xl font-black tracking-tight animate-in stagger-1"
          style={{ color: '#FF6B00', textShadow: '0 0 40px rgba(255,107,0,0.3)' }}
        >
          New Mumbai
        </h1>
        <h2
          className="font-display text-3xl md:text-4xl font-bold text-gold animate-in stagger-2"
          style={{ letterSpacing: '0.15em' }}
        >
          Family Dhaba
        </h2>

        {/* Tagline */}
        <p className="font-accent text-xl text-white/60 mt-3 animate-in stagger-3">
          Taste the Heart of Mumbai
        </p>

        {/* Address pill */}
        <div className="inline-flex items-center gap-2 mt-5 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 animate-in stagger-4">
          <span>📍</span>
          <span>TPT Road, Taduku R.S.</span>
          <span className="mx-2 text-white/20">•</span>
          <span>Est. 2026</span>
        </div>

        {/* Info pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs animate-in stagger-4">
          <span className="px-3 py-1 rounded-full bg-saffron/20 text-saffron border border-saffron/30">
            🚫 No Alcohol / Smoking
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 border border-white/10">
            ⏱️ 20 mins prep time
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 border border-white/10">
            📦 Parcel +₹10
          </span>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-saffron/40 to-transparent" />
    </header>
  );
}
