'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();
  const [tableNo, setTableNo] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get('table');
    if (t) setTableNo(t);
  }, []);

  const goToMenu = () => {
    const query = tableNo ? `?table=${tableNo}` : '';
    router.push(`/menu${query}`);
  };

  const tickerItems = [
    '🚭 No Alcohol & No Smoking',
    '⏱️ Prep Time: 20 Minutes',
    '📦 Parcel: +₹10 Extra',
    '💰 No Discount Policy',
    '🍛 Fresh & Authentic Taste',
  ];

  return (
    <div className="min-h-screen flex flex-col hero-bg hero-pattern relative overflow-hidden">

      {/* Top rainbow stripe */}
      <div className="h-1.5 w-full flex-shrink-0"
        style={{ background: 'linear-gradient(90deg, #F5871F, #FFCD00, #C8102E, #F5871F)' }} />

      {/* Table badge */}
      <div className="flex justify-end px-5 pt-4 animate-in stagger-1">
        {tableNo ? (
          <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
            style={{ background: 'rgba(245,135,31,0.18)', border: '1.5px solid rgba(245,135,31,0.45)', color: '#F5871F' }}>
            <span>🪑</span>
            <span>Table {tableNo}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,245,228,0.4)' }}>
            <span>📷</span>
            <span>Scan QR for table</span>
          </div>
        )}
      </div>

      {/* Center hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">

        {/* Chef hat */}
        <div className="text-7xl mb-4 animate-in stagger-1" style={{ filter: 'drop-shadow(0 4px 24px rgba(245,135,31,0.4))' }}>
          👨‍🍳
        </div>

        {/* Name */}
        <h1 className="font-display font-black animate-in stagger-2"
          style={{
            fontSize: 'clamp(2.8rem, 12vw, 5rem)',
            lineHeight: 1.05,
            color: '#F5871F',
            textShadow: '0 0 40px rgba(245,135,31,0.35), 2px 3px 0 rgba(0,0,0,0.3)'
          }}>
          New Mumbai
        </h1>
        <h2 className="font-display font-bold animate-in stagger-3"
          style={{
            fontSize: 'clamp(1.6rem, 7vw, 3rem)',
            color: '#FFCD00',
            letterSpacing: '0.12em',
            textShadow: '1px 2px 0 rgba(0,0,0,0.25)'
          }}>
          Family Dhaba
        </h2>

        <p className="font-accent text-lg mt-2 animate-in stagger-3"
          style={{ color: 'rgba(255,245,228,0.55)' }}>
          Taste the Heart of Mumbai
        </p>

        {/* Address */}
        <div className="flex items-center gap-2 mt-4 text-sm animate-in stagger-4"
          style={{ color: 'rgba(255,245,228,0.5)' }}>
          <span>📍</span>
          <span>TPT Road, Taduku R.S.</span>
        </div>

        {/* Menu CTA */}
        <button
          onClick={goToMenu}
          className="mt-10 px-10 py-4 rounded-2xl font-black text-lg tracking-wide animate-in stagger-4 transition-all active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #F5871F, #C8102E)',
            color: 'white',
            boxShadow: '0 6px 30px rgba(245,135,31,0.5), 0 2px 8px rgba(0,0,0,0.2)',
            letterSpacing: '0.05em'
          }}>
          🍽️ &nbsp;View Menu
        </button>

        {tableNo && (
          <p className="mt-3 text-xs animate-in stagger-4" style={{ color: 'rgba(255,245,228,0.35)' }}>
            Ordering for Table {tableNo}
          </p>
        )}
      </div>

      {/* Scrolling ticker at bottom */}
      <div className="flex-shrink-0 overflow-hidden py-3"
        style={{ background: 'rgba(0,0,0,0.35)', borderTop: '1px solid rgba(245,135,31,0.2)' }}>
        <div className="ticker-track text-sm font-semibold" style={{ color: 'rgba(255,245,228,0.7)' }}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="mx-8">{item}</span>
          ))}
        </div>
      </div>

      {/* Bottom stripe */}
      <div className="h-1.5 flex-shrink-0"
        style={{ background: 'linear-gradient(90deg, #F5871F, #FFCD00, #C8102E, #F5871F)' }} />
    </div>
  );
}
