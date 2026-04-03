export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/60 mt-16">
      <div className="h-1 bg-gradient-to-r from-saffron via-gold to-crimson" />
      <div className="max-w-5xl mx-auto px-4 py-8 text-center">
        <p className="font-display text-xl font-bold text-white mb-1">
          New Mumbai Family Dhaba
        </p>
        <p className="text-sm">TPT Road, Taduku R.S.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs">
          <span className="flex items-center gap-1">
            <span>📦</span> Parcel available (+₹10)
          </span>
          <span className="flex items-center gap-1">
            <span>⏱️</span> 20 mins preparation
          </span>
          <span className="flex items-center gap-1">
            <span>🚫</span> No Discount
          </span>
          <span className="flex items-center gap-1">
            <span>🚭</span> No Alcohol / Smoking
          </span>
        </div>
        <p className="mt-6 text-xs text-white/30 font-accent italic">
          &quot;For Preparing any item take 20 mins...&quot;
        </p>
      </div>
    </footer>
  );
}
