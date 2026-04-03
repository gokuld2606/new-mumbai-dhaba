export default function Footer() {
  return (
    <footer className="mt-16 hidden md:block" style={{ background: '#1C0A00', color: 'rgba(255,245,228,0.55)' }}>
      <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #F5871F, #FFCD00, #C8102E, #F5871F)' }} />
      <div className="max-w-5xl mx-auto px-4 py-8 text-center">
        <p className="font-display text-xl font-bold mb-1" style={{ color: '#F5871F' }}>
          New Mumbai Family Dhaba
        </p>
        <p className="text-sm">TPT Road, Taduku R.S.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs">
          <span>📦 Parcel available (+₹10)</span>
          <span>⏱️ 20 mins preparation</span>
          <span>🚫 No Discount</span>
          <span>🚭 No Alcohol / Smoking</span>
        </div>
        <p className="mt-6 text-xs font-accent italic" style={{ color: 'rgba(255,245,228,0.28)' }}>
          &quot;For Preparing any item take 20 mins...&quot;
        </p>
      </div>
    </footer>
  );
}
