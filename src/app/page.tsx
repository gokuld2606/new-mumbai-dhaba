'use client';

import { useState, useEffect, useRef } from 'react';
import { menuData } from '@/data/menu';
import CategoryTabs from './components/CategoryTabs';
import CategoryPanel from './components/CategoryPanel';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

type NavSection = 'home' | 'menu' | 'search' | 'info';

export default function HomePage() {
  const [activeId, setActiveId] = useState(menuData[0].id);
  const [filter, setFilter] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [search, setSearch] = useState('');
  const [navActive, setNavActive] = useState<NavSection>('home');

  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef  = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const infoRef  = useRef<HTMLDivElement>(null);

  const visibleCategories = menuData.filter(
    (c) => filter === 'all' || c.type === filter || c.type === 'both'
  );

  useEffect(() => {
    if (visibleCategories.length > 0) {
      const stillVisible = visibleCategories.find((c) => c.id === activeId);
      if (!stillVisible) setActiveId(visibleCategories[0].id);
    }
  }, [filter]);

  const activeCategory = menuData.find((c) => c.id === activeId);

  const handleNavSelect = (id: string) => {
    setNavActive(id as NavSection);
    if (id === 'search') {
      searchRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const input = searchRef.current?.querySelector('input');
        input?.focus();
      }, 400);
    } else if (id === 'home') {
      headerRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'menu') {
      menuRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'info') {
      infoRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div ref={headerRef}>
        <Header />
      </div>

      {/* Search bar */}
      <div ref={searchRef} className="max-w-5xl mx-auto w-full px-4 py-5">
        <SearchBar value={search} onChange={(v) => { setSearch(v); if (v) setNavActive('search'); }} />
      </div>

      {search.trim() ? (
        <main className="max-w-5xl mx-auto w-full px-4 pb-12">
          <SearchResults query={search} />
        </main>
      ) : (
        <>
          <div ref={menuRef}>
            <CategoryTabs
              categories={menuData}
              activeId={activeId}
              filter={filter}
              onSelectCategory={(id) => { setActiveId(id); setNavActive('menu'); }}
              onFilterChange={setFilter}
            />
          </div>

          <main className="max-w-5xl mx-auto w-full px-4 py-8 flex-1">
            {activeCategory ? (
              <CategoryPanel key={activeCategory.id} category={activeCategory} />
            ) : (
              <p className="text-center py-16" style={{ color: '#999' }}>
                No categories match the current filter.
              </p>
            )}
          </main>
        </>
      )}

      {/* Info section */}
      <div ref={infoRef} className="max-w-5xl mx-auto w-full px-4 py-8">
        <div className="rounded-2xl p-6 text-center" style={{ background: '#502314', color: 'rgba(255,245,228,0.85)' }}>
          <p className="font-display text-2xl font-bold mb-2" style={{ color: '#F5871F' }}>📍 Find Us</p>
          <p className="text-sm mb-4">TPT Road, Taduku R.S.</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              ['📦', 'Parcel', '+₹10 extra'],
              ['⏱️', 'Prep Time', '20 minutes'],
              ['🚭', 'Policy', 'No Alcohol / Smoking'],
              ['💰', 'Discount', 'No Discount'],
            ].map(([icon, label, val]) => (
              <div key={label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="text-xl mb-1">{icon}</div>
                <div className="font-bold text-xs" style={{ color: '#FFCD00' }}>{label}</div>
                <div className="text-xs mt-0.5 opacity-70">{val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* Floating bottom nav — mobile only */}
      <BottomNav active={navActive} onSelect={handleNavSelect} />
    </div>
  );
}
