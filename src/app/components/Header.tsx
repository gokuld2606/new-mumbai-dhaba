'use client';

export default function Header() {
  return (
    <header className="relative overflow-hidden" style={{ background: '#502314' }}>
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #1C0A00 0%, #502314 50%, #7B3F1E 100%)'
      }} />
      <div className="absolute inset-0 hero-pattern" />

      {/* Top stripe */}
      <div className="relative h-1.5" style={{ background: 'linear-gradient(90deg, #F5871F, #FFCD00, #C8102E, #F5871F)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10 text-center">
        <div className="flex justify-center gap-3 mb-4 text-2xl animate-in">
          <span>🍛</span><span>🔥</span><span>🍗</span>
        </div>

        <h1
          className="font-display text-5xl md:text-7xl font-black tracking-tight animate-in stagger-1"
          style={{ color: '#F5871F', textShadow: '0 0 40px rgba(245,135,31,0.4), 2px 2px 0 rgba(0,0,0,0.3)' }}
        >
          New Mumbai
        </h1>
        <h2
          className="font-display text-3xl md:text-4xl font-bold animate-in stagger-2"
          style={{ color: '#FFCD00', letterSpacing: '0.15em' }}
        >
          Family Dhaba
        </h2>

        <p className="font-accent text-xl mt-3 animate-in stagger-3" style={{ color: 'rgba(255,245,228,0.65)' }}>
          Taste the Heart of Mumbai
        </p>

        <div className="inline-flex items-center gap-2 mt-5 px-5 py-2 rounded-full text-sm animate-in stagger-4"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,245,228,0.7)' }}>
          <span>📍</span>
          <span>TPT Road, Taduku R.S.</span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }} className="mx-2">•</span>
          <span>Est. 2026</span>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs animate-in stagger-4">
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(245,135,31,0.2)', color: '#F5871F', border: '1px solid rgba(245,135,31,0.35)' }}>
            🚫 No Alcohol / Smoking
          </span>
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,245,228,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}>
            ⏱️ 20 mins prep time
          </span>
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,245,228,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}>
            📦 Parcel +₹10
          </span>
        </div>
      </div>

      <div className="relative h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(245,135,31,0.5), transparent)' }} />
    </header>
  );
}
